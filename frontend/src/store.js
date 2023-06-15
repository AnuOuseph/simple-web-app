/* eslint-disable no-unused-vars */
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension"
import { userLoginReducer ,userRegisterReducer,userAddReducer,userDeleteReducer,userGetReducer,userEditReducer} from "./reducers/userReducer.jsx";

const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userAdd:userAddReducer,
    userDelete:userDeleteReducer,
    userGet:userGetReducer,
    userEdit:userEditReducer,
})

const userInfoStorage = localStorage.getItem('userinfo')
    ? JSON.parse(localStorage.getItem('userinfo'))
    : null;

const userStorage = localStorage.getItem('users')
    ? JSON.parse(localStorage.getItem('users'))
    : null;

const initialState = {
    userLogin : {userinfo:userInfoStorage},
    userGet : {users:userStorage}
}

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;