import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Styles from "./FinancialReport.module.css";
import { FaDownload } from "react-icons/fa6";
import Button from "../../Buttons/Button";
function createData(
  balanceSheet,
  balanceSheetReport,
  profitLoss,
  profitLossReport
) {
  return { balanceSheet, balanceSheetReport, profitLoss, profitLossReport };
}

const rows = [
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
  createData(
    "Paid-up Capital",
    "file-locked.svg",
    " 	Total Revenue (Turnover)",
    "file-locked.svg"
  ),
];

const FinancialReport = () => {
  return (
    <>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Balance Sheet</TableCell>
                <TableCell align="left" sx={{ padding: "8px 10px" }}>
                  <img
                    className={Styles["locked-report"]}
                    src="file-locked.svg"
                  />
                </TableCell>
                <TableCell align="left" sx={{ padding: "8px 10px" }}>
                  Profit & Loss
                </TableCell>
                <TableCell align="left" sx={{ padding: "8px 10px" }}>
                  <img
                    className={Styles["locked-report"]}
                    src="file-locked.svg"
                  />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ padding: "8px 10px" }}
                  >
                    {row.balanceSheet}
                  </TableCell>
                  <TableCell align="left" sx={{ padding: "8px 10px" }}>
                    <img
                      className={Styles["locked-report"]}
                      src={row.balanceSheetReport}
                    />
                  </TableCell>
                  <TableCell align="left" sx={{ padding: "8px 10px" }}>
                    {row.profitLoss}
                  </TableCell>
                  <TableCell align="left" sx={{ padding: "8px 10px" }}>
                    <img
                      className={Styles["locked-report"]}
                      src={row.profitLossReport}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className={Styles["full-report-btn"]}>
        <Button>
          <FaDownload className={Styles["full-report-icon"]} /> Get Full Report
        </Button>
      </div>
    </>
  );
};

export default FinancialReport;
