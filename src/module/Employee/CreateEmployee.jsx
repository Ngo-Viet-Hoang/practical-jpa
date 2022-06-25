import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

 class CreateEmployee extends React.Component {
  constructor(){
    super();
    this.state = {
      name:'',
      wage:''

    }
  }
  componentDidMount() {
  }

  fetchData = () => {
      fetch('https://practical-jpa.herokuapp.com/api/v1/employees')
          .then(res => res.json())
          .then(res => {
              
          })
  }
  submitForm = () => {
    fetch('https://practical-jpa.herokuapp.com/api/v1/employees', {
        method: 'POST',
        body: JSON.stringify( {
            name: this.state.name,
            wage: this.state.wage
        }),
        headers: {
            'Content-Type': 'application/json',
          },
    })
        .then(res => res.json())
        .then(res => {
            console.log(res);
        })
}
 handleChangeName = (ev) => {
  this.setState({name: ev.target.value})

 }
 handleChangeWage = (ev) => {
  this.setState({wage: ev.target.value})

 }

  render(){
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
             Create new Employee
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  name="name"
                  onChange={this.handleChangeName}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="wage"
                  label="Wage"
                  id="wage"
                  onChange={this.handleChangeWage}
                />
              </Grid>
            
            </Grid>
            <Button onClick={this.submitForm}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Create New
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
}
export default CreateEmployee;