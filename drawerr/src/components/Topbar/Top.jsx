import React from 'react'
import './Topbar.css'
import NotificationsNone from '@material-ui/icons/NotificationsNone'
import Button from '@material-ui/core/Button'

import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles ( {
    button: {
        backgroundColor: '#ff9015',
        color:'white',
        fontWeight:'700',
        boxShadow:'none'
    }
})

export default function Topbar() {

     const classes = useStyles()

    return (
        <div className="top-bar">
            <div className="top-bar-item p-20">
                <NotificationsNone />
            </div> 
            <div className="top-bar-item p-20">
                <Button className={classes.button} size="small" variant="contained">
                    LOG OUT
                </Button>
            </div>           
        </div>
    )
}
