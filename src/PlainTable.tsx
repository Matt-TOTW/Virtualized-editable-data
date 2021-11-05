import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { generateRows } from './test-data';
import { Edit } from '@mui/icons-material';
import { Button, TextField } from '@mui/material';

const PlainTable: React.FC<{ numberOfRows: number }> = ({ numberOfRows }) => {
  const [rows, setRows] = React.useState<any[]>(generateRows(numberOfRows));

  const repaint = () => {
    setRows([]);
  };

  React.useEffect(() => {
    if (!rows.length) {
      setRows(generateRows(numberOfRows));
    }
  }, [numberOfRows, rows]);

  const startEdit = (rowId: string) => {
    const newRows = rows.map((row) => (row.id === rowId ? { ...row, isEdit: true } : { ...row }));
    setRows(newRows);
  };

  const handleEditCell = (e: any, rowId: string, colNum: number) => {
    const newRows = rows.map((row) =>
      row.id === rowId ? { ...row, [`col${colNum}`]: e.target.value } : { ...row }
    );
    setRows(newRows);
  };

  const customCellRenderer = (row: any, colNum: number) => {
    return row.isEdit ? (
      <TextField
        size="small"
        variant="standard"
        InputProps={{ disableUnderline: true, style: { fontSize: 'inherit' } }}
        value={row[`col${colNum}`]}
        onChange={(e) => handleEditCell(e, row.id, colNum)}
      />
    ) : (
      row[`col${colNum}`]
    );
  };

  console.log('rows', rows);
  return (
    <>
      <Button variant="contained" onClick={repaint}>
        Repaint
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Col 1</TableCell>
              <TableCell>Col 2</TableCell>
              <TableCell>Col 3</TableCell>
              <TableCell>Col 4</TableCell>
              <TableCell>Col 5</TableCell>
              <TableCell>Col 6</TableCell>
              <TableCell>Col 7</TableCell>
              <TableCell>Col 8</TableCell>
              <TableCell>Col 9</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{
                  '&:last-child td, &:last-child th': {
                    border: 0
                  },
                  boxShadow: row.isEdit
                    ? '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
                    : 'none'
                }}
              >
                <TableCell component="th" scope="row" sx={{ whiteSpace: 'nowrap' }}>
                  {row.id}
                </TableCell>
                <TableCell>{customCellRenderer(row, 1)}</TableCell>
                <TableCell>{customCellRenderer(row, 2)}</TableCell>
                <TableCell>{customCellRenderer(row, 3)}</TableCell>
                <TableCell>{customCellRenderer(row, 4)}</TableCell>
                <TableCell>{customCellRenderer(row, 5)}</TableCell>
                <TableCell>{customCellRenderer(row, 6)}</TableCell>
                <TableCell>{customCellRenderer(row, 7)}</TableCell>
                <TableCell>{customCellRenderer(row, 8)}</TableCell>
                <TableCell>{customCellRenderer(row, 9)}</TableCell>
                <TableCell>
                  <Edit onClick={() => startEdit(row.id)} sx={{ cursor: 'pointer' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default PlainTable;
