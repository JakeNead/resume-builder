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
    const newResume = {
      ...resume,
      ["Work-Experience"]: [...resume["Work-Experience"]],
    };
    newResume["Work-Experience"][e.target.dataset.index][e.target.id] =
      e.target.value;

    setResume(newResume);
  }

  function handleResponsibilityChange(e) {
    const newResume = {
      ...resume,
      ["Work-Experience"]: [...resume["Work-Experience"]],
    };
    newResume["Work-Experience"][e.target.dataset.index]["Responsibilities"][
      e.target.dataset.responsibilityIndex
    ]["Responsibility"] = e.target.value;

    setResume(newResume);
  }

  function handleAddExperience() {
    const newWorkExperience = resume["Work-Experience"].push({
      Key: crypto.randomUUID(),
      Company: "",
      Position: "",
      Location: "",
      Date: "",
      Responsibilities: [
        {
          Key: crypto.randomUUID(),
          Responsibility: "",
        },
      ],
    });
    setResume({ ...resume, [resume["Work-Experience"]]: newWorkExperience });
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
          handleExpand={handleExpand}
          handleChange={handleChange}
        />
        <Experience
          resume={resume}
          expand={expand}
          handleExpand={handleExpand}
          handleExperienceChange={handleExperienceChange}
          handleResponsibilityChange={handleResponsibilityChange}
          handleAddExperience={handleAddExperience}
        />
      </div>
      <DisplayResume resume={resume} />
    </main>
  );
}
