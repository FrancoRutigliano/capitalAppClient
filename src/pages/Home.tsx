import { Button } from "primereact/button"
import { useNavigate } from "react-router-dom"

export const Home = () => {


    const navigate = useNavigate();

  return (
   <>
     <div className="flex justify-between surface-0 text-800">
                <div className="  p-6 text-center md:text-left flex align-items-center ">
                    <section className='place-content-center'>
                        <span className="block text-6xl font-bold mb-1">Take charge </span>
                        <div className="text-6xl text-primary font-bold mb-3">of your financial future today</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Track your income, manage expenses, and build a secure financial plan that helps you achieve your goals effortlessly.</p>

                        <Button label="Login" type="button"  className="min-w-[120px] p-button-raised" onClick={() => navigate('/login')} />
                        <Button label="Register" type="button" outlined className="min-w-[120px] " style={{marginLeft: "1rem"}} onClick={() => navigate('/login')}/>
                    </section>
                </div>
                <div className="  overflow-hidden">
                    <img src="/src/resources/phone.avif" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>

   </>
  )
}
