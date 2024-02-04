import Input from "./input";
export default function Experience({
  handleChange,
  handleExpand,
  expand,
  resume,
}) {
  return (
    <div className="experienceSection">
      <h2 className="experience" onClick={handleExpand}>
        Experience
      </h2>
      {expand.experience && (
        <div className="experienceInput">
          <Input
            name="Company"
            input={resume.Company}
            onChange={handleChange}
          />
          <Input
            name="Position"
            input={resume.Position}
            onChange={handleChange}
          />
          <Input
            name="Location"
            input={resume.Location}
            onChange={handleChange}
          />
          <Input name="Date" input={resume.Date} onChange={handleChange} />
        </div>
      )}
    </div>
  );
}
