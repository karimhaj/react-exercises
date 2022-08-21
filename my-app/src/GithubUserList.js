import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

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
          {userList.map((username) => {
           return(<Link to={`${username}`}>GithubUser: {username}</Link>)
        })}
          <Outlet />

    </>
  )}