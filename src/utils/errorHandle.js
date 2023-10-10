const { MongooseError } = require("mongoose");

exports.extractErrorMsg = (error) => {
  const isInstanceOfMongoose = error instanceof MongooseError;
  console.log({ isInstanceOfMongoose });
  if (isInstanceOfMongoose) {
    const errors = Object.values(error.errors);
    const messages = errors.map((e) => e.message);
    return messages;
  }
  return [error.message];
};
