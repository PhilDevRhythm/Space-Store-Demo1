import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProdList from '../data/ProdList';
import ProductCount from './ProductCount';


function ProductDetail() {

    const [item, setItem] = useState();
    const {id} = useParams()

    useEffect(() => {
        getItemDetail().then(res => {
            setItem( res)
        })
    }, [ id ]);

    const getItemDetail = async () => {
        return new Promise ((resolve, reject) => {
            const item = ProdList.find(p => p.id == id)
            setTimeout(() => {resolve( item )}, 2000);
            
        })
    }

return (
    
    <div className='flex-wrap'>
       <ProductCount stock={item.stock}/>
    
    </div>
  )
}

export default ProductDetail