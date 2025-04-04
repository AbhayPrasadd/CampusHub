import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs, doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth } from "../../firebase";

const StudentTracking = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const fetchQuizzes = async () => {
      const snapshot = await getDocs(collection(db, "quizzes"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setQuizzes(data);
    };
    fetchQuizzes();
  }, []);

  const handleSelectQuiz = (quiz) => {
    setSelectedQuiz(quiz);
    setAnswers({});
    setSubmitted(false);
    setScore(0);
  };

  const handleChangeAnswer = (qIndex, optIndex) => {
    setAnswers(prev => ({ ...prev, [qIndex]: optIndex }));
  };

  const handleSubmit = async () => {
    let newScore = 0;
    selectedQuiz.questions.forEach((q, index) => {
      if (answers[index] === q.correctAnswerIndex) {
        newScore++;
      }
    });
    setScore(newScore);
    setSubmitted(true);

    const user = auth.currentUser;
    if (user) {
      await setDoc(doc(db, `submissions/${user.uid}_${selectedQuiz.id}`), {
        userId: user.uid,
        quizId: selectedQuiz.id,
        answers,
        score: newScore,
        submittedAt: serverTimestamp(),
      });
    }
  };

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {!selectedQuiz ? (
        <>
          <h2 className="text-xl font-bold mb-4">Available Quizzes</h2>
          <ul>
            {quizzes.map((quiz) => (
              <li
                key={quiz.id}
                className="mb-2 p-3 border rounded cursor-pointer hover:bg-gray-100"
                onClick={() => handleSelectQuiz(quiz)}
              >
                {quiz.title}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <div>
          <h2 className="text-xl font-bold mb-4">{selectedQuiz.title}</h2>
          {selectedQuiz.questions.map((q, qIndex) => (
            <div key={qIndex} className="mb-4">
              <p className="font-medium mb-2">{qIndex + 1}. {q.question}</p>
              {q.options.map((opt, optIndex) => {
                const isCorrect = submitted && optIndex === q.correctAnswerIndex;
                const isWrong = submitted && answers[qIndex] === optIndex && optIndex !== q.correctAnswerIndex;
                return (
                  <div key={optIndex}>
                    <label className={`inline-flex items-center ${isCorrect ? 'text-green-600 font-semibold' : ''} ${isWrong ? 'text-red-600 line-through' : ''}`}>
                      <input
                        type="radio"
                        name={`question-${qIndex}`}
                        checked={answers[qIndex] === optIndex}
                        onChange={() => handleChangeAnswer(qIndex, optIndex)}
                        className="mr-2"
                        disabled={submitted}
                      />
                      {opt}
                    </label>
                  </div>
                );
              })}
              {submitted && (
                <p className="text-sm text-gray-600 mt-1">✅ Correct Answer: {q.options[q.correctAnswerIndex]}</p>
              )}
            </div>
          ))}

          {!submitted ? (
            <button
              onClick={handleSubmit}
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Submit Quiz
            </button>
          ) : (
            <div className="mt-4">
              <p className="font-semibold text-green-600">
                ✅ Quiz Submitted! You scored {score} out of {selectedQuiz.questions.length}
              </p>
              <button
                onClick={() => setSelectedQuiz(null)}
                className="mt-2 text-blue-500 underline"
              >
                Back to Quizzes
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default StudentTracking;