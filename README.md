# Easy Call

Declare and call your api in quicly and easily with the power of typescript, and objects! built in top of Axios (you need to configure Axions by yourself to be more flexible).

## Installation

```
npm install @integrables/easy-call --save
```

## Usage


#### POST Request

```Typescript
import { call, PostApiType, apiMethod } from "@integrables/easy-call";

export type User = {
  userId: string,
  username: string
}

//Declare your API
const createUser: PostApiType<User, { created: boolean }> = (request) => ({
    method: apiMethod.post,
    url: "/api/user",
    data: request,
})

//Consume the API
call(createUser({userId: 'er46ft', username: "Sam"}), (response) => {
    console.log(response.data.created)
}, (error) => {
    console.log(error)
})

```

#### GET Request

Api consumer don't have to deal with strings in order to send get parameters from the top level, the consumer of your api only pass a typed object!

```Typescript
import { call, GetApiType, apiMethod } from "@integrables/easy-call";

//Declare your API
const getUser: GetApiType<{ userId: string }, User> = (request, query) => ({
    method: apiMethod.get,
    url: `/api/user/${request.userId}`,
})

//Consume the API
call(getUser({userId: 'er46ft'}), (response) => {
    console.log(response.data.username)
}, (error) => {
    console.log(error)
})
```

#### Query Paramaters

Query Parameters are handled internally, passing a typed object should do the job!

```Typescript
import { call, GetApiType, apiMethod } from "@integrables/easy-call";

//Declare your API
const getUsers: GetApiType<{}, { users: Array<User> }, { page: number, size: number, age: number }> = (request, query) => ({
    method: apiMethod.get,
    url: `/api/users`,
    query: query
})

//Consume the API
call(getUsers({},  {page: 1, size: 10, age: 10}), (response) => {
    console.log(response.data)
}, (error) => {
    console.log(error)
})
```
