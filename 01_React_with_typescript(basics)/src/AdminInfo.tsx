import type  { AdminTypes } from "./types"


type AdminInfoProps = {
  admin: AdminTypes
}


const  AdminInfo = function({admin}:AdminInfoProps) {
  console.log(admin)
  return (
    <>
    <h1>Admin Info</h1>
    <p>Role : {admin.role}</p>
    <p>Last login :{admin.lastLogin.toLocaleDateString()} {admin.lastLogin.toLocaleTimeString()}</p>
    </>
  )
}

export default AdminInfo

