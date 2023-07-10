import axios from "axios"
import { IFileData } from "./IFileData";
import { ISEmp } from "./ISEmp";

const BASE_URL = "http://localhost:9090"

class FileService {
    

     

    uploadImage( formdata:FormData, ticketId:string)
    {
        
        return axios.post(BASE_URL+`/ticket/upload/${ticketId}`, formdata);
           
                
    }
    

}

export default new FileService();