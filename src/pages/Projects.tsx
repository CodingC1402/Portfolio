import * as React from "react";
import ProjectPost from "../components/ProjectPost";
import "./Projects.css";
import { BlocketJump } from "../resources/projects-images/BlocketJumper";
import { useTranslation } from "react-i18next";
import { IProjectPost } from "../languages/langTemplate";
import { EzHRM } from "../resources/projects-images/EzHRM";
import { XiangQi } from "../resources/projects-images/XiangQi";
import { WebHRM } from "../resources/projects-images/WebHRM";

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  const {t} = useTranslation();
  const lang: IProjectPost[] = t("projectPosts", {returnObjects: true});
  const images = [WebHRM, XiangQi, EzHRM, BlocketJump];
  const colors = ["#238257", "#238257","#822367", "#1b4382"]

  return (
    <>
    <div className="background-div" />
    <div id="top-div">
      <div id="projects-header-div">
        <span id="projects-header-text">{`<<${t("projects")}>>`}</span>
      </div>
      <div id="projects-div">
        <div className="background-project-div" />
        <div id="time-stamp-div">
          <div id="time-line"></div>
        </div>
        <div id="post-div">
          {lang.map((value, i) => (
            <>
              {i > 0 ? <div className="line-break-div"/> : undefined}
              <ProjectPost
              time={value.time}
              timeColor={colors[i]}
              images={images[i]}
              title={value.title}
              link={value.link}
              linkBE={value.linkBE}
              techs={value.techs}
              languages={value.languages}
              description={value.descriptions}
              teamSize={value.teamSize}
              position={value.position}
              finishTime={value.finishTime}/>
            </>
          ))}
        </div>
      </div>
    </div></>
  );
}
