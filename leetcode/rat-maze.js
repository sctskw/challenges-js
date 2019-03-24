/**
 Given a n x n maze as a two dimensional array,
 where 0 represents a wall and 1 represents a path,
 find the number of possible paths from (0, 0) to (n, n) only
 being allowed to traverse down and right.

 example maze:

  [1, 1, 0],
  [0, 1, 1],
  [0, 1, 1]

  [1, 1, 1, 1, 1],
  [0, 1, 0, 0, 1],
  [0, 1, 1, 1, 1],
  [0, 0, 1, 0, 1],
  [0, 1, 1, 1, 1]

**/

function findPath (maze, path, solutions) {
  if (!path) return false;

  let [row, column] = path[path.length - 1]; // get point in maze

  // hit the end of the maze
  if (row === maze.length - 1 && column === maze[row].length - 1) {
    solutions.num++;
    return path.splice(0, path.length - 2); // mutate
  }

  // right
  if (maze[row][column + 1] === 1) {
    path.push([row, column + 1]);
    path = findPath(maze, path, solutions);
  }

  // down
  if (maze[row + 1] && maze[row + 1][column] === 1) {
    path.push([row + 1, column]);
    path = findPath(maze, path, solutions);
  }

  return path;
}

function findCounts (maze) {
  let counts = {'0:0': 1};
  let size = [maze.length - 1, maze[0].length - 1].join(':');

  for (let row = 0; row < maze.length; row++) {
    for (let col = 0; col < maze[row].length; col++) {
      let value = maze[row][col];
      let key = `${row}:${col}`;

      // hit a wall. skip
      if (value === 0) continue;
      if (!counts[key]) counts[key] = 0;

      // opposite of right only moves
      let left = counts[`${row}:${col - 1}`] || 0;

      // opposite of down only moves
      let up = counts[`${row - 1}:${col}`] || 0;

      counts[key] += left + up;
    }
  };

  return counts[size];
}

function solver (maze) {
  let solutions = {num: 0};

  // findPath(maze, [[0, 0]], solutions);

  solutions.num = findCounts(maze);

  return solutions.num;
}

module.exports = solver;
