/* eslint-disable no-unreachable */
import { Input, TextArea } from "./inputs";

export default function Experience({
  resume,
  expand,
  handleExpand,
  handleExperienceChange,
  handleResponsibilityChange,
  handleResponsibilityDelete,
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
            handleExperienceChange={handleExperienceChange}
            handleResponsibilityChange={handleResponsibilityChange}
            handleResponsibilityDelete={handleResponsibilityDelete}
          />
          <AddExperienceButton />
        </>
      )}
    </div>
  );
}

export function ExperienceInputs({
  resume,
  handleExperienceChange,
  handleResponsibilityChange,
  handleResponsibilityDelete,
}) {
  return resume["Work-Experience"].map((experience, index) => {
    return (
      <div className="experienceInput" key={experience.Key}>
        <Input
          name="Company"
          input={experience.Company}
          onChange={handleExperienceChange}
          index={index}
        />
        <Input
          name="Position"
          input={experience.Position}
          onChange={handleExperienceChange}
          index={index}
        />
        <Input
          name="Location"
          input={experience.Location}
          onChange={handleExperienceChange}
          index={index}
        />
        <Input
          name="Date"
          input={experience.Date}
          onChange={handleExperienceChange}
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
        <DeleteResponsibilityButton
          resume={resume}
          index={index}
          deleteResponsibility={handleResponsibilityDelete}
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
function AddResponsibilityButton(responsibilities) {
  if (responsibilities.length <= 3) {
    return (
      <button type="button" onClick={AddResponsibility}>
        Add Responsibility (max:3)
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
        Delete Responsibility (min:1)
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

function AddExperienceButton() {
  return <button type="button">Add Experience (max:3)</button>;
}
function DeleteExperienceButton() {}

function handleAddExperience() {}
function handleDeleteExperience() {}
function handleAddResponsibility() {}
function handleDeleteResponsibility() {}
