import React, { useEffect, useState } from 'react'

function ProductDetail() {

    const [item, setItem] = useState({});

    useEffect(() => {
        getItemDetail().then(res => {
            setItem( res)
        })
    }, []);

    const getItemDetail = () => {
        return new Promise ((resolve, reject) => {
            setTimeout(() => {resolve( ITEM )}, 2000);
            
        })
    }

return (
    
    <div className='flex-wrap'>
       <ProductCount stock={item.stock}/>
    
    </div>
  )
}

export default ProductDetail