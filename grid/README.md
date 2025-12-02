# Grid

A Grid is *just* a simple "superstructure" on an array - basically it can be thought of as a two-dimensional array. Few programming languages actually have multi-dimensional arrays, most implement them simply as arrays of arrays, but that often leaves out a lot of convenient methods to navigate around the grid. 

This implementation of a Grid is based on a single array, thus making it a fixed size - there's no way of **inserting** or **removing** elements in a grid, only reading and overwriting already existing positions.

Most additional features focuses on neighbours, and making sure that trying to access rows and columns outside of the grid, doesn't throw an error, but simply returns `undefined`.

TODO: Neighbor definition image

# Usage

TODO

# Reference

The grid is implemented as a class called `Grid`, that can be imported by other modules.

Every method that receives a **grid coordinate**, receives it as an object with at least two properties: `{ row, col }`.

Methods that return a **cell**, returns an object with the coordinates, as well as the value in that cell: `{ row, col, value }`.



* Constructor 
  - `new constructor( rows, cols )` -  receives the number of **rows** and the number of **columns**, and initializes the underlying array.
* Methods that tell you something about the structure
  - `rows()` - returns the number of rows
  - `cols()` - returns the number of columns
  - `size()` - returns the total number of cells
* Methods for accessing the data in the grid
  - `set( {row, col}, value )` - sets the specified location to the given `value`.
  - `get( { row, col} )` - returns `value` at the specified location
  - `indexFor( {row, col} )` - returns the index (number) of the cell in this row+column
  - `rowColFor( index )` - returns a `{row, col}` object for the cell with this index (number)
* Methods for getting neighbour cells
  - `neighbours( {row, col} )` - returns a list of all neighbouring cells to this one (in the form of `{row, col}` objects
  - `neighbourValues( {row, col} )` - returns a list of all neighbour cells' values only.
  - `nextInRow( {row, col} )` - returns the cell to the right after this one, or `undefined` if there are no more in that **row**
  - `nextInCol( {row, col} )` - returns the cell below this one, or `undefined` if there are no more in that **col**
  - `north( {row, col} )` - returns the cell above this one, or `undefined` if there are none
  - `south( {row, col} )` - returns the cell below this one, or `undefined` if there are none
  - `west( {row, col} )` - returns the cell to the left of this one, or `undefined` if there is none
  - `east( {row, col} )` - returns the cell to the right of it, or `undefined` if there is none
* Methods for manipulating the entire grid
  - `fill( value )` - writes the specified value into all cells

## Out of bounds

No methods will throw an exception if `row` or `col` is outside the grid - but simply ignore both values, and return `undefined`.

# Test

Run the tests defined in `test.js` with mocha, by writing
```bash
  npx mocha
```
when in the current folder (`grid`)


