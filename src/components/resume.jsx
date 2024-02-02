import { useState } from "react";
import Input from "./input";
import { exampleResume } from "./exampleData";
import DisplayResume from "./displayResume";

export default function Resume() {
  const [resume, setResume] = useState(exampleResume);

  function handleChange(e) {
    console.log([e.target.id]);
    const property = [e.target.id];
    setResume({ ...resume, [e.target.id]: e.target.value });
  }
  return (
    <>
      <Input name="Name" input={resume.name} onChange={handleChange} />
      <Input name="Phone" input={resume.phone} onChange={handleChange} />
      <Input name="Email" input={resume.email} onChange={handleChange} />
      <Input name="LinkedIn" input={resume.linkediN} onChange={handleChange} />
      <DisplayResume currentInfo={resume} />
    </>
  );
}
