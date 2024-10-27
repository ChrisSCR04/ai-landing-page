import { useState, useEffect, useRef } from 'react'
import { useScrollDirection } from './useScrollDirection'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { SiWhatsapp, SiTelegram, SiGithub } from 'react-icons/si'
import logo from '../../assets/logo.svg'
import './navbar.css'

function Navbar () {
  const [toggleMenu, setToggleMenu] = useState(false)
  const scrollDirection = useScrollDirection()

  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  const displayResponsiveMenu = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleOutsideClick = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      event.target !== buttonRef.current
    ) {
      setToggleMenu(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [])

  return (
    <div className={`gpt__navbar ${scrollDirection === 'down' ? 'hide' : 'show'}`}>
      <div className='gpt__navbar-links'>
        <div className='gpt__navbar-links_logo'>

          <span>
            <a href='#'>
              <img src={logo} alt='logo' />
            </a>
          </span>

        </div>
        <div className='gpt__navbar-links_container'>

          <p><a href='#wgpt'>What is GPT?</a></p>
          <p><a href='#features'>Case Studies</a></p>
          <p><a href='#possibility'>Potential</a></p>
          <p><a href='#blog'>Blog</a></p>
        </div>
      </div>
      <div className='gpt__navbar-sign'>
        <SiWhatsapp fill='white' size={27} />
        <SiTelegram fill='white' size={27} />
        <span>
          <a href='https://github.com/chrisscr04'>
            <SiGithub fill='white' size={27} />
          </a>
        </span>
      </div>
      <div className='gpt__navbar-menu'>
        <div className='gpt__navbar-menu-mobile' ref={buttonRef} onClick={displayResponsiveMenu}>
          {toggleMenu
            ? (
              <RiCloseLine color='#fff' size={27} />
              )
            : (
              <RiMenu3Line color='#fff' size={27} />
              )}
        </div>
        {toggleMenu && (
          <div ref={menuRef} className='gpt__navbar-menu_container scale-up-center'>
            <div className='gpt__navbar-menu_container-links'>

              <p><a onClick={displayResponsiveMenu} href='#wgpt'>What is GPT?</a></p>
              <p><a onClick={displayResponsiveMenu} href='#features'>Case Studies</a></p>
              <p><a onClick={displayResponsiveMenu} href='#possibility'>Potential</a></p>
              <p><a onClick={displayResponsiveMenu} href='#blog'>Blog</a></p>
            </div>
            <div className='gpt__navbar-menu_container-links-sign'>
              <SiWhatsapp fill='white' size={27} />
              <SiTelegram fill='white' size={27} />
              <span>
                <a href='https://github.com/chrisscr04'>
                  <SiGithub fill='white' size={27} />
                </a>
              </span>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default Navbar
