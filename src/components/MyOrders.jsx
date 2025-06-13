import { Link } from "react-router-dom";

const MyOrders = () => {
    return ( 
        <>
          <div className="flex flex-col justify-center items-center m-10"> 
              <h1 className="text-2xl font-bold mb-2">Meus Pedidos</h1>
            <div className="flex flex-col justify-center items-center gap-5 m-30 max-lg:m-15">
               <p className="text-[#C92071] text-lg text-center">Você precisa estar logado para ver seus pedidos.</p>
               <Link to={"/login"} className='bg-[#C92071] w-[114px] h-[40px] p-1.5 text-white text-center font-bold rounded-[4px]' >Entrar</Link>
               <Link to={"/signup"} className='underline text-[16px] text-[#474747]'>Cadastre-se</Link>
            </div>
          </div>
        </>
     );
}
 
export default MyOrders;