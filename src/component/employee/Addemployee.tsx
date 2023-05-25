import { type } from "os";
import "../employee/Addemployee.css"
import { useState } from "react";
import { EmployeeInter } from "./EmpInterface";


type props = {
    onbackHandle: () => void 
    onsubmitHandle: (data: EmployeeInter ) => void
    
 }
const Addemployee = (props: props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const { onbackHandle, onsubmitHandle  } = props
    const onfirstHandle = (e:any) => {
        setFirstName(e.target.value);
    }
    const onlastHandle = (e: any) => {
        setLastName(e.target.value);
    }
    const onemailHandle = (e: any) => {
        setEmail(e.target.value);
    }

    const onsubmitBtnHandle = (e: any) => {
     e.preventDefault();
        const data: EmployeeInter = {
            id: new Date().toJSON.toString(),
            FirstName: firstname,
            LastName: lastname,
            Email: email,
          
        }  
        onsubmitHandle(data);
        onbackHandle();
       
    }
    
    return (
        
        
         
       
        
        
        <div className="form-container">
        <div className="addn"> Employee Page</div>
            
            <form onSubmit={onsubmitBtnHandle}>
      <div className="form-group">
        <label>First Name:</label>
                    <input type="text" id="firstname" name="firstname" value={firstname} onChange={onfirstHandle} required/>
      </div>
      <div className="form-group">
        <label>Last Name:</label>
                    <input type="text" id="lastname" name="lastname" value={lastname} onChange={onlastHandle} required/>
      </div>
      <div className="form-group">
        <label>Email:</label>
                    <input type="text" id="email" name="email" value={email} onChange={onemailHandle}  required/>
      </div>
                <div className="btn-save-back">
                <button type="submit" className="btn-save">Save</button>
                    <button type="submit" className="btn-save" onClick={onbackHandle}>back</button>
                </div>
    </form>
  </div>
    )  
}
export default Addemployee;