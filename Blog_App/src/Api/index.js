import axios from 'axios' ;


const API = axios.create({ baseURL:"https://modern-blog-app.herokuapp.com/"});
API.interceptors.request.use((req) => {
  if (localStorage.getItem('profile')) {
    req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
  }

  return req;
});


export const  getBlogs = () => API.get(`/blogs`);
export const fetchBlogBySearch = (searchQuery) => API.get(`/blogs/search?searchQuery=${searchQuery.search || 'none'}&tags=${searchQuery.tags}`)
export const createBlog = (post) => API.post('/blogs', post);
export const deleteBlog = (id) => API.delete(`/blogs/${id}`);
export const updateBlog = (id,blog) => API.patch(`/blogs/${id}`, blog);
export const likeBlog = (id) => API.patch(`/blogs/${id}/likeBlog`)

export const signIn = (formData) => API.post('/users/signin', formData);
export const signUp = (formData) => API.post('/users/signup', formData);
