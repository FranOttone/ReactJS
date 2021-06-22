import React, {useState} from 'react';

const ItemCount =({stock,initial, onAdd}) =>{
const[botonActivo1,setBotonActivo1]=useState(false);

const[botonActivo2,setBotonActivo2]=useState(false);

const [cantidad, setCantidad] = useState(initial);

const deshablitarBotonMenos =()=>{
    setCantidad(cantidad-1);

    if(cantidad===initial){
    setBotonActivo1(true)
}
    else{
    setBotonActivo1(false)
}

};

const deshablitarBotonMas =()=>{
    setCantidad(cantidad+1);

    if(cantidad===stock){
    setBotonActivo2(true)
}
    else{
    setBotonActivo2(false)
}
}
   

    return(
        <div>
            <button disabled={botonActivo1} onClick ={deshablitarBotonMenos}>-</button>
            <div>{cantidad}</div>
            <button disabled={botonActivo2} onClick={deshablitarBotonMas}>+</button>
            <button onClick={(onAdd(cantidad))}>
                Agregar Al Carrito
            </button>
        </div>
    )
}

export default ItemCount;