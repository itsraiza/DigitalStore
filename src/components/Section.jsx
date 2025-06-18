import { Link } from "react-router-dom";



const Section = ({
  title,
  titleAlign,
  link,
  children

}) => {

  const titleAlignment = titleAlign === "center" ? "text-center justify-center" : "text-left";


  return (
    <>
      <section className="w-full my-8">
        {/* Título + Link */}
        <div className={`flex items-center ${titleAlignment} m-4`}>
          <h2 className="text-[#474747] text-[24px] font-semibold ml-10 max-lg:text-[16px] max-lg:ml-2">{title}</h2>

          {link && (
            <Link to={"/produtos"}
              href={link}
              className="text-[#C92071] text-[18px] ml-auto hover:underline max-lg:text-[14px]"
              rel="noopener noreferrer"
            >
              {"Ver tudo →"}
            </Link>
          )}
        </div>

        {/* Conteúdo (Children) */}
        <div>
          {children}
        </div>
      </section>

    </>
  );
}

export default Section;