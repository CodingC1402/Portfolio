import { Paper } from "@mui/material";
import * as React from "react";
import "./About.css";
import ClearIcon from "@mui/icons-material/Clear";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import TerminalLog from "../components/TerminalLog";
import { useTranslation } from "react-i18next";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const [lang] = useTranslation();
  //let birthDate = new Date(2001, 2, 14);
  //let today = new Date();
  //let yearOld = today.getFullYear() - birthDate.getFullYear();

  const fakeBtnStyle = {
    width: "27px",
    height: "27px",
    background: "rgb(72, 72, 72)",
    boxShadow: "0px 2px 3px rgba(9,0,0,0.5)",
    borderRadius: "3px",
    marginRight: "20px",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
  };

  const fakeSysBtnStyle = {
    width: "20px",
    height: "20px",
    marginRight: "20px",
    display: "grid",
    justifyItems: "center",
    alignItems: "end",
  }

  return (
    <React.Fragment>
      <div id="background" />
      <div className="mx-0 mx-md-5" style={{
          justifyContent: "center",
          display: "flex",
          paddingTop: "30px",
          paddingBottom: "30px",
          position: "relative",
          height: "100%",
        }}>
        <Paper sx={{ width: "100%", minHeight: "250px", position: "relative", overflow: "hidden" }}>
          <div id="terminal-top-bar">
            <div
              style={{
                width: "20px",
                height: "20px",
                marginRight: "15px",
                borderRadius: "20px",
                background: "rgb(240, 60, 1)",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
              }}
            >
              <ClearIcon
                htmlColor="white"
                sx={{ width: "15px", height: "15px" }}
              ></ClearIcon>
            </div>
            <div
              style={fakeSysBtnStyle}
            >
              <CropSquareIcon
                htmlColor="white"
                sx={{ width: "15px", height: "15px" }}
              ></CropSquareIcon>
            </div>
            <div
              style={fakeSysBtnStyle}
            >
              <MinimizeIcon
                htmlColor="white"
                sx={{ width: "15px", height: "15px" }}
              ></MinimizeIcon>
            </div>
            <div style={fakeBtnStyle}>
              <MenuIcon
                htmlColor="white"
                sx={{ width: "20px", height: "20px", marginTop: "3px" }}
              ></MenuIcon>
            </div>
            <div style={fakeBtnStyle}>
              <SearchIcon
                htmlColor="white"
                sx={{ width: "23px", height: "23px", marginTop: "3px" }}
              ></SearchIcon>
            </div>
            <div id="name-div" style={{textOverflow: "clip"}}>nguyen@nguyen-pc:~</div>
            <div style={{ ...fakeBtnStyle, marginLeft: "15px" }}>
              <AddBoxOutlinedIcon
                htmlColor="white"
                sx={{ width: "23px", height: "23px", marginTop: "3px" }}
              ></AddBoxOutlinedIcon>
            </div>
          </div>
          <div style={{position: "relative", background: "rgb(53, 5, 38)", top: "40px", width: "100%", height: "calc(100% - 40px)", overflow: "auto"}}>
              <TerminalLog root="nguyen@nguyen-pc" query={lang("aboutContents.information.title", {returnObjects: true})} results={lang("aboutContents.information.content", {returnObjects: true})}/>
              <TerminalLog root="nguyen@nguyen-pc" query={lang("aboutContents.education.title", {returnObjects: true})} results={lang("aboutContents.education.content", {returnObjects: true})}/>
              <TerminalLog root="nguyen@nguyen-pc" query={lang("aboutContents.strength.title", {returnObjects: true})} results={lang("aboutContents.strength.content", {returnObjects: true})}/>
              <TerminalLog root="nguyen@nguyen-pc" query={lang("aboutContents.weakness.title", {returnObjects: true})} results={lang("aboutContents.weakness.content", {returnObjects: true})}/>
              <TerminalLog root="nguyen@nguyen-pc" query={lang("aboutContents.hobbies.title", {returnObjects: true})} results={lang("aboutContents.hobbies.content", {returnObjects: true})}/>
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );
}
