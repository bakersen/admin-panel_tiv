import Topbar from './components/Topbar/Top'
import Sidebar from './components/Sidebar/Sidebar'
import { Container, Row } from 'react-bootstrap'
import {createTheme, ThemeProvider} from '@material-ui/core'
import  Events from './components/DataTable/Table';
import {Card} from 'react-bootstrap';
import  Posts from  "./components/DataTable/index";
import './App.css';
import Users  from "./components/DataTable/Users";
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
    <Route path="/" element={<Events />}/>
    <Route path="users" element={<Users />}/>
    <Route path="posts" element={<Card>
        <Card.Body>
        <Posts />
        </Card.Body>
        </Card>
    }/>
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
