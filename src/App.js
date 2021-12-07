import { Container, Row} from 'react-bootstrap'
import Topbar from './components/topbar/Topbar'
import Main from './components/main-area/Main'
import Sidebar from './components/sidebar/Sidebar'
import './App.css'

function App() {
	return (
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
	)
}

export default App
