import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import Resume from "./components/resume.jsx";
import Footer from "./components/footer.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Header />
    <Resume />
    <Footer />
  </React.StrictMode>
);
