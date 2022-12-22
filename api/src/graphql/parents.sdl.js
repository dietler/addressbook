export const schema = gql`
  type Parent {
    id: Int!
    family: Family!
    familyId: Int!
    firstName: String!
    sex: String
  }

  type Query {
    parents: [Parent!]! @skipAuth
    parent(id: Int!): Parent @skipAuth
  }

  input CreateParentInput {
    familyId: Int!
    firstName: String!
    sex: String
  }

  input UpdateParentInput {
    familyId: Int
    firstName: String
    sex: String
  }

  type Mutation {
    createParent(input: CreateParentInput!): Parent! @requireAuth
    updateParent(id: Int!, input: UpdateParentInput!): Parent! @requireAuth
    deleteParent(id: Int!): Parent! @requireAuth
  }
`
