import Input from "./input";
export default function ContactInfo({
  handleChange,
  handleExpand,
  expand,
  resume,
}) {
  return (
    <div className="contactInfoSection">
      <h2 className="contact" onClick={handleExpand}>
        Contact Information
      </h2>
      {expand.contact && (
        <div className="contactInput">
          <Input name="Name" input={resume.Name} onChange={handleChange} />
          <Input name="Phone" input={resume.Phone} onChange={handleChange} />
          <Input name="Email" input={resume.Email} onChange={handleChange} />
          <Input
            name="LinkedIn"
            input={resume.LinkedIn}
            onChange={handleChange}
          />
        </div>
      )}
    </div>
  );
}
