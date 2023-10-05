import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Guide from "./Guide";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import GoToTop from "./components/GoToTop";
import Sign from "./Sign";
import Student from "./StudentC/Student";
import Teacher from "./TeacherC/Teacher";
import Studentdoubt from "./StudentC/Studentdoubt";
import Teacherdoubt from "./TeacherC/Teacherdoubt";
import "./Chats/style.scss";
import HomeC from "./Chats/pages/HomeC";
import Login from "./Chats/pages/Login";
import Register from "./Chats/pages/Register";
import { useContext } from "react";
import { AuthContext } from "./Chats/context/AuthContext";
import HomeB from "./Chats/pages/HomeB";
import HomeT from "./Chats/pages/HomeT";

const App = () => {
  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      <BrowserRouter>
        <Routes>
          <Route index  path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/student" element={<Student />} />
          <Route path="/studentdoubt" element={<Studentdoubt />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacherdoubt" element={<Teacherdoubt />} />
          <Route path="/HomeC" element={<HomeC />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/HomeB" element={<HomeB/>}/>
          <Route path="/HomeT" element={<HomeT/>}/>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;