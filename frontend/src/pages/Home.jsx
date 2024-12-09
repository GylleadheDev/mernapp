
import { FaGithub } from "react-icons/fa";
import {Image , Button} from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'



export default function Home() {
  const navigate = useNavigate()
  return (
    <>
      <section className="">
        <div className="flex flex-wrap md:flex-nowrap max-w-screen-xl p-8 mx-auto items-center ">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
              🖥️ Aplicação de <span className=" text-primary">cadastro</span> de
              Produtos com NextJs ✨{" "}
            </h1>
            <p className="max-w-2xl mb-6 font-bold  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Com simples cliques ,em minha aplicação você pode cadastrar um
              novo usuário e adicionar status... Controle e organize suas
              informações com{" "}
              <span className="badge badge-warning font-bold text-sm lg:text-lg">
                agilidade ⚡{" "}
              </span>{" "}
              , seja cadastro de{" "}
              <span className="badge badge-accent font-bold text-sm lg:text-lg">
                clientes
              </span>{" "}
              ,{" "}
              <span className="badge badge-accent font-bold text-sm lg:text-lg">
                produtos
              </span>{" "}
              ou{" "}
              <span className="badge badge-accent font-bold text-sm lg:text-lg">
                serviços
              </span>
            </p>
            <div className="flex justify-center scale-90 md:scale-100 gap-4">
              <a
                target="_blank"
                href="https://github.com/GylleadheDev"
                className="btn  hover:scale-110 "
              >
                My GitHub
                <FaGithub size={30} />
              </a>
              <a
                target="_blank"
                href="https://portfolio-gylleadhe.vercel.app/"
                className="btn btn-secondary hover:scale-110 "
              >
                My Portfolio
              </a>
              <Button
                onClick={() => navigate('/products')}
                colorScheme="cyan"
                border={"0px"}
                
                className="btn "
              >
                Acesse Aqui 😊
              </Button>
            </div>
          </div>
          <div className="flex flex-col m-auto items-center justify-center gap-10 p-8  ">
          <Image
            src="./mockup.png"
            width={{ base: "400px", md: "300px", lg: "400px" }}
            className=" rounded-lg shadow-2xl text-center "
            borderRadius="md"
            
            alt="Phone"
          />
          </div>
        </div>
      </section>
      <section className="hero  p-8">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="./phone.png"
            width={{ base: "200px", md: "300px", lg: "300px" }}
            className=" rounded-lg shadow-2xl "
            borderRadius="md"
            
            alt="Phone"
          />
          <div>
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
              Box Office News!
            </h1>
            <p className="py-6 text-gray-900 dark:text-white">
              Aqui você pode gerenciar todos os registros e cadastros do seu
              sistema de forma fácil e rápida , acesse de qualquer lugar a
              qualquer momento , em seu smartphone tambem irá poder gerenciar
              seus negoicios de forma simples e eficiente.
            </p>
            <div role="alert" className="alert alert-info my-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 shrink-0 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span className="font-bold">

                Caso queira acessar o repositorio da aplicação é so clicar no
                botão abaixo ,
                <Button
                  onClick={() => navigate('/products')}
                  className=" underline font hover:scale-110 hover:bg-cyan-300 "
                >
                  ACESSE NOSSO SISTEMA AQUI 😊
                </Button>
              </span>
            </div>
            <a
              target="_blank"
              href="https://github.com/GylleadheDev"
              className="btn btn-primary"
            >
              Github Repo
            </a>
          </div>
        </div>
      </section>

      <footer className="footer  p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form>
          <h6 className="footer-title">Newsletter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item"
              />
              <button className="btn btn-primary join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    </>
  );
}
