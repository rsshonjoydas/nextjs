import styles from '../styles/contact.module.css'
import scssStyles from '../styles/Contact.module.scss'

const Contact = () => {
  return (
    <>
      <h2>Contact Page</h2>
      <h2 className={styles.highlight}>module css</h2>
      <h2 className={scssStyles.highlightScss}>SCSS Styles</h2>
    </>
  )
}

export default Contact
