// props:{name:string, age:number, isStudent:boolean}
// {name, age, isStudent}:{name:string, age:number, isStudent:boolean}

import type { FC, ReactNode } from "react"

 type UserShape = {
  name:string,
  age:number,
  isStudent:boolean,
  children:ReactNode
}

// interface UserShape  {
//   name:string,
//   age:number,
//   isStudent:boolean
//   children:ReactNode
// }

const  User : FC<UserShape>  =  ({name, age, isStudent, children})=> {
  return (
    <>
    <h2>{name}</h2>
    <h2>{age}</h2>
    <h2>{isStudent}</h2>
    <h1>{children}</h1>
    </>
  )
}

export default User