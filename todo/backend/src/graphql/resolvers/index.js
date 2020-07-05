const combiner = require('graphql-merge-resolvers');
const todoResolver = require('./todo');

const rootResolver = combiner.merge([
    todoResolver,
]);

module.exports = rootResolver