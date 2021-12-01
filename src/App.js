/* eslint-disable */

import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './components/Sidebar/Sidebar'
import Topbar from './components/Topbar/Topbar'
import Main from './components/Main-area/Main'

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
