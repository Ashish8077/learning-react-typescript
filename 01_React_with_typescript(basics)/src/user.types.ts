// ✅ Base user type that can be reused across components, APIs, etc.
export type UserTypes = {
  id:string,
  name:string,
  email:string,
  age:number
}



// ✅ Admin type extends UserTypes and adds admin-specific fields
export type AdminTypes = UserTypes &  {
  role:string,
  lastLogin:Date,
}
