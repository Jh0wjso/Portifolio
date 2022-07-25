import React from 'react';
import './AboutMe.css'

export default function AboutMe() {
  return (
    <div>
      <main className='aboutMe container rounded' id='#aboutMe'>
        <div className='aboutMeContent d-flex flex-row'>
          <div className="my-picture">
            <div className="picture-background rounded">
            </div>
          </div>

          <div className='whoAmI'>
            <strong className='highlight-text'>Sobre mim</strong>
            <p className='aboutMeText'>Atualmente Cursando Ciência da Computação na Universidade Estadual do Norte do Paraná(UENP) no câmpus Luiz Meneghel.
              Estou na busca de me tornar um dev de alto nível, no momento esout estudando ReactJs, React Native, NodeJs, JavaScript, MongoDb,
              Python, Java, Postgress, entre outras tecnologias.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
