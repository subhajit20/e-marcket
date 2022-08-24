import React,{useState,useEffect} from 'react';

function useSignupHook(){
    const [loading,setLoading] = useState(false);
    const [response,setResponse] = useState([]);

    async function CallSignup({...credentials}){
        const {password,username,firstname,lastname,confirmpassword,u_email,middlename
            ,phonenumber
        } = credentials;
        console.log(username)
        const callAignupApi = await fetch("https://e-marcket-backend-api.herokuapp.com/u1/signup",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:username[0],
                firstname:firstname[0],
                middlename:middlename[0],
                lastname:lastname[0],
                password:password[0],
                confirmpassword:confirmpassword[0],
                u_email:u_email[0],
                phonenumber:phonenumber[0]
            })
        })
        const result = await callAignupApi.json();


        if(callAignupApi.status === 200){
            setLoading(true)
            setTimeout(()=>{
                console.log(result);
                setLoading(false);
                setResponse([...result]);
            },[3000])
        }else if(callAignupApi.status !== 200){
            console.log(result);
            setLoading(true)
            setResponse([...result])
        }
    }

    return {
        loading,response,CallSignup
    }
}

export default useSignupHook;