## A comparison between Material UI's DataGrid, a plain html table, and a table from React Virtualized.

The project was initiated with Create React App.

To start the project, navigate to the project directory and run:

### `npm start`

This runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Changing tabs to a different table type, or changing the number of sample rows to display, will first empty the grid. This is done to ensure the a fresh starting point for each render.

### Limitations

100,000 rows seems to be about the maximum React will work with before complaining with a `RangeError: Maximum call stack size exceeded` error as React thinks the `generateRows` function is in an infinite loop. I have not explored ways around this.

The **Plain table** component is very slow, don't attempt with more than about 1,000 rows.
