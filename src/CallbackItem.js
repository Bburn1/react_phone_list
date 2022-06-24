import React, { useState, useEffect} from 'react'

function CallbackItem({getItems}) {


    const[items, setItems] = useState([])


    useEffect(()=>{
        const newItems = getItems()
        setItems(newItems)
        console.log(`Render #${newItems.lenght}`);
    }, [getItems])


  return (
    <ul>
        
            {items.map((item)=> <li key = {Math.random()*1000}>{item}</li>)}
        
    </ul>
  )
}

export default CallbackItem