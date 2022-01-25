import Topbar from './components/topbar/Topbar'
import Sidebar from './components/Sidebar/Sidebar';
import { Container, Row } from 'react-bootstrap'
import {createTheme, ThemeProvider} from '@material-ui/core'
import  Events from './pages/Events';
import  Dashboard from './pages/Dashboard';
import  Posts from './pages/Posts';
import  Members from './pages/Members';
import  Jobs from './pages/Jobs';
import  Startups from './pages/Startups';
import './App.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';

const theme = createTheme({
  palette:{
    primary: {
      main: '#ff9015'
    },
    secondary: {
      main: '#ff9015'
    }, 
    overrides: {
      MuiTableCell: {
        textAlign:'left'
      },
    }
  }
})






function App() {  

  return(
<BrowserRouter>
<ThemeProvider theme={theme} >
    <div>
      <Container fluid>
        <Row>
          <div className = "w-25 p-0">
            <Sidebar />
          </div>
          <div className = "w-75 p-0">
            <Topbar />
            
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="members" element={<Members />} />
              <Route path="posts" element={<Posts />} />
              <Route path="startups" element={<Startups />} />
              <Route path="jobs" element={<Jobs />} />
              <Route path="events" element={<Events />} />
            </Routes>
          </div>
        </Row>
      </Container>
    </div>
    </ThemeProvider>
</BrowserRouter>
    
  )
}
export default App
