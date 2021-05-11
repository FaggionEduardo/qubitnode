const { gql } = require('apollo-server-express')

module.exports = gql`
  directive @isAuthenticated on FIELD_DEFINITION

  type AuthResponse {
    token: String!
    user: User!
  }
  type User{
    id: ID!
    name: String!
    login: String!
    
  }
  type PaginateUser {
    docs:[User!]
    pages:Int!
    total:Int!
  }
  type News{
    id: ID!
    date: String!
    text: String!
    urlname: String
    url: String
    imagename: String
    image64: String
  }
  type PaginateNews {
    docs:[News!]
    pages:Int!
    total:Int!
  }
  type Opening{
    id: ID!
    title:String!
    description:String!
    link:String!
    minqualifications:String!
    prefqualifications:String!
  }
  type PaginateOpening {
    docs:[Opening!]
    pages:Int!
    total:Int!
  }
  type Course{
    id: ID!
    title:String!
    cod:String!
    description:String!
    period:String!
    link:String
  }
  type PaginateCourse {
    docs:[Course!]
    pages:Int!
    total:Int!
  }
  type Talk{
    id: ID!
    year:String!
    location:String!
    text:String!
    link:String!
  }
  type PaginateTalk{
    docs:[Talk!]
    pages:Int!
    total:Int!
  }
  type Book{
    id: ID!
    title:String!
    link:String!
  }
  type PaginateBook {
    docs:[Book!]
    pages:Int!
    total:Int!
  }
  type These{
    id: ID!
    title:String!
    link:String!
  }
  type PaginateThese{
    docs:[These!]
    pages:Int!
    total:Int!
  }
  type Media{
    id: ID!
    title:String!
    link:String!
  }
  type PaginateMedia{
    docs:[Media!]
    pages:Int!
    total:Int!
  }
  type Publication{
    id: ID!
    title:String!
    description:String!
    linknames:String!
    links:String!
    imagename:String!
    image64:String!
  }
  type PaginatePublication{
    docs:[Publication!]
    pages:Int!
    total:Int!
  }
  type Member{
    id: ID!
    name:String!
    email:String!
    acting:String!
    formation:String
    linknames:String
    links:String
    profile64:String!
  }
  type PaginateMember {
    docs:[Member!]
    pages:Int!
    total:Int!
  }
  type Upcoming{
    id: ID!
    year:String!
    location:String!
    text:String!
    link:String!
  }
  type PaginateUpcoming{
    docs:[Upcoming!]
    pages:Int!
    total:Int!
  }
  type Project{
    id: ID!
    title:String!
    description:String!
    linknames:String
    links:String
    imagename:String!
    image64:String!
    members:String!
  }
  type PaginateProject{
    docs:[Project!]
    pages:Int!
    total:Int!
  }
  type Query {

    paginateUsers(page:Int!,limit:Int!): PaginateUser!
    users: [User!]
    user(id:ID!): User!

    paginateNews(page:Int!,limit:Int!): PaginateNews!
    news: [News!]
    oneNews(id:ID!): News!

    paginateOpenings(page:Int!,limit:Int!): PaginateOpening!
    openings: [Opening!]
    opening(id:ID!): Opening!

    paginateCourses(page:Int!,limit:Int!): PaginateCourse!
    courses: [Course!]
    course(id:ID!): Course!

    paginateTalks(page:Int!,limit:Int!): PaginateTalk!
    talks: [Talk!]
    talk(id:ID!): Talk!

    paginateBooks(page:Int!,limit:Int!): PaginateBook!
    books: [Book!]
    book(id:ID!): Book!

    paginateTheses(page:Int!,limit:Int!): PaginateThese!
    theses: [These!]
    these(id:ID!): These!

    paginateMedias(page:Int!,limit:Int!): PaginateMedia!
    medias: [Media!]
    media(id:ID!): Media!

    paginatePublications(page:Int!,limit:Int!): PaginatePublication!
    publications: [Publication!]
    publication(id:ID!): Publication!

    paginateMembers(page:Int!,limit:Int!): PaginateMember!
    members: [Member!]
    member(id:ID!): Member!    

    paginateUpcomings(page:Int!,limit:Int!): PaginateUpcoming!
    upcomings: [Upcoming!]
    upcoming(id:ID!): Upcoming!

    paginateProjects(page:Int!,limit:Int!): PaginateProject!
    projects: [Project!]
    project(id:ID!): Project!

  }

  type Mutation {
    login(login: String!, password: String!): AuthResponse

    createUser(name:String!,login:String!,password:String!):User! 
    updateUser(id:ID!,name:String!,login:String!,password:String):User! @isAuthenticated
    deleteUser(id:ID!):Boolean @isAuthenticated

    createNews(date:String!,text:String!,urlname:String,url:String,imagename:String,image64:String):News! @isAuthenticated
    updateNews(id:ID!,date:String!,text:String!,urlname:String,url:String,imagename:String,image64:String):News! @isAuthenticated
    deleteNews(id:ID!):Boolean @isAuthenticated

    createOpening(title:String!,description:String!,link:String!,minqualifications:String!,prefqualifications:String!):Opening! @isAuthenticated
    updateOpening(id:ID!,title:String!,description:String!,link:String!,minqualifications:String!,prefqualifications:String!):Opening! @isAuthenticated
    deleteOpening(id:ID!):Boolean @isAuthenticated

    createCourse(title:String!,cod:String!,description:String!,period:String!,link:String):Course! @isAuthenticated
    updateCourse(id:ID!,title:String!,cod:String!,description:String!,period:String!,link:String):Course! @isAuthenticated
    deleteCourse(id:ID!):Boolean @isAuthenticated

    createTalk(year:String!,location:String!,text:String!,link:String!):Talk! @isAuthenticated
    updateTalk(id:ID!,year:String!,location:String!,text:String!,link:String!):Talk! @isAuthenticated
    deleteTalk(id:ID!):Boolean @isAuthenticated

    createBook(title:String!,link:String!):Book! @isAuthenticated
    updateBook(id:ID!,title:String!,link:String!):Book! @isAuthenticated
    deleteBook(id:ID!):Boolean @isAuthenticated

    createThese(title:String!,link:String!):These! @isAuthenticated
    updateThese(id:ID!,title:String!,link:String!):These! @isAuthenticated
    deleteThese(id:ID!):Boolean @isAuthenticated

    createMedia(title:String!,link:String!):Media! @isAuthenticated
    updateMedia(id:ID!,title:String!,link:String!):Media! @isAuthenticated
    deleteMedia(id:ID!):Boolean @isAuthenticated

    createPublication(title:String!,description:String!,linknames:String,links:String!,imagename:String!,image64:String!):Publication! @isAuthenticated
    updatePublication(id:ID!,title:String!,description:String!,linknames:String!links:String!,imagename:String!,image64:String!):Publication! @isAuthenticated
    deletePublication(id:ID!):Boolean @isAuthenticated

    createMember(name:String!,email:String!,acting:String!,formation:String,links:String,linknames:String,profile64:String!):Member! @isAuthenticated
    updateMember(id:ID!,name:String!,email:String!,acting:String!,formation:String!,links:String!,linknames:String!,profile64:String!):Member! @isAuthenticated
    deleteMember(id:ID!):Boolean @isAuthenticated

    createUpcoming(year:String!,location:String!,text:String!,link:String!):Upcoming! @isAuthenticated
    updateUpcoming(id:ID!,year:String!,location:String!,text:String!,link:String!):Upcoming! @isAuthenticated
    deleteUpcoming(id:ID!):Boolean @isAuthenticated

    createProject(title:String!,description:String!,linknames:String!,links:String!,imagename:String!,image64:String!,members:String!):Project! @isAuthenticated
    updateProject(id:ID!,title:String!,description:String!,linknames:String!,links:String!,imagename:String!,image64:String!,members:String!):Project! @isAuthenticated
    deleteProject(id:ID!):Boolean @isAuthenticated
  }
`
