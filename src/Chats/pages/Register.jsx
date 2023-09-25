import React, { useState } from "react";
import Add from "../img/addAvatar.png";
import {
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [err, setErr] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("student"); // Default role is "student"
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    const displayNameInput = e.target.querySelector('input[type="text"]');
    const emailInput = e.target.querySelector('input[type="email"]');
    const passwordInput = e.target.querySelector('input[type="password"]');
    const fileInput = e.target.querySelector('input[type="file"]');

    if (!displayNameInput || !emailInput || !passwordInput || !fileInput) {
      console.error("One or more form elements are missing.");
      setErr(true);
      setLoading(false);
      return;
    }

    const displayName = displayNameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const file = fileInput.files[0];

    if (!displayName || !email || !password || !file) {
      console.error("One or more form fields are empty.");
      setErr(true);
      setLoading(false);
      return;
    }

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          const role = selectedRole;

          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, "users", res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
            role,
          });

          await setDoc(doc(db, "userChats", res.user.uid), {});

          // Navigate based on user's role
          if (role === "student") {
            navigate("/student");
          } else if (role === "teacher") {
            navigate("/teacher");
          }
        });
      });
    } catch (err) {
      console.error(err);
      setErr(true);
      setLoading(false);
    }
  };

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">DoubtAway</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input required type="text" placeholder="display name" />
          <input required type="email" placeholder="email" />
          <input required type="password" placeholder="password" />
          <input required style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Add} alt="" />
            <span>Add an avatar</span>
          </label>

          <div>
            <label className="labe">
              <input 
                className="radio"
                type="radio"
                value="student"
                checked={selectedRole === "student"}
                onChange={() => setSelectedRole("student")}
              />
              Student
            </label>
            <label className="labe">
              <input 
                className="radio"
                type="radio"
                value="teacher"
                checked={selectedRole === "teacher"}
                onChange={() => setSelectedRole("teacher")}
              />
              Teacher
            </label>
          </div>

          <button disabled={loading}>Sign up</button>
          {loading && "Uploading and compressing the image please wait..."}
          {err && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
