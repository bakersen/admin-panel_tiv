import React,{useState,useEffect} from 'react'
import api from '../api/Jobs'
import Datalist from './Datalist'


export default function Joblist() {

    const [jobs,setJobs] = useState([])

    // const handleDelete  = ((id) => {
    //     const newJobs = jobs.filter((job) => job.id !== id);
    //     setJobs(newJobs);
    // })

    const handleDelete = async (id) => {
        try {
          await api.delete(`/jobs/${id}`);
          const newJobs = jobs.filter(job => job.id !== id);
          setJobs(newJobs);
        } catch (err) {
          console.log(`Error: ${err.message}`);
        }
      }


    useEffect(() => {
        const fetchJobs = async () => {
            try{
                const response = await api.get('/jobs');
                setJobs(response.data);
            }   catch(err){
                if  (err.response){
                    //Not in the 200 range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                }   else{
                    console.log(`Error:${err.message}`);
                }
            }
        }
        fetchJobs();
    }, [])
    return (
        <div>
            <Datalist jobs={jobs} handleDelete={handleDelete} setJobs={setJobs}  />
            
        </div>
    )
}
