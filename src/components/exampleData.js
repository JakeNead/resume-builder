export const exampleResume = {
  Name: "Dr. Serena Wildwood",
  Phone: "(555) 123-4567",
  Email: "s.wildwood@example.com",
  LinkedIn: "www.linkedin.com/in/serenawildwood",
  "Work-Experience": [
    {
      Key: crypto.randomUUID(),
      Company: "Wildlife Explorations Inc.",
      Position: "Senior Zoologist",
      Location: "Jungleville, Earth",
      Date: "January 2018 - Present",
      Responsibilities: [
        {
          Key: crypto.randomUUID(),
          Responsibility: "Conduct field research on various animal species.",
        },
        {
          Key: crypto.randomUUID(),
          Responsibility:
            "Collaborate with local communities for conservation efforts.",
        },
        {
          Key: crypto.randomUUID(),
          Responsibility:
            "Publish research findings in reputable scientific journals.",
        },
      ],
    },
    {
      Key: crypto.randomUUID(),
      Company: "Safari Guardians",
      Position: "Wildlife Biologist",
      Location: "Savannah City, Earth",
      Date: "June 2015 - December 2017",
      Responsibilities: [
        {
          Key: crypto.randomUUID(),
          Responsibility:
            "Monitor and analyze animal behavior in their natural habitat.",
        },
        {
          Key: crypto.randomUUID(),
          Responsibility: "Develop and implement conservation programs.",
        },
        {
          Key: crypto.randomUUID(),
          Responsibility: "Train and mentor junior zoologists.",
        },
      ],
    },
  ],
  Education: [
    {
      Key: crypto.randomUUID(),
      School: "University of Zoological Studies",
      Degree: "Ph.D. in Zoology",
      Location: "Scienceville, Earth",
      Date: "Graduated May 2015",
    },
    {
      Key: crypto.randomUUID(),
      School: "Wildlife Conservation Institute",
      Degree: "Bachelor of Science in Biology",
      Location: "Naturetown, Earth",
      Date: "Graduated May 2011",
    },
  ],
  Skills: [
    {
      key: crypto.randomUUID(),
      skill: "Field Research",
    },
    {
      key: crypto.randomUUID(),
      skill: "Conservation Biology",
    },
    {
      key: crypto.randomUUID(),
      skill: "Data Analysis",
    },
    {
      key: crypto.randomUUID(),
      skill: "Scientific Writing",
    },
  ],
};
