import * as React from "react";
import { default as Background } from  "../resources/SummarizeBackground.jpg";
import { default as Background2 } from "../resources/SummarizeBackground2.jpg";
import { default as Background3 } from "../resources/SummarizeBackground3.jpg";
import { default as Background4 } from "../resources/SummarizeBackground4.jpg";
import { default as Background5 } from "../resources/SummarizeBackground5.jpg";
import { default as Background6 } from "../resources/SummarizeBackground6.jpg";
import { default as Pattern1 } from "../resources/Pattern1.png";
import { default as Profile } from "../resources/Profile.png";
import { Paper } from "@mui/material";
import { useTranslation } from "react-i18next";

export interface ISummarizeProps {}

export default function Summarize(props: ISummarizeProps) {
  const [lang] = useTranslation();

  const topDivStyle: React.CSSProperties = {
    width: "100%",
    height: "100%",
    position: "relative",
  };

  const backgroundStyle: React.CSSProperties = {
    width: "100%",
    height: "35vw",
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
    left: "calc(50% - 100px - 4px)",
    top: "calc(min(35vw, 250px) - 100px - 4px)",
    background: "teal",
    backgroundImage: `url(${Profile})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    width: "200px",
    height: "200px",
    border: "8px solid white"
  }

  const infoDiv: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    position: "absolute",
    top: "calc(min(35vw, 250px) + 110px)",
    height: "calc(100% - 450px)",
    alignItems: "center"
  }

  const footerDiv: React.CSSProperties = {
    position: "absolute",
    bottom: "0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexFlow: "wrap",
    alignItems: "center",
    height: "60px",
    width: "100%",
    boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.4)",
    background: "rgb(38, 38,38)",
  }

  const infoSpan: React.CSSProperties = {
    marginLeft: "10px",
    marginRight: "10px"
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
            <img style={imageStyle} src={Background2} alt="background2" />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background} alt="background" />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background4} alt="background4" />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background3} alt="background3" />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background5} alt="background5" />
          </div>
          <div style={imageDiv}>
            <img style={imageStyle} src={Background6} alt="background6" />
          </div>
        </div>
      </div>
      <div style={pattern}/>
      <div style={profileImage}/>
      <div style={infoDiv}>
        <h1>{lang("name")}</h1>
        <h4 className="d-none d-md-block">{lang("profession")}</h4>
        <h5 className="d-block d-md-none">{lang("profession")}</h5>
        <div style={{display: "grid", flexDirection: "column", alignItems: "center", justifyItems: "center", flexGrow: "1"}}>
          <Paper sx={{margin: "25px", padding: "20px", width: "80vw", fontWeight: "plain", fontStyle: "italic", textAlign: "center", boxShadow: "0px 0px 10px rgba{0, 0, 0, 0.5}"}}>
            {lang("randomQuotes")}<br/>
            <b>{lang("randomQuotesAuthor")}</b>
          </Paper>
        </div>
      </div>
      <div className="" style={footerDiv}>
        <span style={infoSpan}>+84938416869</span>
        <span style={infoSpan}>19521918@gm.uit.edu.vn</span>
        <span style={infoSpan}>CornyCodingCorn@gmail.com</span>
      </div>
    </div>
  );
}
