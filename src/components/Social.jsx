import React from 'react'
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import linkedin from "../assets/linkedIn.png"
import whatsapp from "../assets/whatsapp.png"

const Social = () => {
  return (
    <div className='aspect-square object-contain flex md:flex-col flex-row md:pt-32  gap-4 px-3'>
      <div className='size-8 object-contain hover:scale-110'>
        <img className='' src={instagram} alt="instagram" />
      </div>
      <div className='size-8 object-contain hover:scale-110 '>
        <img className='' src={facebook} alt="facebook" />
      </div>
      <div className='size-8 object-contain hover:scale-110'>
        <img className='' src={linkedin} alt="linkedin" />
      </div>
      <div className='size-8 object-contain hover:scale-110 '>
        <img className='' src={whatsapp} alt="whatsapp" />
      </div>
    </div>
  )
}

export default Social
