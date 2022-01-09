import React from 'react'
import List from './List';

import Header from './Header';

export default function Table({jobs,setJobs,handleDelete}) {
    return (
        <>
            <br />
            <br />
            <Header />
                {
                    jobs.map((job) => (
                        <List key={job.id} job={job} handleDelete={handleDelete} setJobs={setJobs} />
                    ))
                }  
        </>
    )
}
