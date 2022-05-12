import * as React from 'react';
import "./About.css"

export interface IAboutProps {
}

export default function About (props: IAboutProps) {
  let birthDate = new Date(2001, 2, 14);
  let today = new Date();
  let yearOld = today.getFullYear() - birthDate.getFullYear();

  return (
    <div id='top-div'>
      <div id="info-div">
        <div id="info">
          $ Thông tin -list<br/>
          - Phạm Phúc Nguyên<br/>
          - Sinh ngày 14/02/2001<br/>
          - <span>{yearOld}</span> tuổi<br/>
          <br/>
          $ Thông tin học vấn -list<br/>
          - Đại học:<br/>
          &nbsp; |_ Sinh viên năm 3 trường Đại học công nghệ thông tin Tp.HCM(UIT)<br/>
          &nbsp; |_ Chuyên ngành Kỹ thuật phần mềm<br/>
          &nbsp; |_ Dự kiến tốt nghiệm đầu nằm 2023<br/>
          &nbsp; |_ Điểm trung bình tích lũy: 8.46 / 10<br/>
          - Trung học phổ thông:<br/>
          &nbsp; |_ Trường THPT Lương Thế Vinh Quận 1.<br/>
          &nbsp; |_ Tốt nghiệm loại giỏi.<br/>
          <br/>
          $ Mục tiêu nghề nghiệp -list<br/>

          <br/>
          $ Sở thích -list<br/>
          - Lập trình.<br/>
          - Tìm hiểu các công nghệ mới.<br/>
          - Nghe nhạc.<br/>
          - Vẽ tranh.<br/>
        </div>
      </div>
      <div id="padding" className='skewed'/>
      <div id="image-div" className='skewed'>
        <div id="image" className='unskewed-content'/>
      </div>
    </div>
  );
}
