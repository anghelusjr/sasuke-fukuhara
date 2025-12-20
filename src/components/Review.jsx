// src/components/ReviewsList.jsx
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export default function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) =>
      setReviews(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
    );
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col items-center w-full space-y-4 mt-6 py-20">
      <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 text-center my-6">
        What My Customers Say.
      </h2>
      {reviews.map((r) => (
        <div
          key={r.id}
          className="bg-white p-4 rounded-2xl shadow-md max-w-md w-full flex flex-col items-center gap-2"
        >
          {/* User info */}
          <div className="flex items-center gap-3">
            {r.userPhoto && (
              <a href={r.userProfile || "#"} target="_blank" rel="noopener noreferrer">
                <img
                  src={r.userPhoto}
                  alt={r.userName}
                  className="w-12 h-12 rounded-full"
                />
              </a>
            )}
            <strong className="text-gray-800">{r.userName}</strong>
          </div>

          {/* Star rating */}
          {r.stars && (
            <div className="flex">
              {Array.from({ length: 5 }, (_, i) => (
                <span
                  key={i}
                  className={`text-yellow-400 ${i < r.stars ? "" : "text-gray-300"}`}
                >
                  ★
                </span>
              ))}
            </div>
          )}

          {/* Review text */}
          <p className="text-gray-700 text-center">{r.reviewText}</p>
        </div>
      ))}
    </div>
  );
}
