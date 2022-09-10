import {useState} from 'react';

function useLoginHook(){
    const [loading,setLoading] = useState(false);
    const [flag,setFlag] = useState();
    const [msg,setMsg] = useState();

    async function CallLoginApi(username,password){
        const loginapicall = await fetch("https://e-marcket-backend-api.herokuapp.com/u1/login",{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        });

        const result = await loginapicall.json();

        if(loginapicall.status === 200){
            console.log(result)
            setFlag(true)
        }else{
            console.log(result)
            setFlag(false)
        }
    }

    return {CallLoginApi,flag,msg}
}

export default useLoginHook;