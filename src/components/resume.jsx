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

  function handleExpand(e) {
    setExpand({ ...expand, [e.target.className]: !expand[e.target.className] });
  }

  return (
    <main>
      <div className="inputSection">
        <ContactInfo
          resume={resume}
          handleChange={handleChange}
          handleExpand={handleExpand}
          expand={expand}
        />
        <Experience
          resume={resume}
          handleChange={handleChange}
          handleExpand={handleExpand}
          expand={expand}
        />
      </div>
      <DisplayResume currentInfo={resume} />
    </main>
  );
}
