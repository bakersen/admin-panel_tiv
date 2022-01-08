import React from 'react'
import Table from '../tabledata/Table'
import {Card} from 'react-bootstrap';
import EnhancedTable from  "../DataTable/index";
import './ContentCard.css'

export default function Content() {
    return (      

    <>
        <Table />
        
        <Card>
        <Card.Body>
           
           
            <EnhancedTable />
        
      
        </Card.Body>
    </Card>
    </>
    )
}




