import { Feature } from '../../components'
import './whatgpt.css'

function Whatgpt () {
  return (
    <div className='gpt__whatgpt section__margin' id='wgpt'>
      <div className='gpt__whatgpt-feature'>
        <Feature title='What is GPT?' text='GPTs, or generative pre-trained transformers, are versatile AI-powered tools that are easily customized to suit your specific needs.' />
      </div>
      <div className='gpt__whatgpt-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>

      </div>
      <div className='gpt__whatgpt-container'>
        <Feature title='Knowledge Mining' text=' Is an emerging discipline in artificial intelligence that uses a combination of intelligent services to quickly learn from vast amounts of information' />
        <Feature title='Computer Vision' text='Computer vision is a field focuses on enabling computers to identify and understand objects and people in images and videos' />
        <Feature title='Natural Language Processing' text='(NLP) is a technological process that enables computer applications, such as bots, to derive meaning from user&apos;s input.' />
      </div>
    </div>
  )
}

export default Whatgpt
