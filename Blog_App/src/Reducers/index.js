
import { AUTH, LOGOUT,FETCHBLOG}   from '../Component/constant/index'
export const blogs =(blogs=[], action)=>{
        switch(action.type){
            case FETCHBLOG :
               return action.payload;
    
            case "FETCH_BLOG_BY_SEARCH": 
             return action.payload;
           
             
            case "DELETE" :return blogs.filter((blog)=> blog._id !== action.payload);
            case "UPDATE" :
            case "LIKE" :                
                 return blogs.map((blog)=> blog._id === action.payload._id ? action.payload : blog);
            case "CREATEBLOG" : return [ ...blogs, action.payload];
          
            default : return blogs
         
        }
}




 export const  authReducer = (blogs = { authData: null }, action) => {
  switch(action.type){
    case AUTH : 
       localStorage.setItem("profile", JSON.stringify({...action?.data}))
       return { ...blogs, authData: action?.data}
      // console.log( "I'm from reducers ", action?.data);
      // return blogs;
    case LOGOUT: 
    localStorage.clear();
  
    return {...blogs, authData: null};
 
    default : return blogs
}
};
