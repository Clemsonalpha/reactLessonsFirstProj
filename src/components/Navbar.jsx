import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import Icon from './Icons';

const links = [['Home', '/'], ['About', '/about'], ['Projects', '/projects'], ['Services', '/services'], ['Contact', '/contact']];
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const close = () => setOpen(false);
  return <header className="site-header"><nav className="nav container">
    <NavLink to="/" className="brand" onClick={close}><span className="brand-mark">cj.</span><span>Clemson Joel<span className="brand-dot">.</span></span></NavLink>
    <div className={`nav-links ${open ? 'nav-open' : ''}`}>
      {links.map(([label, path]) => <NavLink key={path} to={path} end={path === '/'} onClick={close} className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}>{label}</NavLink>)}
      <button className="theme-toggle mobile-theme" onClick={toggleTheme} aria-label="Toggle color theme"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
    </div>
    <div className="nav-actions"><button className="theme-toggle desktop-theme" onClick={toggleTheme} aria-label="Toggle color theme"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button><NavLink to="/contact" className="nav-cta">Let's talk <Icon name="external" /></NavLink><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle menu"><Icon name={open ? 'close' : 'menu'} /></button></div>
  </nav></header>;
}
