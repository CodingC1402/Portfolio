import * as React from 'react';
import { Link, List, ListItem, ListItemIcon } from '@mui/material';
import "./ProjectPost.css"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useTranslation } from 'react-i18next';

export interface IProjectPostProps {
  time: string,
  timeColor: string,
  images: string[],
  title: string,
  languages: string,
  techs: string,
  description: JSX.Element[] | string[],
  link: string,
  linkBE?: string,
  position?: string,
  teamSize: string,
  finishTime: string,
}

export default function ProjectPost (props: IProjectPostProps) {
  const {t} = useTranslation();

  return (
    <div id="project-post-div">
      <div id="post-time-stamp-div">
        <div id="time-card" style={{background: props.timeColor}}>{props.time}</div>
      </div>
      <div id="content-div">
        <div id="pictures">
          {Object.keys(props.images).map((key, i) => {
            return (
              <div key={key} className='project-post-images' style={{backgroundImage: `url(${props.images[i]})`}}/>
            )
          })}
        </div>
        <div id="description">
          <h3 id="project-title">{props.title}</h3>
          <span>{t("projectsLanguages")}: {props.languages}</span>
          <span>{t("projectsTechnologies")}: {props.techs}</span>
          <span>{t("projectsDescription")}: <List>{Object.keys(props.description).map((key, i) => (
            <ListItem sx={{marginTop: "-15px"}}>
              <ListItemIcon sx={{marginRight: "-15px", alignSelf: "baseline"}}>
                <ArrowRightIcon htmlColor='white'/>
              </ListItemIcon>
              {props.description[i]}
              </ListItem>
          ))}</List></span>
          <span>{t("projectsTeamSize")}: {props.teamSize}</span>
          {props.position ? <span>{t("projectsPosition")}: {props.position}</span> : undefined}
          <span>{t("projectsTimeSpan")}: {`${props.time} - ${props.finishTime}`}</span>
          <span>Link{props.linkBE ? " FE" : ""}: <Link href={props.link}>{props.link}</Link></span>
          {props.linkBE ? <span>Link BE: <Link href={props.linkBE}>{props.linkBE}</Link></span> : undefined}
        </div>
      </div>
    </div>
  );
}
