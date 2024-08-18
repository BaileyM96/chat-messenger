import { gql } from "apollo-server-micro";

export const typeDefs = gql`
type User {
  id: ID!
  email: String!
  username: String!
  dateJoined: String!
  receivedFriendRequests: [FriendRequest]
  sentFriendRequests: [FriendRequest]
}

type FriendRequest {
    id: ID!
    from: User!
    to: User!
    status: FriendRequestStatus!
    createdAt: String!
}

type Message {
    id: ID!
    content: String!
    createdAt: String!
    user: User!
}

enum FriendRequestStatus {
    PENDING
    ACCEPTED
    DECLINED
}

type Query {
    me: User
    messages: [Message]
    friendRequests: [FriendRequest]
}

type Mutation {
    signUp(email: String!, username: String!, password: String!): User
    login(username: String!, password: String!): User
    sendMessage(content: String!): Message
    sendFriendRequest(to: ID!): FriendRequest
    acceptFriendRequest(id: ID!): FriendRequest
    declineFriendRequest(id: ID!): FriendRequest
}

type Subscription {
    messageSent: Message
}
`;
