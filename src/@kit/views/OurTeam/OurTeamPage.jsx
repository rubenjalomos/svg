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

import ourTeamPageStyle from "@kit/assets/jss/material-kit-react/views/OurTeamPage.jsx";

// Sections for this page
//import ProductSection from "./Sections/ProductSection.jsx";
import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";


const dashboardRoutes = [];

class OurTeamPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>       
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                className={classes.media}                
                title="about"
                />
                <CardContent>
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className={classes.container}>
                        {/* <ProductSection /> */}
                        <TeamSection />
                        {/* <WorkSection /> */}
                    </div>
                </div>
                </CardContent>
            </CardActionArea>
            {/* <CardActions>
                <Button size="small" color="primary">
                Share
                </Button>
                <Button size="small" color="primary">
                Learn More
                </Button>
            </CardActions> */}
            </Card>
  
        
        
        <Footer />
      </div>
    );
  }
}

export default withStyles(ourTeamPageStyle)(OurTeamPage);
