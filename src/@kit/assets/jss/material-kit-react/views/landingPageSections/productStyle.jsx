import { title } from "@kit/assets/jss/material-kit-react.jsx";

const productStyle = {
  section: {
    padding: "70px 0",
    textAlign: "center",
    marginTop: '0px'
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none"
  },
  description: {
    color: "#999"
  },
  underline:{
    borderBottom: '5px solid',
    width: '40%',
    borderBottomColor: 'black',
    margin: 'auto',
    marginBottom: "2%"
  }
};

export default productStyle;
