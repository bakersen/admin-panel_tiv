import React, { useState, useEffect } from 'react'
import { Card } from 'react-bootstrap'
import api from '../api/Jobs'
import './contentcard.css'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import ConfirmDelete from './ConfirmDelete';
import TemporaryDrawer from '../drawer/TemporaryDrawer';
import Moment from 'react-moment';
// import SearchJob from '../search/SearchJob';



const StyledTableCell = withStyles((theme) => ({
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});


export default function Content() {

    const [checked, setChecked] = React.useState(false);

    const handleChange = (event) => {
        setChecked(event.target.checked);
    };

    const classes = useStyles();

    const [jobs, setJobs] = useState([])

    const [searchitem, setSearchItem] = useState('')

    const [editjob, setEditJob] = useState('')

    const handleDelete = async (id) => {
        try {
            await api.delete(`/jobs/${id}`);
            const newJobs = jobs.filter(job => job.id !== id);
            setJobs(newJobs);
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const handleEdit = async (id) => {
        const updatedJob = { id, editjob }
        try {
            const response = await api.patch(`/jobs/${id}`, updatedJob);
            setJobs(jobs.map((job) => job.id === id ? { ...response.data } : job));
            setEditJob('');
        } catch (err) {
            console.log(`Error: ${err.message}`);
        }
    }

    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await api.get('/jobs');
                setJobs(response.data);
            } catch (err) {
                if (err.response) {
                    //Not in the 200 range
                    console.log(err.response.data);
                    console.log(err.response.status);
                    console.log(err.response.headers);
                } else {
                    console.log(`Error:${err.message}`);
                }
            }
        }
        fetchJobs();
    }, [])

    return (
        <>
            <Card.Body >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <br />
                            <input
                                type="text"
                                id='search'
                                role='searchbox'
                                placeholder='search'
                                value={searchitem}
                                onChange={(e) => setSearchItem(e.target.value)}
                            />
                            <br />
                            <br />
                            <TableRow>
                                <StyledTableCell>
                                    <Checkbox
                                        checked={checked}
                                        onChange={handleChange}
                                        inputProps={{ 'aria-label': 'primary checkbox' }}
                                    />
                                </StyledTableCell>
                                <StyledTableCell >Job Title</StyledTableCell>
                                <StyledTableCell >Company</StyledTableCell>
                                <StyledTableCell >Date created</StyledTableCell>
                                <StyledTableCell >Deadline</StyledTableCell>
                                <StyledTableCell ></StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {/* {jobs.filter((job) => ((job.job).toLowerCase()).includes(search.toLowerCase()))} */}
                            {jobs.filter(value => {
                                if (searchitem === '') {
                                    return value;
                                } else if (
                                    value.company.toLowerCase().includes(searchitem.toLowerCase()) ||
                                    value.jobTitle.toLowerCase().includes(searchitem.toLowerCase())
                                ) {
                                    return value
                                }
                                return false;
                            }).map((job) => (
                                <StyledTableRow key={job.id}>
                                    <StyledTableCell >
                                        <Checkbox
                                            checked={checked}
                                            onChange={handleChange}
                                            inputProps={{ 'aria-label': 'primary checkbox' }}
                                        />
                                    </StyledTableCell>
                                    <StyledTableCell><TemporaryDrawer job={job} editjob={editjob} setEditJob={setEditJob} handleEdit={handleEdit} /> </StyledTableCell>
                                    <StyledTableCell>{job.company === null ? 'Not provided' : job.company}</StyledTableCell>
                                    <StyledTableCell>
                                        <Moment format='Do-MM-YYYY'>
                                            {job.dateCreated}
                                        </Moment>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        <Moment format='Do-MM-YYYY'>
                                            {job.deadline}
                                        </Moment>
                                    </StyledTableCell>
                                    <StyledTableCell>
                                        {/* <DeleteOutlineIcon 
                                        role='button'
                                        /> */}
                                        <ConfirmDelete job={job} key={job.id} handleDelete={handleDelete} />
                                    </StyledTableCell>

                                </StyledTableRow>

                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    component="div"
                    count={20}
                    page={page}
                    onPageChange={handleChangePage}
                    rowsPerPage={rowsPerPage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Card.Body>

        </>
    )
}
