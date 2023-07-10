import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Heading from "./Heading";
import { AppDispatch, RootState, useAppDispatch } from "./store";
import { useSelector } from "react-redux";
import { ITicket } from "./ITicket";
import * as userActions from "./Users.actions";
import * as userReducer from "./Users.slice";
import Spinner from "./Spinner";
import { ITicketCategory } from "./ITicketCategory";


export const CreateTicket:React.FC=(props)=>{

    const dispatch: AppDispatch = useAppDispatch();

    const navigate = useNavigate();


     

    /**
     * get the data from redux
     */
    const userState: userReducer.InitialState = useSelector((store: RootState) => {
        return store[userReducer.userFeatureKey];
    });

    

    const {loading,ticketcategories, error} = userState;

   
        
                const hr=ticketcategories[0].subtype.split(",");
                const infra=ticketcategories[1].subtype.split(",");
                const finance=ticketcategories[2].subtype.split(",");

let type=null;
let options=null;



    
    useEffect(() => {
      dispatch(userActions.getTicketCategoriesAction()).then((response: any) => {

          
        if(!response.error)
        {

            
            const{payload}=response;
            var data=payload
            
            
            console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk");
            console.log(data);
            
            console.log("lllllllllllllllllllllllllllll")
            
           
            

        }


      });
      
    }, []);

    
    
    

    const [ticket, setTicket] = useState<ITicket>({
        
        title: "",
        description:"",
        seveority:"",
        remarks:"",
        maintype:"",
        subtype:""
    
        
    });


    if(ticket.maintype==="HR")
    {
              type=hr;
    }
   else if(ticket.maintype==="INFRA")
    {
        type=infra;
    }
   else  if(ticket.maintype==="FINANCE")
    {
         type=finance;
        
    }


    if(type)
    {options=type.map((el) => <option key={el}>{el}</option>);}


    

    const updateInput = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setTicket({
            ...ticket,
            [event.target.name]: event.target.value
        })
    };

    

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
              
         event.preventDefault();
         
             dispatch(userActions.createTicketAction({ticket: ticket})).then((response: any) => {
            if (!response.error)
             {
                
                const{payload}=response
                const ticketId=payload;

                console.log("-------------------------------------");

                console.log(ticketId);

                console.log("-------------------------------------")
                       navigate(`/fileuploadtask/${ticketId}`);
                  
                       
                       
             }
          });
        
    };



    return (
        <>
              
            {loading && <Spinner/>}
            
            <Heading heading={'Rise Ticket'} color={'text-success'}/>
            {!loading && Object.keys(error).length > 0 && <></>}
            <section className="mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <form onSubmit={e => handleSubmit(e)}    >
                            
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'title'}
                                        value={ticket.title}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Title" type="text"/>
                                </div>
                                
                                
                                
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'description'}
                                        value={ticket.description}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Description" type="text"/>
                                </div>
                                <div className="mb-2">
                                    <input
                                        required={true}
                                        name={'remarks'}
                                        value={ticket.remarks}
                                        onChange={e => updateInput(e)}
                                        className="form-control" placeholder="Remarks" type="text"/>
                                </div>
                                <div className="mb-2">
                                <label>Seveority</label> &nbsp;

<select name={"seveority"} onChange={(event)=>{updateInput(event)} }  value={ticket.seveority}>
    <option value="">---select---</option>
    <option value="high">HIGH</option>
    <option value="low">LoW</option>

</select>
</div>
                                
<div className="mb-2">
<label>MainType</label> &nbsp;

         <select name={"maintype"} onChange={(event)=>{updateInput(event)} }   value={ticket.maintype}>
             <option>---select---</option>
            
             
             {
                ticketcategories.map
                           ((m:ITicketCategory,index:any)=>
                             {
                               return(
             
                                         <option key={m.id} value={m.maintype}>{m.maintype}</option>
                                     )
                             }
                           )
            
             }
        </select>
</div>


<div className="mb-2">
<label>SubType</label> &nbsp;

         <select name={"subtype"} onChange={(event)=>{updateInput(event)} }  value={ticket.subtype}>
             <option value="">---select---</option>
             
             {options}
        </select>
</div>




                                <div className="mb-2">
                                    <input className="btn btn-success me-2" type="submit" value="Create"/>
                                    <Link className="btn btn-dark" to="/nothing">Cancel</Link>
                                </div>
                            </form>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )

}
export default CreateTicket;