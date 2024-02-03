export default function Input({ name, input, onChange }) {
  console.log(input);
  return (
    <>
      <label htmlFor={name}>{name + ": "}</label>
      <input id={name} type="text" value={input} onChange={onChange}>
        {input}
      </input>
    </>
  );
}
