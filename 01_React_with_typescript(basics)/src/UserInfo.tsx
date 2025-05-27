import type  { UserTypes } from "./types"

type UserInfoProp = {
  user:UserTypes
}

const UserInfo = ({user}:UserInfoProp) => {
  return (
    <>
    <h1>User Info</h1>
    <p>Id: {user.id}</p>
    <p>Name: {user.name}</p>
    <p>Email : {user.email}</p>
    </>
  )
}

export default UserInfo