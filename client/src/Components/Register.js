import {Link} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default function Regist(){
                
         const handlesubmit = async(event) => {
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = {headers : {"enctype" : "multipart/form-data"}};

        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;
        let password2 = document.getElementById('password2').value;
        let phone_no = document.getElementById('phone_no').value;

         if(name === '' || name === null){
            alert('please enter the name');
        }
        else if(email === '' || email === null){
            alert('please enter the email');
        }
        else if(password === '' || password === null){
            alert(' please enter the password');
        }
        else if(password2 === '' || password2 === null){
            alert('please re enter the  password');
        }
        else if(phone_no === '' || phone_no === null){
            alert('please enter the phone number');
        }
        else{
                await axios.post('http://localhost:3004/Register',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('Error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Inserted'){
                        alert('Register Successfully');
                        window.location.href="./";
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.reload();
                  })

              }
            }
    return(
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-4">&nbsp;</div>
                    <div className="col-lg-4 bg- back">
                    <form onSubmit={handlesubmit} > 
                        <div className="table-responsive ">
                        <table className="table table-bordered mt-3">
                            <thead>
                            <tr>
                                <th colSpan={2}>Register</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td >Name</td>
                                    <td>
                                        <input type="text" id="name" name="name" className="form-control p-2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input type="email" id="email" name="email" className="form-control p-2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>password</td>
                                    <td>
                                        <input type="password" id="password" name="password" className="form-control p-2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>confirm password</td>
                                    <td>
                                        <input type="password" id="password2" name="password2" className="form-control p-2"/>
                                    </td>
                                </tr>
                                <tr>
                                    <td>Phone no</td>
                                    <td>
                                        <input type="number" id="phone_no" name="phone_no" className="form-control p-2"/>
                                    </td>
                                </tr>
                                <tr>
                                     <td>
                                         <Link to="/Login">
                                            <button type="button" name="data_change" id="data_change" className="btn btn-success">
                                             Login-in   </button></Link>
                                     </td>
                                     <td>
                                        <button type="submit" name="data_submit" id="data_submit" className="btn btn-warning">
                                         Register </button>
                                    </td>
                               </tr>
                            </tbody>
                            </table>
                        </div>
                        </form>

                    </div>
                    <div className="col-lg-4">&nbsp;</div>
                </div>

            </div>



        </>



    );

    
}