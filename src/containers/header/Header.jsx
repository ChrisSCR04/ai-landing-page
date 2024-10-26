import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

function Header () {
  return (
    <div className='gpt__header section__padding gradient__bg'>
      <div className='gpt__header-content'>
        <h1 className='gradient__text'>Want to build something amazing with AI?</h1>
        <p>Are you ready to unlock the full potential of your business? Let me implement your web applications powered by the latest AI technologies.</p>

        <div className='gpt__header-content__input'>
          <input type='email' placeholder='Your email address' />
          <button type='submit'>Coming Soon</button>
        </div>

        <div className='gpt__header-content__people'>
          <img src={people} alt='People' />
          <p>Revolutionize Your Workflow: Experience the advantage.</p>
        </div>
      </div>
      <div className='gpt__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
