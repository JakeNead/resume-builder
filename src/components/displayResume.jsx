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
      <section className="experienceSection">
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
                    <p className="displayLocation">{experience.Location}</p>
                    <p className="displayDate">{experience.Date}</p>
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
      </section>
      <div className="educationSection">
        <h2>Education</h2>
        {resume.Education.map((school) => {
          return (
            <div key={school.Key} className="schoolDetailsContainer">
              <div className="displaySchoolAndDegree">
                <p className="displaySchool">{school.School}</p>
                <p className="displayDegeee">{school.Degree}</p>
              </div>
              <div className="displayLocationAndDate">
                <p className="displayLocation">{school.Location}</p>
                <p className="displayDate">{school.Date}</p>
              </div>
            </div>
          );
        })}
      </div>{" "}
      <h2>Skills</h2>
      <div className="skillsContainer">
        {resume.Skills.map((skill) => {
          return <span>{skill.skill}</span>;
        })}
      </div>
    </div>
  );
}
