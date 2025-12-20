// src/components/Login.jsx
import { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import ReviewsList from "./Review";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [stars, setStars] = useState(0);
  const [reviewImage, setReviewImage] = useState(null);

  // Track logged-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const handleLogin = async (provider) => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      alert("Logged in successfully!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setReviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const submitReview = async () => {
    if (!reviewText) return alert("Please write a review!");
    try {
      await addDoc(collection(db, "reviews"), {
        reviewText,
        stars,
        reviewImage: reviewImage || null,
        userName: user.displayName,
        userPhoto: user.photoURL,
        userProfile: user.providerData[0]?.providerId === "facebook.com"
          ? `https://facebook.com/${user.providerData[0].uid}`
          : null,
        createdAt: serverTimestamp(),
      });
      setReviewText("");
      setStars(0);
      setReviewImage(null);
      alert("Review submitted!");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full space-y-6">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Login to Leave a Review
          </h2>
          <p className="text-center text-gray-500 text-sm">
            Choose a social account to continue
          </p>

          <button
            onClick={() => handleLogin(new GoogleAuthProvider())}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded-lg px-4 py-2 hover:bg-gray-100 transition"
          >
            <img
              src="https://www.gstatic.com/images/branding/product/1x/gsa_96dp.png"
              alt="Google"
              className="w-5 h-5"
            />
            <span>{loading ? "Signing in..." : "Continue with Google"}</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gray-100 px-4 py-10 space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-lg max-w-2xl w-full space-y-4">
        {/* User Info */}
        <div className="flex items-center gap-4">
          <img src={user.photoURL} alt={user.displayName} className="w-10 h-10 rounded-full" />
          <span className="font-semibold">{user.displayName}</span>
        </div>

           {/* Star Rating */}
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setStars(i + 1)}
              className={`cursor-pointer text-2xl ${i < stars ? "text-yellow-400" : "text-gray-300"}`}
            >
              ★
            </button>
          ))}
        </div>

        {/* Review Text */}
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review..."
          className="w-full border border-gray-300 rounded-lg p-2 resize-none"
        />

     

        {/* Submit Button */}
        <button
          onClick={submitReview}
          className="w-full bg-blue-400 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
}
