import AdminInfo from "./AdminInfo"
import UserInfo from "./UserInfo"
// import Button from "./Button"

import type { UserTypes ,  AdminTypes } from "./user.types"






function App() {

  const user : UserTypes = {
    id:crypto.randomUUID(),
    name:"Deepak",
    email:"deepak123@gmail.com",
    age:24,
  }


  const admin : AdminTypes = {
    id:crypto.randomUUID(),
    name:"Rahul",
    email:"rahulp9833@gmail.com",
    age:27,
    role:"Admin",
    lastLogin:new Date,
  }


  return (
    <>    
    <AdminInfo admin={admin} />
    <UserInfo user = {user} />
    </>
  )
}

export default App
