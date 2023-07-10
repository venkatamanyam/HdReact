import {createAsyncThunk} from "@reduxjs/toolkit";

import { UserServices } from "./UserServices";
import { IUser } from "./IUser";
import { ILogin } from "./ILogin";
import { Ichangepassword } from "./Ichangepassword";
import { Iforgotpassword } from "./Iforgotpassword";
import { Imail } from "./Imail";
import { IOTP} from "./IOTP";
import { ITicket } from "./ITicket";
import { ITicketCategory } from "./ITicketCategory";




/**
 * to get all users
 */
export const getAllUsersAction: any = 
 createAsyncThunk("users/getAllUsersAction",
    async (payload: {}, {rejectWithValue}): Promise<IUser[] | any> => {
				                                                   
       try {
        const response = await UserServices.getAllUsers();
        return response.data;
        } 
		catch (error: any) 
		{
          if (!error.response) 
                                                                                                                                              
		   {  throw error  }
              return rejectWithValue(error.response.data);
																																		   
		   }      
                                                                                                                              
         }
        );



        export const getTicketCategoriesAction: any = 
        createAsyncThunk("users/getTicketCategoriesAction",
           async (payload: {}, {rejectWithValue}): Promise<ITicketCategory[] | any> => {
                                                                          
              try {
               const response = await UserServices.getTicketCategories();
               return response.data;
               } 
               catch (error: any) 
               {
                 if (!error.response) 
                                                                                                                                                     
                  {  throw error  }
                     return rejectWithValue(error.response.data);
                                                                                                                                                  
                  }      
                                                                                                                                     
                }
               );












/**
 *  get a user
 */
export const getUserAction: any = createAsyncThunk("users/getUserAction",
    async (payload: { userId: string }, {rejectWithValue, dispatch}): Promise<IUser | any> => {
        try {
            const {userId} = payload;
            const response = await UserServices.getUser(userId);
            console.log("Hiiiiiiiiiiiiiiiiiii");

               //let s:number=response.data.userId;
               
    
            
			return response.data;

            
			
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });

/**
 * create a user
 */
export const createUserAction: any = createAsyncThunk("users/createUserAction",
    async (payload: { user: IUser}, {rejectWithValue}): Promise<IUser | any> => {
        try {
            const {user} = payload;
            const response = await UserServices.createUser(user);
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });

    





    export const createTicketAction: any = createAsyncThunk("users/createTicketAction",
    async (payload: { ticket: ITicket}, {rejectWithValue}): Promise<IUser | any> => {
        try {
            const {ticket} = payload;
            const response = await UserServices.createTicket(ticket);
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });








/**
 * Update a user
 */
export const updateUserAction: any = createAsyncThunk("users/updateUserAction",
    async (payload: { user: IUser, userId: number }, {rejectWithValue}): Promise<IUser | any> => {
        try {
            const {user,userId} = payload;
            const response = await UserServices.updateUser(user,userId);
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });


/**
 * Delete a user
 */
export const deleteUserAction: any = createAsyncThunk("users/deleteUserAction",
    async (payload: { userId: number }, {rejectWithValue, dispatch}): Promise<{} | any> => {
        try {
            const {userId} = payload;
            const response = await UserServices.deleteUser(userId);
            if (response && response.data) {
                dispatch(getAllUsersAction()); // get the fresh data when the delete was success
            }
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });




    export const signinAction: any = createAsyncThunk("users/signinAction",
    async (payload: { logdata:ILogin }, {rejectWithValue, dispatch}): Promise<ILogin | any> => {
        try {
            
            const {logdata} = payload;

            
            const response = await UserServices.login(logdata);
            
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });



    export const changepasswordAction: any = createAsyncThunk("users/changepasswordAction",
    async (payload: { pwddata:Ichangepassword }, {rejectWithValue, dispatch}): Promise<Ichangepassword | any> => {
        try {
            
            const {pwddata} = payload;

            
            const response = await UserServices.changePwd(pwddata);
            
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });



    export const maildataAction: any = createAsyncThunk("users/maildataAction",
    async (payload: { maildata:Imail}, {rejectWithValue, dispatch}): Promise<Imail | any> => {
        try {
            
            const {maildata} = payload;

            
            const response = await UserServices.sendMaildata(maildata);
            
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });

    export const otpdataAction: any = createAsyncThunk("users/otpdataAction",
    async (payload: { otpdata:IOTP}, {rejectWithValue, dispatch}): Promise<IOTP | any> => {
        try {
            
            const {otpdata} = payload;

            
            const response = await UserServices.sendOTPData(otpdata);
            
            return response.data;
        } catch (error: any) {
            if (!error.response) {
                throw error
            }
            return rejectWithValue(error.response.data)
        }
    });


    

export const signoutAction: any = 
 createAsyncThunk("users/signoutAction",
    async (payload: {}, {rejectWithValue}): Promise<any> => {
				                                                   
       try {
        const response = await UserServices.logout();
        return response;
        } 
		catch (error: any) 
		{
          if (!error.response) 
                                                                                                                                              
		   {  throw error  }
              return rejectWithValue(error.response.data);
																																		   
		   }      
                                                                                                                              
         }
        );
       
    
    
    
    
    export const getCurrentUserAction: any = 
     createAsyncThunk("users/getCurrentUserAction",
        async (payload: {}, {rejectWithValue}): Promise<any> => {
                                                                       
           try {
            const response = await UserServices.getCurrentUser();
            return response;
            } 
            catch (error: any) 
            {
              if (!error.response) 
                                                                                                                                                  
               {  throw error  }
                  return rejectWithValue(error.response.data);
                                                                                                                                               
               }      
                                                                                                                                  
             }
            );



            export const confirmpasswordAction: any = createAsyncThunk("users/confirmpasswordAction",
            async (payload: { confirmpwddata:Iforgotpassword }, {rejectWithValue, dispatch}): Promise<Iforgotpassword | any> => {
                try {
                    
                    const {confirmpwddata} = payload;
        
                    
                    const response = await UserServices.confirmPwd(confirmpwddata);
                    
                    return response.data;
                } catch (error: any) {
                    if (!error.response) {
                        throw error
                    }
                    return rejectWithValue(error.response.data)
                }
            });
        



