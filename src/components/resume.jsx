import { useState } from "react";
import { exampleResume } from "./exampleData";
import DisplayResume from "./displayResume";
import ContactInfo from "./ContactInfo";

export default function Resume() {
  const [resume, setResume] = useState(exampleResume);
  const [expand, setExpand] = useState({
    contactInfo: true,
    professionalHistory: false,
    education: false,
    skills: false,
  });

  function handleChange(e) {
    setResume({ ...resume, [e.target.id]: e.target.value });
  }

  function handleExpand(section) {
    setExpand({ ...expand, [section]: !expand.section });
  }

  return (
    <main>
      <div className="inputSection">
        <h2
          onClick={() =>
            setExpand({ ...expand, ["contactInfo"]: !expand.contactInfo })
          }
        >
          Contact Information
        </h2>
        {expand.contactInfo && (
          <ContactInfo resume={resume} handleChange={handleChange} />
        )}
      </div>

      <DisplayResume currentInfo={resume} />
    </main>
  );
}
