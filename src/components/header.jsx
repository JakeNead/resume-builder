import { useState } from "react";

export default function Header() {
  return (
    <header>
      <h1>Resume Builder</h1>
      <LightThemeButton onClick={handleThemeToggle} />
    </header>
  );
}

function handleThemeToggle() {
  const body = document.querySelector("body");
  body.classList.toggle("darkTheme");

  const sun = document.querySelector(".sun");
  const moon = document.querySelector(".moon");

  sun.classList.toggle("hide");
  moon.classList.toggle("hide");
}

function LightThemeButton({ onClick }) {
  return (
    <>
      <svg
        onClick={onClick}
        className={"toggleTheme sun hide"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>light</title>
        <path
          stroke="rgb(248, 248, 255)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
        />
        <circle
          cx="256"
          cy="256"
          r="80"
          fill="none"
          stroke="rgb(248, 248, 255)"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
        />
      </svg>
      <svg
        onClick={handleThemeToggle}
        className={"toggleTheme moon"}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <title>dark</title>
        <path
          d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="32"
        />
      </svg>
    </>
  );
}
