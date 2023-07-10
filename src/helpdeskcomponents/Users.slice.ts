import {createSlice, isRejectedWithValue, SerializedError} from "@reduxjs/toolkit";

import * as userActions from "./Users.actions";
import { ToastContainer, toast } from 'react-toastify';
import { IUser} from "./IUser";
import { ITicketCategory } from "./ITicketCategory";

export const userFeatureKey = "userFeature";

export interface InitialState {
    loading: boolean;
    error: SerializedError;
    users: IUser[];
    user: IUser;
    ticketcategories:ITicketCategory[];
    
}

const initialState: InitialState = {
    loading: false,
    error: {} as SerializedError,
    users: [] as IUser[],
    user: {} as IUser,
    ticketcategories:[] as ITicketCategory[] ,
    
};

export const userSlice = createSlice({
    name: 'userSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        // getAllusersAction
        builder.addCase(userActions.getAllUsersAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getAllUsersAction.fulfilled, (state, action) => {
            state.loading = false;
            state.users = action.payload;
        }).addCase(userActions.getAllUsersAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("Unable to get users from server");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })




// getAllticketcategoriesAction
builder.addCase(userActions.getTicketCategoriesAction.pending, (state, action) => {
    state.loading = true;
}).addCase(userActions.getTicketCategoriesAction.fulfilled, (state, action) => {
    state.loading = false;
    state.ticketcategories = action.payload;
}).addCase(userActions.getTicketCategoriesAction.rejected, (state, action) => {
    state.loading = false;
    toast.error("Unable to get tickets from server");
    if (isRejectedWithValue(action)) {
        state.error = action.error
    }
})










        // getUserAction
        builder.addCase(userActions.getUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getUserAction.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload;
        }).addCase(userActions.getUserAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("Unable to get the user from server");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })

        // createUserAction
        builder.addCase(userActions.createUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.createUserAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("User Creation is Success!");
        }).addCase(userActions.createUserAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("User Creation is Failed!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })

        // updateUserAction
        builder.addCase(userActions.updateUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.updateUserAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("User Update is Success!");
        }).addCase(userActions.updateUserAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("User Update is Failed!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })

        // deleteUserAction
        builder.addCase(userActions.deleteUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.deleteUserAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("User Delete is Success!");
        }).addCase(userActions.deleteUserAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("User Delete is Failed!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })



         //signin Action
        builder.addCase(userActions.signinAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.signinAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("Login Success!");
        }).addCase(userActions.signinAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("Invalid Credentials!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })


        //signout Action

        builder.addCase(userActions.signoutAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.signoutAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success("Logout Success!");
        }).addCase(userActions.signoutAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("Logout Failed!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })
        



         //CurrentUserAction

         builder.addCase(userActions.getCurrentUserAction.pending, (state, action) => {
            state.loading = true;
        }).addCase(userActions.getCurrentUserAction.fulfilled, (state, action) => {
            state.loading = false;
            toast.success(" Success!");
        }).addCase(userActions.getCurrentUserAction.rejected, (state, action) => {
            state.loading = false;
            toast.error("Failed!");
            if (isRejectedWithValue(action)) {
                state.error = action.error
            }
        })


 











          }
})
