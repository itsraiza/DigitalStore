import { Link } from "react-router-dom";

const Categories = () => {
    const categorias = [
  { id: 1, name: 'Camisetas', image: '/collection-1.png' },
  { id: 2, name: 'Calçados', image: '/collection-2.png' },
  { id: 3, name: 'Acessórios', image: '/collection-3.png' },
];
    return ( 
        <>
        
        <div className="p-4 flex flex-col justify-center items-center">
      <h1 className="text-2xl text-center font-bold m-5 mb-4">Categorias</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gap-10 mt-5 mb-10 gap-4">
        {categorias.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/produtos/`} 
            className="border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 ease-in-out"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover"/>
            <div className="p-2 text-center font-semibold bg-[#CCCCCC]">{cat.name}</div>
          </Link>
        ))}
      </div>
    </div>

        </>
     );
}
 
export default Categories;