import './possibility.css'
import possibilityImage from '../../assets/myapps.png'

function Possibility () {
  return (
    <div className='gpt__possibility section__padding' id='possibility'>
      <div className='gpt__possibility-image'>
        <img src={possibilityImage} alt='possibility' />
      </div>
      <div className='gpt__possibility-content'>
        <h4> </h4>
        <h1 className='gradient__text'>Discover a world of endless possibilities.</h1>
        <p>By combining the power of AI and VR, we can revolutionize the way people learn and train, leading to a more skilled and adaptable workforce.</p>

      </div>
    </div>
  )
}

export default Possibility
