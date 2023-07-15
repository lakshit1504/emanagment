import './styles/App.scss';
import "./styles/navbar.scss"
import "./styles/sidebar.scss"
import "./styles/main.scss"
import "./styles/employeeList.scss"
import "./styles/card.scss"
import "./styles/detail.scss"



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import EmployeeDetail from './components/EmployeeDetail';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route exact path="/:id" element={<EmployeeDetail/>} />
        </Routes>
        <Sidebar/>
        </BrowserRouter>
      </div>
  );
}

export default App;
