import React from 'react'
import { makeStyles } from '@material-ui/core'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {format} from 'date-fns'

const drawerWidth = 240


const useStyles = makeStyles((theme) =>{
    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: 'flex'
        },
        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        }
}
})

const Layout = ({children}) => {
    const navigate = useNavigate()
    const location = useLocation()
    const classes = useStyles()

    const menuItems = [
        {
            text: 'Add Roads',
            icon: <SubjectOutlined color='secondary' />,
            path: '/addroads'
        },
        {
            text: 'Roads',
            icon: <AddCircleOutlineOutlined color='secondary' />,
            path: '/'
        }
    ]

  return (
    <div className={classes.root}>

    <AppBar
        className={classes.appbar}
        elevation={0}
    >
        <Toolbar>
            <Typography className={classes.date}>
                Today is the {format(new Date(), 'do MMMM Y')}
            </Typography>
            <Typography>
                Mario
            </Typography>
        </Toolbar>
    </AppBar>

        <Drawer
            className={classes.drawer}
            variant='permanent'
            anchor='left'
            classes={{paper: classes.drawerPaper}}
        >
            <div>
                <Typography variant='h5' className={classes.title}>
                    Road Nigeria
                </Typography>
            </div>

            {/* List of menu items / Links  */}
        <List>
            {menuItems.map(item => (
                <ListItem 
                    key={item.text} 
                    button
                    onClick={() => navigate(item.path)}
                    className={location.pathname === item.path ? classes.active : null}
                    >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItem>
            ))}
        </List>
        </Drawer>

        <div className={classes.page}>
            <div className={classes.toolbar}></div>
            {children}
        </div>
    </div>
  )
}

export default Layout