//5x5

const nonograms = [
  {
    data: [
      [1, 0, 0, 0, 1],
      [0, 1, 0, 1, 0],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
      [1, 0, 0, 0, 1],
    ],
    rowHints: [[1, 1], [1, 1], [1], [1, 1], [1, 1]],
    colHints: [[1, 1], [1, 1], [1], [1, 1], [1, 1]],
    name: '5x5-Cross',
    size: '5x5',
  },

  {
    data: [
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 0, 0, 1],
    ],
    rowHints: [[1], [1], [5], [5], [1, 1]],
    colHints: [[3], [2], [4], [2], [3]],
    name: '5x5-Spaceship',
    size: '5x5',
  },
  {
    data: [
      [1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0],
      [1, 0, 0, 0, 1],
      [0, 1, 1, 1, 0],
    ],
    rowHints: [[2, 2], [2, 2], [], [1, 1], [3]],
    colHints: [[2, 1], [2, 1], [1], [2, 1], [2, 1]],
    name: '5x5-Smile',
    size: '5x5',
  },
  {
    data: [
      [0, 0, 1, 0, 0],
      [1, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0],
    ],
    rowHints: [[1], [1, 1, 1], [5], [1, 1, 1], [1]],
    colHints: [[3], [1], [5], [1], [3]],
    name: '5x5-Trident',
    size: '5x5',
  },
  {
    data: [
      [0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 0],
      [0, 0, 1, 0, 0],
    ],
    rowHints: [[], [5], [5], [1], [1]],
    colHints: [[2], [2], [4], [2], [2]],
    name: '5x5- Mushroom',
    size: '5x5',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 0, 0, 0, 0, 0, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1],
    ],
    rowHints: [[], [], [4, 1], [4, 1], [4, 1], [9], [9], [9], [2, 2], [2, 2]],
    colHints: [[3], [8], [8], [6], [3], [3], [3], [3], [5], [8]],
    name: '10x10-Dog',
    size: '10x10',
  },
  {
    data: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
    ],
    rowHints: [[4], [6], [8], [10], [1, 2, 1], [1, 2, 1], [8], [8], [3, 3], [3, 3]],
    colHints: [[1], [8], [3, 4], [4, 4], [8], [8], [4, 4], [3, 4], [8], [1]],
    name: '10x10-House',
    size: '10x10',
  },
  {
    data: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    rowHints: [[4, 4], [1, 2, 2, 1], [2, 2], [2, 2], [8], [10], [2, 4, 2], [2, 4, 2], [3, 3], [6]],
    colHints: [[2, 3], [1, 5], [6, 2], [10], [4, 1], [4, 1], [10], [6, 2], [1, 5], [2, 3]],
    name: '10x10-Rabbit',
    size: '10x10',
  },
  {
    data: [
      [1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
      [1, 0, 1, 1, 0, 0, 1, 1, 0, 1],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 0, 1, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [1, 1, 0, 1, 1, 1, 1, 0, 1, 1],
      [0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
    ],
    rowHints: [[2], [2], [1, 6, 1], [10], [8], [8], [8], [10], [1, 6, 1], [1, 4, 1]],
    colHints: [[2, 3], [5], [7], [8], [10], [10], [8], [7], [5], [2, 3]],
    name: '10x10-Turtle',
    size: '10x10',
  },
  {
    data: [
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0],
      [1, 1, 0, 1, 1, 0, 1, 0, 1, 1],
    ],
    rowHints: [[4], [6], [2, 2, 2], [10], [10], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [1, 1, 1, 1], [2, 2, 1, 2]],
    colHints: [[2, 1], [8], [4], [2, 7], [5, 1], [5], [2, 7], [4], [8], [2, 1]],
    name: '10x10-UFO',
    size: '10x10',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    ],
    rowHints: [
      [4],
      [6],
      [2, 2, 2],
      [10],
      [10],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1],
      [2, 2, 1, 2],
      [2, 2, 1, 2],
      [2, 2, 1, 2],
      [2, 2, 1, 2],
      [2, 2, 1, 2],
      [2, 2, 1, 2],
    ],
    colHints: [[2, 1], [8], [4], [2, 7], [5, 1], [5], [2, 7], [4], [8], [2, 1], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 1, 2], [2, 2, 1, 2]],
    name: '15x15-Umbrella',
    size: '15x15',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0],
      [0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    ],
    rowHints: [[3], [5], [4, 3], [7], [5], [3], [1, 5], [3, 9], [11, 2], [11, 2], [5, 3, 3], [5, 3], [9], [4], [4]],
    colHints: [[4], [4], [5], [5], [5], [6], [3, 3], [2, 4, 2], [4, 5, 3], [11, 3], [10, 2, 1], [2, 5, 3, 1], [4, 6], [2, 4], [1]],
    name: '15x15-Duck',
    size: '15x15',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    rowHints: [[4], [3], [5], [7], [9], [11], [13], [8], [1], [2, 1, 4], [15], [14], [12], [10], [15]],
    colHints: [
      [1, 1],
      [1, 2, 1],
      [2, 4, 1],
      [3, 6],
      [4, 5],
      [5, 5],
      [6, 5],
      [15],
      [8, 5],
      [1, 6, 1],
      [1, 5, 5],
      [4, 6],
      [3, 6],
      [2, 4, 1],
      [1, 3, 1],
    ],
    name: '15x15-Ship',
    size: '15x15',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
    ],
    rowHints: [[], [], [], [], [10], [13], [14], [10, 2], [10, 2], [11, 2], [8, 3], [8], [6], [4], [11]],
    colHints: [[6, 1], [8, 1], [9, 1], [11], [11], [11], [11], [8, 1], [8, 1], [6, 1], [2, 2, 1], [2, 1], [2, 2], [4], [2]],
    name: '15x15-Cup',
    size: '15x15',
  },
  {
    data: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0],
      [1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ],
    rowHints: [[3], [1, 5], [3, 7], [11, 2], [15], [9, 4], [6, 3], [4, 2], [9], [7], [1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 5, 1, 1], [15], [15]],
    colHints: [
      [5, 2],
      [5, 4],
      [6, 2],
      [6, 4],
      [7, 2],
      [7, 3],
      [4, 7],
      [4, 2, 3],
      [5, 7],
      [5, 2, 3],
      [10, 2],
      [3, 5, 2],
      [6, 4],
      [4, 2],
      [1, 4],
    ],
    name: '15x15-Bird',
    size: '15x15',
  },
];

export { nonograms };
