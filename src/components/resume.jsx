import { useState } from "react";
import { exampleResume } from "./exampleData";
import DisplayResume from "./displayResume";
import ContactInfo from "./contactInfo";
import Experience from "./experience";

export default function Resume() {
  const [resume, setResume] = useState(exampleResume);
  const [expand, setExpand] = useState({
    contact: true,
    experience: false,
    education: false,
    skills: false,
  });

  function handleChange(e) {
    setResume({ ...resume, [e.target.id]: e.target.value });
  }

  function handleExperienceChange(e) {
    // setResume({ ...resume, [e.target.className]: !expand[e.target.className] });
    //
    //find a way to connect each input with the resume state
    //
    console.log(e.target);
  }

  function handleExpand(e) {
    setExpand({ ...expand, [e.target.className]: !expand[e.target.className] });
  }

  return (
    <main>
      <div className="resumeInputSection">
        <ContactInfo
          resume={resume}
          expand={expand}
          handleChange={handleChange}
          handleExpand={handleExpand}
        />
        <Experience
          resume={resume}
          expand={expand}
          handleChange={handleExperienceChange}
          handleExpand={handleExpand}
        />
      </div>
      <DisplayResume resume={resume} />
    </main>
  );
}
