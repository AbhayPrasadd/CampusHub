import React, { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const QuizCreator = () => {
  const [title, setTitle] = useState("");
  const [courseId, setCourseId] = useState(""); // Replace with your course linking logic
  const [questionText, setQuestionText] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(null);
  const [questions, setQuestions] = useState([]);

  const handleAddQuestion = () => {
    if (questionText && options.every(opt => opt !== "") && correctAnswerIndex !== null) {
      const newQuestion = {
        question: questionText,
        options,
        correctAnswerIndex
      };
      setQuestions([...questions, newQuestion]);
      setQuestionText("");
      setOptions(["", "", "", ""]);
      setCorrectAnswerIndex(null);
    } else {
      alert("Please fill all fields and select the correct answer.");
    }
  };

  const handleSaveQuiz = async () => {
    if (!title || questions.length === 0) {
      alert("Please enter a quiz title and at least one question.");
      return;
    }

    try {
      await addDoc(collection(db, "quizzes"), {
        title,
        courseId,
        createdBy: "faculty_uid_placeholder", // Replace with current logged-in faculty ID
        createdAt: serverTimestamp(),
        questions
      });
      alert("Quiz saved successfully!");
      setTitle("");
      setCourseId("");
      setQuestions([]);
    } catch (error) {
      console.error("Error saving quiz:", error);
      alert("Failed to save quiz.");
    }
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Create Quiz</h2>

      <input
        type="text"
        placeholder="Quiz Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <input
        type="text"
        placeholder="Course ID"
        value={courseId}
        onChange={e => setCourseId(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      <div className="mb-4">
        <input
          type="text"
          placeholder="Enter Question"
          value={questionText}
          onChange={e => setQuestionText(e.target.value)}
          className="border p-2 w-full mb-2"
        />

        {options.map((opt, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Option ${index + 1}`}
            value={opt}
            onChange={e => {
              const newOptions = [...options];
              newOptions[index] = e.target.value;
              setOptions(newOptions);
            }}
            className="border p-2 w-full mb-1"
          />
        ))}

        <select
          value={correctAnswerIndex !== null ? correctAnswerIndex : ""}
          onChange={e => setCorrectAnswerIndex(parseInt(e.target.value))}
          className="border p-2 w-full mt-2"
        >
          <option value="" disabled>Select Correct Answer</option>
          {options.map((_, index) => (
            <option key={index} value={index}>{`Option ${index + 1}`}</option>
          ))}
        </select>

        <button
          onClick={handleAddQuestion}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Question
        </button>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold">Questions Preview:</h3>
        <ul className="list-disc ml-5">
          {questions.map((q, idx) => (
            <li key={idx}>{q.question}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={handleSaveQuiz}
        className="bg-green-600 text-white px-4 py-2 rounded"
      >
        Save Quiz
      </button>
    </div>
  );
};

export default QuizCreator;
