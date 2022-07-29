import React from 'react';
import Button from '../Button';
import styles from './projectCard.module.scss';

const ProjectCard = () => {
  return (
    <div className={styles.cardContainer}>
      <img src="/images/em-breve.jpg" alt="" />
      <h3>Nome do Projeto</h3>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, voluptatibus!</p>
      <div className={styles.buttonsArea}>
        <Button path='/' buttonText='Github' color='#fff' bgColor='#20063B' borderColor='#20063B'/>
        <Button path="/" buttonText='Ver' color='#fff' bgColor='#62C370' borderColor='#62C370'/>
      </div>
    </div>
  )
}

export default ProjectCard;