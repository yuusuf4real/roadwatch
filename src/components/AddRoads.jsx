import { FormControlLabel, Typography } from "@material-ui/core"
import Container from "@material-ui/core/Container"
import Button from "@material-ui/core/Button"
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {useNavigate} from 'react-router-dom'


const useStyles = makeStyles({
    field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
    }
})

const AddRoads = () => {
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [detailsError, setDetailsError] = useState(false)
  const [category, setCategory] = useState('bad-road')
  
  const classes = useStyles()
  const navigate = useNavigate();
  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setTitleError(false)
    setDetailsError(false)

    if(title === '') {
      setTitleError(true)
    }
    if(details === '') {
      setDetailsError(true)
    }

    if(title && details) {
      fetch('http://localhost:8000/roads', {
        method: 'POST',
        headers: {"content-type": "application/json"},
        body: JSON.stringify({title, details, category})
      }).then(() => navigate('/'))
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Add a Road info
      </Typography>

    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <TextField 
        onChange={(e) => setTitle(e.target.value)}
        className={classes.field}
        label = 'Road Title'
        variant="outlined"
        color="secondary"
        fullWidth
        required
        error={titleError}
      />

      <TextField 
        onChange={(e) => setDetails(e.target.value)}
        className={classes.field}
        label = 'Road Details'
        variant="outlined"
        color="secondary"
        multiline
        minRows={4}
        fullWidth
        required
        error={detailsError}
      />
      <FormControl className={classes.field}>
        <FormLabel>Road Categories</FormLabel>
        <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
          <FormControlLabel value='bad-road' control={<Radio />} label="Bad Road" />
          <FormControlLabel value='under-construction' control={<Radio />} label="Under Construction" />
          <FormControlLabel value='completed' control={<Radio />} label="Road Completed" />
        </RadioGroup>
      </FormControl>

      <Button 
          type="Submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
    </form>
    </Container>
    
  )
}

export default AddRoads