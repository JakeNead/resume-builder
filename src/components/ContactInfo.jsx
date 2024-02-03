import Input from "./input";
export default function ContactInfo({
  handleChange,
  handleExpand,
  expand,
  resume,
}) {
  return (
    <>
      <h2 className="contactInfoSection" onClick={handleExpand}>
        Contact Information
      </h2>
      {expand.contactInfoSection && (
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
    </>
  );
}
