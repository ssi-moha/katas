module.exports = {
  transform: {
    '^.+\\.[t|j]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts'],
  roots: ['./src'],
  modulePaths: ['./src'],
  moduleDirectories: ['node_modules'],
};
