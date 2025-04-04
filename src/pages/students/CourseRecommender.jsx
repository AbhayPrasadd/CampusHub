import React, { useState } from "react";

function CourseRecommender() {
  const [interests, setInterests] = useState("");
  const [pastCourses, setPastCourses] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [loading, setLoading] = useState(false);

  const interestOptions = ["Web Development", "DSA", "AI/ML", "UI/UX", "Cybersecurity", "Blockchain"];
  const courseOptions = ["HTML", "CSS", "JavaScript", "C++", "Python", "React"];

  const handleRecommend = async () => {
    setLoading(true);
    setRecommendation("");

    try {
      const response = await fetch("http://localhost:5000/api/recommend-courses", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          interests: interests ? [interests] : [],
          pastCourses: pastCourses ? [pastCourses] : [],
        }),
      });

      const data = await response.json();
      if (data.recommendation) {
        const formatted = data.recommendation
          .split(/\n|\u2022|\d+\./)
          .map((line) => line.trim())
          .filter((line) => line.length > 0);
        setRecommendation(formatted);
      } else {
        setRecommendation(["No recommendations found."]);
      }
    } catch (err) {
      console.error(err);
      setRecommendation(["Something went wrong."]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#f2f2f2" }}>
      <div style={{ background: "white", padding: "2rem", width: "95%", maxWidth: "1000px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "1.5rem", textAlign: "center" }}>🎯 Course Recommender</h2>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap", justifyContent: "center" }}>
          <div>
            <label><strong>Choose Interest:</strong></label><br />
            <select value={interests} onChange={(e) => setInterests(e.target.value)} style={{ minWidth: "220px", padding: "0.5rem" }}>
              <option value="">-- Select Interest --</option>
              {interestOptions.map((interest) => (
                <option key={interest} value={interest}>{interest}</option>
              ))}
            </select>
          </div>

          <div>
            <label><strong>Past Course Taken:</strong></label><br />
            <select value={pastCourses} onChange={(e) => setPastCourses(e.target.value)} style={{ minWidth: "220px", padding: "0.5rem" }}>
              <option value="">-- Select Course --</option>
              {courseOptions.map((course) => (
                <option key={course} value={course}>{course}</option>
              ))}
            </select>
          </div>

          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <button onClick={handleRecommend} disabled={loading} style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
              {loading ? "Generating..." : "Get Recommendations"}
            </button>
          </div>
        </div>

        {recommendation.length > 0 && (
          <div style={{ marginTop: "2rem", backgroundColor: "#f9f9f9", padding: "1rem", borderRadius: "8px", maxHeight: "400px", overflowY: "auto" }}>
            <h3>📚 Recommendations:</h3>
            <ul style={{ paddingLeft: "1.2rem", margin: 0, overflowWrap: "break-word" }}>
              {recommendation.map((item, index) => (
                <li key={index} style={{ marginBottom: "0.5rem" }}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default CourseRecommender;