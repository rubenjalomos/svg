import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import {Typography} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
import LocationCity from "@material-ui/icons/LocationCity";
import ContactSupport from "@material-ui/icons/ContactSupport";
import Timelapse from "@material-ui/icons/Timelapse";


// core components
import Footer from "@kit/components/Footer/Footer.jsx";
import Parallax from "@kit/components/Parallax/Parallax.jsx";
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
import InfoArea from "@kit/components/InfoArea/InfoArea.jsx";


import ContactPageStyle from "@kit/assets/jss/material-kit-react/views/ContactPage.jsx";
import ContactMap from "main/ContactMap";
// Sections for this page
//import ProductSection from "./Sections/ProductSection.jsx";
//import TeamSection from "./Sections/TeamSection.jsx";
//import WorkSection from "./Sections/WorkSection.jsx";


class ContactPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>       
        <Card className={classes.card}>
            <Grid item xs={12}>
            <Parallax filter image={require("@kit/assets/img/solarBulb.jpg")}>
            <div className={classes.container}>
                <GridContainer >
                <Grid item md={12}> 
                    <h1 style={{textAlign:'Center', fontSize:'4rem'}}>Contact Us</h1>
                </Grid> 
                <Grid item md={12}> 
                    <h2 style={{textAlign:'Center'}}>SolarVerse Advanced Solutions is here to provide you with more information, answer any questions you may have and create an effective solution for your solar needs.</h2>
                </Grid>              
                </GridContainer>            
            </div>
            </Parallax>
            </Grid>
            <CardContent>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Address"
                        description={"9901 IH-West\n Suite 800 \nSan Antonio ,Texas 78230"}
                        icon={LocationCity}
                        iconColor="info"
                        vertical
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Contact"
                        description={"(210) 477-8540 Office\n(830) 309 -1338 Cell/After Hours\nHr.solarverse@gmail.com"}
                        icon={ContactSupport}
                        iconColor="success"
                        vertical
                    />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                    <InfoArea
                        title="Hours"
                        description={"Mon-Fri: 9:00am - 5:00pm\nSat: 9:00am - 1:00 pm\nSun: Closed  *call*"}
                        icon={Timelapse}
                        iconColor="danger"
                        vertical
                    />
                    </GridItem>
                    
                    
                </GridContainer>
            </CardContent>
        </Card>
  
        
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ContactMap />
            {/* <TeamSection /> */}
            {/* <WorkSection /> */}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(ContactPageStyle)(ContactPage);
