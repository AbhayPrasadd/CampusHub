// src/components/admin/CreateAnnouncement.jsx
import { useState } from "react";
import { db } from "../../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Announcement = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !message.trim()) {
      setStatus("Please fill in all fields.");
      return;
    }

    try {
      await addDoc(collection(db, "announcements"), {
        title,
        message,
        createdAt: serverTimestamp(),
      });

      setTitle("");
      setMessage("");
      setStatus("✅ Announcement posted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("❌ Failed to post announcement.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800">📢 Create Announcement</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium mb-1">Title</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter title"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium mb-1">Message</label>
          <textarea
            rows={4}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Post Announcement
        </button>
        {status && <p className="text-sm mt-2 text-gray-700">{status}</p>}
      </form>
    </div>
  );
};

export default Announcement;
