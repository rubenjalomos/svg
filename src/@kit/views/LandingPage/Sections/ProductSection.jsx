import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
//import Wrench from "@material-ui/icons/Wrench";
//import Truck from "@material-ui/icons/Truck";
// core components
import GridContainer from "@kit/components/Grid/GridContainer.jsx";
import GridItem from "@kit/components/Grid/GridItem.jsx";
import InfoArea from "@kit/components/InfoArea/InfoArea.jsx";
import {Button} from "@material-ui/core";

import productStyle from "@kit/assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>OUR MISSION</h2>
            <h3 className={classes.description}>
            Is to create a cleaner environment for your family and community by lowering your monthly expenses while increasing the value of your home!
            </h3>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Free Assessment"
                description="We provide a free in home assessment to see if solar is right for you."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Verified Installers"
                description="We are the only distributer taht has some bs about using alot installers ."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Something else cool"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
            <GridItem xs={12}>
              <h2 className={classes.title}>Starting as low as $60.00 month</h2>
            </GridItem>
            <GridItem xs={12} justify='center'>
              <h2 className={classes.underline}></h2>
            </GridItem>
            <GridItem xs={12}>
              <Button color="primary" variant='contained'>CONTACT US FOR YOUR FREE IN HOME ASSESSMENT</Button>
            </GridItem>
            
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
