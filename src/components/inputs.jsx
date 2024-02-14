export { Input, TextArea };

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

function TextArea({ name, input, onChange }) {
  return (
    <>
      <label htmlFor={name}></label>
      <textarea
        // key={key}
        id={name}
        value={input}
        onChange={onChange}
      ></textarea>
    </>
  );
}
