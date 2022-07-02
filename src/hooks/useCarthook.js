import {useEffect,useState,useContext} from 'react';
import {MyCartcontext} from '../context/Cartcontext'

let sum = 0;
function useCarthook() {
    const [msg,setMsg] = useState();
    const [flag,setFlag] = useState();
    const [total,setTotal] = useState();
    const data = useContext(MyCartcontext);
    const {mystate} = data;
    useEffect(()=>{
        const SetMessage = () =>{
            if(mystate.prod.length >= 3){
                setMsg(mystate.message)
                setFlag(true)
                setTimeout(()=>{
                    setMsg('')
                    setFlag(false)
                },3000)
            }else if(mystate.prod.length === 0){
                    setMsg("You have no cart product yet")
                    setFlag(false)
            }else{
                setTimeout(()=>{
                    setMsg('')
                    setFlag(false)
                },3000)
            }
        }
        
        SetMessage()
    },[mystate.message,mystate.prod.length])
    useEffect(()=>{
        const calculateTotalPrice = () => {
            if(mystate.prod.length === 0){
                setTotal(0)
            }else if(mystate.prod.length >= 3){
                setTotal(sum)
            }else{
                mystate.prod.forEach((x)=>{
                    sum = sum + x.price;
                })
                setTotal(sum)
            }
        }
        calculateTotalPrice();
    },[mystate.prod])

    return [msg,flag,mystate.prod,total]
}

export default useCarthook