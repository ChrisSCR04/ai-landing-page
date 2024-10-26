import './brand.css'
import { azure, cloudflare, openai, vercel } from './import'

function Brand () {
  return (
    <div className='gpt__brand section__padding'>
      <div>
        <img src={azure} alt='Google logo' />
      </div>
      <div>
        <img src={openai} alt='slack logo' />
      </div>
      <div>
        <img src={vercel} alt='atlassian logo' />
      </div>
      <div>
        <img src={cloudflare} alt='dropbox logo' />
      </div>
    </div>
  )
}

export default Brand
