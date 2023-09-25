import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; // Assuming you have access to the Firestore database
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Retrieve the user's role from Firestore
      const userDocRef = doc(db, "users", userCredential.user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();
        const userRole = userData.role;

        // Navigate based on user's role
        if (userRole === "student") {
          navigate("/student");
        } else if (userRole === "teacher") {
          navigate("/teacher");
        } else {
          // Handle other roles or unknown roles here
          console.error("Unknown user role:", userRole);
          setErr(true);
        }
      } else {
        // Handle the case where the user document does not exist
        console.error("User document not found.");
        setErr(true);
      }
    } catch (err) {
      console.error(err);
      setErr(true);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DoubtAway</span>
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You don't have an account? <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
