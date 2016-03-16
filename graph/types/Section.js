import ApiResourceType from '../builders/ApiResourceType';
import requireType from '../helpers/requireType';
import * as types from './standard';

const sectionType = new ApiResourceType('Section', () => ({
  attributes: {
    name: new types.GraphQLNonNull(types.GraphQLString),
    default_asset_type: new types.GraphQLNonNull(types.GraphQLString),
    number_of_assets: new types.GraphQLNonNull(types.GraphQLInt),
    position: new types.GraphQLNonNull(types.GraphQLInt),
    ...require('./concerns/timestamps')
  },
  relatesToOne: {
    brandfolder: requireType('Brandfolder')
  },
  relatesToMany: {
    assets: requireType('Asset'),
  },
  connectionArgs: {
    has_assets: types.GraphQLBoolean
  }
}));

module.exports = sectionType;
