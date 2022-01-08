import React from 'react'
import {Table, Container, Col, Row} from 'react-bootstrap'
import {Delete, Search} from '@material-ui/icons/';
import './Tabledata.css'
import { makeStyles } from '@material-ui/core'
import Checkbox from '@material-ui/core/Checkbox'
import { withStyles } from '@material-ui/core/styles'
import useFetch from '../helpers/useFetch'
import Popup from '../Popup/DeletePopup'
import Drawer from '../drawer/Drawer'
import Moment from 'react-moment';




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
    bulkDelete:{
        fontSize:'22px',
        display:'flex',
        alignItems:'inherit'
    },
    
    selectedRow: {        
        backgroundColor:'red'
    },
   
})

// Checkbox Styling
const CustomCheckbox = withStyles({
  root: {
     padding:'0px', 
    '&$checked': {
      color: '#FF9015',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



//MAIN COMPONENT
export default function Tabledata() {    

    const {items} = useFetch(`http://localhost:8000/events`);

    //State to handle selected items
    const [selected, setSelected]= React.useState([])

    //Method to handle on change event on checkbox
    const handleChange = (event, data) => {

        const {name, checked} = event.target;

        if (checked) {
             if (name === "allSelect") {
                setSelected(items);
            } else {
                // if cheked and specific checkbox add specific field to selectedList
                setSelected([...selected, data]);
            }
        }  else {
                // if uncheked and selectall checkbox add remove all fileds from selectedList
                if (name === "allSelect") {
                    setSelected([]);
                } else {
                    // if uncheked and specific checkbox remove specific field from selectedList
                    let tempevent = selected.filter((item) => item.id !== data.id);
                    setSelected(tempevent);
                }
            }
    }
    
    //State to manage Search
    const [searchTerm, setSearch] = React.useState("")

    // //Load styles
    // const classes = useStyles
    
   
    return (
        <>
            <Container fluid>
                <Row style={{marginTop:'20px', marginBottom:'30px'}}>
                    <Col className="top-row-left" md={4}>
                        <h4>Events</h4>
                    </Col>
                    <Col className="top-row-right float-right" md={8} >
                        <div className="bulk-delete">
                            {selected.length > 0 ?
                            <>
                            <Delete/>
                            <h6>Delete Selected Items ({selected.length})</h6> 
                            </>
                            : 
                            ""
                            }
                           
                        </div>
                        <div className="search">
                        <Search style={{marginRight:"8px"}}/>
                        <input type="text" placeholder= {"Search"} onChange= {(e) => {setSearch(e.target.value) }}
                        />
                        </div>
                       
                    </Col>
                </Row>
                <Row>
                    <Table hover size="md">
                        <thead>
                            <tr>
                                <th>
                                <CustomCheckbox
                                   checked={selected?.length === items?.length}
                                    name="allSelect"
                                    onChange={(event) => handleChange(event, items)}
                                    inputProps={{ 'aria-label': 'primary checkbox' }}
                                    size="small"
                                />
                                </th>
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
                                else if (value.title.toLowerCase().includes(searchTerm.toLowerCase()) 
                                || value.author.firstName.toLowerCase().includes(searchTerm.toLowerCase())
                                || value.author.lastName.toLowerCase().includes(searchTerm.toLowerCase())
                                || value.dateCreated.toLowerCase().includes(searchTerm.toLowerCase())) {
                                    return value;
                                }

                                 return false;

                            }).map((events) => 
                                    <Tablerow 
                                    key={events.id} 
                                    id={events.id} 
                                    name={events} 
                                    setSelected={setSelected} 
                                    selected={selected} data={events}
                                    handleChange={handleChange} 
                                    />
                                )  
                            }      
                        </tbody>
                    </Table>
                </Row>
            </Container>
            
        </>
    )
}

//TABLE ROW COMPONENT
function Tablerow({name, setSelected, selected, id, data, handleChange}) {    

    //State to manage Delete Pop up
     const [show, setShow] = React.useState(false);

     const handleClose = () => setShow(false);
     const handleShow = () => setShow(true);
    
    const classes = useStyles()

    return (
        <>
        <tr>
            <td>
                <CustomCheckbox
                    checked={selected.some((item) => item?.id === data.id)}
                    name={data.id}
                    onChange={(event) => handleChange(event, data)}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    size="small"
                />
            </td>
            <td>
                <Drawer events={name}/>
            </td>
            <td>
                {name?.author.firstName} {name?.author.lastName}
            </td>
            <td>
                <Moment format="Do-MMM-YYYY">
                     {name?.dateCreated}
                </Moment>
               
            </td>
            <td>
                <Delete className={classes.deleteButton} onClick={handleShow}/>
            </td>
        </tr>

        <Popup id={id} setShow={setShow} show={show} onHide={handleClose}/>
        </>
        
    )
}






