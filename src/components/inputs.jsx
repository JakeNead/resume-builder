export { Input, TextArea };

function Input({ name, input, onChange }) {
  return (
    <>
      <label htmlFor={name}>{name + ": "}</label>
      <input id={name} type="text" value={input} onChange={onChange} />
    </>
  );
}

function TextArea({ name, input, onChange }) {
  return (
    <>
      <label htmlFor={name}>{name + ": "}</label>
      <textarea id={name} value={input} onChange={onChange}></textarea>
    </>
  );
}
