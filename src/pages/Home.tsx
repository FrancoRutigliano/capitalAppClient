import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"
import '../styles/Home.css'

export const Home = () => {


    const navigate = useNavigate();

  return (
   <>
     <div className="flex flex-col-reverse sm:flex-row justify-between surface-0 text-800 animated fadeIn">
                <div className=" px-3 sm:p-6 text-center md:text-left flex align-items-center ">
                    <section className='place-content-center'>

                        <p className="text-4xl block lg:text-6xl font-bold mb-1 text-[#0ea5e9]">Take charge </p>
                        <p className="text-4xl lg:text-6xl text-primary font-bold mb-3">of your financial future today</p>
                        <p className="mt-0 mb-4 text-700 line-height-3">Track your income, manage expenses, and build a secure financial plan that helps you achieve your goals effortlessly.</p>

                        <Button label="Login" type="button"  className="min-w-[120px] p-button-raised" onClick={() => navigate('/login')} />
                        <Button label="Register" type="button" outlined className="min-w-[120px] " style={{marginLeft: "1rem"}} onClick={() => navigate('/login')}/>
                    </section>
                </div>
                <div className=" mt-10 sm:mt-0 overflow-hidden " >
                    <img src="/src/resources/phone.avif" alt="hero-1" className="clip-phone md:ml-auto block md:h-full" />
                </div>
            </div>

   </>
  )
}
