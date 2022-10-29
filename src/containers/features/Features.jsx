import React from 'react'
import { Feature } from '../../components'
import {motion} from 'framer-motion';
import './features.scss'

const featuresData = [
  {title: "Como funciona a retífica do seu motor?", text: "Conforme rege a norma ABNT 13032,  o serviço de retífica , é realizada a substituição das peças desgastadas por peças novas.  Porém as peças mais robustas e essenciais do seu motor como bloco, virabrequim, cabeçotes e bielas, serão submetidas a um processo preciso de retífica e ficarão como novas. "},
  {title: "Você já tem um mecânico da sua confiança? ", text: 'Não tem problema! A gente busca seu motor na oficina dele, fazemos todos os reparos e depois o entregamos para que ele mesmo monte.'},
  {title:"Você é mecânico?", text:" Conte com nossa experiência e estrutura, aliados a confiança e comodidade para agregar valor a sua oficina. Entre em contato conosco, temos parcerias com oficinas mecânica e profissionais liberais."},
  

]

const Features = () => {
  return (
    <motion.div className='gpt3__features'
    whileInView={{ opacity: [0, 1] }}
    transition={{ duration: 1 }}
    id="feature"
    >
      <div className='heading'>
        <h1 className='gradient__text'>Coloque seu cabeçote na mão de quem realmente entende.</h1>
        <p>Prime Retífica</p>

      </div>
      <div className='container'>
        {featuresData.map((item, index) => (
           <Feature title={item.title} text={item.text} key={index}/> 
        ))}
      </div>
     </motion.div>
  )
}

export default Features