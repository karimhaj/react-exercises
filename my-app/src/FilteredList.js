import React from "react";
import { useMemo } from "react";


export function FilteredList(){

const filterList = useMemo(()=>{

    const list = [
        {name: 'Lucas', id: 1, age: 21 },
        {name: 'Cleo', id: 2, age: 16 },
        {name: 'Nicola', id: 3, age: 30 },
        {name: 'Sara', id: 4, age: 19 },
        {name: 'Jerry', id: 5, age: 24 },
        {name: 'Nathan', id: 6, age: 13 },
        {name: 'Ludovica', id: 7, age: 25 },
        {name: 'Mattia', id: 8, age: 17 },
    ]
      return list.filter(item => item.age > 18)
  
}, [])


    return(<ul>
        {
            filterList.map((item)=>
            <li>name: {item.name} <br/> age:{item.age}<br/> id:{item.id}</li>)
        }
    </ul>)
}