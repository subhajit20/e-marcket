import {useContext} from 'react';
import {MyCartcontext} from '../context/Cartcontext'
function useSearchhook() {
    const data = useContext(MyCartcontext);
    const {mystate} = data;
    return mystate.prod
  
}

export default useSearchhook