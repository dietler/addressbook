export const schema = gql`
  type Child {
    id: Int!
    family: Family!
    familyId: Int!
    firstName: String!
    relativeAge: Int
    sex: String
  }

  type Query {
    children: [Child!]! @requireAuth
    child(id: Int!): Child @requireAuth
  }

  input CreateChildInput {
    familyId: Int!
    firstName: String!
    relativeAge: Int
    sex: String
  }

  input UpdateChildInput {
    familyId: Int
    firstName: String
    relativeAge: Int
    sex: String
  }

  type Mutation {
    createChild(input: CreateChildInput!): Child! @requireAuth
    updateChild(id: Int!, input: UpdateChildInput!): Child! @requireAuth
    deleteChild(id: Int!): Child! @requireAuth
  }
`
