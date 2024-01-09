import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import User_Home_Sector from './UserContents'
import UserContents from './UserContents'
import AdminContents from './AdminContents'

function App() {
  const [sectorSelect, setSectorSelect] = useState("");
  let contents;

  const memberData = [
    { id : 0, name : "name0", lastName : "last0", position : "pos0" },
    { id : 1, name : "name1", lastName : "last1", position : "pos1" },
    { id : 2, name : "name2", lastName : "last2", position : "pos2" },
    { id : 3, name : "name3", lastName : "last3", position : "pos3" },
    { id : 4, name : "name4", lastName : "last4", position : "pos4" }
  ]
  

  if( sectorSelect === 'User'){
    contents = <UserContents memberData={memberData} />
  } 
  if( sectorSelect === 'Admin' ) {
    contents = <AdminContents memberData={memberData} />
  }

  return (
    <>
      <h2>Generation Thailand</h2>
      <h2>React - Assessment</h2>
      <button onClick={ ()=> setSectorSelect( 'User')} >User Home Sector</button>
      <button onClick={ ()=> setSectorSelect( 'Admin')} >Admin Home Sector</button>
      <br></br>
      {contents}
      
    </>
  )
}

export default App
