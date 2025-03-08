import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Outlet } from "react-router-dom";

export const Layout = () => {

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
      <Outlet /> 

    </>
  )
}
