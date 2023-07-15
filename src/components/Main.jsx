import React, {useEffect, useState} from "react"
import {AiOutlineSearch} from "react-icons/ai"
import Card from "./Card"

const Main = () => {
    const [employee, setEmployee] = useState([])
    const [query, setQuery] = useState("")
    console.log(query)
    const getData = async ()=> {
        const url = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001"; 
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setEmployee(parsedData)
        

    }
      useEffect(() => {
        getData();
      }, []);
  return (
    <div className='main'>
        <div className="wrap">
            <div className="search">
                        <input type="text" onChange={(e)=>setQuery(e.target.value)} className="searchTerm" placeholder="Whom are you looking for?"/>
                        <button type="submit" className="searchButton">
                            <AiOutlineSearch/>
                    </button>
            </div>
        </div>
        <div className="employee__list">
            <h2 className="list__title m-auto">OFFICE STAFF</h2>
            <div className="list__cards">
                {
                    
                    employee.filter((employees)=>employees.firstName.toLowerCase().includes(query) ||employees.lastName.toLowerCase().includes(query)).map(employees => (
                        <Card key={employees.id} employees={employees} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Main