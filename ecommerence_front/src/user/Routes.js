import React,{createContext,useReducer,useEffect,useContext} from 'react'
import Menu from '../menuBar/menu'
import {BrowserRouter,Route,Switch, useHistory} from 'react-router-dom'
import signIn from './signIn'
import signUp from './signUp'
import display from '../Mobile/mob'
import home from './Home'
import Login from '../component/Admin/login'
import SignUp from '../component/Admin/signUp'
import addProduct from '../component/addProduct'
import profile from './profile'
import add from '../component/Admin/createProduct'
import Home from '../component/Admin/home'
import {reducer,initialState} from '../reducre/userReducer'

export const UserContext = createContext()

const Routing = ()=>{
    const {state,dispatch} = useContext(UserContext)
    const history = useHistory()
    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem("jwt"))
        if(user){
            dispatch({type:"User",payload:user})
                user.role === 1&&(
                    history.push("/admin/Home")
                )
          
        }
        else{
            history.push("/signIn")
        }
    },[])
    return(
        <Switch>
        <Route path="/signIn" exact component={signIn} />
        <Route path="/signup" component={signUp} />
        <Route path="/profile" component={profile} />
        <Route path="/admin/signUp" component={SignUp} />
        <Route path="/admin/Home" component={Home}/>
        <Route path="/addCat" component={add} />
        <Route path="/addPro" component={addProduct} />
        <Route path="/display" component={display} />
        <Route path="/admin/Login" component={Login} />
        <Route path="/" exact  component={home} />
    </Switch>
    )
}


function Routes(){
    const [state,dispatch] = useReducer(reducer,initialState)
    return(
        <UserContext.Provider value={{state,dispatch}}>
            <BrowserRouter>
        <Menu />
        <Routing />
    </BrowserRouter>
        </UserContext.Provider>
    )
}

export default Routes







