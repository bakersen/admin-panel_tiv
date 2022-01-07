import Topbar from './components/Topbar/Top'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Mainarea'
import { Container, Row } from 'react-bootstrap'
import {createTheme, ThemeProvider} from '@material-ui/core'

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
    <ThemeProvider theme={theme} >
    <div>
      <Container fluid>
        <Row>
          <div className = "w-25 p-0">
            <Sidebar />
          </div>
          <div className = "w-75 p-0">
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