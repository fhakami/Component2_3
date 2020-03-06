// CPCS-324 Algorithms and Data Structures 2
// 2-Dimensional array demo
// 2018, Dr. Muhammad Al-Hashimi

// -----------------------------------------------------------------------
// Implementing a matrix as 2-dim array


// A 2x2 matrix: declare and initialize array of 2 empty arrays
// array will grow as elements are added; be careful though!

var a = [ [], [] ];

a[0][0] = 5;     // a[row][col] 
a[0][1] = 6;
a[1][0] = 7;
a[1][1] = 8;

// print the whole 2-dim array
document.write("<p>", a, "</p>");

// print first row of matrix
document.write("<p>", a[0], "</p>");

// print second row of matrix
document.write("<p>", a[1], "</p>");

// we can have as many columns as we want but only 2 rows
// add 3rd value to 2nd row; still 2-dim array but no longer 2x2 matrix
a[1][2] = 9;
document.write("<p>", a, "</p>");

// add 3rd value to 1st row
a[0][2] = 10;
document.write("<p>", a, "</p>");  // 3-col matrix (still 2 rows)

// the following will break the code; try it (check console tab)
//a[2][0] = 10;  // can't add value to nonexistent third row (indexed 2)



// -----------------------------------------
// build nxn matrix in a 2-dimensional array

// declare an empty array; it will grow as rows are added
var m = [];                     

// add a dimension; for 12-row matrix create 12 arrays as elements inside m
for (var i=0; i < 12; i++)
{
	m[i] = [];
	
	// use m[i][j] notation to add elements inside m[i];
	// to ensure 12x12 matrix, each m[i] should also have exactly
	// 12 elements
	
	
}
	
document.write("<p>", m, "</p>");


// -----------------------------------------
// matrices and tables are 2-dimensional structures,
// for n-dimensional stuff nest array declarations deeper
//
