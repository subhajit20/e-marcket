import {useState,useEffect} from 'react'

function useCategory() {
    const [category,setCategory] = useState([]);
    const [flag,setFlag] = useState(false);
    const [loading,setLoading] = useState(true);

    /* 
    * ----> Fetching all category 
    * 
    */
    async function getAllCategory(){
        const res = await fetch("https://fakestoreapi.com/products/categories");
        const data = await res.json();

        if(res.status === 200){
            setCategory([...data]);
            setFlag(true)
            setLoading(false)
        }else{
            setCategory([]);
            setFlag(false)
            setLoading(true)
        }
    }

    useEffect(()=>{
        getAllCategory();

        return ()=>{
            getAllCategory()
        }
    },[])
    
    return [category,flag,loading]
}

export default useCategory