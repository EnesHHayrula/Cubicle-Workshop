const Cube = require("../models/Cube");

const cubes = [];

exports.create = async (cubeData) => {
  // const cube = new Cube(cubeData)
  //await cube.save()
  const cube = await Cube.create(cubeData);

  return cube;
};

exports.getAll = async (search, from, to) => {
  let filteredCubes = Cube.find().lean();

  // TODO: Filter with mongoose
  if (search) {
    filteredCubes = await filteredCubes.filter((cube) =>
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

exports.getSingleCube = (id) => Cube.findById(id).populate("accessories");

exports.attachAccessory = async (cubeId, accessoryId) => {
  // return Cube.findByIdAndUpdate(cubeId, {
  //   $push: { accessories: accessoryId },
  // });

  const cube = await this.getSingleCube(cubeId);
  cube.accessories.push(accessoryId);
  return cube.save();
};
