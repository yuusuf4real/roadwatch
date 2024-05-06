import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core'

// const useStyles = makeStyles((theme) => {
//     return {
//         media: {
//             height: 0,
//             paddingTop: '56.25%'
//         }
//     }
// })

const RoadsCard = ({road, handleDelete}) => {
    // const classes = useStyles()
  return (
    <div>
        <Card elevation={2}>
            <CardHeader
                action={
                    <IconButton onClick={() => handleDelete(road.id)}>
                        <DeleteOutlined />
                    </IconButton>
                }
                title={road.title}
                subheader={road.category}
            />
            {/* <CardMedia
                className={classes.media}
            /> */}
            <CardContent>
                <Typography variant='body2' color='textSecondary'>
                    {road.details}
                </Typography>
            </CardContent>
            
        </Card>
    </div>
  )
}

export default RoadsCard