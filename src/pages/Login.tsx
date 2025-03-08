import { Button } from "primereact/button";
import { Checkbox } from "primereact/checkbox"
import { InputText } from "primereact/inputtext"
import { useState } from "react";
import hyper from '../resources/hyper.svg'

export const Login = () => {

    const [checked, setChecked] = useState<boolean>(false);
    

  return (
    <>
    
<div className="flex align-items-center justify-content-center sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto mt-10 border rounded-t-lg">
    <div className="surface-card p-4 shadow-2 border-round w-full ">
        <div className="text-center mb-5">
            <img src={hyper} alt="hyper" height={50} className="mx-auto mb-3" />
            <div className="text-900 text-3xl font-medium mb-3">Welcome Back</div>
            <span className="text-600 font-medium line-height-3">Don't have an account?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Create today!</a>
        </div>

        <div>
            <label htmlFor="email" className="block text-900 font-medium mb-2">Email</label>
            <InputText id="email" type="text" placeholder="Email address" className="w-full mb-3" />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Password</label>
            <InputText id="password" type="password" placeholder="Password" className="w-full mb-3" />

            <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                    <Checkbox id="rememberme" onChange={e => setChecked(e.checked ?? false)} checked={checked} className="mr-2" />
                    
                    <label htmlFor="rememberme">Remember me</label>
                </div>
                <a className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer">Forgot your password?</a>
            </div>

            <Button label="Sign In" icon="pi pi-user" className="w-full" />
        </div>
    </div>
</div>
    
    </>
  )
}
