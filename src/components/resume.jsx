import { useState } from "react";
import Input from "./input";
import { example } from "./exampleData";

export default function Resume() {
  const { resume, setResume } = useState({ example });

  function handleChange(e) {
    const property = e.classname;
    setResume({ ...resume, property: e.target.value });
  }
  return (
    <>
      <Input name="name" onChange={handleChange} />
      <p>{resume.name}</p>
    </>
  );
}
