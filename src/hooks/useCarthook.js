import {useEffect,useState,useContext} from 'react';
import {MyCartcontext} from '../context/Cartcontext'

function useCarthook() {
    const [msg,setMsg] = useState();
    const [flag,setFlag] = useState();
    const [total,setTotal] = useState([]);
    const [amount,setAmount] = useState();
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
            }
        }
        
        SetMessage()

    },[mystate.message,mystate.prod.length])
    useEffect(()=>{
        const calculateTotalPrice = () => {
            if(mystate.prod.length === 0){
                setTotal([])
            }else{
                mystate.prod.forEach((x)=>{
                    setTotal((c)=> [...c,Math.floor(x.price)])
                })
                
            }
        }
        calculateTotalPrice();
        
    },[mystate.prod])

    /*
    * ----> Calculating total amount of the the cart
    * ----> Storing the total amount in the amount state  which is declared on the top 
    */
    useEffect(()=>{
        function addTotalAmount(){
            let sum = 0;
            for(let i=0;i<total.length;i++){
                sum = sum + total[i]
            }
            setAmount(sum)
        }
        addTotalAmount()
    },[total])

    /*
    * ----> Substracting amount from the total amount of the the cart
    * ----> At last Storing the total amount in the amount state  which is declared on the top 
    */
    const decreasePrice = (price) =>{
        if(mystate.prod.length <= 0){
            setTotal([])
        }else{
            setAmount((x)=> x - Math.floor(price))
        }
        
    }

    return [msg,flag,decreasePrice,mystate.prod,amount]
}

export default useCarthook