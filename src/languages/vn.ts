import { ILangTemplate } from "./langTemplate"

export const vnLang: ILangTemplate = {
  profession: "Sinh viên ngành Kỹ thuật phần mềm",
  name: "Phạm Phúc Nguyên",
  about: "Giới thiệu",
  projects: "Đồ án",
  goals: "Mục tiêu",
  randomQuotes: "\"One of the best programming skills you can have is knowing when to walk away for awhile\"",
  randomQuotesAuthor: "Oscar Godson",

  projectsDescription: "Mô tả",
  projectsLanguages: "Ngôn ngữ",
  projectsTechnologies: "Công nghệ",
  projectsTeamSize: "Số thành viên",
  projectsTimeSpan: "Thời gian thực hiện",
  projectsPosition: "Vị trí",

  goalsMessage: "Xin lỗi, nhưng trang này vẫn đang trong quá trình thi công :D",

  aboutContents: {
    information: {
      title: "info -list",
      content: [
        "Họ và tên: Phạm Phúc Nguyên",
        "Github: <a href='https://github.com/CodingC1402'>https://github.com/CodingC1402</a>",
        "Email: CornyCodingCorn@gmail.com",
        "Ngày sinh: 14/02",
        "Giới tính: Nam",
        "Quốc tịch: Việt Nam"
      ]
    },
    skills: {
      title: "skills -list",
      content: [
        "<span style='color: cyan'>Ngôn ngữ chính: C#, MySQL, Typescript</span>",
        "Ngôn ngữ biết sử dụng: C++, Java, JavaScript",
        "<span style='color: cyan'>Công nghệ chính: Unity, Cocos Creator, Wpf, Winform, MySQL</span>",
        "Công nghệ biết sử dụng: Spring boot, ReactJS, NodeJS, DirectX, MongoDB, MS SQL"
      ]
    },
    strength: {
      title: "strength -list",
      content: [
        "<span style='color: #00FF00'>+ </span>Khả năng tự học tốt",
        "<span style='color: #00FF00'>+ </span>Khả năng tập trung cao",
        "<span style='color: #00FF00'>+ </span>Luông hướng tới hoàn thành công việc",
        "<span style='color: #00FF00'>+ </span>Có thể giao tiếp và đọc tài liệu tiếng Anh"
      ]
    },
    weakness: {
      title: "weakness -list",
      content: [
        "<span style='color: #FF0000'>- </span>Đôi khi tập trung quá vào một việc",
        "<span style='color: #FF0000'>- </span>Hay over engineer",
        "<span style='color: #FF0000'>- </span>Cần cải thiện thêm kỹ năng mềm"
      ]
    },
    education: {
      title: "education -info",
      content: [
        "<span style='color: cyan'>ĐẠI HỌC QUỐC GIA THÀNH PHỐ HỒ CHÍ MINH - TRƯỜNG ĐẠI HỌC CÔNG NGHỆ THÔNG TIN</span>",
        "Chuyên ngành: Kỹ thuật phần mềm",
        "Điểm tích lũy trung bình: 8.46 / 10",
        "Email trường: 19521918@gm.uit.edu.vn",
        "Thời gian tốt nghiệp dự tính: 2023"
      ]
    },
    hobbies: {
      title: "hobbies -list",
      content: [
        "Lập trình",
        "Tìm học các công nghệ mới",
        "Vẽ tranh",
        "Nghe nhạc",
        "Xem meme"
      ]
    }
  },

  projectPosts: [
    {
      time: "03/2022",
      title: "Trang web quản lý nhân sự",
      link: "https://github.com/feelings93/HRManagement",
      linkBE: "https://github.com/CodingC1402/EzHRMBE",
      languages: "Typescript, Javascript",
      techs: "NodeJS, ReactJS, Express, MongoDB",
      teamSize: "5",
      position: "Backend",
      finishTime: "Hôm nay",
      descriptions: [
        "Phần mềm hỗ trợ quản lý nhân sự tại công ty.",
        "Đóng vai trò là một phần mềm gọn nhẹ để quản lý nhân sự.",
        "Phù hợp với công ty vừa và nhỏ.",
      ]
    },
    {
      time: "03/2022",
      title: "Trang web đánh cờ tướng online",
      link: "https://github.com/CodingC1402/XiangQi",
      linkBE: "https://github.com/CodingC1402/XiangQiBE",
      languages: "Java, Typescript",
      techs: "Spring boot, ReactJS, MongoDB",
      teamSize: "3",
      position: "Fullstack",
      finishTime: "Hôm nay",
      descriptions: [
        "Một trang web để người dùng đánh cờ tướng với người khác trên mạng.",
        "Hỗ trợ tạo phòng chờ và cho điều chỉnh các thông tin của trò chơi đối với phòng đó.",
        "Hỗ trợ xem lại trận đấu.",
        "Có thể chơi với AI."
      ]
    },
    {
      time: "09/2021",
      title: "Phần mềm quản lý nhân sự",
      link: "https://github.com/CodingC1402/EzHRMApp",
      languages: "C#",
      techs: "WPF",
      position: "Fullstack",
      teamSize: "4",
      finishTime: "12/2021",
      descriptions: [
        "Phần mềm giúp quản lý nhân sự của công ty từ nhỏ đến vừa.",
        "Hỗ trợ tính lương với nhiều hình thức khác nhau.",
        "Hỗ trợ chấm công cho nhân viên",
        "Có thể tạo thêm chức vị trong phần mềm và thêm quyền hạn cho từng chức vụ."
      ]
    },
    {
      time:"09/2020",
      title: "Blocket Jumper",
      link: "https://github.com/CodingC1402/BlocketJumper",
      languages: "C#",
      techs: "Unity",
      teamSize: "1",
      finishTime: "01/2021",
      descriptions: [
        "Một game mobile xây dựng dựa trên việc người chơi vượt qua các chướng ngại vật",
        "Lấy cảm hứng từ \"Rocket jump\" trong game Team fortress 2",
        "Game nói về việc một khối vuông dùng các vụ nổ để đi đến đích"
      ]
    }
  ]
}