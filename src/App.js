/* eslint-disable */

import { Container, Row, Col } from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/topbar/Topbar'
import Main from './components/main-area/Main'

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
