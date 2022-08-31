import {useState} from 'react';

function useFormError(){
    const [firstnameErr,setFirstnameErr] = useState();
    const [lastnameErr,setLastnameErrr] = useState();
    const [usernameErr,setusernameErr] = useState();
    const [phonenumberErr,setphonenumberErr] = useState();
    const [u_emailErr,setu_emailErr] = useState();
    const [passwordErr,setpasswordErr] = useState();
    const [success,setSuccess] = useState();

    
    function showErrors(errorObj){
        if(errorObj === null || errorObj === undefined){
            return;
        }else{
            Object.entries(errorObj).map((x)=>{
                if(x[0] === "firstname"){
                    if(x[1].msg  === null){
                        setFirstnameErr();
                    }else{
                        setFirstnameErr(x[1].msg);
                        setTimeout(()=>{
                            setFirstnameErr();
                        },2000 );
                    }
                    
                }
                if(x[0] === 'lastname'){
                    if(x[1].msg === null){
                        setLastnameErrr()
                    }else{
                        setLastnameErrr(x[1].msg)
                    setTimeout(()=>{
                        setLastnameErrr();
                    },2000)
                    }
                }
                if(x[0] === 'username'){
                    if(x[1].msg  === null){
                        setusernameErr()
                    }else{
                        setusernameErr(x[1].msg)
                        setTimeout(()=>{
                            setusernameErr()
                        },2000)
                    }
                }
                if(x[0] === 'phonenumber'){
                    setphonenumberErr(x[1].msg)

                    setTimeout(()=>{
                        setphonenumberErr()
                    },2000)
                }
                if(x[0] === 'u_email'){
                    setu_emailErr(x[1].msg)

                    setTimeout(()=>{
                        setu_emailErr();
                    },1500)
                }
                if(x[0] === 'password'){
                    setpasswordErr(x[1].msg)

                    setTimeout(()=>{
                        setpasswordErr()
                    },1500)
                }else if(x[0] === 'msg'){
                    setSuccess(x[1]);

                    setTimeout(()=>{
                        setSuccess();
                    },4000)
                }
            })
        }
    }

    return {
        firstnameErr,
        lastnameErr,
        usernameErr,
        phonenumberErr,
        u_emailErr,
        passwordErr,
        success,
        showErrors
    };
}

export default useFormError;