import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import './ContentCard.css';
import Search from '@material-ui/icons/Search';
import {DeleteOutline} from '@material-ui/icons/';
import {Searching, SearchIconWrapper, StyledInputBase} from  "../Searchbar/Searchbar.styles";
//import DeletePopup from '../DeleteButton/DeleteButton';
import useFetch from "../helpers/useFetch";
import EnhancedTable from  "../DataTable/index";




export default function Content() {

   //const {data, q, setQ} = useFetch(`https://profiles-test.innovationvillage.co.ug/api/blog/posts`);

   

    
    //const {handleClickOpen} = DeletePopup();
    
    

    
    
    // useEffect(() => {
    //     getComments()
    // });

   
 
    // const getComments = ()=>{
    //     fetch(url) 
    //      .then((response)=> response.json())
    //      .then((json) => setData(json))
    // }
    
    
   
//    function search(rows){
//     return rows.filter(row => row.email.toLowerCase().indexOf(q) > -1)
//     }




return(
        
         <Card>
            <Card.Body>
                       
                {/* <Searching type ="text" value= {q} onChange={(e) => setQ(e.target.value)}>
                <SearchIconWrapper>
               <Search />
              </SearchIconWrapper>
                <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
                 />
                </Searching> */}
                <EnhancedTable/>
            {/* < DeletePopup  variant="contained"  /> */}
          
            </Card.Body>
        </Card>
        
    )
}
