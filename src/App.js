import { Container, Row} from 'react-bootstrap'
import Topbar from './components/topbar/Topbar'
import Main from './components/main-area/Main'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'
import {createTheme, ThemeProvider } from '@material-ui/core'

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
	return (
  <ThemeProvider theme={theme}>
  <div>
    <Container fluid>
       <Row>
        <div className="w-25 p-0">
            <Sidebar />
        </div>
        <div className="w-75 p-0">
           <Topbar />
           <Main />
        </div>
      </Row>      
    </Container>			
  </div>
  </ThemeProvider> 
	)
}

export default App
