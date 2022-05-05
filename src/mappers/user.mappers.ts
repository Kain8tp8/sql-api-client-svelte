import User from "../model/user.model"

export default function (body: any): User {
  return {
    id:       0,
    name:     body.name,
    surname:  body.surname,
    gender:   body.gender,
    email:    body.email,
    possword: body.possword
  }
}
