import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.jsx";
import Form from "./components/form.jsx";
import Article from "./components/article.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <main>
      <Header />
      <Form />
      <Article />

      <footer></footer>
    </main>
  </React.StrictMode>
);
