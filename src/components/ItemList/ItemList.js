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
        {Productos.map((prod)=>{
            return(
                <div key={prod.id}>
                   <p data={prod.name}></p>
                </div>
            )
        })}
    </div>
)}


export default ItemList