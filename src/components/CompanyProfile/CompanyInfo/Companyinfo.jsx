import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Padding } from "@mui/icons-material";

function createData(labels, labelsData) {
  return { labels, labelsData };
}

const rows = [
  createData("CIN", "U74899HR1995PTC088423"),
  createData("Company Name", "UNIFIED CREDIT SOLUTIONS PRIVATE LIMITED", 9.0),
  createData("Company Category", "Company Limited By Shares"),
  createData("Company Sub Category", "Non-government Company"),
  createData("Company Activity", "OTHER BUSINESS ACTIVITIES"),
  createData("Class of Company", "Private"),
  createData("Company Status", "Active"),
  createData("Date of Incorporation", "06 Jul 1995"),
  createData("Registrar of Companies", "ROC Delhi"),
  createData("Age of Company", "28 Years, 8 Months, 0 Days"),
  createData("Balance Sheet last filed ", " 31 March 2023 "),
];
const Companyinfo = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table">
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.labels}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  sx={{ fontSize: "1rem", fontWeight: "400", width: "30%" }}
                >
                  {row.labels}
                </TableCell>
                <TableCell align="right" sx={{ textAlign: "left" }}>
                  {row.labelsData}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Companyinfo;
