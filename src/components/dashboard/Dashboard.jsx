import React from 'react'
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import {People, Work, Event, LocalFlorist, ArrowUpward, ArrowDownward} from '@material-ui/icons';
import './dashboard.css'
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor:'#1c1c1c'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '1 1 100%',
    fontWeight: '500',
    marginBottom:'3%'
  },
  card: {
      display:'flex',
      alignItems:'end',
  },
  bottomcards: {
      borderTop:'5px solid #ff9015',
      display:'flex',
      justifyContent:'center',
      textAlign:'center'
  },
  icon: {
        fontSize:'68px',
        marginRight:'5%',
        color:'white'
    },
  subtitle: {
    fontWeight:'800',
    color:'#ff9015'
    },
    cardtitle: {
    fontWeight:'300',
    color:'white'
    },
    stastic:{
        fontSize:'20px',
        color:'green',
        marginBottom:'2%',
    },
     stasticDecrease:{
        fontSize:'20px',
        color:'red',
        marginBottom:'2%',
    },
    bignumber:{
        fontSize:'80px',
        color:'black',
    },
    bottomcardtext:{
        fontSize:'22px',
        fontWeight:'700',
        color:'black',
        marginBottom:'1%'
    },
    smalltext:{
        fontSize:'18px',
        fontWeight:'400',
        color:'black'
    },
    bottomMargin: {
        marginBottom:'20px'
    }
}));

export default function Dashboard() {

    const classes = useStyles()
    return (
      <React.Fragment>
     
       {/* Heading */}
      <Typography className={classes.title} variant="h4" component="div"> 
          Overview
      </Typography> 

      {/* Cards */}

      <Grid container spacing={3}>
          <Grid item xs={3}>
              <Card className={classes.root}>
                  <CardContent  className={classes.card} style={{backgroundColor:'1c1c1c'}}>
                      <People className={classes.icon}/>
                      <div>
                        <Typography className={classes.subtitle} variant="p" component="div"> 
                            Active Members
                        </Typography>
                        <Typography className={classes.cardtitle} variant="h3" component="div"> 
                            540
                        </Typography> 
                      </div>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={3}>
           <Card className={classes.root}>
                  <CardContent  className={classes.card} style={{backgroundColor:'1c1c1c'}}>
                      <LocalFlorist className={classes.icon}/>
                      <div>
                        <Typography className={classes.subtitle} variant="p" component="div"> 
                            Startups
                        </Typography>
                        <Typography className={classes.cardtitle} variant="h3" component="div"> 
                            63
                        </Typography> 
                      </div>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
                  <CardContent  className={classes.card} style={{backgroundColor:'1c1c1c'}}>
                      <Work className={classes.icon}/>
                      <div>
                        <Typography className={classes.subtitle} variant="p" component="div"> 
                           Jobs Posted
                        </Typography>
                        <Typography className={classes.cardtitle} variant="h3" component="div"> 
                            20
                        </Typography> 
                      </div>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={3}>
            <Card className={classes.root}>
                  <CardContent  className={classes.card} style={{backgroundColor:'1c1c1c'}}>
                      <Event className={classes.icon}/>
                      <div>
                        <Typography className={classes.subtitle} variant="p" component="div"> 
                            Events Created
                        </Typography>
                        <Typography className={classes.cardtitle} variant="h3" component="div"> 
                            30
                        </Typography> 
                      </div>
                  </CardContent>
              </Card>
          </Grid>
      </Grid>

      <Divider style={{marginTop:'4%', marginBottom:'4%', height:'1px', backgroundColor:'#1c1c1c'}} />


       <Grid container spacing={3}>
          <Grid item xs={4}>
              <Card className={classes.bottomMargin} >
                  <CardContent  className={classes.bottomcards}>
                      
                      <div>
                        <Typography className={classes.stastic} variant="p" component="div"> 
                            <ArrowUpward /> 5%
                        </Typography>
                        <Typography className={classes.bignumber} variant="h3" component="div"> 
                            50
                        </Typography> 
                        <Typography className={classes.bottomcardtext} variant="h3" component="div"> 
                            New Members
                        </Typography> 
                        <Typography className={classes.smalltext} variant="h3" component="div"> 
                            Since last week
                        </Typography>

                        <Divider style={{margin:'14% 0', height:'1px', backgroundColor:'#1c1c1c'}}  /> 
                        <Typography className={classes.smalltext} variant="h6" component="div"> 
                            Complete Profiles: 136
                        </Typography> 
                         <Typography className={classes.smalltext} variant="h6" component="div"> 
                            Incomplete Profiles: 20
                        </Typography>
                         <Typography className={classes.smalltext} variant="h6" component="div"> 
                            Suspended Accounts: 30
                        </Typography>
                      </div>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={4}>
           <Card className={classes.bottomMargin} >
                  <CardContent  className={classes.bottomcards}>
                       <div>
                        <Typography className={classes.stastic} variant="p" component="div"> 
                            <ArrowUpward /> 11%
                        </Typography>
                        <Typography className={classes.bignumber} variant="h3" component="div"> 
                            100
                        </Typography> 
                        <Typography className={classes.bottomcardtext} variant="h3" component="div"> 
                            New Posts
                        </Typography> 
                        <Typography className={classes.smalltext} variant="h3" component="div"> 
                            Since last week
                        </Typography>
                      </div>
                  </CardContent>
              </Card>
              <Card className={classes.bottomMargin} >
                  <CardContent  className={classes.bottomcards}>
                       <div>
                        <Typography className={classes.stastic} variant="p" component="div"> 
                            <ArrowUpward /> 4%
                        </Typography>
                        <Typography className={classes.bignumber} variant="h3" component="div"> 
                           5
                        </Typography> 
                        <Typography className={classes.bottomcardtext} variant="h3" component="div"> 
                            New Startups
                        </Typography> 
                        <Typography className={classes.smalltext} variant="h3" component="div"> 
                            Since last week
                        </Typography>
                      </div>
                  </CardContent>
              </Card>
          </Grid>
          <Grid item xs={4}>
           <Card className={classes.bottomMargin} >
                  <CardContent  className={classes.bottomcards}>
                       <div>
                        <Typography className={classes.stastic} variant="p" component="div"> 
                            <ArrowUpward /> 4%
                        </Typography>
                        <Typography className={classes.bignumber} variant="h3" component="div"> 
                            20
                        </Typography> 
                        <Typography className={classes.bottomcardtext} variant="h3" component="div"> 
                            Events Posted
                        </Typography> 
                        <Typography className={classes.smalltext} variant="h3" component="div"> 
                            This month
                        </Typography>
                      </div>
                  </CardContent>
              </Card>
              <Card className={classes.bottomMargin} >
                  <CardContent  className={classes.bottomcards}>
                       <div>
                        <Typography className={classes.stasticDecrease} variant="p" component="div"> 
                            <ArrowDownward /> 5%
                        </Typography>
                        <Typography className={classes.bignumber} variant="h3" component="div"> 
                            10
                        </Typography> 
                        <Typography className={classes.bottomcardtext} variant="h3" component="div"> 
                            Jobs Posted
                        </Typography> 
                        <Typography className={classes.smalltext} variant="h3" component="div"> 
                            Since last week
                        </Typography>
                      </div>
                  </CardContent>
              </Card>
          </Grid>
      </Grid>
  
    </React.Fragment> 
    )
}
