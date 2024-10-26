import './blog.css'
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05 } from './import'

function Blog () {
  return (
    <div className='gpt__blog section__padding' id='blog'>
      <div className='gpt__blog-heading'>
        <h1 className='gradient__text'>Trending Now: <br /> See what everyone is talking about.</h1>
      </div>
      <div className='gpt__blog-container'>
        <div className='gpt__blog-container__groupA'>
          <Article imgUrl={blog01} date='October 20th, 2024' title='Enhanced Learning Experience: The immersive VR environment' />
        </div>
        <div className='gpt__blog-container__groupB'>
          <Article imgUrl={blog02} date='October 1st, 2024' title='Reduced False Alarms: Advanced algorithm' />
          <Article imgUrl={blog04} date='September 20th, 2024' title='Data-Driven Insights: Valuable insights' />
          <Article imgUrl={blog03} date='September 26th, 2024' title='Increased Productivity: AI-powered code generation' />
          <Article imgUrl={blog05} date='September 13th, 2024' title='Multimodal Support: Expand the chatbot&apos;s capabilities' />
        </div>
      </div>
    </div>
  )
}

export default Blog
