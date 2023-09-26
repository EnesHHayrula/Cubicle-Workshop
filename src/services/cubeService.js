const uniqid = require("uniqid");

const cubes = [
  {
    id: uniqid(),
    name: "Rubik's Cube",
    description:
      "A Rubik's Cube is a famous 3D puzzle of colorful cubes, challenging your mind and dexterity to align all sides in one color.",
    imageUrl:
      "https://5.imimg.com/data5/WI/DO/HV/SELLER-31836682/shengshou-moyo-magic-rubik-cube-3x3-puzzle-educational-toy-500x500-500x500.jpg",
    difficultyLevel: "3",
  },
  {
    id: uniqid(),
    name: "Moyu King Kong ",
    description:
      "Moyu King Kong: The ultimate speed-solving Rubik's Cube for enthusiasts, renowned for its precision and lightning-fast solves.",
    imageUrl:
      "https://kendamabulgaria.bg/wp-content/uploads/2021/04/yong_jun_puzzles_3209_1.jpg",
    difficultyLevel: 6,
  },
  {
    id: uniqid(),
    name: "Skewb",
    description:
      "The Skewb is a mind-bending geometric puzzle with a cube-like shape and irregular rotations, requiring you to align its colors for a solution.",
    imageUrl: "https://static.cubing.co/blog/2020/12/Odd-shaped-twisty.jpg",
    difficultyLevel: 4,
  },
];

exports.create = (cubeData) => {
  const newCube = {
    id: uniqid(),
    ...cubeData,
  };

  cubes.push(newCube);
  return newCube;
};

exports.getAll = (search, from, to) => {
  let filteredCubes = [...cubes];
  if (search) {
    filteredCubes = filteredCubes.filter((cube) =>
      cube.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  if (from) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel >= Number(from)
    );
  }
  if (to) {
    filteredCubes = filteredCubes.filter(
      (cube) => cube.difficultyLevel <= Number(to)
    );
  }

  return filteredCubes;
};

exports.getSingleCube = (id) => {
  return cubes.find((cube) => cube.id === id);
};
