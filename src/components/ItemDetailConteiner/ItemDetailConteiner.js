import {useEffect, useState} from 'react'
import axios from 'axios'
import ItemDetail from '../ItemDetail/ItemDetail'


function ItemDetailConteiner(){
    const [items,setItems]= useState([])    
    useEffect(()=>{
       setTimeout(() => {
        axios.get('https://www.breakingbadapi.com/api/characters').then((res)=>setItems(res.data))
       }, 2000);
    },[]);





return(
    <div>
        {items.map((item)=>{
            return <ItemDetail items={item}/>
        })}
    </div>
)
}
export default ItemDetailConteiner