import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {FusePageSimple, DemoContent} from '@fuse';
import {Grid, TextField, Button} from '@material-ui/core';
import {AboutPage} from '@kit';


const styles = theme => ({
    layoutRoot: {},
    m30L: {
        marginLeft: '30%'
    },
    
});

class About extends Component {

    render()
    {
        const {classes} = this.props;
        return (
            <AboutPage />
        )
    }
}

export default withStyles(styles, {withTheme: true})(About);