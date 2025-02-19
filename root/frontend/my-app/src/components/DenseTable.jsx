import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { v4 as uuidv4 } from "uuid";

export default function DenseTable({ headers, rows }) {
  return (
    <TableContainer component={Paper}>
      <Table
        stickyHeader
        sx={{ minWidth: 650 }}
        size="small"
        aria-label="sticky table"
      >
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell align="center" key={uuidv4()}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={uuidv4()}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center">{row.weekday}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.exercise.tag}</TableCell>
              <TableCell align="center">{row.exercise.type}</TableCell>
              <TableCell align="center">{row.exercise.name}</TableCell>
              <TableCell align="center">
                {row.duration ? row.duration != null : 0}
              </TableCell>
              <TableCell align="center">{row.weight}</TableCell>
              <TableCell align="center">{row.reps}</TableCell>
              <TableCell align="center">{row.sets}</TableCell>
              <TableCell align="center">{row.additional_notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
