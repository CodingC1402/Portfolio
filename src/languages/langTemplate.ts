export interface IAboutContents {
  title: string,
  content: string[]
}

export interface IProjectPost {
  title: string,
  link: string,
  linkBE?: string,
  position?: string,
  languages: string,
  techs: string,
  time: string,
  finishTime: string,
  teamSize: string,
  descriptions: string[]
}

export interface ILangTemplate {
  profession: string,
  name: string,
  about: string,
  projects: string,
  goals: string,
  randomQuotes: string,
  randomQuotesAuthor: string,

  projectsDescription: string,
  projectsLanguages: string,
  projectsTechnologies: string,
  projectsTeamSize: string,
  projectsTimeSpan: string,
  projectsPosition: string,

  goalsMessage: string,

  aboutContents: {
    information: IAboutContents,
    strength: IAboutContents
    weakness: IAboutContents
    education: IAboutContents
    hobbies: IAboutContents
  }

  projectPosts: IProjectPost[]
}