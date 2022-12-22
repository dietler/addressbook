export const schema = gql`
  type Family {
    id: Int!
    lastName: String!
    address: String
    parents: [Parent]!
  }

  type Query {
    families: [Family!]! @requireAuth
    family(id: Int!): Family @requireAuth
  }

  input CreateFamilyInput {
    lastName: String!
    address: String
  }

  input UpdateFamilyInput {
    lastName: String
    address: String
  }

  type Mutation {
    createFamily(input: CreateFamilyInput!): Family! @requireAuth
    updateFamily(id: Int!, input: UpdateFamilyInput!): Family! @requireAuth
    deleteFamily(id: Int!): Family! @requireAuth
  }
`
