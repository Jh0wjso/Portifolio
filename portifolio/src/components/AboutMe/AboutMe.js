import React from 'react';
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div>
      <main className='aboutMe' id='#aboutMe'>
        <div className='aboutMeContent container'>
          <div className="my-picture">
            <div className="picture-background">
            </div>
          </div>

          <div className='whoAmI'>
            <strong className='highlight-text text-center'>Sobre mim</strong>
            <p className='aboutMeText'>Atualmente Cursando Ciência da Computação na Universidade Estadual do Norte do Paraná(UENP) no câmpus Luiz Meneghel.
              Estou na busca de me tornar um dev de alto nível, no momento estou estudando ReactJs, React Native, NodeJs, JavaScript, MongoDb,
              Python, Java, Postgress, entre outras tecnologias.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
