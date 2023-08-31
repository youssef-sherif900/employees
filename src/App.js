
import './App.css';
import NavigationBar from './components/NavigationBar';
import SideBar from './components/SideBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Userspage from './components/Userspage';


function App() {

  const theme = createTheme({
    palette: {
      primary: {
        light: '#757ce8',
        main: '#2764ac',
        dark: '#002884',
        contrastText: '#fff',
      },
      secondary: {
        light: '#27b40c',
        main: '#27b40c',
        dark: '#ba000d',
        contrastText: '#000',
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
  <div className='flex m-0 p-0 '>
  <SideBar/>
  <div className='w-full relative overflow-hidden'>
  <NavigationBar/> 
  <Userspage/>
  </div>
   
  
   
     </div>
</ThemeProvider>
  
  );
}

export default App;
