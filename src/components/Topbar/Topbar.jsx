import React from 'react'
import './Topbar.css'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Button from '@material-ui/core/Button'
import {Container} from 'react-bootstrap'

import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles ( {
    button: {
        color:'white',
        fontWeight:'700',
        boxShadow:'none',
        '&:hover':{
            backgroundColor: 'primary'
        }
    }
})

export default function Topbar() {

     const classes = useStyles()

    return (
        <Container className="top-bar">
            <div className="top-bar-item p-20">
                <NotificationsNone />
            </div> 
            <div className="top-bar-item p-20">
                <Button className={classes.button} size="small" variant="contained" color="primary">
                    LOG OUT
                </Button>
            </div>           
        </Container>
    )
}
