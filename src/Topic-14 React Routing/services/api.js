import { redirect } from "react-router-dom";


export const getUserProfile = async ({params}) => {     
   
    const response = await fetch("https://api.github.com/users/sarvesh-1999");

    if(!response.ok) throw new Error("404 Something went wrong"); 

    const userdata = await response.json();
    return userdata;       
}


export const handleSignup = async ({request}) => {
        const form = await request.formData();
        const user = {
            fullname: form.get("fullname"),
            email: form.get("email"),
            password: form.get("password")
        }
        
        const response = await fetch("http://localhost:3000/api/auth/register",{
            method:"POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user,null,4)
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(err.message || "Request failed");
        }
        const data = await response.json();


        return redirect("/",{replace:true});              
}