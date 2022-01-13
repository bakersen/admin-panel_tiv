
import React from "react";
import PropTypes from "prop-types";
import {makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import useFetch from '../fetch/useFetch'
import './startups.css'
import { Row, Col, Container} from 'react-bootstrap'
import DeleteDialogue from './DeleteDialogue'
import { orange } from "@mui/material/colors";
import Drawer from "../drawer/Drawer";



function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

const headCells = [
  {
    id: "Startupname",
    label: "REGISTERED STARTUPS"
  },
  {
    id: "ownernames",
    label: "OWNERS NAME"
  },
  
  {
    id: "email",
    label: "EMAIL"
  },
  {
    id: "datecreated",
    label: "DATECREATED"
  },
  {
    id: "delete",
    label: "ACTION"
  },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort
  } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  
  return (
   
   <React.Fragment>
     <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
   </React.Fragment> 
  );
}
EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const EnhancedTableToolbar = props => {
  const {setSearch} = props;

return (
  <>
    <Container fluid>
      <Row no-gutters>
          <Col className="top-row" md={6}>
              <h4>Registered StartUps</h4>
          </Col>
          <Col className="top-row float-right" md={5} >
              
              <div className="search">
              
              <search style={{marginRight:"5px"}}/>
              <input type="text" placeholder= {"Search"} onChange= {(e) => {
                  setSearch(e.target.value)
                  }}
              />
              </div>               
              
          </Col>
      </Row>
    </Container>
  </>  
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  deleteButton: {
    fontSize:'18px',
    cursor:'pointer',
    padding:'0',
    "&:hover": {
        color: orange,
    }
},
selectedRow: {        
  backgroundColor:'orange'
  },
  root: {
    width: "100%"
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  }
}));

export default function App() {

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [searchTerm, setSearch] = React.useState("");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const {items} = useFetch(`http://localhost:5000/startups`);
    
    const rows = items.filter((startups)=>{
    return startups})

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = id => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar 
        numSelected={selected.length}
        setSearch={setSearch}
         />
        <TableContainer>
          <Table className={classes.table}>
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).filter(value =>{
                  if (searchTerm ==="") {
                      return value;
                  }
                  else if (value.startupname.toLowerCase().includes(searchTerm.toLowerCase()) 
                  
                  || value.ownersname.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return value;
                  }

                  //  return false;

              }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
                    
                  const isItemSelected = isSelected(row.startupid);
                  
            return (
                    <TableRow
                      hover
                      onClick={event => handleClick(event, row.startupid)}
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.startupid}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {/* {row.firstname} {row.lastname} */}
                        <Drawer members={row}/>
                      </TableCell>
                      <TableCell>{row.ownersname !== null && row.ownersname !== "" ? row.ownersname : "Not provided"}</TableCell>
                      <TableCell>{row.email !== null && row.email !== "" ? row.email : "Not provided"}</TableCell>
                      <TableCell>{row.datecreated} </TableCell>
                      <TableCell>
                      
                        <DeleteDialogue id={row.startupid} />                     
                      </TableCell>
                    </TableRow>
                    
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell />
                </TableRow>
                
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 15, 30]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}