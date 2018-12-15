import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

// core components
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
import Button from "@kit/components/CustomButtons/Button.jsx";
import exampleStyle from "@kit/assets/jss/material-kit-react/views/componentsSections/exampleStyle.jsx";

import landing from "@kit/assets/img/landing.jpg";
import profile from "@kit/assets/img/profile.jpg";

class SectionExamples extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <Link to="landing-page" className={classes.link}>
                <img
                  src={landing}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View landing page
                </Button>
              </Link>
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <Link to="profile-page" className={classes.link}>
                <img
                  src={profile}
                  alt="..."
                  className={
                    classes.imgRaised +
                    " " +
                    classes.imgRounded +
                    " " +
                    classes.imgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </Link>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(exampleStyle)(SectionExamples);
