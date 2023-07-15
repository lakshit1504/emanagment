import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

const Card = ({employees}) => {

//   const [employee, setEmployee]=useState(employees);


  const [isLoading, setIsLoading]=useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false)
    }, 1500);
  },[])
  const handleDelete=(e)=>{
    e.preventDefault()
    setIsLoading(true);
  }

  return (
    <div className='card'>
        { 
          !isLoading ?
          <Link to={`/${employees.id}`} style={{textDecoration:"none", color:"black"}}>
            <div className="cards">
                <div className="cards__overlay">
                <div className="card__title ">{employees?employees.firstName:""} {employees ? employees.lastName: ""}</div>
                
                <div className="card__description">Age:{employees ? employees.age : ""}<br/>
                    Contact:{employees ? employees.contactNumber : ""}<br/>
                </div>
                <div className="btn"><button onClick={handleDelete}>Delete</button> </div>
                </div>
            </div>
        </Link>

          :""}
    </div>
  )
}

export default Card