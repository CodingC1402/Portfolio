import { Theme } from "@emotion/react";
import { AppBar, Button, Container, Link, SxProps, Toolbar, Typography } from "@mui/material";
import { hover } from "@testing-library/user-event/dist/hover";
import * as React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

export interface IHomeProps {}

export default function Home(props: IHomeProps) {
  const navigate = useNavigate();
  const location = useLocation();

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
            <img
              id="app-bar-image"
              src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1652356670~hmac=9dd2de506bfb8f8dfe62ce9df9b1964b"
              alt="image"
            />
            <Typography variant="h6" fontWeight={"bold"} color="inherit">
              Phạm Phúc Nguyên
            </Typography>
          </div>
          <div style={{flexGrow: 1}}></div>
          <div style={buttonDiv}>
            <Button color="inherit" sx={aboutStyle} onClick={c => navigate("/about")}><span style={buttonSpan}>About</span></Button>
            <Button color="inherit" sx={projectsStyle} onClick={c => navigate("/projects")}><span style={buttonSpan}>Projects</span></Button>
            <Button color="inherit" sx={goalsStyle} onClick={c => navigate("/goals")}><span style={buttonSpan}>Goals</span></Button>
          </div>
        </Toolbar>
      </AppBar>
      <div style={{height: "calc(100% - 64px)", position: "absolute", top: "64px", width: "100vw"}}>
        <Outlet/>
      </div>
    </>
  );
}
