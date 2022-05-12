import * as React from "react";
import { default as Background } from "./resources/SummarizeBackground.jpg";
import { default as Background2 } from "./resources/SummarizeBackground2.jpg";
import { default as Background3 } from "./resources/SummarizeBackground3.jpg";
import { default as Background4 } from "./resources/SummarizeBackground4.jpg";
import { default as Background5 } from "./resources/SummarizeBackground5.jpg";
import { default as Background6 } from "./resources/SummarizeBackground6.jpg";
import { default as Pattern1 } from "./resources/Pattern1.png";
import { Paper } from "@mui/material";

export interface ISummarizeProps {}

export default function Summarize(props: ISummarizeProps) {
  const topDivStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const backgroundStyle: React.CSSProperties = {
    width: "100%",
    height: "250px",
    overflow: "hidden",
  };

  const backgroundFlexbox: React.CSSProperties = {
    display: "flex",
    flexDirection: "row",
    width: "2500px",
    boxShadow: "0px 10px 10px black"
  };

  const imageDiv: React.CSSProperties = {
    transform: "skewX(-15deg)",
    position: "relative",
    overflow: "hidden",
    left: "-35px",
  };

  const imageStyle: React.CSSProperties = {
    transform: "skewX(15deg)",
    height: "250px",
    width: "auto",
    position: "relative",
    left: "-35px",
  };

  const profileImage: React.CSSProperties = {
    borderRadius: "50%",
    position: "absolute",
    left: "calc(50% - 125px - 4px)",
    top: "calc(250px - 125px - 4px)",
    background: "teal",
    width: "250px",
    height: "250px",
    border: "8px solid white"
  }

  const infoDiv: React.CSSProperties = {
    display: "grid",
    width: "500px",
    position: "absolute",
    left: "calc(50% - 250px)",
    top: "calc(250px + 130px)",
    justifyItems: "center"
  }

  const footerDiv: React.CSSProperties = {
    position: "absolute",
    display: "grid",
    justifyItems: "center",
    alignItems: "center",
    bottom: "0px",
    height: "60px",
    width: "100%",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
    background: "rgb(38, 38,38)"
  }

  const pattern: React.CSSProperties = {
    backgroundImage: `url(${Pattern1})`,
    position: "absolute",
    width: "100%",
    opacity: "0.02",
    top: "250px",
    left: "0px",
    backgroundSize: "contain",
    height: "calc(100% - 60px - 250px)"
  }

  return (
    <div style={topDivStyle}>
      <div style={backgroundStyle}>
        <div style={backgroundFlexbox}>
          <div
            style={{
              ...imageDiv,
              left: "-35px",
            }}
          >
            <img style={imageStyle} src={Background2} />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background} />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background4} />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background3} />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background5} />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background6} />
          </div>
        </div>
      </div>
      <div style={pattern}/>
      <img src="https://cdn-icons.flaticon.com/png/512/924/premium/924915.png?token=exp=1652356670~hmac=9dd2de506bfb8f8dfe62ce9df9b1964b" style={profileImage}/>
      <div style={infoDiv}>
        <h1>PHẠM PHÚC NGUYÊN</h1>
        <h3 style={{margin: "-20px"}}>Software engineer • Game developer</h3>
        <Paper sx={{margin: "25px", padding: "20px", fontWeight: "plain", fontStyle: "italic", textAlign: "center", boxShadow: "0px 0px 10px rgba{0, 0, 0, 0.5}"}}>
          "That's the thing about people who think they hate computers. What they really hate is lousy programmers."<br/>
          <b>Larry Niven</b>
        </Paper>
      </div>
      <div style={footerDiv}>
        +84938416869 | 19521918@gm.uit.edu.vn | CornyCodingCorn@gmail.com
      </div>
    </div>
  );
}
