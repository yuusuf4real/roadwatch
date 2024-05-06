import React, { useEffect, useState } from 'react'
import { Container, Grid } from '@material-ui/core'
import RoadsCard from './RoadsCard'

function AllRoads() {
    const [roads, setRoads] = useState([])

    useEffect(() => {
        fetch('http://localhost:8000/roads')
        .then(res => res.json())
        .then(data => setRoads(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch('http://localhost:8000/roads/' + id, {
            method: 'DELETE'
        })

        const newRoads = roads.filter(road => road.id != id)
        setRoads(newRoads)
    }

  return (
    <Container>
        <Grid container spacing={3}>
        {roads.map(road => (
            <Grid item key={road.id} xs={12} md={6} lg={4}>
                <RoadsCard road={road} handleDelete={handleDelete} />
            </Grid>
        ))} 
        </Grid>
    </Container>
  )
}

export default AllRoads