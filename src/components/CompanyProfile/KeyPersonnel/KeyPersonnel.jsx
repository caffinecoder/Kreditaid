import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
function createData(DIN, directorName, designation, dateOfAppointment) {
  return { DIN, directorName, designation, dateOfAppointment };
}

const rows = [
  createData("07497713", "Gaurav Agarwal", " Director", "03 August 2021"),
  createData("03623581", " 	Tanmay Saksena", "Director", "19 December 2017"),
  createData("10175087", "Nikhil Doegar", "Director", "14 June 2023"),
];

const KeyPersonnel = () => {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>DIN</TableCell>
              <TableCell align="left">Directors Name</TableCell>
              <TableCell align="left">Designation</TableCell>
              <TableCell align="left">Date of Appointment</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.DIN}
                </TableCell>
                <TableCell align="left">{row.directorName}</TableCell>
                <TableCell align="left">{row.designation}</TableCell>
                <TableCell align="left">{row.dateOfAppointment}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default KeyPersonnel;
