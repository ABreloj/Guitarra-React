import { useEffect, useState } from "react"
import Footer from "./components/Footer"
import Guitar from "./components/Guitar"
import Header from "./components/Header"
import { db } from "./data/guitarras"

export default function(){

  const [guitars] =useState(db)
  const [carrito, setCarrito] = useState(cargaStorage())

  useEffect(guardarStorage, [carrito])

  function cargaStorage(){
    const storageData = localStorage.getItem('carrito')
    return storageData ? JSON.parse(storageData): []
  }

  function guardarStorage(){
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }


  function agregarCarrito(guitar){
    const carritoNuevo = [...carrito]
    const idExiste = carritoNuevo.findIndex(g => g.id === guitar.id)
    if(idExiste === -1){
      carritoNuevo.push({...guitar, cantidad: 1})
    }
    setCarrito(carritoNuevo)
    console.log('Agregando...', guitar.nombre)
  }

  function quitaUno(id){
    const carritoNuevo = [...carrito]
    const idCarrito = carritoNuevo.findIndex(g => g.id === id)
    if(carritoNuevo[idCarrito].cantidad > 1)
      carritoNuevo[idCarrito].cantidad--
    setCarrito[carritoNuevo]  //Ve One Piece
  }

  function quitaGuitarra(id){
    setCarrito(carrito.filter(g => g.id !== id))
  }

  function vaciarCarrito(){
    setCarrito([])
  }

  return (
    <>
    
    <Header carrito={carrito} guitar={guitars[3]} agregarCarrito={agregarCarrito} quitaUno={quitaUno} vaciarCarrito={vaciarCarrito} quitaGuitarra={quitaGuitarra}/>
    
       <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
            {
                guitars.map(g => (
                  <Guitar key={g.id} agregarCarrito={agregarCarrito} guitar={g} />
                ))
            }
        </div>
    </main>
    <Footer></Footer>
    </>
    
  )
}