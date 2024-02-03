import Input from "./input";
export default function ContactInfo({ handleChange, resume }) {
  return (
    <div className="contactInfo">
      <Input name="Name" input={resume.name} onChange={handleChange} />
      <Input name="Phone" input={resume.phone} onChange={handleChange} />
      <Input name="Email" input={resume.email} onChange={handleChange} />
      <Input name="LinkedIn" input={resume.linkediN} onChange={handleChange} />
    </div>
  );
}
