import Sidebar from "../layout/Sidebar";
import CabeceraGestionR from "../layout/CabeceraGestionR";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit,faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTelegram, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Perfil = () => {
    //const switchMondal = ()=>{
        //document.querySelector('.ModalDescripcionRestaurante').classList.toggle('hidden')
        //document.querySelector('.ModalDescripcionRestaurante').classList.toggle('flex')
    //}
    const switchMondal2 = ()=>{
      document.querySelector('.ModalInfoPerfil').classList.toggle('hidden')
      document.querySelector('.ModalInfoPerfil').classList.toggle('flex')
  }
 
  return (
    <div className="flex h-full bg-secondary">
      <Sidebar />

      <div className="block w-full h-screen">
        <CabeceraGestionR />
        <div className="principal bg-secondary ">
          <div className="grid m-6 gap-y-6 ">
            <div className="bg-danger">
              <div className="bg-gray-500 flex h-80 ">
                <img
                  className="mix-blend-overlay w-full h-full object-cover"
                  src="https://i.pinimg.com/564x/41/67/7f/41677f6c5426da1c640648bc88282f99.jpg"
                  alt="no encontrado"
                ></img>
              </div>
              <div className="flex h-24">
                <div className="w-40 h-40 relative -top-24  left-10 border-solid border-caja border-2 shadow-md">
                  <img
                    className="object-cover "
                    src="https://i.pinimg.com/564x/ab/fd/b5/abfdb5401c83ab54941bc454a04652e6.jpg"
                    alt="no encontrado"
                  ></img>
                </div>
                <h1 className="relative left-12 -top-10 text-2xl font-bold text-white">
                  Nombre del Resturante
                </h1>
              </div>
            </div>

            <div className="flex gap-x-6">
              <div className="bg-danger w-1/2 p-5">
                <div>
                  <div className="flex justify-between mt-4">
                    <h1 className="my-auto text-lg font-semibold">
                      Acerca de Nosotros
                    </h1>
                    <button className="text-naranja my-auto ">
                      Editar{" "}
                      <FontAwesomeIcon className="text-naranja" icon={faEdit} />
                    </button>
                  </div>

                  <p className="text-gray-500 shadow-abajo2 py-4">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
                <div className="flex justify-between mt-4">
                  <h1 className="my-auto text-lg font-semibold">
                    Redes Sociales
                  </h1>
                  <button className="text-naranja my-auto ">
                    Editar{" "}
                    <FontAwesomeIcon className="text-naranja" icon={faEdit} />
                  </button>
                </div>
                <div className="text-6xl pt-4 flex gap-x-2">
                  <button>
                    <FontAwesomeIcon
                      icon={faFacebook}
                      className="text-facebook"
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faTelegram}
                      className="text-telegram"
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-red-300"
                    />
                  </button>
                  <button>
                    <FontAwesomeIcon icon={faTwitter} className="text-twiter" />
                  </button>
                  <button>
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-whatsapp"
                    />
                  </button>
                </div>
              </div>
              <div className="bg-danger w-1/2 p-6 grid gap-y-5">
                <div className="flex text-center shadow-abajo2 py-2">
                  <div className="w-1/2 block shadow-izquierdo">
                    <span className="block text-2xl font-semibold">18000</span>
                    <span>Ventas</span>
                  </div>

                  <div className="w-1/2 ">
                    <span className="block text-2xl font-semibold">
                      $ 1800000
                    </span>
                    <span>Ganacias</span>
                  </div>
                </div>

                <div className="grid gap-y-4">
                  <div className="flex justify-between shadow-abajo2 pb-4">
                    <h1 className="font-semibold text-lg my-auto">
                      Informacion Basica
                    </h1>
                    <button
                      className="text-naranja text-lg my-auto"
                      onClick={() => switchMondal2()}
                    >
                      Editar{" "}
                      <FontAwesomeIcon className="text-naranja" icon={faEdit} />
                    </button>
                  </div>

                  <div className="flex justify-between shadow-abajo2">
                    <span className="font-semibold">Restaurante:</span>
                    <span className="text-gray-500">
                      Nombre del restaurante
                    </span>
                  </div>

                  <div className="flex justify-between shadow-abajo2">
                    <span className="font-semibold">Dirección:</span>
                    <span className="text-gray-500">jr San jose 532</span>
                  </div>

                  <div className="flex justify-between shadow-abajo2">
                    <span className="font-semibold">Telefono:</span>
                    <span className="text-gray-500">987039906</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Aqui las ventanas modales ulullulululullullulullulu*/}

      {/* Modal 2----------------------------------------------------------------------------------- */}

      <div className="z-40 fixed w-screen justify-center  h-screen ModalInfoPerfil hidden">
        <div className="bg-gray-500 opacity-25 w-screen h-screen"></div>
        <div className="z-50 fixed bg-danger w-1/2 h-90 mt-16 p-6">
          <div className="flex justify-between">
            <h1>Informacion del producto</h1>{" "}
            <button
              className=" text-naranja text-xl font-semibold"
              onClick={() => switchMondal2()}
            >
              <FontAwesomeIcon icon={faTimesCircle} />
            </button>
          </div>

          <div className="grid gap-y-5 p-6">
            <div className="grid gap-y-4">
              <span className=" block">Nombre del Producto:</span>
              <input className="text-gray-500 w-full border-2" />
            </div>

            <div className="grid gap-y-4">
              <span className=" block">Categoria:</span>
              <select className="text-gray-500 w-full border-2">
                <option>xxxxxxxxxxxxxx</option>
                <option>xxxxxxxxxxxxxx</option>
                <option>xxxxxxxxxxxxxx</option>
              </select>
            </div>
            <div className="flex gap-x-6">
              <div className="grid gap-y-4 w-1/2">
                <span className=" block">Cantidad por día:</span>
                <input className="text-gray-500 w-full border-2" />
              </div>

              <div className="grid gap-y-4 w-1/2">
                <span className=" block">Precio:</span>
                <input className="text-gray-500 w-full border-2" />
              </div>
            </div>

            <div className="grid gap-y-4">
              <span className=" block">Imagen del producto:</span>
              <label htmlFor="imagen" className="border-2 flex justify-end">
                <h1 className="p-4 bg-caja">Buscar</h1>
              </label>
              <input
                className="text-gray-500 w-full border-2 hidden"
                type="file"
                id="imagen"
              />
            </div>
          </div>

          <div className="flex justify-end gap-x-4 mt-4">
            <button
              className="px-4 py-2 rounded-md bg-black text-white font-semibold"
              onClick={() => switchMondal2()}
            >
              Salir
            </button>
            <button
              className="px-4 py-2  rounded-md bg-naranja text-white  font-semibold"
              onClick={() => switchMondal2()}
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
