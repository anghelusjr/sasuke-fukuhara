import { useState } from "react";
import { db, auth } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export function ReviewForm() {
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = async () => {
    if (!auth.currentUser) return alert("Please login first!");

    await addDoc(collection(db, "reviews"), {
      userId: auth.currentUser.uid,
      userName: auth.currentUser.email,
      reviewText,
      createdAt: serverTimestamp()
    });

    setReviewText("");
    alert("Review submitted!");
  };

  return (
    <div>
      <textarea value={reviewText} onChange={e => setReviewText(e.target.value)} placeholder="Write your review" />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
}

export default ReviewForm;
