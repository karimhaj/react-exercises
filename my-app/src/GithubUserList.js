import { useState } from "react";
import { GithubUser } from "./GithubUser";

export function GithubUserList() {

  const [input, setInput] = useState("")
  const [userList, setUserList] = useState([])

  const handlerUserInput = (event) => {
    setInput(event.target.value)
  }

  const handleUserSearch = () => {
    setUserList((userList)=>[...userList,input])
  }



  return (
    <>
          <input type="text" className="userListInput" onChange={handlerUserInput} />
          <button onClick={handleUserSearch}>SEARCH</button>
          {userList.map((username, index) => {
           return(<li key ={index}><GithubUser username={username}/></li>)
        })}

    </>
  )}