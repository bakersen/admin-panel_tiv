import React from 'react'
import {Card} from 'react-bootstrap'
import Table from '../tabledata/Tabledata'
import './ContentCard.css'

export default function Content() {
    return (
         <Card>
            <Card.Body>
                <Table />
            </Card.Body>
        </Card>
    )
}
