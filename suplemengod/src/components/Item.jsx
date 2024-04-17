import React from 'react'
import { Link } from 'react-router-dom'
import { toCapital } from '../helpers/toCapital'

const Item = ( {producto} ) => {
  return (
    <div className="producto p-4 transition rounded-md shadow-md user-card hover:scale-105 group bg-slate-300">
      <div className="overflow-hidden ">
        <img className="w-full transition-all duration-500 rounded-md group-hover:grayscale-0 group-hover:scale-150" src={producto.imagen} />

      </div>
        <div>
            <h4 className="my-2 font-bold">{producto.titulo}</h4>
            <p>Precio: ${producto.precio}</p>
            <p>Categoría: {toCapital(producto.categoria)}</p>
            <Link className="ver-mas" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item