import { Container, Paper } from "@mui/material";
import * as React from "react";
import "./About.css";
import ClearIcon from "@mui/icons-material/Clear";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
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
      <Container
        sx={{
          justifyContent: "center",
          display: "flex",
          padding: "30px",
          position: "relative",
          height: "100%",
        }}
      >
        <Paper sx={{ width: "80%", height: "250px", position: "absolute" }}>
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
            <div id="name-div">nguyen@nguyen-pc:~</div>
            <div style={{ ...fakeBtnStyle, marginLeft: "15px" }}>
              <AddBoxOutlinedIcon
                htmlColor="white"
                sx={{ width: "23px", height: "23px", marginTop: "3px" }}
              ></AddBoxOutlinedIcon>
            </div>
          </div>
        </Paper>
      </Container>
    </React.Fragment>
  );
}
