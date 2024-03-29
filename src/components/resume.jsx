import { useState } from "react";
import { exampleResume } from "./exampleData";
import DisplayResume from "./displayResume";
import ContactInfo from "./contactInfo";
import Experience from "./experience";
import Education from "./education";
import Skills from "./skills";

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
    setResume({ ...newResume });
  }

  function handleChangeEducation(e) {
    const newResume = {
      ...resume,
      Education: [...resume.Education],
    };
    newResume.Education[e.target.dataset.index][e.target.id] = e.target.value;

    setResume(newResume);
  }

  function handleAddEducation() {
    const newSchool = {
      Key: crypto.randomUUID(),
      School: "",
      Degree: "",
      Location: "",
      Date: "",
    };
    const newResume = { ...resume };
    newResume.Education.push(newSchool);
    setResume(newResume);
  }

  function handleDeleteEducation() {
    const newResume = { ...resume };
    newResume.Education.pop();
    setResume(newResume);
  }

  function handleChangeSkills(e) {
    const newResume = { ...resume, Skills: [...resume.Skills] };
    newResume.Skills[e.target.dataset.index].skill = e.target.value;
    setResume(newResume);
  }
  function handleAddSkills() {
    const newResume = { ...resume };
    newResume.Skills.push({
      key: crypto.randomUUID(),
      skill: "",
    });
    setResume(newResume);
  }
  function handleDeleteSkills() {
    const newResume = { ...resume };
    newResume.Skills.pop();
    setResume(newResume);
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
        <Education
          resume={resume}
          expand={expand}
          handleExpand={handleExpand}
          handleChangeEducation={handleChangeEducation}
          handleAddEducation={handleAddEducation}
          handleDeleteEducation={handleDeleteEducation}
        />
        <Skills
          resume={resume}
          expand={expand}
          handleExpand={handleExpand}
          handleChangeSkills={handleChangeSkills}
          handleAddSkills={handleAddSkills}
          handleDeleteSkills={handleDeleteSkills}
        />
      </div>
      <DisplayResume resume={resume} />
    </main>
  );
}
