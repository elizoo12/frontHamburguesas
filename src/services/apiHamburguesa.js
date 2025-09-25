import { instance } from "./conexion";


export const login = async (username, password) => {
  console.log(username, password)
    const token = btoa(username + ":" + password);
    console.log(token)
    const response = await instance.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    console.log(response)
    instance.defaults.headers.common.Authorization = `Bearer ${response.data.resp}`;

}

export const getUser = async (name) => {
const user = await instance.get("/user/"+name);
return user.data}

// Acabar Create User, hay que cambiar campos de entrada y que mandamos

// export const createUser = async (campos) => await instance.post("/create",{campos});