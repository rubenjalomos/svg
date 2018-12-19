import { container, title } from "@kit/assets/jss/material-kit-react.jsx";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-12px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  landingTextInput:{
    color: 'white'
  },
  cssLabel: {
    color : 'white !important'
  },
  cssFocused: {
    color: 'white'
  },
  notchedOutline: {
    borderWidth: '1px',
    borderColor: 'white !important'
  },
  cssOutlinedInput: {
    '&$cssFocused $notchedOutline': {
      borderColor: 'white !important',
    }
  },
  m30L: {
    marginTop:"0%"
  }
};

export default landingPageStyle;
