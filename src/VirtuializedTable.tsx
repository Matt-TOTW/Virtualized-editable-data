import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { AutoSizer, Column, Table, TableCellRenderer, TableHeaderProps } from 'react-virtualized';
import { generateRows, virtualizedTableColumns } from './test-data';
import { Button } from '@mui/material';

type ColumnData = {
  dataKey: string;
  label: string;
  width: number;
};

type ReactVirtualizedTableProps = {
  columns: readonly ColumnData[];
  headerHeight?: number;
  onRowClick?: () => void;
  rowCount: number;
  rowGetter: ({ index }: { index: number }) => any;
  rowHeight?: number;
};

const rowHeight = 48;
const headerHeight = 48;

const ReactVirtualizedTable: React.FC<ReactVirtualizedTableProps> = (props) => {
  const { columns, ...tableProps } = props;

  const headerRenderer = ({ label }: TableHeaderProps) => {
    const { headerHeight } = props;

    return (
      <TableCell
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
      </TableCell>
    );
  };

  const cellRenderer: TableCellRenderer = ({ cellData }) => {
    return (
      <TableCell
        component="div"
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          boxSizing: 'border-box',
          cursor: 'initial'
        }}
        variant="body"
        style={{ height: rowHeight }}
      >
        {cellData}
      </TableCell>
    );
  };

  return (
    <AutoSizer>
      {({ height, width }) => (
        <Table
          height={height}
          width={width}
          rowHeight={rowHeight!}
          gridStyle={{
            direction: 'inherit'
          }}
          headerHeight={headerHeight!}
          {...tableProps}
          rowClassName="row"
          rowStyle={{ display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}
        >
          {columns.map(({ dataKey, ...other }, index) => {
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

  return (
    <>
      <Button variant="contained" onClick={repaint}>
        Repaint
      </Button>
      <TableContainer component={Paper} sx={{ height: 500 }}>
        <ReactVirtualizedTable
          rowCount={rows.length}
          rowGetter={({ index }) => rows[index]}
          columns={virtualizedTableColumns}
        />
      </TableContainer>
    </>
  );
};

export default VirtualizedTable;
