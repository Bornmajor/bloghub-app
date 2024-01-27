import { createContext,useEffect,useState } from "react";
import { useNavigation } from "react-router-dom";
import blogapi from "../api/blogapi";

const MyContext = createContext();

export const MyContextProvider  = (props) =>{
    const [uiTheme,setUiTheme] = useState('#ff8000');
    const [textColor,setTextColor] = useState('black');
    const [isLogin,setIsLogin] = useState(false);
    const [userToken,setUserToken] = useState("");
    const [username,setUsername] = useState("");

    const fetchUserData = async(userToken) =>{
      try{
        const response = await blogapi.post('users/',{
          usr_token:userToken
        })
        if(response.data.code == 1){
         setUsername(response.data.res[0].username);
         console.log(response.data.res[0].username)

        }

      }catch(err){
      console.log(err+" : Error fetch user data ");
      }
    }


    const storeUserToken = (token) => {
      localStorage.setItem("usr_token",token);
      setUserToken(token);
     // setIsLogin(true);

    }

    const retrieveUserToken = () =>{
     const usr_token = localStorage.getItem("usr_token");
      if(usr_token){
        setUserToken(usr_token);
        setIsLogin(true);
        //set username
        fetchUserData(usr_token);
        
      }
    }

  

    useEffect(()=>{
    retrieveUserToken();
    console.log("Token"+userToken)
    },[userToken])
    return(
      <MyContext.Provider value={{uiTheme,setUiTheme,
        textColor,setTextColor,
        storeUserToken,userToken,setUserToken,
        isLogin,setIsLogin,
        username
       
      }}>
        {props.children}
      </MyContext.Provider>
    )
}

export default MyContext;