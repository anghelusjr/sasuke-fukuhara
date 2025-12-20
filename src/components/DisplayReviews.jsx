import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

export function ReviewsList() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "reviews"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, snapshot => {
      setReviews(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {reviews.map(r => (
        <div key={r.id}>
          <strong>{r.userName}</strong>: {r.reviewText}
        </div>
      ))}
    </div>
  );
}

export default ReviewsList;
