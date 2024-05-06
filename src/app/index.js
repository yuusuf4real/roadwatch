import {Routes, Route} from "react-router-dom";
import { createTheme, ThemeProvider } from '@material-ui/core/styles';

import AddRoads from "../components/AddRoads";
import Signin from "../components/Signin";
import SignUp from "../components/Signup";
import Lagos from "../components/states/Lagos";
import Ogun from "../components/states/Ogun";
import Osun from "../components/states/Osun";
import Oyo from "../components/states/Oyo";
import Ekiti from "../components/states/Ekiti";
import Kwara from "../components/states/Kwara";
import { purple } from "@material-ui/core/colors";
import AllRoads from "../components/AllRoads";
import Layout from "../components/Layout";

// import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fefefe'
    },
    secondary: purple
  },
  typography: {
    fontFamily: 'Quicksand',
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontWeightBold: 700
  }
})

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout>
        <Routes>
          <Route path='/' element={<AllRoads />} />
          <Route path='/addroads' element={<AddRoads />} />
            <Route path='/lagos' element={<Lagos />} />
            <Route path='/ogun' element={<Ogun />} />
            <Route path='/osun' element={<Osun />} />
            <Route path='/oyo' element={<Oyo />} />
            <Route path='/ekiti' element={<Ekiti />} />
            <Route path='/kwara' element={<Kwara />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<Signin />} />
            
        </Routes>
        </Layout>
      </ThemeProvider>
    </div>
  );
}

export default App;
