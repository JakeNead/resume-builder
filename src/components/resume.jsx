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

  function handleExpand(e) {
    setExpand({ ...expand, [e.target.className]: !expand[e.target.className] });
  }

  function handleChange(e) {
    setResume({ ...resume, [e.target.id]: e.target.value });
  }

  function handleChangeExperience(e) {
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

  function handleAddResponsibility(e) {
    const newResume = {
      ...resume,
      ["Work-Experience"]: [...resume["Work-Experience"]],
    };
    newResume["Work-Experience"][e.target.dataset.index][
      "Responsibilities"
    ].push({
      Key: crypto.randomUUID(),
      Responsibility: " ",
    });
    setResume(newResume);
  }

  function handleDeleteResponsibility(e) {
    const newResume = {
      ...resume,
      ["Work-Experience"]: [...resume["Work-Experience"]],
    };
    newResume["Work-Experience"][e.target.dataset.index][
      "Responsibilities"
    ].pop();
    setResume(newResume);
  }

  function handleAddExperience() {
    const newWorkExperience = {
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
    };
    const newResume = { ...resume };
    newResume["Work-Experience"].push(newWorkExperience);
    setResume({ ...resume });
  }

  function handleDeleteExperience() {
    const newResume = { ...resume };
    newResume["Work-Experience"].pop();
    setResume({ ...resume });
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
          handleChangeExperience={handleChangeExperience}
          handleResponsibilityChange={handleResponsibilityChange}
          handleAddResponsibility={handleAddResponsibility}
          handleDeleteResponsibility={handleDeleteResponsibility}
          handleAddExperience={handleAddExperience}
          handleDeleteExperience={handleDeleteExperience}
        />
      </div>
      <DisplayResume resume={resume} />
    </main>
  );
}
