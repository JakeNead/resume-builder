import { useState } from "react";
import { exampleResume } from "./exampleData";
import DisplayResume from "./displayResume";
import ContactInfo from "./ContactInfo";

export default function Resume() {
  const [resume, setResume] = useState(exampleResume);
  const [expand, setExpand] = useState({
    contactInfoSection: true,
    professionalHistory: false,
    education: false,
    skills: false,
  });

  function handleChange(e) {
    setResume({ ...resume, [e.target.id]: e.target.value });
  }

  function handleExpand(e) {
    // const expandName = e.target.className;
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
      </div>
      <DisplayResume currentInfo={resume} />
    </main>
  );
}

// Try using the handleExpand callback instead of  setState

// () =>
//             setExpand({ ...expand, ["contactInfo"]: !expand.contactInfo })
