import React,{useEffect,useContext} from 'react';
import {useNavigate,useLocation} from 'react-router-dom'
import {PayPalScriptProvider} from "@paypal/react-paypal-js";
import ButtonWrapper from './ButtonWrapper';
import {AuthContext} from '../../context/AuthProvider';
import CLIENT_ID from './Payment_Cedentials';

const currency = "USD";
function PaymentPage() {
  window.document.title = "Buy Karo - Payment"
  const {authorize} = useContext(AuthContext);
  const navigate = useNavigate();
  const {pathname} = useLocation();
  let amount = pathname.split('/')[2];
  console.log(amount)


  useEffect(()=>{
    if(!authorize){
      navigate("/user/login")
    }
  },[authorize])
  return (
    <div className='container  h-screen flex justify-center'>
        <div className=' w-80 h-56 my-40'>
              <PayPalScriptProvider
                  options={{
                      "client-id": CLIENT_ID,
                      components: "buttons",
                      currency: "USD"
                  }}
              >
          <ButtonWrapper
                      currency={currency}
                      showSpinner={false}
                      amount={amount <= 0 ? 0 : amount}
                  />
        </PayPalScriptProvider>
      </div>
    </div>
  )
}

export default PaymentPage