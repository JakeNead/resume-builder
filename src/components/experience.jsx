/* eslint-disable no-unreachable */
import { Input, TextArea } from "./inputs";

export default function Experience({
  resume,
  expand,
  handleExpand,
  handleChangeExperience,
  handleResponsibilityChange,
  handleAddResponsibility,
  handleDeleteResponsibility,
  handleAddExperience,
  handleDeleteExperience,
}) {
  return (
    <div className="experienceSection inputSection">
      <h2 className="experience" onClick={handleExpand}>
        Work Experience
      </h2>
      {expand.experience && (
        <>
          <ExperienceInputs
            resume={resume}
            handleChangeExperience={handleChangeExperience}
            handleResponsibilityChange={handleResponsibilityChange}
            handleAddResponsibility={handleAddResponsibility}
            handleDeleteResponsibility={handleDeleteResponsibility}
          />
          <AddExperienceButton
            resume={resume}
            handleAddExperience={handleAddExperience}
          />
          <DeleteExperienceButton
            resume={resume}
            handleDeleteExperience={handleDeleteExperience}
          />
        </>
      )}
    </div>
  );
}

export function ExperienceInputs({
  resume,
  handleChangeExperience,
  handleResponsibilityChange,
  handleAddResponsibility,
  handleDeleteResponsibility,
}) {
  return resume["Work-Experience"].map((experience, index) => {
    return (
      <div className="experienceInput" key={experience.Key}>
        <Input
          name="Company"
          input={experience.Company}
          onChange={handleChangeExperience}
          index={index}
        />
        <Input
          name="Position"
          input={experience.Position}
          onChange={handleChangeExperience}
          index={index}
        />
        <Input
          name="Location"
          input={experience.Location}
          onChange={handleChangeExperience}
          index={index}
        />
        <Input
          name="Date"
          input={experience.Date}
          onChange={handleChangeExperience}
          index={index}
        />
        <p>Responsibilities</p>
        {experience.Responsibilities.map(
          (responsibility, responsibilityIndex) => (
            <TextArea
              key={responsibility.Key}
              name="Responsibility"
              input={responsibility.Responsibility}
              onChange={handleResponsibilityChange}
              index={index}
              responsibilityIndex={responsibilityIndex}
            />
          )
        )}
        <AddResponsibilityButton
          resume={resume}
          index={index}
          addResponsibility={handleAddResponsibility}
        />
        <DeleteResponsibilityButton
          resume={resume}
          index={index}
          deleteResponsibility={handleDeleteResponsibility}
        />
      </div>
    );
  });
}
// OUTLINE
// resume["Work-Experience"].map(experiences =>
//    <ExperienceInputs
//        .map(Experiences Responsibilities)
//        <AddResponsibilityButton />
//        <DeleteResponsibilityButton />
//  )
//  <AddExperienceButton />
//  <DeleteExperienceButton />

//work on the add/delete buttons after I make the form responsive
function AddResponsibilityButton({ resume, index, addResponsibility }) {
  if (resume["Work-Experience"][index]["Responsibilities"].length < 3) {
    return (
      <button type="button" data-index={index} onClick={addResponsibility}>
        Add Responsibility
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Add Responsibility (max:3)
      </button>
    );
  }
}

function DeleteResponsibilityButton({ resume, index, deleteResponsibility }) {
  if (resume["Work-Experience"][index]["Responsibilities"].length > 1) {
    return (
      <button type="button" data-index={index} onClick={deleteResponsibility}>
        Delete Responsibility
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Delete Responsibility (min:1)
      </button>
    );
  }
}

function AddExperienceButton({ resume, handleAddExperience }) {
  if (resume["Work-Experience"].length < 3) {
    return (
      <button type="button" onClick={handleAddExperience}>
        Add Experience{" "}
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Add Experience (max:3)
      </button>
    );
  }
}

function DeleteExperienceButton({ resume, handleDeleteExperience }) {
  if (resume["Work-Experience"].length > 1) {
    return (
      <button type="button" onClick={handleDeleteExperience}>
        Delete Experience
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Delete Experience (min:1)
      </button>
    );
  }
}
