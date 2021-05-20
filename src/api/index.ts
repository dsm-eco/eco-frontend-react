import axios from 'axios'

const checkToken = async (config:any) => {   
    const client= axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        headers:{
            Authorization:`Bearer ${localStorage.getItem("access")}`
        }});

    const access=localStorage.getItem("access");
    const refresh=localStorage.getItem("refresh");

    try {
      const { data } = await client.post("user/token/refresh/", {
          refresh,
        access,
      });
      config.headers["Authorization"] = `Bearer ${data.access}`;
    } catch (err) {
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
    }

      return config;
};


export const getRequest=()=>{
    
    const client= axios.create({
        baseURL:process.env.REACT_APP_BASE_URL,
        headers:{
            Authorization:`Bearer ${localStorage.getItem("access")}`
        }
    });
    client.interceptors.request.use(checkToken);
    return client;

}

