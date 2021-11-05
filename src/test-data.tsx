export const generateRows = (numberOfRows: number) => {
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
    col9: `col9 row${i}`
    // col10: `col10 row${i}`
  }));
};
