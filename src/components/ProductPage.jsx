import { useState } from "react";
import FilterGroup from "./FilterGroup";
import ProductListing from "./ProductListing";
import Section from "./Section";
import { useLocation } from "react-router-dom";

const ProductPage = () => {
     const location = useLocation();
     const searchParams = new URLSearchParams(location.search);
     const searchTerm = searchParams.get("search") || "";

     console.log("Buscando por:", searchTerm);

    const [isFilterOpen, setIsFilterOpen] = useState(false);

    return ( 
        <>

            {/* Ordenar e Filtro */}
      <div className="flex justify-between items-center m-15 mb-6 lg:justify-end max-lg:m-5">
        <div>
          <label className="text-[#474747] text-[16px] mb-2 block">
            Ordenar por
          </label>
          <select
            className="w-[332px] h-[60px] border border-[#CCCCCC] rounded px-2 text-[#474747] max-lg:w-[265px] max-lg:h-[60px]"
          >
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
          </select>
        </div>

        {/* Botão filtro - mobile */}
        <button
          onClick={() => setIsFilterOpen(true)}
          className="lg:hidden flex justify-center items-center mt-7 px-4 py-2 border border-[#CCCCCC] hover:bg-[#C92071] rounded cursor-pointer"
        >
          <img
            src="./src/assets/funnel.svg"
            className="h-[40px] w-[40px]"
            />
        </button>
      </div>

      {/* Conteúdo principal */}
      <div className="flex flex-row gap-10 lg:mr-30 lg:ml-30 max-lg:flex-col">
        {/* Filtro lateral (desktop) */}
        <aside className="w-[308px] h-fit flex flex-col gap-6 max-lg:hidden">
          <div className="bg-white w-full p-4">
            <h2 className="text-[16px] text-[#474747] mb-2">Filtrar por</h2>
            <hr className="border-[#CCCCCC] mb-4" />

            <FilterGroup
              title="Marca"
              options={["K-Swiss", "Nike", "Adidas", "Puma", "Vans"]}
            />
            <FilterGroup
              title="Categoria"
              options={["Camisetas", "Calças", "Tênis", "Headphones", "Bonés"]}
            />
            <FilterGroup title="Gênero" options={["Masculino", "Feminino"]} />
            <FilterGroup title="Estado" options={["Novo", "Usado"]} />
          </div>
        </aside>

        <Section
        title={
          searchTerm
            ? `Resultados para: "${searchTerm}"`
            : "Produtos encontrados"
        }
      >
    
        <ProductListing
          showSection={false}
          limit={15}
          search={searchTerm} // <-- você pode passar para seu componente de listagem
        />
    
      </Section>

      </div>

      {/* Modal filtro (mobile) */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] z-50 flex justify-start">
          <div className="w-[70%] max-w-sm bg-white shadow-md h-screen p-4 flex flex-col">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[16px] text-[#474747] mb-2 font-semibold">Filtrar por</h2>
              <hr className="border-[#CCCCCC] mb-4" />
              <button className="cursor-pointer" onClick={() => setIsFilterOpen(false)}>✕</button>
            </div>

            <div className="flex flex-col gap-4 overflow-y-auto">
              <FilterGroup
                title="Marca"
                options={["K-Swiss", "Nike", "Adidas", "Puma", "Vans"]}
              />
              <FilterGroup
                title="Categoria"
                options={["Camisetas", "Calças", "Tênis", "Headphones", "Bonés"]}
              />
              <FilterGroup title="Gênero" options={["Masculino", "Feminino"]} />
              <FilterGroup title="Estado" options={["Novo", "Usado"]} />
            </div>
          </div>
        </div>
      )}
        </>
     );
}
 
export default ProductPage;