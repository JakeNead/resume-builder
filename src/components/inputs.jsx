export { Input, SkillInput, TextArea };

function Input({ name, input, onChange, index }) {
  return (
    <>
      <label htmlFor={name}>{name + ": "}</label>
      <input
        data-index={index}
        id={name}
        type="text"
        value={input}
        onChange={onChange}
      />
    </>
  );
}

function SkillInput({ name, input, onChange, index }) {
  return (
    <>
      <label htmlFor={name}></label>
      <input
        data-index={index}
        id={name}
        type="text"
        value={input}
        onChange={onChange}
      />
    </>
  );
}

function TextArea({ name, input, onChange, index, responsibilityIndex }) {
  return (
    <>
      <label htmlFor={name}></label>
      <textarea
        // key={key}
        data-index={index}
        data-responsibility-index={responsibilityIndex}
        id={name}
        value={input}
        onChange={onChange}
      ></textarea>
    </>
  );
}
