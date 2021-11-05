import React from 'react';

import { DataGrid, GridState } from '@mui/x-data-grid';
import { generateRows } from './test-data';
import { Button } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit } from '@mui/icons-material';

const MuiDataGrid: React.FC<{ numberOfRows: number }> = ({ numberOfRows }) => {
  const [rows, setRows] = React.useState<any[]>(generateRows(numberOfRows));

  const repaint = () => {
    // set rows to []
    setRows([]);
  };

  React.useEffect(() => {
    if (!rows.length) {
      // set rows
      setRows(generateRows(numberOfRows));
    }
  }, [numberOfRows, rows.length]);

  const handleStateChange = (newGrid: GridState) => {
    console.log('newGrid', newGrid);
  };

  const handleDoubleCellClick = React.useCallback((_params, event) => {
    event.defaultMuiPrevented = true;
  }, []);

  const handleRowEditStop = React.useCallback((_params, event) => {
    event.defaultMuiPrevented = true;
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'col1',
      headerName: 'Col 1',
      width: 100,
      editable: true
    },
    {
      field: 'col2',
      headerName: 'Col 2',
      width: 100,
      editable: true
    },
    {
      field: 'col3',
      headerName: 'Col 3',
      width: 100,
      editable: true
    },
    {
      field: 'col4',
      headerName: 'Col 4',
      width: 100,
      editable: true
    },
    {
      field: 'col5',
      headerName: 'Col 5',
      width: 100,
      editable: true
    },
    {
      field: 'col6',
      headerName: 'Col 6',
      width: 100,
      editable: true
    },
    {
      field: 'col7',
      headerName: 'Col 7',
      width: 100,
      editable: true
    },
    {
      field: 'col8',
      headerName: 'Col 8',
      width: 100,
      editable: true
    },
    {
      field: 'col9',
      headerName: 'Col 9',
      width: 100,
      editable: true
    },
    {
      field: 'action',
      headerName: 'Actions',
      width: 100,
      editable: false,
      renderCell: (params: GridRenderCellParams) => {
        const handleClick = () => {
          params.api.setRowMode(params.id, 'edit');
        };
        return <Edit onClick={handleClick} sx={{ cursor: 'pointer' }} />;
      }
    }
  ];

  console.log('rows', rows);
  return (
    <>
      <Button variant="contained" onClick={repaint}>
        {/* Repaint by unsetting and resetting the rows */}
        Repaint
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        editMode="row"
        onStateChange={handleStateChange}
        onCellDoubleClick={handleDoubleCellClick}
        onRowEditStop={handleRowEditStop}
      />
    </>
  );
};

export default MuiDataGrid;
