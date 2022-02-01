
import * as React from 'react';
import PropTypes from 'prop-types';

import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';

import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
 import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Loader from '../helpers/Loader'
import Snackbar from '@material-ui/core/Snackbar';
import AlertDialog from '../popups/posts_popup';
 import FilterListIcon from '@material-ui/icons/FilterList';
import useFetch from '../helpers/useFetch';
import Moment from 'react-moment';
import PostsDrawer from '../drawer/PostsDrawer';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import BulkDelete from '../popups/Posts_bulkdelete';
import Refresh from '../helpers/Refresh';





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
  { id: 'details', numeric: false, disablePadding: true, label: 'Post' },
  { id: 'author' , numeric: true, disablePadding: false, label: 'Posted By'},
  { id: 'dateCreated', numeric: true, disablePadding: false, label: 'Date Published' },
  { id: 'delete', numeric: true, disablePadding: false, label: 'Action' },
  
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
            inputProps={{ 'aria-label': 'select all desserts' }}
            size='small'
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align= {'left'}
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
  searchable: {
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
    fontWeight: '700',
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  
  const { numSelected, selected, setSearch } = props;



  return (
    <Toolbar style={{paddingTop:'20px'}}>
      
        <Typography className={classes.title} variant="h5" id="tableTitle" component="div">
          Recent Posts
        </Typography>
      

      {numSelected > 0 ? (
        <BulkDelete selected={selected} />
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
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const {data, loading, error,} = useFetch(`http://localhost:5500/posts`);
  
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('dateCreated');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [searchTerm, setSearch] = React.useState("")
      
  // const rows = data.filter((data)=>{
  //   return data
  // })
 
  const rows = data.filter((data)=> {
    return data
})


  function handleRequestSort(event, property) {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  }

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

   const [state, setState] = React.useState({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });

  const { vertical, horizontal, open } = state;

  const handleClose = () => {
    setState({ ...state, open: false });
  };
  

  const isSelected = (id) => selected.indexOf(id) !== -1;

  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length}
        setSearch = {setSearch}
        selected={selected}  />
        
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            //size={dense ? 'small' : 'medium'}
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
            />
             {
              error  ? (
                 <Snackbar
                  anchorOrigin={{ vertical, horizontal }}
                  open={open}
                  onClose={handleClose}
                  message={`${error} Error. Failed to delete`}
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
            <TableBody>
            {loading && (
                  <TableRow>
                    <TableCell Colspan={6}>
                          <Loader />
                    </TableCell>               
                  </TableRow>
                )
              }
            
              {
                error ? (
                  <TableRow>
                    <TableCell Colspan={6}>
                          <Refresh name="posts"/>
                    </TableCell>               
                  </TableRow>
                ) : ( 
                  stableSort(rows, getComparator(order, orderBy)).filter(value => {
                        if (searchTerm ==="") {
                            return value;
                        }
                        else if (value.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                 value.lastName.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return value;
                        }
                          return false;
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
                          onClick={(event) => handleClick(event, row.id)}
                          checked={isItemSelected}
                          inputProps={{ 'aria-labelledby': labelId }}
                          size='small'
                        />
                      </TableCell>
                      
                      <TableCell component="th" id={labelId} scope="row" padding="none" >
                        <PostsDrawer row={row}/> 
                      </TableCell>
                      <TableCell>{ `${row.firstName} ${row.lastName}`}</TableCell>
                      <TableCell > <Moment format="Do-MMM-YYYY">
                            {row.dateCreated}
                            </Moment>
                          </TableCell>
                          <TableCell >                        
                        {!isItemSelected && <AlertDialog setState={setState} id={row.id} /> }
                      </TableCell>

                      
                    </TableRow>
                   );
                })
                )
              }
             
            </TableBody>
          </Table>
      
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
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

//           '&$checked': {
//             color: '#FF9015',
//           },
//         },
//         checked: {},
//       })((props) => <Checkbox color="default" {...props} />);
      
      
// function Checkboxes({setSelected, selected, id}) {
//         const [checked, setChecked] = React.useState(false);
      
//         const handleChange = (event) => {
//            const  {data,checked} = event.target
//           setChecked(event.target.checked);
//           // setSelected()
//           console.log(id)
//         };
      
//         return(
//             <CustomCheckbox
//               checked={checked}
//               onChange={handleChange}
//               inputProps={{ 'aria-label': 'primary checkbox' }}
//               size="small"
//             />
//         );
//       }
      
      
      
      
           