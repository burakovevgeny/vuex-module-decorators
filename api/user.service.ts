import { $context } from "~/utils/global-accessor";

export interface IUserResponse {
  "id": number,
  "name": string,
  "username": string,
  "email": string,
  "address": {
    "street": string,
    "suite": string,
    "city": string,
    "zipcode": string,
    "geo": {
      "lat": string,
      "lng": string
    }
  },
  "phone": string,
  "website": string,
  "company": {
    "name": string,
    "catchPhrase": string,
    "bs": string
  }
}


export class User {
  public async getUser() {
    return $context.$axios.$get<IUserResponse>('https://jsonplaceholder.typicode.com/users/1')
  }
}
