import { ILangTemplate } from "./langTemplate";

export const enLang: ILangTemplate = {
  profession: "Software engineer student",
  name: "Nguyen Pham Phuc",
  about: "About",
  projects: "Projects",
  goals: "Goals",
  randomQuotes: "\"One of the best programming skills you can have is knowing when to walk away for awhile\"",
  randomQuotesAuthor: "Oscar Godson",

  projectsDescription: "Descriptions",
  projectsLanguages: "Languages",
  projectsTechnologies: "Technologies",
  projectsTeamSize: "Team size",
  projectsTimeSpan: "Time span",
  projectsPosition: "Position",

  goalsMessage: "I'm sorry, but this page is still under construction :D",

  aboutContents: {
    information: {
      title: "info -list",
      content: [
        "Full name: Nguyen Pham Phuc",
        "Github: <a href='https://github.com/CodingC1402'>https://github.com/CodingC1402</a>",
        "Email: CornyCodingCorn@gmail.com",
        "BOD: 14/02",
        "Gender: Male",
        "Nationality: Viet Nam"
      ]
    },
    strength: {
      title: "strength -list",
      content: [
        "<span style='color: #00FF00'>+ </span>Good self learning skill",
        "<span style='color: #00FF00'>+ </span>Good ability to concentrate",
        "<span style='color: #00FF00'>+ </span>Determined to get the job done",
        "<span style='color: #00FF00'>+ </span>Can communicate and read documents in english"
      ]
    },
    weakness: {
      title: "weakness -list",
      content: [
        "<span style='color: #FF0000'>- </span>Can be too focused on one thing",
        "<span style='color: #FF0000'>- </span>Tend to over engineer",
        "<span style='color: #FF0000'>- </span>Soft skill still need some improvement"
      ]
    },
    education: {
      title: "education -info",
      content: [
        "<span style='color: cyan'>VIET NAM NATIONAL UNIVERSITY HCMC - UNIVERSITY OF INFORMATION TECHNOLOGY</span>",
        "Profession: Software engineer",
        "Cumulative grade average: 8.46 / 10",
        "School email: 19521918@gm.uit.edu.vn",
        "Estimate graduation date: 2023"
      ]
    },
    hobbies: {
      title: "hobbies -list",
      content: [
        "Coding",
        "Learning new technology",
        "Drawing",
        "Listening to music",
        "Reading meme"
      ]
    }
  },

  projectPosts: [
    {
      time: "03/2022",
      title: "Human resource management website",
      link: "https://github.com/feelings93/HRManagement",
      linkBE: "https://github.com/CodingC1402/EzHRMBE",
      languages: "Typescript, Javascript",
      techs: "NodeJS, ReactJS, Express, MongoDB",
      teamSize: "5",
      position: "Backend",
      finishTime: "Today",
      descriptions: [
        "A website support managing human resource of a company.",
        "Act as a lightweight and simple hrm application.",
        "Suited for medium to small company.",
      ]
    },
    {
      time: "03/2022",
      title: "Website for playing chinese chess",
      link: "https://github.com/CodingC1402/XiangQi",
      linkBE: "https://github.com/CodingC1402/XiangQiBE",
      languages: "Java, Typescript",
      techs: "Spring boot, ReactJS, MongoDB",
      teamSize: "3",
      position: "Fullstack",
      finishTime: "Today",
      descriptions: [
        "A website to play chinese chess with other people online.",
        "Support creating lobby and change game setting of that lobby.",
        "Can look at match history and replay it.",
        "Can play against AI."
      ]
    },
    {
      time: "09/2021",
      title: "Human resource management app",
      link: "https://github.com/CodingC1402/EzHRMApp",
      languages: "C#, MySQL",
      techs: "WPF, MySQL",
      teamSize: "4",
      position: "Fullstack",
      finishTime: "12/2021",
      descriptions: [
        "An application made to help managing employees in a company with size from small to medium.",
        "Support calculating payroll with multiple payment methods.",
        "Have a check in system.",
        "Support changing permission for each role and create more role."
      ]
    },
    {
      time: "09/2020",
      title: "Blocket Jumper",
      link: "https://github.com/CodingC1402/BlocketJumper",
      languages: "C#",
      techs: "Unity",
      teamSize: "1",
      finishTime: "01/2021",
      descriptions: [
        "A mobile game focus on player overcome challenges.",
        "Inspired by the move called 'Rocket jump' in the game Team fortress 2.",
        "The game is a about a block trying to get over obstacles using explosions.",
      ]
    }
  ]
}