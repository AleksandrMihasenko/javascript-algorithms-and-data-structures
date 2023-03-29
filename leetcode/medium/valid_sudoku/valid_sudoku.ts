// Solution 1
// Time complexity: O(m * nlogn)
// Space complexity: O(n * k)

function validSudokuVersionOne(board: string[][]): boolean {
  const rowsHashMap = new Map();
  const columnsHashMap = new Map();
  const boxesHashMap = new Map();
  const numberOfCells = 81;
  
  for (let i = 0; i < numberOfCells; i++) {
    const itemRowPosition = Math.floor(i / 9);
    const itemColumnPosition = Math.floor(i % 9);
    const itemBoxPosition = Math.floor(itemRowPosition / 3) * 3 + Math.floor(itemColumnPosition / 3);
    
    const cell = board[itemRowPosition][itemColumnPosition];
    
    if (cell === '.') continue;
    
    if (!rowsHashMap.has(itemRowPosition)) rowsHashMap.set(itemRowPosition, new Set());
    if (!columnsHashMap.has(itemColumnPosition)) columnsHashMap.set(itemColumnPosition, new Set());
    if (!boxesHashMap.has(itemBoxPosition)) boxesHashMap.set(itemBoxPosition, new Set());
    
    if (rowsHashMap.get(itemRowPosition).has(cell)) return false;
    if (columnsHashMap.get(itemColumnPosition).has(cell)) return false;
    if (boxesHashMap.get(itemBoxPosition).has(cell)) return false;
    
    rowsHashMap.get(itemRowPosition).add(cell);
    columnsHashMap.get(itemColumnPosition).add(cell);
    boxesHashMap.get(itemBoxPosition).add(cell);
  }
  
  return true;
}

const testBoardOne =
  [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
  ];

const testBoardTwo = [
  ['8', '3', '.', '.', '7', '.', '.', '.', '.'],
  ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
  ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
  ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
  ['4', '.', '.', '8', '.', '3', '.', '.', '1'],
  ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
  ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
  ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
  ['.', '.', '.', '.', '8', '.', '.', '7', '9'],
]

console.log(validSudokuVersionOne(testBoardOne));
console.log(validSudokuVersionOne(testBoardTwo));
