import { Theme } from "@emotion/react";
import { AppBar, Button, FormControlLabel, Switch, SxProps, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import { styled } from '@mui/material/styles';
import { useTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Home.css";
import {default as VnIcon} from "../resources/languages-icons/Vn.png";
import {default as EnIcon} from "../resources/languages-icons/En.png";
import { default as Profile } from "../resources/Profile.png";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url(${EnIcon})`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundImage: `url(${VnIcon})`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const [lang, i18n] = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [isEnglish, setIsEnglish] = React.useState(i18n.language === "en-US" || i18n.language === "en-UK");

  let navButtons: SxProps<Theme> = {
    transform: "skewX(15deg)",
    width: "100px",
    height: "62px",
    margin: "0px 1px",
    background: "rgb(49, 49, 49)",
    borderRadius: "0px"
  }

  let navButtonsSelected: SxProps<Theme> = {
    background: "white",
    color: "rgb(39, 39, 39)",
    "&:hover": {
      color: "white",
    }
  }

  let buttonDiv: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    overflow: "hidden",
    marginRight: "-43px",
    height: "62px",
    paddingLeft: "25px"
  }

  const aboutStyle = {
    ...navButtons,
    ...(location.pathname === "/about" ? navButtonsSelected : undefined)
  }
  const projectsStyle = {
    ...navButtons,
    ...(location.pathname === "/projects" ? navButtonsSelected : undefined)
  }
  const goalsStyle = {
    ...navButtons,
    width: "120px",
    paddingRight: "20px",
    ...(location.pathname === "/goals" ? navButtonsSelected : undefined),
  }

  const buttonSpan: React.CSSProperties = {
    transform: "skewX(-15deg)",
  }

  return (
    <>
      <AppBar position="relative">
        <Toolbar sx={{overflow: "hidden"}}>
          <div id="app-bar-home-a" onClick={c => navigate("/")}>
            <div id="app-bar-image"/>
            <Typography variant="h6" fontWeight={"bold"} color="inherit">
              {lang("name")}
            </Typography>
          </div>
          <div style={{flexGrow: 1}}></div>
          <div style={buttonDiv}>
            <FormControlLabel sx={{width: "150px"}} label={isEnglish ? "English" : "Tiếng Việt"} control={<MaterialUISwitch checked={isEnglish}/>} onClick={() => {setIsEnglish(!isEnglish); if (isEnglish) {i18n.changeLanguage("vn")} else {i18n.changeLanguage("en")}}}/>
            <Button color="inherit" sx={aboutStyle} onClick={c => navigate("/about")}><span style={buttonSpan}>{lang("about")}</span></Button>
            <Button color="inherit" sx={projectsStyle} onClick={c => navigate("/projects")}><span style={buttonSpan}>{lang("projects")}</span></Button>
            <Button color="inherit" sx={goalsStyle} onClick={c => navigate("/goals")}><span style={buttonSpan}>{lang("goals")}</span></Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{height: "calc(100% - 64px)", position: "absolute", top: "64px", width: "100vw"}}>
        <Outlet/>
      </div>
    </>
  );
}
