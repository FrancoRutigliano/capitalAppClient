
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { MenuItem } from 'primereact/menuitem';
import { Button } from 'primereact/button';

export default function BasicDemo() {

    const items: MenuItem[] = [
        {
            label: 'Inicio',
            icon: 'pi pi-home'
        },
        {
            label: 'Contacto',
            icon: 'pi pi-users'
        },

    ];

    return (
        <>
        <div className="">
            <Menubar model={items} />
        </div>

            <div className="flex justify-between surface-0 text-800">
                <div className="  p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Create the screens</span>
                        <div className="text-6xl text-primary font-bold mb-3">your visitors deserve to see</div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                        <Button label="Live Demo" type="button" className="p-button-outlined" />
                    </section>
                </div>
                <div className="  overflow-hidden">
                    <img src="/src/resources/phone.avif" alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>

        </>
    )
}
