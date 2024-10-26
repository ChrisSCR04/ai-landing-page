import './features.css'
import { Feature } from '../../components'

const featuresData = [
  {
    title: 'Revolutionizing Healthcare with AI',
    text: 'Deploying object detection models to analyze medical images, such as MRI and CT scans, to identify early biomarkers of neurodegenerative diseases.'
  },
  {
    title: 'Enhancing Customer Experiences with AI-Powered Chatbots',
    text: 'Deploying Microsoft Copilots to create intelligent chatbots that can handle customer inquiries 24/7.'
  },
  {
    title: 'Securing Digital Assets with AI-Powered Cybersecurity',
    text: 'Implementing Azure Security Center to detect and respond to threats using AI-powered threat intelligence and automation.'
  },
  {
    title: 'Optimizing Supply Chain with AI-Driven Insights',
    text: 'Utilizing IoT to collect real-time data from sensors and devices, and applied machine learning to optimize inventory levels and predict demand.'
  }
]

function Features () {
  return (
    <div className='gpt__features section__padding' id='features'>
      <div className='gpt__features-heading'>
        <h1 className='gradient__text'>The future is now. Read These Real-World Case Studies Step into Future Today & Make it happen.</h1>

      </div>
      <div className='gpt__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
