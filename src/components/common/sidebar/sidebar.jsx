import { memo } from 'react';
import { BsClockHistory } from "react-icons/bs";
import { CiStar } from "react-icons/ci";
import { FaBox, FaLock } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { RiArchiveDrawerLine } from "react-icons/ri";
import Carla from "../../../assets/carla.jpg";
import Logo from "../../../assets/logo.png";
import './sidebar.css';
import Button from '../button/button';

const sidebarMenu = {
  "My Templates": { icon: <HiOutlineDocumentText size="2rem" />, submenus: {} },
  "Search": {
    icon: <IoSearch size="2rem" />,
    submenus: {
      submenu1: { icon: <CiStar size="1.8rem" />, items: ['Software Engineer', 'Computer Hardware Engineer', 'Network Engineer', 'Techincal Support', 'Network Admin', 'Management', 'Data Analysis', 'Computer technician'] },
      submenu2: { icon: <BsClockHistory size="1.8rem" />, items: ['Past Search 1', 'Past Search 2', 'Computers and information', 'Database Admin', 'Computer Security', 'Computer Systems Analyst'] }
    }
  },
  "My Boards": {
    icon: <RiArchiveDrawerLine size="2rem" />,
    submenus: {
      submenu1: { icon: <FaBox size="1.8rem" />, items: ['Board 1', 'Board 2', 'Board 3'] },
      submenu2: { icon: <FaLock size="1.8rem" />, items: ['Board Agent 1', 'Board Agent 2', 'Board Agent 3'] },
    }
  }
}

const SubMenu = memo(function SubMenu({ menu, data }) {
  return <ul className='sidebar-nav'>
    {data.map(submenu => sidebarMenu[menu]['submenus'][submenu].items.map(item => <li>
      <a href="/">{sidebarMenu[menu]['submenus'][submenu].icon}
        {item}</a>
    </li>))}
  </ul>
})

const Sidebar = memo(function Sidebar() {
  const menuItems = Object.keys(sidebarMenu);

  return (
    <aside className='sidebar'>
      <div className='sidebar-brand'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='sidebar-nav-container'>
        {menuItems.map(menu => <>
          <h6>{sidebarMenu[menu]['icon']} {menu}</h6>
          <SubMenu menu={menu} data={Object.keys(sidebarMenu[menu]['submenus'])} />
        </>)}
      </div>
      <div className='sidebar-user'>
        <div className='sidebar-user-details'>
          <img src={Carla} alt="user-profile" /> Carla
        </div> <Button type="icon"><FaGear /></Button>
      </div>
    </aside>
  )
})

export default Sidebar