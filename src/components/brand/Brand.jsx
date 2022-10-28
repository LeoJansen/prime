import React from 'react';
import {motion} from 'framer-motion';

import {peugeot, nissan, ford, chevrolet, renault, toyota, volkswagen , bmw} from './imports'
import './brand.scss'

const Brand = () => {




  return (
    <motion.div className='gpt3__brand' 
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1 }}
    
  
   >
      <div className='container' 
      > 
  
      <div className='peugeot'>
    
        <img src={peugeot} alt="google" />
      </div>
  
  
      <div className='nissan'
      >
        <img src={nissan} alt="slack" />
      </div>
      <div className='ford'
>
        <img src={ford} alt="atlassian" />
      </div>
      <div className='chevrolet'

      >
        <img src={chevrolet} alt="dropbox" />
      </div>
      <div className='toyota'

      >
        <img src={toyota} alt="shopify" />
      </div>
      <div className='renault'

      >
        <img src={renault} alt="shopify" />
      </div>
      <div className='volkswagen'

      >
        <img src={volkswagen} alt="shopify" />
      </div>

      <div className='bmw'

      >
        <img src={bmw} alt="shopify" />
      </div>
      </div>


    </motion.div>
  )
}

export default Brand