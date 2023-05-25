import { type } from "os";
import "../employee/EmpList.css";
import { EmployeeInter } from "./EmpInterface";


type props = {
    list: EmployeeInter[]
}
const EmpList = (props: props) => {
    const { list } = props;
    return( <div> 
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>action</th> 
            </tr>
            {list.map(employee => {
                // console.log(employee);
                return (
                    <tr key={employee.id}>
                        <td>{`${employee.FirstName} ${employee.LastName}` }</td>
                        <td>{ employee.Email}</td>
                        <td>
                            <div>
                                <input type="button"  value="view" />
                                
                            </div>
                        </td>
                        
                    </tr>
                    
            );

            })}
            
            
           
           
        </table>

    </div>
    )
}
export default EmpList;