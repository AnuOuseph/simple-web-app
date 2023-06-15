import { USER_LOGIN_SUCCESS,USER_LOGIN_FAIL, USER_LOGOUT,USER_REGISTER_SUCCESS,USER_REGISTER_FAIL, USER_ADD_SUCCESS,USER_ADD_FAIL,USER_DELETE_SUCCESS,USER_DELETE_FAIL,USER_GET_SUCCESS,USER_GET_FAIL, USER_EDIT_SUCCESS, USER_EDIT_FAIL} from "../constants/userConstants"
import axios from 'axios'

export const login = (email, password)=> async(dispatch)=>{
    try{
        const config = {
            headers: {
              "Content-type":"application/json"
            }
          }
          const {data} = await axios.post("http://localhost:5000/api/users/login", {email,password}, config)

          dispatch({type: USER_LOGIN_SUCCESS, payload:data})

          localStorage.setItem("userinfo",JSON.stringify(data))
        //   navigate('/')
        //   setError("")
          console.log(data);
          console.log("nooooooooooooooo");
    }catch(error){
        dispatch({type: USER_LOGIN_FAIL, payload: error.message})
        // setError("Invalid Email or Password")
      console.log(error.message)
    }
}

export const logout = () => async (dispatch) => {
  localStorage.removeItem('userinfo');
  dispatch({type : USER_LOGOUT})
}

export const register = (name,email,phone,password) => async(dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    console.log("jhsgdyufwueu");
    const {data} = await axios.post("http://localhost:5000/api/users", {name,email,phone,password}, config)

    dispatch({type: USER_REGISTER_SUCCESS, payload:data})


    // dispatch({type: USER_LOGIN_SUCCESS, payload:data})
    
    // localStorage.setItem("userinfo",JSON.stringify(data))

  } catch (error) {
    dispatch({type: USER_REGISTER_FAIL, payload:error.message})
    console.log(error.message)
  }
}

export const add = (name,email,phone,password) => async(dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    console.log("jhsgdyufwueu");
    const {data} = await axios.post("http://localhost:5000/api/admin/add-user", {name,email,phone,password}, config)

    dispatch({type: USER_ADD_SUCCESS, payload:data})

  } catch (error) {
    dispatch({type: USER_ADD_FAIL, payload:error.message})
    console.log(error.message)
  }
}

export const deleteUser = (_id) => async(dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    console.log("jhsgdyufwueu");
    const {data} = await axios.post("http://localhost:5000/api/admin/delete-user", {_id}, config)

    dispatch({type: USER_DELETE_SUCCESS, payload:data})

  } catch (error) {
    dispatch({type: USER_DELETE_FAIL, payload:error.message})
    console.log(error.message)
  }
}

export const getUser = () =>async(dispatch) =>{
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    console.log("jhsgdyufwueu");
    const {data} = await axios.get("http://localhost:5000/api/admin/dashboard", config)

    dispatch({type: USER_GET_SUCCESS, payload:data})

  } catch (error) {
    dispatch({type: USER_GET_FAIL, payload:error.message})
    console.log(error.message)
  }
}

export const edit = (_id,nameEdit,emailEdit,phoneEdit) => async(dispatch) => {
  try {
    const config = {
      headers: {
        "Content-type":"application/json"
      }
    }
    const {data} = await axios.post("http://localhost:5000/api/admin/edit-user", {_id,nameEdit,emailEdit,phoneEdit}, config)

    dispatch({type: USER_EDIT_SUCCESS, payload:data})

  } catch (error) {
    dispatch({type: USER_EDIT_FAIL, payload:error.message})
    console.log(error.message)
  }
}