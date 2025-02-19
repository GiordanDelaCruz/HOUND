import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { v4 as uuidv4 } from "uuid";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>{row.tag}</TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>{row.weight}</TableCell>
        <TableCell>{row.sets}</TableCell>
        <TableCell>{row.reps}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={7}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                gutterBottom
                component="div"
                align="center"
              >
                More Details
              </Typography>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <TableCell>Weekday</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Duration</TableCell>
                    <TableCell>Additional Notes</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow key={uuidv4()}>
                    <TableCell>{row.weekday}</TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>
                      {row.duration === null ? "N/A" : row.duration}{" "}
                    </TableCell>
                    <TableCell>
                      {row.additional_notes === null
                        ? "N/A"
                        : row.additional_notes}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

// Define shape that Row datatype should be in
Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    weight: PropTypes.number,
    reps: PropTypes.number,
    sets: PropTypes.number,
    hiddenDetails: PropTypes.arrayOf(
      PropTypes.shape({
        weekday: PropTypes.string.isRequired,
        duration: PropTypes.number,
        tag: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        additional_notes: PropTypes.string,
      })
    ),
  }),
};

function CompletedExercise({ data }) {
  // Transform data into a custom format for the table
  let rows = data.map((item, index) => {
    return {
      additional_notes: item.additional_notes,
      date: item.date,
      duration: item.duration,
      name: item.exercise.name,
      reps: item.reps,
      sets: item.sets,
      tag: item.exercise.tag,
      type: item.exercise.type,
      weekday: item.weekday,
      weight: item.weight,
    };
  });

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Date</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Exercise</TableCell>
            <TableCell>Weight&nbsp;(lb)</TableCell>
            <TableCell>Sets</TableCell>
            <TableCell>Reps</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => {
            return <Row key={uuidv4()} row={row} />;
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CompletedExercise;
