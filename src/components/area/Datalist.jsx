import React from 'react'
import Table from './Table';

export default function Datalist({jobs,setJobs,handleDelete}) {
    return (
        <React.Fragment>
            {
                jobs.length ? (
                    <Table jobs={jobs} handleDelete={handleDelete} setJobs={setJobs} />
                ):(
                    <p style={{marginTop:'2rem'}}>
                        No jobs to display.
                    </p>
                )
            }
        </React.Fragment>
    )
}
