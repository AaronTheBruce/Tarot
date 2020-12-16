import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import Social from './Social';

const useStyles = makeStyles({

  body: {
    backgroundColor: "rgba(205, 219, 222, 0.57)",
    margin: "40px 10px",
    padding: "15px 10px",
  },

  imgBody: {
    display: "inline-column",
    justifyContent: "center",
    backgroundColor: "rgba(205, 219, 222, 0.57)",
    margin: "40px 10px",
    padding: "15px 10px",
  },

  parag: {
    textAlign: "center",
    fontFamily: "Franklin Gothic Medium",
    margin: "10px 10px",
  },

});

const About = () => {
  const classes = useStyles();
  return (
    <Grid container justify="center">
      <Grid item lg={8}>
        <Paper className={classes.body}>
          <p className={classes.parag}>
            I recently graduated an immersive web development course at App Academy, an intensive coding bootcamp program with a less than 5% acceptance rate. While enrolled, I built several responsive single-page applications using back-end Flask RestX and React.js for the front-end. I've designed postgreSQL databases with sequelize and alembic to custom front end grid layouts using CSS.
          </p>
          <p className={classes.parag}>
            I am a geek at heart. A historian and cultural enthusiast. For fun, I enjoy casual video games, the outdoors, meditation, and learning Irish through traditional folk music.
          </p>
          <p className={classes.parag}>
            Go dtí an chéad uair eile, bíodh lá iontach agat!
          </p>
        </Paper>
      </Grid>
      <Grid item lg={4}>
        <Paper className={classes.imgBody}>
          <img src="/images/aaron.jpg"></img>
          <Social />
        </Paper>
      </Grid>
      <Grid item sm={12}>

      </Grid>
    </Grid>
  )
}

export default About
