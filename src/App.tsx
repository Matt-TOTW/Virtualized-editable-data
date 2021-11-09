import React from 'react';
import { Button, Container, TextField, Typography, Grid } from '@mui/material';
import MuiDateGrid from './MuiDataGrid';
import PlainTable from './PlainTable';
import VirtualizedTable from './VirtualizedTable';

const App: React.FC = () => {
  const [page, setPage] = React.useState('dataGrid');
  const [numberOfRows, setNumberOfRows] = React.useState(50);
  const [show, setShow] = React.useState(true);

  const handelChange = (e: any) => {
    e.preventDefault();

    setShow(false);
    setNumberOfRows(isNaN(parseInt(e.target.value)) ? 0 : parseInt(e.target.value));
  };

  const handleClick = (destination: string) => {
    setShow(false);
    setPage(destination);
  };

  return (
    <Container>
      <Grid container sx={{ justifyContent: 'space-between', margin: '24px 0' }}>
        <Grid container item sx={{ width: 'fit-content' }}>
          <TextField
            size="small"
            label="# of rows"
            required
            value={numberOfRows}
            onChange={handelChange}
          />
          <Button onClick={() => setShow(true)} variant="contained" disabled={show}>
            GO
          </Button>
        </Grid>
        <Grid item>
          <Button
            onClick={() => handleClick('dataGrid')}
            variant="outlined"
            disabled={page === 'dataGrid'}
          >
            Data grid
          </Button>
          <Button
            onClick={() => handleClick('plainTable')}
            variant="outlined"
            disabled={page === 'plainTable'}
          >
            Plain table
          </Button>
          <Button
            onClick={() => handleClick('virtualizedTable')}
            variant="outlined"
            disabled={page === 'virtualizedTable'}
          >
            Virtualized table
          </Button>
        </Grid>
      </Grid>
      {page === 'dataGrid' && <Typography variant="h5">Data grid</Typography>}
      {page === 'plainTable' && <Typography variant="h5">Plain table</Typography>}
      {page === 'virtualizedTable' && <Typography variant="h5">Virtualized table</Typography>}
      {show && (
        <>
          {page === 'dataGrid' && <MuiDateGrid numberOfRows={numberOfRows} />}
          {page === 'plainTable' && <PlainTable numberOfRows={numberOfRows} />}
          {page === 'virtualizedTable' && <VirtualizedTable numberOfRows={numberOfRows} />}
        </>
      )}
    </Container>
  );
};

export default App;
