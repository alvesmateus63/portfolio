import type { NextPage } from 'next'
import Button from '../components/Button'
import ProjectCard from '../components/ProjectCard'
import styles from '../styles/Home.module.scss'
import Typewriter from 'typewriter-effect';

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.bannerContainer}>
        <div className={styles.bannerText}>
          <p>Olá, Eu sou</p>
          <div className={styles.myName}>
            <Typewriter
            options={{ loop: false }}
            onInit={(typewriter) => {
              typewriter
                .pauseFor(500)
                .typeString("Mateus Alves")
                .start()
            }}
          />
          </div>
          <p>Desenvolvedor Front-End</p>
        </div>
        <div className={styles.bannerButtons}>
          <Button path="https://www.linkedin.com/in/mateusalves63/" buttonText='LinkedIn' color='#fff' bgColor='transparent' borderColor='#a4a4a4' />
          <Button path="https://github.com/alvesmateus63" buttonText='Github' color='#fff' bgColor='transparent' borderColor='#a4a4a4' />
        </div>      
      </section>
      <section className={styles.projectsContainer}>
        <h2>Meus Projetos</h2>
        <div className={styles.cardsArea}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </section>
      <section className={styles.aboutContainer}>
        <h2>Sobre Mim</h2>
        <div className={styles.aboutMeContent}>
          <div className={styles.profilePic}>
            <img src="/images/profile.png" alt="" />
          </div>
          <div className={styles.aboutMeDesc}>
           <p>Olá, eu sou o Mateus e tenho 20 anos. Estou cursando Sistemas de informação na Universidade Federal de Juiz de Fora. Atualmente estou focado no Front-End.</p>
          </div>
        </div>
      </section>

    </>
  )
}

export default Home
