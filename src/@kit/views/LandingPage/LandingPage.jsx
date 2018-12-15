import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core';

// @material-ui/icons

// core components
import Header from "@kit/components/Header/Header.jsx";
import Footer from "@kit/components/Footer/Footer.jsx";
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
import Button from "@kit/components/CustomButtons/Button.jsx";
import HeaderLinks from "@kit/components/Header/HeaderLinks.jsx";
import RightHeaderLinks from "@kit/components/Header/RightHeaderLinks.jsx";
import Parallax from "@kit/components/Parallax/Parallax.jsx";

import landingPageStyle from "@kit/assets/jss/material-kit-react/views/landingPage.jsx";

// Sections for this page
import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
import WorkSection from "./Sections/WorkSection.jsx";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>       
        {/* <Header
          color="white"
          routes={dashboardRoutes}
          brand=""
          leftLinks={<HeaderLinks />}
          rightLinks={<RightHeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "black"
          }}
          {...rest}
        /> */}
        <div style={{background:'white'}}>
          <Grid item xs={12}> 
              <Grid container justify="center">   
                <img src={require('@kit/assets/img/original.jpg')} className={classes.m30L} /> 
              </Grid>   
          </Grid> 
        </div>
        <div style={{background:'white', marginTop:-50}}>
          <Grid item xs={12}> 
              <Grid container justify="center"> 
                    <h1> CALL NOW (830) 309 -1338</h1>                            
              </Grid> 
          </Grid> 
        </div>
        <div style={{background:'white'}}>
          <Grid item xs={12}> 
              <Grid container justify="center"> 
                <h1>FOR FREE ENERGY ASSESSMENT AND ESTIMATE </h1>                            
              </Grid> 
          </Grid> 
        </div>
        <Parallax filter image={require("@kit/assets/img/solar1.jpg")}>
          <div className={classes.container}>
            <GridContainer >
              <Grid md={12} justify='center' alignItems='center'>                             
              
                <h1 className={classes.title} style={{paddingLeft:'35%', fontSize:'4rem'}}>Request Information</h1>
              </Grid>
              <GridItem  md={6}>               
              <TextField
                  id="outlined-name-input"
                  label="Name*"
                  //className={classes.textField}
                  fullWidth
                  type="name"
                  name="name"
                  //autoComplete=""
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <TextField
                  id="outlined-email-input"
                  label="Email*"
                  fullWidth
                  //className={classes.textField}
                  type="email"
                 // autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />                
                <TextField
                  id="outlined-phone-input"
                  label="Phone Number*"
                  fullWidth
                  //className={classes.textField}
                  type="phone"
                 // autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <TextField
                  id="outlined-address-input"
                  label="Home Address*"
                  fullWidth
                  multiline
                  rows='4'
                  //className={classes.textField}
                  type="text"
                 // autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />
                <TextField
                  id="outlined-appointment-input"
                  label="Preferred Appointment Date and Time*"
                  fullWidth
                  //className={classes.textField}
                  type="datetime-local"
                 // autoComplete="current-password"
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    classes: {
                      root: classes.cssLabel,
                      focused: classes.cssFocused,
                    },
                  }}
                  InputProps={{
                    classes: {
                      root: classes.cssOutlinedInput,
                      focused: classes.cssFocused,
                      notchedOutline: classes.notchedOutline,
                    },
                  }}
                />    
                <br />
                <Button variant="contained" color="info">
                  {/* <i className="fas fa-play" />*/}Submit 
                </Button>
              </GridItem>
              <GridItem  md={6}>                
                <h4 style={{fontSize:'2rem'}}> Make a smart choice by taking your first step towards saving the environment and money at the same time!</h4>
                <br />
                <h4 style={{fontSize:'2rem'}}> Here at Solarverse we are proud to offer local homeowners just like you a complimentary home energy assessment to help you understand how much money you can save on your monthly expenses while increasing the value of your home simply by switching to solar power!</h4>
                <br />
                <h4 style={{fontSize:'2rem'}}> Please fill the form so that we may reach out to you to schedule a date and time that works best for you.</h4>
                <br />
                <br />
                <h4 style={{fontSize:'2rem'}}> Want to skip the wait? Call ###-###-#### to speak to an agent today!</h4>
              </GridItem>
            </GridContainer>
            <br /><br /><br /><br /><br />
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            {/* <TeamSection /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
