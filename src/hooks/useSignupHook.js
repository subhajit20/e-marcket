import {useState} from 'react';

function useSignupHook(){
    const [loading,setLoading] = useState(false);
    const [flag,setFlag] = useState();
    const [msg,setMsg] = useState();

    async function CallSignup({...credentials}){
        let errors;
        const {password,username,firstname,lastname,confirmpassword,u_email,middlename
            ,phonenumber
        } = credentials;
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
        errors = [{...result}];
        if(callAignupApi.status === 200){
            errors = result;
            setLoading(false);
            setFlag(true);
            setMsg("Congratulation! You have successfully created your account :)")
            setTimeout(()=>{
                errors = '';
                setMsg();
            },3000)
           return {
            errors,loading,
           };
        }else if(callAignupApi.status !== 200){
            errors = result.err;
            setLoading(true);
            setFlag(false);
            setMsg('Oh! Seems like you have not fill the form correctly !!')
            setTimeout(()=>{
                errors = '';
                setMsg();
            },3000)
           return {
            errors,loading
           };
            
        }
        
    }

    return {CallSignup,flag,msg}
}

export default useSignupHook;