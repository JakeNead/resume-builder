export default function DisplayResume({ currentInfo }) {
  return (
    <div className="displayResume">
      <h1>{currentInfo.Name}</h1>
      <div className="displayContactInfo">
        <p>{currentInfo.Phone}</p>
        <p>{currentInfo.Email}</p>
        <a href={currentInfo.LinkedIn}>
          <p>Linkedin</p>
        </a>
      </div>
    </div>
  );
}
