import { Input } from "./inputs";

export default function Skills({
  resume,
  expand,
  handleExpand,
  handleChangeSkills,
  handleAddSkills,
  handleDeleteSkills,
}) {
  return (
    <div className="skillsSection inputSection">
      <h2 className="skills" onClick={handleExpand}>
        Skills
      </h2>

      {expand.skills && (
        <>
          <SkillsInputs
            resume={resume}
            handleChangeSkills={handleChangeSkills}
          />
          <div className="skillsButtons">
            <AddSkillButton resume={resume} handleAddSkills={handleAddSkills} />
            <DeleteSkillButton
              resume={resume}
              handleDeleteSkills={handleDeleteSkills}
            />
          </div>
        </>
      )}
    </div>
  );
}

function SkillsInputs({ resume, handleChangeSkills }) {
  return (
    <div className="skillsInput">
      {resume.Skills.map((skillItem, index) => {
        return (
          <Input
            name={"Skill"}
            input={skillItem.skill}
            index={index}
            onChange={handleChangeSkills}
            skillInput={true}
          />
        );
      })}
    </div>
  );
}

function AddSkillButton({ resume, handleAddSkills }) {
  if (resume.Skills.length < 10) {
    return (
      <button type="button" onClick={handleAddSkills}>
        Add Skill
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Add Skill max:10
      </button>
    );
  }
}

function DeleteSkillButton({ resume, handleDeleteSkills }) {
  if (resume.Skills.length > 3) {
    return (
      <button type="button" onClick={handleDeleteSkills}>
        Delete Skill
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Delete Skill min:3
      </button>
    );
  }
}
