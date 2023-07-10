import { ILogin } from "./ILogin";
import {IUser} from "./IUser";
import axios from 'axios';
import { Ichangepassword } from "./Ichangepassword";
import { Iforgotpassword } from "./Iforgotpassword";
import { Imail } from "./Imail";
import { IOTP } from "./IOTP";
import { ITicket } from "./ITicket";
import { ITicketCategory } from "./ITicketCategory";



export class UserServices {
    private static serverUrl: string = `http://localhost:9090`;

    /**
     @usage : to get all users
     @method : GET
     @params : no-params
     @url : http://localhost:9000/users
     */
    public static getAllUsers(): Promise<{ data: IUser[] }> {
        let dataUrl: string = `${this.serverUrl}/users`;
        return axios.get(dataUrl);
    }


    /**
     @usage : to get all TicketCategories
     @method : GET
     @params : no-params
     @url : http://localhost:9000/ticket/allTicketCategories
     */
     public static getTicketCategories(): Promise<{ data: ITicketCategory[]}> {
      let dataUrl: string = `${this.serverUrl}/ticket/allTicketCategories`;
      return axios.get(dataUrl);
  }

   /**
     @usage : get a user
     @method : GET
     @params : no-params
     @url : http://localhost:9000/users/:userId
     */
    public static getUser(userId: string): Promise<{ data: IUser }> {
        let dataUrl: string = `${this.serverUrl}/users/${userId}`;
        return axios.get(dataUrl);
    }

    /**
     @usage : create a user
     @method : POST
     @url : http://localhost:9000/users/
     */
    public static createUser(user: IUser): Promise<{ data: IUser }> {
        
        let dataUrl: string = `${this.serverUrl}/users/save`;

        
        return axios.post(dataUrl,user);
    }



    /**
     @usage : create a ticket
     @method : POST
     @url : http://localhost:9090/
     */
     public static createTicket(ticket: ITicket): Promise<{ data: ITicket }> {
        
      let dataUrl: string = `${this.serverUrl}/ticket/saveticket`;

      
      return axios.post(dataUrl,ticket);
      
  }

    /**
     @usage : Update a user
     @method : PUT
     @url : http://localhost:9090/users/:userId
     */
    public static updateUser(user: IUser, userId: number): Promise<{ data: IUser }> {
        let dataUrl: string = `${this.serverUrl}/users/${userId}`;
        return axios.put(dataUrl, user);
    }

    /**
     @usage : Delete a User
     @method : DELETE
     @params : no-params
     @url : http://localhost:9090/users/:userId
     */
    public static deleteUser(userId: number): Promise<{ data: {} }> {
        let dataUrl: string = `${this.serverUrl}/users/${userId}`;
        return axios.delete(dataUrl);
    }






    public static login (logdata:ILogin){
      
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
      let dataUrl: string = `${this.serverUrl}/users/signin`;
        return axios
          .post(dataUrl, logdata).then((response) => {
            if (response.data) {
              localStorage.setItem("user", JSON.stringify(response.data));
            }
            
            return response.data;

        })
        }


        public static changePwd(changepwd: Ichangepassword) {
        
          let dataUrl: string = `${this.serverUrl}/users/changepassword`;
  
          
          return axios.post(dataUrl,changepwd);
      }


      

      public static sendMaildata(mailoruseriddata: Imail) {
        
        let dataUrl: string = `${this.serverUrl}/users/validatemailoruserid`;

        
        return axios.post(dataUrl,mailoruseriddata);
    }



    public static sendOTPData(otpdata: IOTP) {
        
      let dataUrl: string = `${this.serverUrl}/users/validateotp`;

      
      return axios.post(dataUrl,otpdata);
  }






public static confirmPwd(confirmpwddata: Iforgotpassword) {
        
        let dataUrl: string = `${this.serverUrl}/users/confirmpwd`;

        
        return axios.post(dataUrl,confirmpwddata);
    }
        
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      
      public static   logout () {
            localStorage.removeItem("user");
            
          };
          
          
      public static  getCurrentUser = () => {
           return localStorage.getItem("user");
          };

         

} 