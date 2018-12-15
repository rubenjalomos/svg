import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

// @material-ui/icons

// core components
import Header from "@kit/components/Header/Header.jsx";
import Footer from "@kit/components/Footer/Footer.jsx";
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
//import Button from "@kit/components/CustomButtons/Button.jsx";
import HeaderLinks from "@kit/components/Header/HeaderLinks.jsx";
import RightHeaderLinks from "@kit/components/Header/RightHeaderLinks.jsx";
import Parallax from "@kit/components/Parallax/Parallax.jsx";

import AboutPageStyle from "@kit/assets/jss/material-kit-react/views/AboutPage.jsx";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";


const dashboardRoutes = [];

class AboutPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>       
        <Card className={classes.card}>
        <Grid item xs={12} justify='center'>
            <img src={require("../../assets/img/about.jpg")} className={classes.img}/>
        </Grid>
            <CardActionArea>
                <CardMedia
                className={classes.media}                
                title="about"
                />
                <CardContent>
                    <Grid item xs={12}>
                        <Grid container justify='center'>
                            <Grid item xs={3} alignItems='center' align='center'>
                                <Typography gutterBottom variant="h5" component="h2" style={{fontWeight:'bold', color:'orange'}}>
                                    SolarVerse Advanced Solutions 
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justify='center'>
                            <Grid item xs={5} align='center'>
                                <Typography component="p" paragraph>
                                Solarverse is a locally-owned business out of San Antonio Texas.
                                </Typography>                                
                                <Typography component="p" paragraph>                                
                                What makes us different?
                                </Typography>
                                <Typography component="p" paragraph>
                                When shopping for solar, you would normally have to call several distributors or installers to get several different quotes or bits and pieces of information and then make a decision based on biased information                                
                                from a "We are the best!" type of sales representative to make a choice on which system is the right fit for your home. Well, at Solarverse we help make that choice easier. 
                                </Typography>
                                <Typography component="p" paragraph>
                                We are not just one installer limited to only one panel with one inverter and one lender.
                                </Typography>
                                <Typography component="p" paragraph>
                                We represent an entire network of installers that use different types of systems designed to work best for you. We have teamed up with several leading lending institutions so we can match the best possible program and financing options available for your home or business and needs.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions>
            </Card>
  
        
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            {/* <ProductSection /> */}
            {/* <TeamSection /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(AboutPageStyle)(AboutPage);
