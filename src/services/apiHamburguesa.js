import { instance } from "./conexion";


export const login = async (username, password) => {
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

export const register = async (obj) => {
    const response = await instance.post("/login",{},
    {
        headers: {
            "Content-Type": "application/json",
            Authorization: "basic " + token,
        },
    });
    instance.defaults.headers.common.Authorization = `Bearer ${response.data.resp}`;
    console.log(response)
}