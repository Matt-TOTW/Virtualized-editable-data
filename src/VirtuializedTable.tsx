import React from 'react';
import MuiTableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import {
  AutoSizer,
  Column,
  Index,
  Table,
  TableCellRenderer,
  TableHeaderProps
} from 'react-virtualized';
import { generateRows } from './test-data';
import { Button, TextField } from '@mui/material';
import { Edit } from '@mui/icons-material';

type ColumnData = {
  dataKey: string;
  label: string;
  width: number;
  cellRenderer: TableCellRenderer;
};

type ReactVirtualizedTableProps = {
  columns: readonly ColumnData[];
  headerHeight?: number;
  onRowClick?: () => void;
  rows: any[];
  rowHeight?: number;
};

const rowHeight = 48;
const headerHeight = 48;

const ReactVirtualizedTable: React.FC<ReactVirtualizedTableProps> = (props) => {
  const { columns, rows, ...tableProps } = props;

  const headerRenderer = ({ label }: TableHeaderProps) => {
    const { headerHeight } = props;

    return (
      <MuiTableCell
        component="div"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          cursor: 'initial'
        }}
        variant="head"
        style={{ height: headerHeight }}
      >
        <span>{label}</span>
      </MuiTableCell>
    );
  };

  const getRowStyles = ({ index }: Index): React.CSSProperties => {
    const isEdit = Boolean(rows[index]?.isEdit);

    return {
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      boxShadow: isEdit
        ? '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
        : 'none'
    };
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight!}
          headerHeight={headerHeight!}
          rowClassName="row"
          rowStyle={getRowStyles}
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          {...tableProps}
        >
          {columns.map(({ dataKey, cellRenderer, ...other }) => {
            return (
              <Column
                style={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}
                key={dataKey}
                headerRenderer={headerRenderer}
                cellRenderer={cellRenderer}
                dataKey={dataKey}
                {...other}
              />
            );
          })}
        </Table>
      )}
    </AutoSizer>
  );
};

const TableCell: React.FC = (props) => {
  return (
    <MuiTableCell
      component="div"
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box',
        cursor: 'initial',
        height: rowHeight
      }}
      variant="body"
    >
      {props.children}
    </MuiTableCell>
  );
};

const VirtualizedTable: React.FC<{ numberOfRows: number }> = ({ numberOfRows }) => {
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

  const handleEditCell = (e: any, rowId: string, dataKey: string) => {
    const newRows = rows.map((row) =>
      row.id === rowId ? { ...row, [dataKey]: e.target.value } : { ...row }
    );
    setRows(newRows);
  };

  const simpleCellRenderer: TableCellRenderer = ({ dataKey, cellData, rowData }) => {
    return (
      <TableCell>
        {dataKey === 'col10' ? (
          <Edit sx={{ cursor: 'pointer' }} onClick={() => startEdit(rowData.id)} />
        ) : (
          cellData
        )}
      </TableCell>
    );
  };

  const editableCellRenderer: TableCellRenderer = ({ dataKey, cellData, columnIndex, rowData }) => {
    return (
      <TableCell>
        {rowData.isEdit ? (
          <TextField
            size="small"
            variant="standard"
            InputProps={{ disableUnderline: true, style: { fontSize: 'inherit' } }}
            value={cellData}
            onChange={(e) => handleEditCell(e, rowData.id, dataKey)}
          />
        ) : (
          cellData
        )}
      </TableCell>
    );
  };

  const columns = [
    {
      dataKey: 'id',
      label: 'ID',
      width: 90,
      cellRenderer: simpleCellRenderer
    },
    {
      dataKey: 'col1',
      label: 'Col 1',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col2',
      label: 'Col 2',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col3',
      label: 'Col 3',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col4',
      label: 'Col 4',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col5',
      label: 'Col 5',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col6',
      label: 'Col 6',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col7',
      label: 'Col 7',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col8',
      label: 'Col 8',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col9',
      label: 'Col 9',
      width: 100,
      cellRenderer: editableCellRenderer
    },
    {
      dataKey: 'col10',
      label: 'Actions',
      width: 100,
      cellRenderer: simpleCellRenderer
    }
  ];

  return (
    <>
      <Button variant="contained" onClick={repaint}>
        Repaint
      </Button>
      <TableContainer component={Paper} sx={{ height: 'calc(100vh - 250px)' }}>
        <ReactVirtualizedTable columns={columns} rows={rows} />
      </TableContainer>
    </>
  );
};

export default VirtualizedTable;
