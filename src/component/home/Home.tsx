import { useState } from "react";
import "../home/Home.css";
import { EmployeeInter, EmployeeLists, enumPage } from "../employee/EmpInterface";
 import EmpList from "../employee/EmpList";
import Addemployee from "../employee/Addemployee";

const Home = () => {
    const [employeeList, setEmployeeList] = useState(EmployeeLists as EmployeeInter[])
    const [showemployee, setShowEployee] = useState(enumPage.list)
    const addemployeeHandle = () => {
        setShowEployee(enumPage.add);
    }
    const showListPage = () => {
        setShowEployee(enumPage.list)
    }
    const addemployees = (data: EmployeeInter) => {
        setEmployeeList([...employeeList, data]);
        
    }
    return (
        <>
        <article className="header"> 
            <header>

                <h1> Welcome to my simple app</h1>
            </header>
            </article>
           
            <section>
                {showemployee === enumPage.list && (
                    <>
                        <input type="button" value="add employee" onClick={addemployeeHandle} />
                    <EmpList list={employeeList} /></>
                )}
                {showemployee === enumPage.add && <Addemployee onbackHandle={showListPage} onsubmitHandle={addemployees} />}
            
        </section>
            
            </>
        
    );

}
export default Home;