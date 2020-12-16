import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  header: {
    // color: "#FFF",
    // fontSize: "1em",
  },
  border: {
    minWidth: "250px",
  },
  iconGrid: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "whitesmoke",
    borderRadius: "50%",
    maxWidth: "35px",
    margin:"10px"
  },
});

const Social = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item sm={2} className={classes.iconGrid}>
          <a href="https://linkedin.com/in/aaronbruce555">
            <i className="fa fa-linkedin"></i>
          </a>
        </Grid>
        <Grid item sm={2} className={classes.iconGrid}>
          <a href="https://angel.co/u/aaron-d-bruce">
            <i className="fa fa-angellist"></i>
          </a>
        </Grid>
        <Grid item sm={2} className={classes.iconGrid}>
          <a href="https://github.com/AaronTheBruce">
            <i className="fa fa-github"></i>
          </a>
        </Grid>
        <Grid item sm={2} className={classes.iconGrid}>
          <a href="mailto:aaronbruce555@gmail.com">
            <i className="fa fa-envelope-o"></i>
          </a>
        </Grid>
        <Grid item sm={2} className={classes.iconGrid}>
          <a href="/images/Aaron_Bruce_Resume.pdf">
            <i className="fa fa-file-pdf-o" data-wow-delay=".1s"></i>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}

export default Social
