import { container, title } from "@kit/assets/jss/material-kit-react.jsx";

const ContactPageStyle = {
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
    textDecoration: "none",
    fontFamily: 'Verdana, Geneva, sans-serif'
  },
  media:{
    heigth: 400
  },
  card:{
    maxWidth:2000,
    margin:'auto',
    marginTop:'1%'    
  },
  img:{
    marginTop:'1%',
    display: 'flex',
    width:'52vw',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default ContactPageStyle;
