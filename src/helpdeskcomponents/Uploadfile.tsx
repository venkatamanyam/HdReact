import { formToJSON } from "axios";
import React, { useState } from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import FileService from "./FileService";
import { IFileData } from "./IFileData";
import { ISEmp } from "./ISEmp";


const Uploadfile:React.FC=()=>{


    const {ticketId} = useParams();

    
   const navigate=useNavigate();


    const[state,setState]=useState<IFileData>({
        
        files:null,
        
        
        
        
    });


    

    const onFileChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        

        console.log("-------------------------------------------------------");
        console.log("-------------------------------------------------------");
               setState({...state,
                   [event.target.name] : event.target.files
                }


        );

        console.log( event.target.files);
        console.log("-------------------------------------------------------");
        console.log("-------------------------------------------------------");
            
    }

    

    const onUpload = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData();

        let data:any;
        
          
        
        
           
            console.log("*************************************************************");
        
               

                data=state.files;
                for (const key of Object.keys(data)) {
                
                    formData.append( 'fil',data[key]);
                
                    
                }
               // formData.append('name',state.ename)
                
        
                
                //formData.append('emplId',String(state.empId));


              console.log(state.files);
               console.log("*************************************************************");
        

    
        
    

        FileService.uploadImage(formData,String(ticketId)).then((response:any) => {
            console.log(response.data);
            setState({ ...state});
              
            if(!response.error)
           navigate("/well")
            
        }).
        catch(error => {
            console.log(error);
        });
    }

    
return(<>



<div className='row'>
                <div className='card col-md-6 offset-md-3 mt-5'>
                    <h3 className='text-center'>Upload Image</h3>
                    <div className='card-body'>
                        <form onSubmit={onUpload}  name="form">
                            
                            <div>
                                <label>Select a file:</label>
                                <input className='mx-2' type='file' name='files' onChange={onFileChange} multiple></input>
                            
                            
                          { /*   <div className="mb-2">
                                 <input
                                        required={true}
                                        name={'ename'}
                                        value={state.ename}
                                        onChange={e => onFileChange(e)}
                                        className="form-control" placeholder="ename" type="text"/>
</div> */}
                            
                            
                            </div>

                           
                            
                            <button className='btn btn-success btn-sm mt-3' type='submit' >Upload</button>
                        </form>
                    </div>
                </div>
            </div>


</>);

}
export default Uploadfile;