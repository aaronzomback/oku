module.exports = `
  type User {
    id: Int!
    username: String!
    email: String!
    password: String!
    avatar: String
    Bio: String
    Location: String
  }

  type Haiku {
    id: Int!
    body: String!
    isCollected: Boolean!
    date: Datetime
  }
`