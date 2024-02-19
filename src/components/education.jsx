import { Input } from "./inputs";

export default function Education({
  resume,
  expand,
  handleExpand,
  handleChangeEducation,
  handleAddEducation,
  handleDeleteEducation,
}) {
  return (
    <div className="educationSection inputSection">
      <h2 className="education" onClick={handleExpand}>
        Education
      </h2>

      {expand.education && (
        <>
          <EducationInputs
            resume={resume}
            handleChangeEducation={handleChangeEducation}
          />
          <div className="educationButtons">
            <AddEducationButton
              resume={resume}
              handleAddEducation={handleAddEducation}
            />
            <DeleteEducationButton
              resume={resume}
              handleDeleteEducation={handleDeleteEducation}
            />
          </div>
        </>
      )}
    </div>
  );
}

function EducationInputs({ resume, handleChangeEducation }) {
  const fields = ["School", "Degree", "Location", "Date"];
  return resume.Education.map((school, index) => {
    return (
      <div className="educationInput" key={school.Key}>
        {fields.map((field) => {
          return (
            <Input
              name={field}
              input={school[field]}
              onChange={handleChangeEducation}
              index={index}
            />
          );
        })}
      </div>
    );
  });
}

function AddEducationButton({ resume, handleAddEducation }) {
  if (resume.Education.length < 3) {
    return (
      <button type="button" onClick={handleAddEducation}>
        Add School
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Add School max:3
      </button>
    );
  }
}

function DeleteEducationButton({ resume, handleDeleteEducation }) {
  if (resume.Education.length > 1) {
    return (
      <button type="button" onClick={handleDeleteEducation}>
        Delete School
      </button>
    );
  } else {
    return (
      <button type="button" disabled>
        Delete School min:1
      </button>
    );
  }
}
