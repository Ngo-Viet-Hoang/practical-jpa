import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "./AirlineList.scss";
import axios from "axios";
import airlineService from "../../Shared/Services/AirlineService";
import { Link, useLocation } from "react-router-dom";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteAirline from "../DeleteAirline/DeleteAirline";
import { DataGridPro } from "@mui/x-data-grid-pro";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import DirectionsIcon from "@mui/icons-material/Directions";
import {
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import { BASE_URL_SERVER } from "../../../../../Configs/server";

const columns = [
  { id: "id", label: "Id", minWidth: 80 },
  { id: "name", label: "Name", minWidth: 170 },
  { id: "wage", label: "Wage", minWidth: 100 },
];
function createData(id, name, wage) {
  return { id, name, wage};
}

export default function  EmployeeList() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [employeeList, setEmployeeList] = useState([]);
  const [select, setSelect] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelect(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  fetchData = () => {
    fetch('https://practical-jpa.herokuapp.com/api/v1/employees')
        .then(res => res.json())
        .then(res => {
            this.setState({
               employeeList: res
            })
        })
}


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <>
      <div id="employee">
        <Paper sx={{ width: "100%" }}>
          <Typography variant="h4" component="div" gutterBottom>
          Employee
          </Typography>
          <TableContainer sx={{ maxHeight: 5000 }}>
            {msg !== "" ? (
              <Stack sx={{ width: "100%" }} spacing={2}>
                <Alert severity={msg.type}>{msg.content}</Alert>
              </Stack>
            ) : (
              ""
            )}

            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={3}>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 250,
                      }}
                    >
                      <IconButton sx={{ p: "10px" }} aria-label="menu">
                        <MenuIcon />
                      </IconButton>
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search Airline"
                        inputProps={{ "aria-label": "search google maps" }}
                        value={searchValue}
                        onChange={(ev) => setSearchValue(ev.target.value)}
                      />
                      <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                      >
                        <SearchIcon />
                      </IconButton>
                      <Divider
                        sx={{ height: 28, m: 0.5 }}
                        orientation="vertical"
                      />
                    </Paper>
                  </TableCell>
                 
                  <TableCell align="right" colSpan={3}>
                    <Link to={"/admin/airlines/create"}>
                      <Button variant="contained" startIcon={<AddCircleIcon />}>
                        Add New
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ top: 100, minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {employeeList
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((employee) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={street.Id}
                      >
                        <TableCell>{street.Id}</TableCell>
                        <TableCell>{street.Name}</TableCell>
                        <TableCell>{street.wage}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </>
  );
}
