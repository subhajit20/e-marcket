import {useState,useEffect,useCallback} from 'react'

function useProduct(catname) {
    const [product,setProduct] = useState([]);
    const [flag,setFlag] = useState(false);
    const [loading,setLoading] = useState(true);

    /* 
    * ----> Fetching all products according to the category
    * 
    */
    const getProducts = useCallback(()=>{
        async function getallproducts(){
            const res = await fetch(`https://fakestoreapi.com/products/category/${catname}`);
            const data = await res.json();
            
            if(res.status === 200){
                setProduct([...data]);
                setFlag(true)
                setLoading(false)
            }else{
                setProduct([]);
                setFlag(false)
                setLoading(true)
            }
        }
        getallproducts()
    },[catname])

    useEffect(()=>{
        getProducts();

        return ()=>{
            getProducts()
        }
    },[getProducts])
    
    return [product,flag,loading]
}

export default useProduct