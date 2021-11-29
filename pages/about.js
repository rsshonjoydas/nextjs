import styles from '../styles/about.module.css'
import scssStyles from '../styles/About.module.scss'

const About = () => {
  return (
    <>
      <h2>About Page</h2>
      <h2 className={styles.highlight}>Module css</h2>
      <h2 className={scssStyles.highlightScss}>SCSS Styles</h2>
    </>
    
  )
}

export default About
