import { useMemo } from "react"

export default function Header({ carrito, agregarCarrito, guitar, quitaUno, vaciarCarrito, quitaGuitarra}){

    const total = useMemo(() => carrito.reduce((t, g) => t + g.cantidad * g.precio, 0), [carrito])

    return (
        <header className="py-5 header">
        <div className="container-xl">
            <div className="row justify-content-center justify-content-md-between">
                <div className="col-8 col-md-3">
                    <a href="index.html">
                        <img className="img-fluid" src="./img/logo.svg" alt="imagen logo">
                        </img>
                    </a>
                </div>
                <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
                    <div 
                        className="carrito"
                    >
                        <img className="img-fluid" src="./img/carrito.png" alt="imagen carrito" />

                        <div id="carrito" className="bg-white p-3">
                            {
                                carrito.length === 0?
                                (
                                    <p className="text-center">El carrito esta vacio</p>
                                ):
                                (
                                    <>
                                     <table className="w-100 table">
                                <thead>
                                    <tr>
                                        <th>Imagen</th>
                                        <th>Nombre</th>
                                        <th>Precio</th>
                                        <th>Cantidad</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        carrito.map(g => (
                                            <tr key={g.id}>
                                        <td>
                                            <img className="img-fluid" src={'/img/' + g.imagen + '.jpg'} alt={'imagen ' + g.nombre } />
                                            
                                        </td>
                                        <td>SRV</td>
                                        <td className="fw-bold">
                                                ${ g.precio }
                                        </td>
                                        <td className="flex align-items-start gap-4">
                                            <button
                                                onClick={() => quitaUno(g.id)}
                                                type="button"
                                                className="btn btn-dark"
                                            >
                                                -
                                            </button>
                                                { g.cantidad }
                                            <button
                                                type="button"
                                                onClick={() => agregarCarrito(g)}
                                                className="btn btn-dark"
                                            >
                                                +
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => quitaGuitarra(g.id)}
                                                className="btn btn-danger"
                                                type="button"
                                            >
                                                X
                                            </button>
                                        </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>

                            <p className="text-end">Total pagar: <span className="fw-bold">${ total }</span></p>
                            <button  onClick={vaciarCarrito} className="btn btn-dark w-100 mt-3 p-2">Vaciar Carrito</button>
                                    </>
                                )
                            }
                           
                           
                        </div>
                    </div>
                </nav>
            </div>

            <div className="row mt-5">
                <div className="col-md-6 text-center text-md-start pt-5">
                    <h1 className="display-2 fw-bold">Modelo {guitar.nombre}</h1>
                    <p className="mt-5 fs-5 text-white">{guitar.descripcion}</p>
                    <p className="text-primary fs-1 fw-black">{guitar.precio}</p>
                    <button 
                        onClick={() => agregarCarrito(guitar)}
                        type="button"
                        className="btn fs-4 bg-primary text-white py-2 px-5"
                    >Agregar al Carrito</button>
                </div>
            </div>
        </div>

        <img className="header-guitarra" src="./img/header_guitarra.png" alt="imagen header">
        </img>
    </header>
    )
}