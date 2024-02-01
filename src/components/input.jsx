export default function input({ name }) {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input type="text" />
    </>
  );
}
