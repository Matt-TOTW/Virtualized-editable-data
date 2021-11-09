import React from 'react';

import { DataGrid, GridEditRowsModel } from '@mui/x-data-grid';
import { generateRows } from './test-data';
import { Button } from '@mui/material';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Edit } from '@mui/icons-material';

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

  const handleEditRowsModelChange = (editRowsModel: GridEditRowsModel) => {
    // This is just one example of a prop that can be used
    // to handle edits of the grid.

    console.log('editRowsModel', editRowsModel);
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
      width: 120,
      editable: true
    },
    {
      field: 'col2',
      headerName: 'Col 2',
      width: 120,
      editable: true
    },
    {
      field: 'col3',
      headerName: 'Col 3',
      width: 120,
      editable: true
    },
    {
      field: 'col4',
      headerName: 'Col 4',
      width: 120,
      editable: true
    },
    {
      field: 'col5',
      headerName: 'Col 5',
      width: 120,
      editable: true
    },
    {
      field: 'col6',
      headerName: 'Col 6',
      width: 120,
      editable: true
    },
    {
      field: 'col7',
      headerName: 'Col 7',
      width: 120,
      editable: true
    },
    {
      field: 'col8',
      headerName: 'Col 8',
      width: 120,
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

  return (
    <>
      <Button variant="contained" onClick={repaint}>
        Repaint
      </Button>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableSelectionOnClick
        editMode="row"
        onEditRowsModelChange={handleEditRowsModelChange}
        onCellDoubleClick={handleDoubleCellClick}
        onRowEditStop={handleRowEditStop}
      />
    </>
  );
};

export default MuiDataGrid;
