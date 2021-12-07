import React from 'react'
import {Table, Container, Col, Row} from 'react-bootstrap'
import {Delete} from '@material-ui/icons/';
import './Tabledata.css'
import { makeStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox';
import { withStyles } from '@material-ui/core/styles';
 import useFetch from '../helpers/useFetch'


// Custom style
const useStyles = makeStyles ( {
    deleteButton: {
        fontSize:'18px',
        cursor:'pointer',
        padding:'0',
        "&:hover": {
            color:'#ff9015',
        }
    },
    selectedrow: {        
        backgroundColor:'#e5e5e5'
    },
   
})



// Checkboxes

const CustomCheckbox = withStyles({
  root: {
     padding:'0px', 
    '&$checked': {
      color: '#FF9015',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

function Checkboxes() {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.value);
  };

  return(
      <CustomCheckbox
        value={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        size="small"
      />
  );
}

function Tablerow(props) {

    
    const classes = useStyles()

    return (
        <tr>
            <td><Checkboxes   /></td>
            <td>{props.name?.title}</td>
            <td>{props.name?.author.firstName} {props.name?.author.lastName}</td>
            <td>{props.name?.dateCreated}</td>
            <td><Delete className={classes.deleteButton}/></td>
        </tr>
    )
}


export default function Tabledata() {    

    const {items} = useFetch(`https://61adfe5ca7c7f3001786f52a.mockapi.io/api/v1/events`);

    const events = [
                    {
                        "id": 1,
                        "title": "Kampala Innovation Week",
                        "dateCreated":"2021-12-05T19:58:13.117Z",
                        "author":{
                        "firstName": "baker",
                        "lastName": "sentamu"}
                    },
                    {
                        "id": 2,
                        "title": "My Village launch",
                        "dateCreated":"2021-12-05T19:58:13.117Z",
                        "author":{
                        "firstName": "esther",
                        "lastName": "sentamu"}
                    }, 

                    {
                        "id": 3,
                        "title": "DevOps Conference",
                        "dateCreated":"2021-12-05T19:58:13.117Z",
                        "author":{
                        "firstName": "rachel",
                        "lastName": "sentamu"}
                    }
    ]

    const [searchTerm, setSearch] = React.useState("")
    
    console.log(items)

    return (
        <>
            <Container fluid>
                <Row no-gutters>
                    <Col className="top-row" md={6}>
                        <h5>Events</h5>
                    </Col>
                    <Col className="top-row" md={6}>
                        <input type="text" placeholder= "search Here" onChange= {(e) => {
                            setSearch(e.target.value)
                            }}
                        />
                    </Col>
                </Row>
                <Row>
                    <Table hover size="md">
                        <thead>
                            <tr>
                                <th><Checkboxes/></th>
                                <th>Event</th>
                                <th>Posted by</th>
                                <th>Date Created</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { 
                            items.filter(value =>{
                                if (searchTerm ==="") {
                                    return value;
                                }
                                else if (value.author.firstName.toLowerCase().includes(searchTerm.toLowerCase())){
                                    return value;
                                }

                            }).map((events) => 
                            <Tablerow key={events.id} id={events.id} name={events} />)  
                            }      
                        </tbody>
                    </Table>
                </Row>
            </Container>
            
        </>
    )
}

