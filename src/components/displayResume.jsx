// import Experience from "./experience";

export default function DisplayResume({ resume }) {
  return (
    <div className="displayResume">
      <h1>{resume.Name}</h1>
      <div className="displayContactInfo">
        <p>{resume.Phone}</p>
        <p>{resume.Email}</p>
        <a href={resume.LinkedIn}>
          <p>Linkedin</p>
        </a>
      </div>
      <h2>Work Experience</h2>
      {resume["Work-Experience"].map((experience) => {
        return (
          <>
            <div key={experience.Key}>
              <div className="jobDetailsContainer">
                <div className="displayCompanyAndPosition">
                  <p className="displayCompany">{experience.Company}</p>
                  <p className="displayPosition">{experience.Position}</p>
                </div>
                <div className="displayLocationAndDate">
                  <p className="displayCompany">{experience.Location}</p>
                  <p className="displayPosition">{experience.Date}</p>
                </div>
              </div>
            </div>
            <ul>
              {experience.Responsibilities.map((responsibility) => {
                return (
                  <li key={responsibility.Key}>
                    {responsibility.Responsibility}
                  </li>
                );
              })}
            </ul>
          </>
        );
      })}
    </div>
  );
}
