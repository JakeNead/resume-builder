export default function DisplayResume({ currentInfo }) {
  return (
    <>
      <h1>{currentInfo.name}</h1>
      <p>{currentInfo.phone}</p>
      <p>{currentInfo.email}</p>
      <a href={currentInfo.LinkedIn}>
        <p>Linkedin</p>
      </a>
    </>
  );
}
