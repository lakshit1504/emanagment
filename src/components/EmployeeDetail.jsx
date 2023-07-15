import React,{useState ,useEffect} from "react"
import { Link, useParams } from "react-router-dom"

const EmployeeDetail = () => {
    const [employee, setEmployee] = useState([])
    const { id } = useParams()
    const getData = async ()=> {
        const url = `https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${id}`; 
        
        let data = await fetch(url);
        let parsedData = await data.json()
        setEmployee(parsedData[0])
        console.log(employee)

    }
      useEffect(() => {
        getData();
      }, []);
  return (
    <div className='detail'>
                      <h1>{employee.firstName ? employee.firstName:" "} {employee.lastName ? employee.lastName:" "}</h1><br/>
                      <h3>Age: {employee.age ? employee.age:" "}</h3><br/>
                      <h3>Contact: {employee.contactNumber ? employee.contactNumber:" "}</h3><br/>
                      <h3>Email: {employee.email ? employee.email:" "}</h3><br/>
                      <h3>Address: {employee.address ? employee.address:" "}</h3><br/>
                      {
                            employee.imageUrl?
                                <img src={ employee.imageUrl} alt="user image" />:""
                      }
                      <br />
                      <Link to="/" >Go To Dashboard</Link>
    </div>
  ) 
}

export default EmployeeDetail