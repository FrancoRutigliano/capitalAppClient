import { Menubar } from "primereact/menubar";
import { MenuItem } from "primereact/menuitem";
import { Outlet, useNavigate } from "react-router-dom";

export const Layout = () => {

  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      label: 'Inicio',
      icon: 'pi pi-home',
      command: () => navigate('/')
    },
    // {
    //   label: 'Contacto',
    //   icon: 'pi pi-users',
    //   command: ()=> navigate('/contacto')
    // },

  ];



  return (
    <>
      <Menubar model={items} />
      <Outlet />

    </>
  )
}
