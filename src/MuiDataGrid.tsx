import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { dataGridColumns, generateRows } from './test-data';
import { Button, Typography } from '@mui/material';

const MuiDataGrid: React.FC<{ numberOfRows: number }> = ({ numberOfRows }) => {
  const [rows, setRows] = React.useState<any[]>(generateRows(numberOfRows));

  const repaint = () => {
    setRows([]);
  };

  React.useEffect(() => {
    if (!rows.length) {
      setRows(generateRows(numberOfRows));
    }
  }, [numberOfRows, rows.length]);

  return (
    <>
      <Button variant='contained' onClick={repaint}>
        Repaint
      </Button>
      <DataGrid
        rows={rows}
        columns={dataGridColumns}
        pagination
        autoHeight
        disableSelectionOnClick
      />
    </>
  );
};

export default MuiDataGrid;
