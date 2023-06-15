/* eslint-disable no-unused-vars */
import { USER_LOGIN_REQUEST,USER_LOGIN_SUCCESS,USER_LOGIN_FAIL,USER_LOGOUT,USER_REGISTER_SUCCESS, USER_REGISTER_FAIL, USER_ADD_SUCCESS, USER_ADD_FAIL,USER_DELETE_SUCCESS,USER_DELETE_FAIL,USER_GET_SUCCESS,USER_GET_FAIL, USER_EDIT_SUCCESS, USER_EDIT_FAIL } from "../constants/userConstants"
export const userLoginReducer =(state={}, action)=>{
    switch(action.type){
        case USER_LOGIN_SUCCESS:
            return {userinfo: action.payload}
        case USER_LOGIN_FAIL:
            return {error: action.payload};
        case USER_LOGOUT:
            return {}
        default:
            return state;
        
    }
}
export const userRegisterReducer =(state={}, action)=>{
    switch(action.type){
        case USER_REGISTER_SUCCESS:
            return {userinfo: action.payload}
        case USER_REGISTER_FAIL:
            return {error: action.payload};
        default:
            return state;
        
    }
}
export const userAddReducer =(state={}, action)=>{
    switch(action.type){
        case USER_ADD_SUCCESS:
            return {userinfo: action.payload}
        case USER_ADD_FAIL:
            return {error: action.payload};
        default:
            return state;
        
    }
}
export const userDeleteReducer =(state={}, action)=>{
    switch(action.type){
        case USER_DELETE_SUCCESS:
            return {userDetails: action.payload}
        case USER_DELETE_FAIL:
            return {error: action.payload};
        default:
            return state;
        
    }
}
export const userGetReducer =(state={}, action)=>{
    switch(action.type){
        case USER_GET_SUCCESS:
            return {users: action.payload}
        case USER_GET_FAIL:
            return {error: action.payload};
        default:
            return state;
        
    }
}
export const userEditReducer =(state={}, action)=>{
    switch(action.type){
        case USER_GET_SUCCESS:
            return {userEdited: action.payload}
        case USER_GET_FAIL:
            return {error: action.payload};
        default:
            return state;
        
    }
}