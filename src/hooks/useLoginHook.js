import {useState,useContext} from 'react';
import {LoginContextProvider} from '../context/UseAuthContext';
import {useNavigate} from 'react-router-dom'
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function useLoginHook(){
    const [msg,setMsg] = useState();
    const [sign,setSign] = useState();
    const {login,auth,mystate} = useContext(LoginContextProvider);
    const navigate = useNavigate();

    async function CallLoginApi(username,password){
        const {flag,result} = await login(username,password);
        setSign(true)

        var expires = new Date(Date.now() + 86400)
        if(flag){
            auth({type:"AUTHECTICATED USER"});
            setTimeout(()=>{
                cookies.set('e-marcket-refresh-token',result.refres_token,{
                    path:'/',
                    expires:expires,
                });
                cookies.set('e-marcket-acces-token',result.access_token,{
                    path:'/',
                    expires:expires,
                } );
                navigate('/')
                window.location.reload()
            },3000)
        }else if(flag === false){
            setSign(false)
            setMsg("Username & password is not valid")

            setTimeout(()=>{
                setMsg("")
            },2000)
            auth({type:"UNAUTHECTICATED USER"});
        }
    }


    return {CallLoginApi,msg,sign,mystate}
}

export default useLoginHook;