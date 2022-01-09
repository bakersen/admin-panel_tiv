// import React from 'react';
// import './App.css';
// import {Container, Row} from 'react-bootstrap'
// import Navbar from './components/navbar/Navbar';
// import Sidebar from './components/sidebar/Sidebar';
// import Main from './components/main/Main';



// function App() {
  
 
//   return (
//    <React.Fragment>
//       <Container fluid>
//         <Row>
//         <div className="w-25 p-0">
//             <Sidebar />
//         </div>
//         <div className="w-75 p-0">
//             <Container fluid>
//                 <Navbar />
//                 <Main/>
//             </Container>
//           </div>
//         </Row>
//       </Container>
//    </React.Fragment>
//   );
// }

// export default App;




import { Container, Row} from 'react-bootstrap'
import Sidebar from './components/sidebar/Sidebar'
import Topbar from './components/navbar/Navbar'
import Main from './components/main-area/Main'
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
      MuiOutlinedInput: {
        inputMarginDense: {
          padding:'0'
        }        
      }
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
