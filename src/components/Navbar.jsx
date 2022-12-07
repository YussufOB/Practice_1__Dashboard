import { useState } from "react";
import Button from './Button.jsx';
import { logo, menu, close } from '../assets';
import { lists } from '../constants';
import './Navbar.css'

const Navbar = () => {
  const [ toggle, setToggle ] = useState(false);

  return (
     <nav className='app__navbar gradientBg'>
      <div className='app__navbar-logo'><img src={logo} alt='logo' /></div>
       <ul className='app__navbar-list'>
         {lists.map((list, index) => (
          <li key={index} className='app__navbar-list_links'><a href={`#{list.id}`}>{list.title}</a></li>
         ))}
       </ul>
       <Button title='Log-In' className='custom__button'/>
       <div className='app__navbar-smallscreen'>
         <img src={menu} onClick={() => setToggle(true)} alt='menu'/>
         {toggle && (
          <div className='app__navbar-smallscreen_overlay slide-bottom'>
            <img src={close} onClick={() => setToggle(false)} alt='close' className='overlay_close'/>
            <ul className='app__navbar-smallscreen_list'>
             {lists.map((list, index) => (
              <li key={index} className='app__navbar-list_links'><a href={`#{list.id}`}>{list.title}</a></li>
             ))}
            <Button title='Log-In' className='custom__button'/>
           </ul>
          </div>
         )}
       </div>
     </nav>
  )
}

export default Navbar;