import {useEffect,useState } from 'react';
import {Items} from '../Item/Item'
const ItemList=()=>{

 const [Productos, setProductos]= useState([])


useEffect(() =>{
    const promesa = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve([Items])
        }, 2000)
    });
    promesa.then((resultado)=>{
        setProductos(resultado);
    });

},[]);

 console.log(Productos)
 

return(
    <div>
        <h4>{Productos.map((x) =><p key={x.id}>{x.name}</p>)}</h4>
    </div>
)}


export default ItemList