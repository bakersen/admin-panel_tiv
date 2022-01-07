import React from 'react';
import {Card} from 'react-bootstrap';
import './ContentCard.css';

//import DeletePopup from '../DeleteButton/DeleteButton';
import useFetch from "../helpers/useFetch";
import EnhancedTable from  "../DataTable/index";
import TemporaryDrawer from '../Drawer/drawer';


export default function Content() {
   // const {q,data} = useFetch(`https://profiles-test.innovationvillage.co.ug/api/blog/posts?PageSize=50`);


    
    //const {handleClickOpen} = DeletePopup();
    
    

    
    
    // useEffect(() => {
    //     getComments()
    // });

   
 
    // const getComments = ()=>{
    //     fetch(url) 
    //      .then((response)=> response.json())
    //      .then((json) => setData(json))
    // }
    
    
   




return(
        
         <Card>
            <Card.Body>
               
               
                <EnhancedTable />
            {/* < DeletePopup  variant="contained"  /> */}
          
            </Card.Body>
        </Card>
        
    )
}
