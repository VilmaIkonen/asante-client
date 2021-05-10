import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import useStyles from './stylesSignIn';
import { signin } from '../../../actions/authActions';
import LargeButton from '../../Buttons/LargeButton/LargeButton';
import InputLarge from '../../Inputs/InputLarge';
import Validator from '../../../services/validator'

const formInitialState = {email: '', password: ''};

export default function SignIn() {

  const classes = useStyles();
  const [formData, setFormData] = useState(formInitialState);
  const [error, setError] = useState([])
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputs] = useState([
    { id:'email', label:'Email',  name:'email', type:'email', autoFocus: 'true' },
    { id:'password', label:'Password',  name:'password', type:'password', autoFocus: 'false' },
  ])

  // Form submission:
  const handleSubmit = (event) => {
    event.preventDefault();
    setError([])
    const validation = Validator.signIn(formData)
    if (validation.length > 0) {
      setError(validation)
      return
    }
    dispatch(signin(formData, history)) //action = signin. formData and history send with it
  }

  // used to get formData. Spread all other properties and change just the one being changed, input in specific name --> value
  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  return (
    <>  
    <Typography variant='h3'>Sign in</Typography> 
    <form className={classes.form} onSubmit={handleSubmit}>    
        <Grid container>
          {inputs.map((input) => (
            <InputLarge 
              key={input.id}
              id={input.id}
              label={input.label}
              name={input.name}           
              type={input.type}
              required
              onChange={handleChange} 
              autoFocus={input.autoFocus}
              error={error.includes(input.id)}
          />
          ))}
            {error && (
              <p
                style={{
                    color: 'red',
                    padding: '0',
                    fontSize: '12px',
                    marginBottom: '0.1rem',
                }}
                className="d-flex flex-row justify-content-center">
                {error[0]}
              </p>
            )}
           </Grid>           
        <LargeButton name='Sign in'/>      
     </form>  
    </> 
  );
}
