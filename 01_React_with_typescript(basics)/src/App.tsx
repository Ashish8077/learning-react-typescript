import AdminInfo from "./AdminInfo"
import UserInfo from "./UserInfo"
// import Button from "./Button"

import type { UserTypes ,  AdminTypes } from "./types"






function App() {

  const user : UserTypes = {
    id:crypto.randomUUID(),
    name:"Ashish",
    email:"ashish1@gmail.com",
  }


  const admin : AdminTypes = {
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
