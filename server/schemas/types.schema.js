module.exports = `
  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    avatar: String
    Bio: String
    Location: String
    Collection: [Haiku]!
  }

  type Haiku {
    id: Int!
    body: String!
    isCollected: Boolean!
    date: Datetime
  }
`