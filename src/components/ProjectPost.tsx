import * as React from 'react';
import { JsxChild } from 'typescript';
import "./ProjectPost.css"

export interface IProjectPostProps {
  time: string,
  timeColor: string,
  images: string[],
  description: JSX.Element | string
}

export default function ProjectPost (props: IProjectPostProps) {
  return (
    <div id="project-post-div">
      <div id="post-time-stamp-div">
        <div id="time-card" style={{background: props.timeColor}}>{props.time}</div>
      </div>
      <div id="content-div">
        <div id="pictures">
          {Object.keys(props.images).map((key, i) => (
            <div key={key} className='project-images' style={{backgroundImage: `url(${props.images[i]})`, backgroundRepeat: 'no-repeat', backgroundSize: "contain", backgroundPosition: "center"}}/>
          ))}
        </div>
        <div id="description">
          {props.description}
        </div>
      </div>
    </div>
  );
}
