import './footer.css'
import logo from '../../assets/logo.svg'

function Footer () {
  return (
    <>
      <div className='gpt__footer-heading'>
        <h1 className='gradient__text'>Don&apos;t Miss Out: Be a pioneer, not a follower. <br /> Let&apos;s meet up today.</h1>
        <div className='gpt__footer-btn'>
          <p>Contact via Email</p>
        </div>
      </div>
      <div className='gpt__footer section__padding'>

        <div className='gpt__footer-links'>
          <div className='gpt__footer-links-logo'>
            <img src={logo} alt='logo' />

          </div>
          <div className='gpt__footer-links__div'>
            <h4>Links</h4>
            <p>Social Media</p>
            <p>Terms of Service</p>
            <p>Cookie Policy</p>
          </div>

        </div>
        <div className='gpt__footer-copyright'>
          <p>© 2024 CSCR Dev - JSMastery Courses</p>
        </div>
      </div>
    </>
  )
}

export default Footer
