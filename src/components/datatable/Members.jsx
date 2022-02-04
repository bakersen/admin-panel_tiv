import React from 'react';
import PropTypes from 'prop-types';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import useAPI from '../helpers/useAPI'
import Moment from 'react-moment';
import TextField from '@material-ui/core/TextField';
import Delete from '../popups/Delete'
import BulkDeleteMembers from '../popups/BulkDeleteMembers'
import Drawer from '../drawer/MemDrawer'
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import Loader from '../helpers/Loader'
import Refresh from '../helpers/Refresh'
import Snackbar from '@material-ui/core/Snackbar';
import DeleteDialogue from '../popups/DeleteDialogue'


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
  return order === 'desc'
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
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'name', numeric: false, disablePadding: true, label: 'Full Name' },
  { id: 'role', numeric: false, disablePadding: false, label: 'Role' },
  { id: 'email', numeric: true, disablePadding: false, label: 'Email' },
  { id: 'action', numeric: false, disablePadding: false, label: 'Action' }
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead style={{fontSize:'16px'}}>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': '' }}
            size='small'
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={'left'}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  search: {
    borderRadius: '30px',
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
    fontWeight:'700'
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected, selected, setSearch } = props;

  return (
    <Toolbar style={{paddingTop:'20px'}}>
      <Typography className={classes.title} variant="h5" id="tableTitle" component="div">
<<<<<<< HEAD
          Registered Members
      </Typography>        

      {numSelected > 0 ? (
        <BulkDeleteMembers selected={selected} />
=======
          Members
      </Typography>        

      {numSelected > 0 ? (
        <BulkDelete selected={selected} />
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
      ) : (
        <TextField 
          id="outlined-search" 
          placeholder="Search"
          type="search" 
          margin="dense" 
          size="small" 
          variant="outlined"
          onChange= {(e) => {setSearch(e.target.value) }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
            className: classes.search
            }}
        />
      )}

    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
<<<<<<< HEAD
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));


=======
    top: 20,
    width: 1,
  },
  deleteButton: {
    cursor:'pointer'
  }
}));

 
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
export default function EnhancedTable() {


  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearch] = React.useState("")
<<<<<<< HEAD
  const {items, isLoading, isError} = useAPI('http://localhost:8000/members'); 
=======
  const {items, isLoading, isError} = useAPI('http://localhost:5500/members'); 
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0


 
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.id);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
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
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };


  const isSelected = (id) => selected.indexOf(id) !== -1;

  const rows = items.filter((items)=> {
        return items
  })

<<<<<<< HEAD
  //Notification After Deleting Item
   
  const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
=======
  console.log(items)

  //Notification After Deleting Item
   
 
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0



  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar
        numSelected={selected.length}
        setSearch = {setSearch}
        selected={selected} 
        />
       
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
<<<<<<< HEAD
            />
            {
              !isError  ? (
                 <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message={`${isError} Error. Failed to delete`}
                  key={vertical + horizontal}
                  autoHideDuration={5000}
                />
              ) : (
                 <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message={"Successfully Deleted"}
                  key={vertical + horizontal}
                  autoHideDuration={5000}
                />
              )
            }
          
=======
            />          
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
              
            <TableBody>
              {isLoading && (
                  <TableRow>
                    <TableCell Colspan={6}>
                          <Loader />
                    </TableCell>               
                  </TableRow>
                )
              }
            
<<<<<<< HEAD
              {
                isError ? (
                  <TableRow>
                    <TableCell Colspan={6}>
                          <Refresh name="members"/>
=======
              
              { 
                isError ? (
                  <TableRow>
                    <TableCell Colspan={6}>
                      <Refresh name='Members'/> 
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
                    </TableCell>               
                  </TableRow>
                ) : (
                  stableSort(rows, getComparator(order, orderBy)).filter(value =>{
<<<<<<< HEAD
                    if (searchTerm ==="") {
                      return value;
                  }
                  else if (value.firstname.toLowerCase().includes(searchTerm.toLowerCase()) 
                  
                  || value.lastname.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return value;
                  }
=======
                        if (searchTerm ==="") {
                            return value;
                        }
                        else if (value.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                          return false;
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
                    }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.id);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (

                    <TableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          size='small'
                          onChange={(event) => handleClick(event, row.id)}
                        />
                      </TableCell>
<<<<<<< HEAD
                      <TableCell component="th" scope="row" padding="none">
                        {/* {row.firstname} {row.lastname} */}
                        <Drawer users={row}/>
                      </TableCell>
                      <TableCell>{row.Email !== null && row.Email !== "" ? row.Email : "Not provided"}</TableCell>
                      <TableCell>{row.DateCreated} </TableCell>
                      <TableCell>
                      
                        <DeleteDialogue id={row.userId} />
                      
                      
=======
                      <TableCell component="th" id={labelId} scope="row" padding="none">
                        <Drawer members={row}/>
                      </TableCell>
                      <TableCell>
                            {row.role}                                           
                      </TableCell>
                      <TableCell>
                            {row.email}                                           
                      </TableCell>
                      <TableCell>                        
                        {!isItemSelected && <Delete id={row.id} /> }
>>>>>>> b238ff4de78229d346e7f84ba9cabc9beb2d19b0
                      </TableCell>
                    </TableRow>
                  );
                })
                )
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25,50]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
