import * as api from '../Api/index';
import {FETCHBLOG, CREATEBLOG, DELETE, UPDATE , AUTH, LIKE, FETCH_BLOG_BY_SEARCH} from '../../src/Component/constant/index'




export const getBlogs = () => async (dispatch) => {
  
        try{
            const {data} = await api.getBlogs();
          
            dispatch({type: FETCHBLOG, payload:data})
          
        }catch(err){
            console.log(err);
        }
}

        // searchBlog 
export const getBlogBySearch  = (searchQuery) => async (dispatch) =>{
 
     try {
        

        const {data : {data}} = await api.fetchBlogBySearch(searchQuery);
        dispatch({type: FETCH_BLOG_BY_SEARCH, payload:data})

      
     }catch(e){
         console.log(e);
     }
}



export const createBlog = (blog) => async (dispatch) => {
        try{
                const {data} = await api.createBlog(blog);
               
                dispatch({type:CREATEBLOG, payload:data})
        }catch(err){
            console.log(err);
        }
}
export const deleteBlog = (id) => async (dispatch) => {
    try{
            await api.deleteBlog(id)
            dispatch({type:DELETE, payload:id})
    }catch(err){
        console.log(err);
    }
}

export const updateBlog = (id, blog) => async (dispatch) => {

    try{
        const {data} = await api.updateBlog(id, blog);
        dispatch({type:UPDATE, payload:data});
    }catch(err){
        console.log(err);
    }
}

export const likeBlog = (id) => async (dispatch) => {
    try{
        const {data} = await api.likeBlog(id);
        dispatch({type:LIKE, payload:data});
    }catch(e){
        console.log(e);
    }
}

                            //// SignUp and SingIn Actions   here /// SignUp

                            export const signUp = (formData, history) => async (dispatch) => {

                                try{    
                                            // SignUp
                                            const {data} =  await api.signUp(formData);
                                          
                                            dispatch({type:AUTH, data})
                                            history.push('/')
                                }catch(e){
                                    console.log(e);
                                }
                            }     
                            
                            export const signIn = (formData, history) => async (dispatch) => {
                            
                                try{
                                        // signIn
                                        const {data} = await  api.signIn(formData);
                                       
                                        dispatch({type:AUTH, data})
                                        history.push('/blog')
                                }catch(e){
                                    console.log(e);
                                }
                            }                            



