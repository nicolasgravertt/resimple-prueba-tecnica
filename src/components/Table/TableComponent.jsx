import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const TableComponent = ({ rows }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        {rows.length === 0 ? <caption>No data Found</caption> : <></>}
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">RUT</TableCell>
            <TableCell align="right">Edad</TableCell>
            <TableCell align="right">Profesión</TableCell>
            <TableCell align="right">Cargo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                {row.NOMBRE_TRABAJADOR}
              </TableCell>
              <TableCell align="right">{row.RUT_TRABAJADOR}</TableCell>
              <TableCell align="right">{row.EDAD}</TableCell>
              <TableCell align="right">{row.PROFESION}</TableCell>
              <TableCell align="right">{row.CARGO}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
