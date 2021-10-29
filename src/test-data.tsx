import React from 'react';
import { GridColDef, GridRenderCellParams, GridValueGetterParams } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';

// export const columns: GridColDef[] = [
//   { field: 'id', headerName: 'ID', width: 90 },
//   {
//     field: 'col1',
//     headerName: 'Column 1',
//     width: 150,
//     editable: true,
//     valueGetter: (params: GridValueGetterParams) => {
//       console.log('params', params);
//       return params.row.col1.name;
//     },
//   },
//   {
//     field: 'col2',
//     headerName: 'Column 2',
//     width: 150,
//     editable: true,
//   },
//   {
//     field: 'col3',
//     headerName: 'Column 3',
//     width: 50,
//     editable: false,
//     renderCell: (params: GridRenderCellParams) => renderIcon(),
//   },
// ];

export const dataGridColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'col1',
    headerName: 'Col 1',
    width: 100,
    editable: true,
  },
  {
    field: 'col2',
    headerName: 'Col 2',
    width: 100,
    editable: true,
  },
  {
    field: 'col3',
    headerName: 'Col 3',
    width: 100,
    editable: false,
  },
  {
    field: 'col4',
    headerName: 'Col 4',
    width: 100,
    editable: false,
  },
  {
    field: 'col5',
    headerName: 'Col 5',
    width: 100,
    editable: false,
  },
  {
    field: 'col6',
    headerName: 'Col 6',
    width: 100,
    editable: false,
  },
  {
    field: 'col7',
    headerName: 'Col 7',
    width: 100,
    editable: false,
  },
  {
    field: 'col8',
    headerName: 'Col 8',
    width: 100,
    editable: false,
  },
  {
    field: 'col9',
    headerName: 'Col 9',
    width: 100,
    editable: false,
  },
  {
    field: 'col10',
    headerName: 'Col 10',
    width: 100,
    editable: false,
  },
];

export const virtualizedTableColumns = [
  { dataKey: 'id', label: 'ID', width: 90 },
  {
    dataKey: 'col1',
    label: 'Col 1',
    width: 100,
  },
  {
    dataKey: 'col2',
    label: 'Col 2',
    width: 100,
  },
  {
    dataKey: 'col3',
    label: 'Col 3',
    width: 100,
  },
  {
    dataKey: 'col4',
    label: 'Col 4',
    width: 100,
  },
  {
    dataKey: 'col5',
    label: 'Col 5',
    width: 100,
  },
  {
    dataKey: 'col6',
    label: 'Col 6',
    width: 100,
  },
  {
    dataKey: 'col7',
    label: 'Col 7',
    width: 100,
  },
  {
    dataKey: 'col8',
    label: 'Col 8',
    width: 100,
  },
  {
    dataKey: 'col9',
    label: 'Col 9',
    width: 100,
  },
  {
    dataKey: 'col10',
    label: 'Col 10',
    width: 100,
  },
];

export const generateRows = (numberOfRows: number) => {
  console.log('go', numberOfRows);
  return Array.apply(null, Array(numberOfRows)).map((_elem, i) => ({
    id: `id-${i}`,
    col1: `col1 row${i}`,
    col2: `col2 row${i}`,
    col3: `col3 row${i}`,
    col4: `col4 row${i}`,
    col5: `col5 row${i}`,
    col6: `col6 row${i}`,
    col7: `col7 row${i}`,
    col8: `col8 row${i}`,
    col9: `col9 row${i}`,
    col10: `col10 row${i}`,
  }));
};
