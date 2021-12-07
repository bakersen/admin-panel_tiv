import React from 'react'
import {Table, Container, Col, Row} from 'react-bootstrap'
import {Delete, Search} from '@material-ui/icons/';
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
    selectedRow: {        
        backgroundColor:'red'
    },
   
})




export default function Tabledata() {    

    const {items} = useFetch(`https://61adfe5ca7c7f3001786f52a.mockapi.io/api/v1/events`);

    const [selected, setSelected]= React.useState(false)

    

    // const events = [
    //                 {
    //                     "id": 1,
    //                     "title": "Kampala Innovation Week",
    //                     "dateCreated":"2021-12-05T19:58:13.117Z",
    //                     "author":{
    //                     "firstName": "baker",
    //                     "lastName": "sentamu"}
    //                 },
    //                 {
    //                     "id": 2,
    //                     "title": "My Village launch",
    //                     "dateCreated":"2021-12-05T19:58:13.117Z",
    //                     "author":{
    //                     "firstName": "esther",
    //                     "lastName": "sentamu"}
    //                 }, 

    //                 {
    //                     "id": 3,
    //                     "title": "DevOps Conference",
    //                     "dateCreated":"2021-12-05T19:58:13.117Z",
    //                     "author":{
    //                     "firstName": "rachel",
    //                     "lastName": "sentamu"}
    //                 }
    // ]

    const [searchTerm, setSearch] = React.useState("")
    
    console.log(items)

   
    return (
        <>
            <Container fluid>
                <Row no-gutters>
                    <Col className="top-row" md={6}>
                        <h4>Events</h4>
                    </Col>
                    <Col className="top-row float-right" md={6} >
                        {selected ? "Delete": ""}
                        <div className="search">
                        <Search style={{marginRight:"8px"}}/>
                        <input type="text" placeholder= {"Search"} onChange= {(e) => {
                            setSearch(e.target.value)
                            }}
                        />
                        </div>
                       
                    </Col>
                </Row>
                <Row>
                    <Table hover size="md">
                        <thead>
                            <tr>
                                <th><Checkboxes setSelected={setSelected} selected={selected}/></th>
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

                                 return false;

                            }).map((events) => 
                            <Tablerow key={events.id} id={events.id} name={events} setSelected={setSelected} selected={selected}  />)  
                            }      
                        </tbody>
                    </Table>
                </Row>
            </Container>
            
        </>
    )
}


function Tablerow({name, setSelected, selected, id}) {
    
    
    const classes = useStyles()

    return (
        <tr className={selected ? "selectedRow" : ""}>
            <td><Checkboxes id={id} setSelected={setSelected} selected={selected} /></td>
            <td>{name?.title}</td>
            <td>{name?.author.firstName} {name?.author.lastName}</td>
            <td>{name?.dateCreated}</td>
            <td><Delete className={classes.deleteButton}/></td>
        </tr>
    )
}

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

function Checkboxes({setSelected, selected, id}) {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
     const {id, checked} = event.target
    setChecked(event.target.checked);
    // setSelected()
    console.log(id)
  };

  return(
      <CustomCheckbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        size="small"
      />
  );
}




