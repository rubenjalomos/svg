import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
import Button from "@kit/components/CustomButtons/Button.jsx";
import Card from "@kit/components/Card/Card.jsx";
import CardBody from "@kit/components/Card/CardBody.jsx";
import CardFooter from "@kit/components/Card/CardFooter.jsx";

import teamStyle from "@kit/assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";


 

class Person extends React.Component {
  render() {
    const { classes, picture, fname, position, description } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid,
      classes.imgMinWidth
     
    );
    return (
      <React.Fragment>
          
            <GridItem xs={12} sm={12} md={4}>
              <Card plain>
                <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                  <img src={picture} alt="..." className={imageClasses} />
                </GridItem>
                <h2 className={classes.cardTitle}>
                  {fname}
                  <br />
                  <h3>{position}</h3>
                </h2>
                <CardBody>
                  <p className={classes.description}>
                    {description}
                    
                  </p>
                </CardBody>
                <CardFooter className={classes.justifyCenter}>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-twitter"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-instagram"} />
                  </Button>
                  <Button
                    justIcon
                    color="transparent"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-facebook"} />
                  </Button>
                </CardFooter>
              </Card>
            </GridItem>           
         
      </React.Fragment>
    );
  }
}

export default withStyles(teamStyle)(Person);
