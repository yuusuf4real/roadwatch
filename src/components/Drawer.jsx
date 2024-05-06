import React from 'react'
import {Drawer as MUIDrawer, List, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {useNavigate} from 'react-router';


const useStyles = makeStyles({
    drawer: {
        width: '190px'
    }
})

const Drawer = () => {
    const navigate = useNavigate()
    const classes = useStyles()
    const itemsList = [
        {
            text: 'States',
            icon: <InboxIcon />,
            onclick: () => navigate('/')
        }, 
        {
            text: 'Work In Pro',
            icon: <MailIcon />,
            onclick: () => navigate('/signup')
        }, 
        {
            text: 'Accidents',
            icon: <MailIcon />,
            onclick: () => navigate('/signin')
        }, 
        {
            text: 'News',
            icon: <MailIcon />,
            onclick: () => navigate('/')
        },
        {
            text: 'Add Road Info',
            icon: <MailIcon />,
            onclick: () => navigate('/')
        },
        {
            text: 'Log Out',
            icon: <MailIcon />,
            onclick: () => navigate('/')
        }
    ]
  return (
        <MUIDrawer variant='permanent' className={classes.drawer}>
            <List>
            {itemsList.map((item, index) => {
                const {text, icon, onclick} = item;
                return(
                <ListItem button key={index} onclick={onclick}>
                    {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText primary={text} />
                </ListItem>
            )})}
            </List>
        </MUIDrawer>
  )
}

export default Drawer