import * as React from "react";
import ProjectPost from "../components/ProjectPost";
import "./Projects.css";
import { default as Background } from "../resources/Profile.png";

export interface IProjectsProps {}

export default function Projects(props: IProjectsProps) {
  return (
    <>
    <div className="background-div" />
    <div id="top-div">
      <div style={{ height: "250px", background: "teal" }}></div>
      <div id="projects-div">
        <div className="background-project-div" />
        <div id="time-stamp-div">
          <div id="time-line"></div>
        </div>
        <div id="post-div">
          <ProjectPost
            time="9/2021"
            timeColor="#282828"
            images={[Background]}
            description={
              <div>
                Hi there boi<span style={{ color: "green" }}> Gay</span>
              </div>
            }
          />
          <ProjectPost
            time="9/2021"
            timeColor="#282828"
            images={[Background]}
            description={
              <div>
                Hi there boi<span style={{ color: "green" }}> Gay</span>
              </div>
            }
          />
          <ProjectPost
            time="9/2021"
            timeColor="#282828"
            images={[Background]}
            description={
              <div>
                Hi there boi<span style={{ color: "green" }}> Gay</span>
              </div>
            }
          />
          <ProjectPost
            time="9/2021"
            timeColor="#282828"
            images={[Background]}
            description={
              <div>
                Hi there boi<span style={{ color: "green" }}> Gay</span>
              </div>
            }
          />
        </div>
      </div>
    </div></>
  );
}
