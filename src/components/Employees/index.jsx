import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import RefreshIcon from "@mui/icons-material/Refresh";
import AddIcon from "@mui/icons-material/Add";
import AddEmployee from "./addEmployee";
import { fetchAllUserAsync } from "../../reducers/userReducer";
import { useDispatch } from "react-redux";

const columns = [
  { id: "employeeId", label: "EmpId", minWidth: 100 },
  { id: "firstname", label: "Firstname", minWidth: 100 },
  { id: "lastname", label: "Lastname", minWidth: 100 },
  { id: "email", label: "Email", minWidth: 100 },
  { id: "mobile", label: "Mobile", minWidth: 100 },
  { id: "role", label: "Role", minWidth: 100 },
 
];



const Employees = () => {
  const dispatch = useDispatch();
  const getAllUsers = useSelector((state) => state.auth.allUsers || []);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [isOpen, setIsOpen] = useState(false);

  const handleAdd = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    dispatch(fetchAllUserAsync())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {});
      console.log(getAllUsers)
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {isOpen && <AddEmployee open={true} />}
      <Grid container style={{ margin: "0px 10px" }} spacing={2}>
        <Grid item xs={12} md={12}>
          {" "}
          <Grid container spacing={2} style={{ margin: "5px 0px" }}>
            {" "}
            <Grid item xs={4}>
              {" "}
              <Button variant="contained" onClick={handleAdd}>
                <AddIcon />
                Add New Employee
              </Button>
            </Grid>
            <Grid item xs={4}>
              {" "}
              <Button variant="outlined">
                <RefreshIcon />
                refresh
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        <Paper sx={{ width: "90%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {getAllUsers
                  ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  ?.map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === "number"
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={getAllUsers.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default Employees;
