import { useForm } from "react-hook-form";

// STYLES
import "./App.css";

// ICONS
import GoogleIcon from '@mui/icons-material/Google';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';

// IMAGES
import muñeco from "../public/images/muñeco.png";
import libro from "../public/images/libro.png";

const App = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
        }
    });

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
    
      <div className="w-full h-full p-8 flex justify-center items-center bg-slate-900 text-white">

        <div className="bg-glass w-[30rem] h-[60rem] flex flex-col items-center border-solid border border-gray-950 overflow-hidden">

          <div className="w-full h-48 flex justify-end bg-black backdrop-blur-[8px] rounded-[0_0_15px_15px]">

            <div className="bg-[#750acc] w-8 h-8 absolute mt-8 mr-[75%] blur-[5px] z-[1] animate-moverCuadrado1"></div>
            <div className="bg-[#750acc] w-8 h-8 absolute mt-[8.5rem] mr-[85%] rounded-full blur-[7px] z-[1] animate-moverCirculo1"></div>
            <div className="bg-[#750acc] w-8 h-8 absolute mt-[7rem] mr-[55%] rounded-full blur-[7px] z-[1] animate-moverCirculo2"></div>
            <div className="bg-[#750acc] w-8 h-8 absolute mt-8 mr-[20%] blur-[5px] z-[1] rotate-[20deg] animate-moverCuadrado2"></div>

            <img src={muñeco} className="w-2/4 z-[999]" />

          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col m-[0_1rem]">

            <h2 className="mt-4 mb-[0.3rem] text-5xl self-center max-[520px]:text-[2.5rem] max-[370px]:text-[2rem]">Get Started Free</h2>
            <p className="self-center mb-6 text-xl max-[520px]:text-[1.2rem] max-[370px]:text-[1rem]">Writing is clarifying!</p>

            <div className="flex gap-3 mb-4">

              <div className="flex flex-col">

                <label className="mb-[0.3rem] text-xl">Nombre</label>
                <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="text" {...register('nombre', {
                  required: true,
                  })} 
                />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

              </div>

              <div className="flex flex-col">

                <label className="mb-[0.3rem] text-xl">Apellido</label>
                <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="text" {...register('nombre', {
                  required: true,
                  })} 
                />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

              </div>

            </div>

            <div className="flex flex-col mb-4">

              <label className="mb-[0.3rem] text-xl">Nombre de tu escuela</label>
              <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="text" {...register('nombre', {
                required: true,
                })} 
              />
              {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

            </div>

            <div className="flex flex-col mb-4">

              <label className="mb-[0.3rem] text-xl">Grado</label>

              <select className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full cursor-pointer">

                <option className="bg-[#4e4e4e]">Seleccionar</option>
                <option className="bg-[#4e4e4e]">Primaria</option>
                <option className="bg-[#4e4e4e]">Secundaria</option>
                <option className="bg-[#4e4e4e]">Universidad</option>

              </select>

            </div>

            <div className="flex gap-3 mb-4">

              <div className="flex flex-col">

                <label className="mb-[0.3rem] text-xl">Usuario</label>
                <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="text" {...register('nombre', {
                  required: true
                  })} 
                />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

              </div>

              <div className="flex flex-col">

                <label className="mb-[0.3rem] text-xl">Clave</label>
                <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="password" {...register('nombre', {
                  required: true,
                  })} 
                />
                {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

              </div>

            </div>

            <div className="flex flex-col mb-6 z-[999]">

              <label className="mb-[0.3rem] text-xl">Nro. teléfono</label>
              <input className="text-white text-base p-[0.4rem_0.4rem] rounded-lg bg-glass-input w-full" type="text" {...register('nombre', {
                required: true,
                })} 
              />
              {errors.nombre?.type === 'required' && <p>El campo nombre es requerido</p>}

            </div>

            <input type="submit" value="Iniciar sesión" className="w-full p-[0.8rem_0] text-base rounded-2xl mb-8 cursor-pointer border-none text-white z-[999] bg-gradient-to-r from-fuchsia-800 via-fuchsia-600 to-rose-600" />

          </form>

          <div className="flex justify-center items-center gap-4 mb-5 z-[999] max-[520px]:flex-col">

            <div className="bg-gradient-to-r from-[#3a3b3a03] to-[#ffffff] h-1 w-20 rounded-3xl opacity-70"></div>
            <p className="text-xl font-bold">O inicia sesión con</p>
            <div className="bg-gradient-to-l from-[#3a3b3a03] to-[#ffffff] h-1 w-20 rounded-3xl opacity-70"></div>

          </div>

          <div className="flex gap-8 z-[999]">

            <GoogleIcon fontSize="large" className="p-[0.4rem] cursor-pointer rounded-lg bg-glass-input" />

            <AppleIcon fontSize="large" className="p-[0.4rem] cursor-pointer rounded-lg bg-glass-input" />

            <FacebookIcon fontSize="large" className="p-[0.4rem] cursor-pointer rounded-lg bg-glass-input" />

          </div>

          <div className="bg-[#ce3f07] w-[15rem] h-[15rem] absolute blur-[140px] z-10 bottom-[-7rem] left-[-6rem] rounded-full"></div>
          <img src={libro} alt="Libro" className="w-[13rem] absolute bottom-[-3.5rem] right-[-5rem] rotate-[-10deg]" />

        </div>

      </div>

    );
}

export default App;