import './about.css'
import React from 'react'
import {

  Typography,
  Button,
  Box,
  Grid
} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


export default function About() {


  return (

    <div className="about-container">
      <Grid container spacing={1} style={{ maxWidth: 800, margin: '0 auto' }}>

        <Grid item sm={5}>
          <div >
            <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1618190978/60409772_ichcck.jpg" alt="Natalie Oldroy" width='100%' style={{ borderRadius: 20, boxShadow: '2px 5px #d3d3d3' }} />
          </div>
        </Grid>

        <Grid item sm={6}>
          <Grid container direction="column" style={{ height: '100%', width: '100%' }}>
            <Box mt={2} style={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" style={{ marginLeft: '1em'}}>Natalie Oldroyd</Typography>

              <Typography variant="subtitle1" style={{ marginLeft: '2em', marginBottom: '1em' }}>With a background in e-commerce as a business owner, Natalie found herself increasingly interested in the mechanics of what went on underneath the hood. She transitioned to become a full stack software engineer but her passion for using technology to meet businss challenges remains.</Typography>
              <div className="links" style={{ marginLeft: '2em' }}>
                <Button variant="contained" color="secondary" style={{ marginRight: '.5em' }}> <a href='https://github.com/natoh19' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>GitHub</a></Button>
                <Button variant="contained" color="secondary" style={{ marginRight: '.5em' }}> <a href='https://www.linkedin.com/in/natalie-oldroyd/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white' }}>LinkedIn</a></Button>

              </div>
            </Box>

          </Grid>


        </Grid>


      </Grid>

    </div>
  )
}
