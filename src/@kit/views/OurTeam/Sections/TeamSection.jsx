import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "@kit/components/Grid/GridContainer.jsx";

import teamStyle from "@kit/assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";
import Person from "./Person.jsx"
import {people} from './people';


class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );    
    return (
      <div className={classes.section}>
        <h1>Our Team</h1>
        <h3 >Meet our Solar Experts professionally trained to help you.</h3>
        <div>
          <GridContainer>
            {people.map((person, idx) => (
                <Person fname={person.fname} position={person.position} picture={person.picture}/>
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
