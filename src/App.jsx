import { useEffect, useRef, useState } from "react";
import { MdMailOutline, MdOutlineMap, MdOutlineLocalPhone, MdOutlineMenu } from "react-icons/md";
import imgBusao from './assets/onibus.jpg';
import imgLampada from './assets/lampada.jpg';
import imgFontes from './assets/fontes.jpg';
import imgEarth from './assets/earth.png'
import grafico from './assets/grafico.png'
import imgFloresta from './assets/floresta-redondo.png'
import bird1 from "./assets/images/bird1.png";
import bird2 from "./assets/images/bird2.png";
import forest from "./assets/images/forest.png";
import rocks from "./assets/images/rocks.png";
import water from "./assets/images/water.png";


function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const textRef = useRef(null);
  const bird1Ref = useRef(null);
  const bird2Ref = useRef(null);
  const btnRef = useRef(null);
  const rocksRef = useRef(null);
  const forestRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      if (textRef.current) textRef.current.style.top = 35 + value * 0.05 + "%";
      if (btnRef.current) btnRef.current.style.marginTop = value * 0.5 + "px";
      if (rocksRef.current) rocksRef.current.style.top = value * -0.12 + "px";
      if (forestRef.current) forestRef.current.style.top = value * -0.1 + "px";
      if (bird1Ref.current) {
        bird1Ref.current.style.top = value * -1 + "px";
        bird1Ref.current.style.left = value * 1.5 + "px";
      }
      if (bird2Ref.current) {
        bird2Ref.current.style.top = value * -1 + "px";
        bird2Ref.current.style.right = value * 4 + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id='header'>
        {/* Header */}
        <nav className="bg-HeaderGradient">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <button className="text-2xl font-semibold">Eco Journey</button>
            <MdOutlineMenu
              className="p-2 w-10 h-10 rounded-lg md:hidden"
              aria-controls="navbar"
              aria-expanded={menuOpen}
              onClick={toggleMenu}
            />
            <div
              className={`w-full md:block md:w-auto transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} md:opacity-100 md:max-h-screen`}
              id="navbar">
              <ul className="font-medium  text-lg flex flex-col p-4 md:p-0 mt-4 border rounded-lg md:flex-row md:gap-x-8 md:mt-0 md:border-0">
                <li>
                  <a href="#about" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Crise</a>
                </li>
                <li>
                  <a href="#cardHome" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Transiçao</a>
                </li>
                <li>
                  <a href="#solution" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Solucoes</a>
                </li>
                <li>
                  <a href="#dicas" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Dicas</a>
                </li>
                <li>
                  <a href="#contato" className="block py-2 px-3 rounded hover:-translate-y-0.5 hover:scale-105 duration-200" onClick={toggleMenu}>Contato</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Parallax */}
        <section id="parallax" className="relative w-full h-screen flex justify-center items-center overflow-hidden hero-before">
          <div ref={textRef} className="absolute text-[25vw] md:text-[10vw] text-center leading-[0.55em] text-[#094b65] font-ranch transform translate-y-[-90%] flex flex-col justify-center">
            <h3 className="text-2xl md:text-3xl font-light">
              É hora de uma nova jornada!
            </h3>
            Eco Journey
          </div>

          {/* Imagens Parallax */}
          <img src={bird1} ref={bird1Ref} className="absolute top-0 left-0 w-full h-full object-cover" />
          <img src={bird2} ref={bird2Ref} className="absolute top-0 right-0 w-full h-full object-cover" />
          <img src={forest} ref={forestRef} className="absolute top-0 left-0 w-full h-full object-cover" />
          <a href="#about" ref={btnRef} className="inline-block px-8 py-3 bg-white text-heroText text-xl font-medium rounded-full transform translate-y-[100px] no-underline">
            Explore
          </a>
          <img src={rocks} ref={rocksRef} className="absolute top-0 left-0 w-full h-full object-cover" />
          <img src={water} className="absolute top-0 left-0 w-full h-full object-cover" />
        </section>

        {/* About */}
        <section id="about">
          <div className="relative py-10 px-5 text-white bg-heroText grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Grafico */}
            <div id="about-image">
              <img src={grafico} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
            </div>
            <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-10 md:px-20">
              <div id='about-text' className='flex flex-col gap-8'>
                <h2 className='text-3xl md:text-5xl font-bold'>O Desafio da Crise Energética</h2>
                <h3 className='font-medium text-lg md:leading-7 leading-6'>
                  A crise energética é um dos maiores desafios globais, marcada pelo esgotamento de combustíveis fósseis, altos níveis de poluição e agravamento das mudanças climáticas. Décadas de exploração intensiva de recursos não renováveis e o aumento da demanda global por energia têm pressionado ainda mais o sistema, enquanto a transição para fontes renováveis ocorre de forma lenta.
                </h3>
                <h3 className='font-medium text-xl md:text-lg leading-7'>
                  As consequências são graves: aquecimento global, eventos climáticos extremos, perda de biodiversidade e impactos na saúde humana e ambiental. Repensar a forma como produzimos e consumimos energia é essencial para garantir um futuro sustentável.
                </h3>
              </div>
              <div className='flex flex-col'>
                <a href='#solution' className='max-w-max bg-darkgreen text-white py-3 px-5 rounded-xl w-full md:w-auto mb-5 active:scale-105 duration-200'>Comece sua Jornada Sustentavel!</a>
                <h3 className='font-semibold text-sm md:text-md'>
                  É hora de agir. Precisamos de soluções práticas para mitigar esses impactos e construir um futuro mais sustentável.
                </h3>
              </div>
            </div>
          </div>
          {/* Svg Wave */}
          <svg
            className='mt-[-90px] hidden lg:block'
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#017880" fillOpacity="1" d="M0,96L60,101.3C120,107,240,117,360,112C480,107,600,85,720,90.7C840,96,960,128,1080,138.7C1200,149,1320,139,1380,133.3L1440,128L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
          </svg>
        </section>

        {/* Card's Home */}
        <section id="cardHome" className='my-36 lg:mt-4 min-h-screen'>
          <div id="cardHome-texts" className="flex flex-col text-center justify-center items-center gap-5 px-5">
            <h2 className=" text-4xl sm:text-5xl text-darkgreen font-semibold">A Importância da Transição Energética</h2>
            <h4 className="md:w-3/6 text-lightgreen font-semibold text-md md:text-lg mb-5">
              A transição para fontes renováveis é essencial para reduzir emissões de gases de efeito estufa, promover independência energética e gerar benefícios econômicos e sociais. Apesar dos desafios como altos investimentos iniciais e a necessidade de políticas públicas eficazes, essas alternativas abre caminho para um futuro mais limpo, seguro e inovador.
            </h4>
            <h3 className='text-lightgreen text-xl'>Abaixo, você conhecerá as principais fontes de energia renovável e suas vantagens para transformar o mundo!</h3>
          </div>

          <div className="my-20 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center items-stretch px-10">
            {/* Card 1 */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-darkgreen text-darkgreen rounded-3xl  md:rounded-e-2xl'>
              <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                <div className='flex flex-col gap-4 text-center md:text-start'>
                  <h3 className='text-2xl font-semibold'>Energia Solar ☀️</h3>
                  <p className='text-md leading-6 md:leading-7 md:text-lg md:font-normal'>A energia solar aproveita a luz do sol, que é captada por painéis fotovoltaicos e convertida em eletricidade. Essa fonte é abundante, disponível em todo o mundo e uma das formas mais limpas de gerar energia. Além de reduzir significativamente a emissão de gases de efeito estufa, também ajuda a diminuir os custos com energia elétrica. Uma curiosidade interessante é que, em apenas uma hora, a Terra recebe mais energia solar do que toda a humanidade consome em um ano.</p>
                </div>
                <a href='#solution' className=' text-center p-2 md:py-3 md:px-8 bg-yellow-500 rounded-full text-darkgreen font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
              </div>
            </div>

            {/* Card 2 */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-darkgreen text-darkgreen rounded-3xl  md:rounded-e-2xl'>
              <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                <div className='flex flex-col gap-4 text-center md:text-start'>
                  <h3 className='text-2xl font-semibold'>Energia Eólica 🌬️</h3>
                  <p className='text-md leading-6 md:leading-7 md:text-lg md:font-normal'>A energia eólica utiliza turbinas para transformar o movimento do vento em eletricidade. É uma fonte completamente limpa e renovável, sendo ideal tanto para grandes parques eólicos quanto para instalações menores em residências. Além de reduzir a dependência de combustíveis fósseis, a energia eólica tem sido um exemplo de inovação sustentável, como na Dinamarca, onde mais de 40% da eletricidade do país é gerada a partir do vento.</p>
                </div>
                <a href='#solution' className=' text-center p-2 md:py-3 md:px-8 bg-yellow-500 rounded-full text-darkgreen font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
              </div>
            </div>

            {/* Card 3 */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-darkgreen text-darkgreen rounded-3xl  md:rounded-e-2xl'>
              <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                <div className='flex flex-col gap-4 text-center md:text-start'>
                  <h3 className='text-2xl font-semibold'>Energia Hidrelétrica 💧</h3>
                  <p className='text-md leading-6 md:leading-7 md:text-lg md:font-normal'>A energia hidrelétrica aproveita o movimento da água, geralmente de rios e barragens, para gerar eletricidade. Esta é uma das fontes mais confiáveis e eficientes de energia renovável, especialmente em países como o Brasil, onde cerca de 60% da matriz energética é composta por energia hidrelétrica. Além de fornecer energia, as barragens podem ajudar no controle de enchentes e na irrigação agrícola, mostrando o impacto positivo dessa tecnologia.</p>
                </div>
                <a href='#solution' className='text-center p-2 md:py-3 md:px-8 bg-yellow-500 rounded-full text-darkgreen font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
              </div>
            </div>

            {/* Card 4 */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-darkgreen text-darkgreen rounded-3xl  md:rounded-e-2xl'>
              <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                <div className='flex flex-col gap-4 text-center md:text-start'>
                  <h3 className='text-2xl font-semibold'>Energia Geotérmica 🌋</h3>
                  <p className='text-md leading-6 md:leading-7 md:text-lg md:font-normal'>A energia geotérmica utiliza o calor natural do interior da Terra para gerar eletricidade. Captada de reservatórios subterrâneos, essa fonte de energia é extremamente eficiente e está disponível o tempo todo, independentemente do clima. Ideal para regiões com alta atividade geotérmica, como a Islândia, onde quase 30% da energia gerada vem dessa fonte, ela também tem um impacto ambiental reduzido, tornando-se uma opção sustentável e confiável.</p>
                </div>
                <a href='#solution' className=' text-center p-2 md:py-3 md:px-8 bg-yellow-500 rounded-full text-darkgreen font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
              </div>
            </div>

            {/* Card 5 */}
            <div id="cardHome-card" className='md:mx-0 md:shadow-lg md:gap-0 bg-darkgreen text-darkgreen rounded-3xl  md:rounded-e-2xl'>
              <div id="card-info" className='py-10 md:py-16 px-5 md:px-16 text-white flex flex-col justify-center items-start gap-10'>
                <img src={imgEarth} alt="Imagem de uma planta no planeta Terra" className='w-2/5 md:w-1/4 bg-neutral-300 rounded-full self-center' />
                <div className='flex flex-col gap-4 text-center md:text-start'>
                  <h3 className='text-2xl font-semibold'>Energia de Biomassa 🌱</h3>
                  <p className='text-md leading-6 md:leading-7 md:text-lg md:font-normal'>A biomassa transforma materiais orgânicos, como resíduos agrícolas, restos de alimentos e madeira, em energia. Essa fonte é inovadora porque ajuda a reduzir o desperdício e as emissões de metano provenientes de aterros sanitários. Além de ser renovável e econômica, a biomassa é utilizada em diversas partes do mundo para produzir biocombustíveis e energia elétrica. É uma maneira eficaz de transformar resíduos em uma solução para o futuro sustentável.</p>
                </div>
                <a href='#solution' className=' text-center p-2 md:py-3 md:px-8 bg-yellow-500 rounded-full text-darkgreen font-semibold hover:scale-105 active:bg-darkestgreen transition text-lg md:text-xl w-full'>Saiba Mais!</a>
              </div>
            </div>
          </div>
        </section>

        {/* Solution */}
        <section id="solution" className="my-56">
          <div className="py-10 px-5 text-white grid bg-darkestgreen grid-cols-1 lg:grid-cols-2 items-center">
            <div id="about-image">
              <img src={imgFloresta} alt="Paisagem de uma floresta" className='md:w-5/6 mx-auto' />
            </div>
            <div id="about-infos" className="flex flex-col items-start gap-10 md:gap-16 md:px-20">
              <div id='about-text' className='flex flex-col gap-6 text-lightgreen'>
                <h2 className='text-4xl md:text-5xl font-bold text-white'>Eco Journey</h2>
                <h3 className='font-semibold text-lg md:leading-7 leading-6'>
                  A cada ano que passa a transição energética é mais impulsionada por tecnologias inovadoras. Essas tecnologias permitem não apenas uma geração de energia renovável mais eficiente, mas também o armazenamento e distribuição de eletricidade em períodos de baixa produção. Projetos como o <span className="font-bold">Noor Ouarzazate</span> no Marrocos e a <span className="font-bold">Copenhagen City</span> na Dinamarca demonstram como é possível implementar essas soluções em larga escala, reduzindo a dependência de combustíveis fósseis e ajudando a mitigar os impactos das mudanças climáticas.
                </h3>
                <h3 className='leading-5 md:leading-6 text-lg'>
                  A Internet tem um papel fundamental na disseminação dessas tecnologias, conectando pessoas e comunidades para compartilhar soluções e promover a adoção de práticas sustentáveis. Plataformas digitais e aplicativos de monitoramento de consumo ajudam os indivíduos a tomar decisões mais informadas, enquanto redes de energia descentralizadas possibilitam a troca de energia entre os usuários, criando um ambiente colaborativo que acelera a transição energética global.
                </h3>
              </div>
              <button className='bg-darkgreen text-white py-3 px-5 rounded-xl w-full md:w-auto'>Venha ser da Eco-Journey!</button>
            </div>
          </div>
        </section>


        {/* Dicas */}
        <section id='dicas' className="px-5">
          <div className="text-center">
            <h2 className="font-bold text-4xl md:text-6xl text-darkgreen mb-4 md:w-3/4 mx-auto">Pequenas Mudanças Geram GRANDES Impactos.</h2>
            <p className="text-lightgreen md:w-3/4 mx-auto text-md md:text-lg">Pequenas mudanças no dia a dia podem gerar grandes impactos no nosso ambiente! Aqui estão algumas sugestões de práticas sustentáveis que qualquer pessoa pode adotar na rotina diária.</p>
          </div>
          {/* Carrosel */}
          <div id="indicators-carousel" className="relative w-full" data-carousel="static">
            <div className="relative mt-20 h-56 sm:h-96 lg:h-[650px] xl:w-3/5 mx-auto overflow-hidden rounded-lg">
              <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
                <img src={imgFontes} className="rounded-2xl absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Imagem incentivando as pessoas usaram fontos renovaveis de energia" />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={imgLampada} className="rounded-2xl absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Imagem incentivando as pessoas a utilizaram lampadas de LED" />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src={imgBusao} className="rounded-2xl absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="Imagem incentivando as pessoas a utilizaram transporte publico" />
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <iframe className='object-cover' src="https://www.youtube.com/embed/H1dbzFPjZL8?si=HgUKtUV_UA_4cjtO"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                >
                </iframe>
              </div>
              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <iframe className='object-cover' src="https://www.youtube.com/embed/UjU0RlTzP4Y?si=7PQ2GhSYF6g24b3w" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
              </div>
            </div>

            {/* Seta Para Voltar */}
            <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-lightgreen">
                <i className="text-white fa-solid fa-caret-left"></i>
              </span>
            </button>
            {/* Seta Para Avancar*/}
            <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-lightgreen">
                <i className="text-white fa-solid fa-caret-right"></i>
              </span>
            </button>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="my-28">
          <div className="relative w-full flex items-center justify-center py-8 min-h-[90vh]">
            <div className="relative grid grid-cols-1 md:grid-cols-2 w-full overflow-hidden">
              {/* Seção de Informações de Contato */}
              <div className="p-8 md:block hidden">
                <h3 className="text-2xl font-semibold mb-4">
                  Entre em contato conosco
                </h3>
                <p className="mb-6">
                  Estamos aqui para ajudar! Entre em contato para dúvidas, sugestões ou suporte.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MdOutlineMap className="w-6 h-6 mr-3" />
                    <p>Rua Exemplo, 123, São Paulo, SP</p>
                  </div>
                  <div className="flex items-center">
                    <MdMailOutline className="w-6 h-6 mr-3" />
                    <p>contato@exemplo.com</p>
                  </div>
                  <div className="flex items-center">
                    <MdOutlineLocalPhone className="w-6 h-6 mr-3" />
                    <p>(11) 98765-4321</p>
                  </div>
                </div>
                <div className="mt-6">
                  <p className="mb-3">Siga-nos nas redes sociais:</p>
                  <div className="flex space-x-4">
                    <i className="w-8 h-8 text-darkgreen rounded-full flex items-center justify-center fab fa-facebook-f"></i>
                    <i className="w-8 h-8 text-darkgreen rounded-full flex items-center justify-center fab fa-twitter"></i>
                    <i className="w-8 h-8 text-darkgreen rounded-full flex items-center justify-center fab fa-instagram"></i>
                    <i className="w-8 h-8 text-darkgreen rounded-full flex items-center justify-center fab fa-linkedin-in"></i>
                  </div>
                </div>
              </div>

              {/* Seção do Formulário */}
              <div className="relative bg-darkestgreen p-8 text-white">
                <form>
                  <h3 className="text-2xl font-semibold mb-6">Fale Conosco</h3>
                  <div className="mb-4">
                    <label className="block mb-2">Nome</label>
                    <input
                      type="text"
                      className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent"
                      placeholder="Digite seu nome"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">E-mail</label>
                    <input
                      type="email"
                      className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent"
                      placeholder="Digite seu e-mail"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block mb-2">Telefone</label>
                    <input
                      type="tel"
                      className="w-full p-3 rounded-full border-2 border-gray-300 bg-transparent"
                      placeholder="Digite seu telefone"
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2">Mensagem</label>
                    <textarea
                      className="w-full p-3 rounded-xl border-2 border-gray-300 bg-transparent"
                      placeholder="Escreva sua mensagem"
                      rows="4"
                    ></textarea>
                  </div>
                  <button className="bg-darkgreen text-white px-6 py-3 rounded-full hover:bg-lightgreen hover:scale-105 transition duration-300">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div >
        </section>
      </main>
      {/* Footer */}
      <svg
        className="mb-[-1px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320">
        <path fill="#165D31" fillOpacity="1" d="M0,256L80,250.7C160,245,320,235,480,240C640,245,800,267,960,277.3C1120,288,1280,288,1360,288L1440,288L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      </svg>
      <footer id='footer' className="bg-darkgreen">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href='#parallax' className="flex items-center self-center text-4xl font-bold text-white  ">Eco Journey</a>
            </div>
            <div className="grid grid-cols-2 gap-10">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Seja Sustentavel</h2>
                <ul className="text-slate-200  font-medium">
                  <li className="mb-4">
                    <a href='#parallax' className="hover:underline">Eco Journey</a>
                  </li>
                  <li>
                    <a href="#solution" className="hover:underline">Dicas</a>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="mb-6 text-sm font-semibold text-white uppercase">Siga Nos</h2>
                <ul className="text-slate-200 font-medium">
                  <li className="mb-4">
                    <a className="hover:underline ">GitHub</a>
                  </li>
                  <li>
                    <a className="hover:underline">Instagram</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Linha */}
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />

          <div className="sm:flex sm:items-center sm:justify-between text-white">
            <p className="text-sm sm:text-center">© 2023 Eco Journey™. All Rights Reserved.</p>
            <div className="flex items-center gap-5 mt-4 sm:justify-center sm:mt-0">
              <a className="hover:text-slate-300 duration-150 ">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a className="hover:text-slate-300 duration-150">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="hover:text-slate-300 duration-150">
                <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a className="hover:text-slate-300 duration-150">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
