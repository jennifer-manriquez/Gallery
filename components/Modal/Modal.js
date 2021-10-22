import styles from './Modal.module.css';

const Modal = (props) => {
  return (
    <div className={styles.modal}>Modal
      <span className={styles.close} onClick={() => props.ClickHandler(false)}>&times;</span>
      <img alt='expanded image' className={styles.modalContent} src={`${props.imageSource}`} />
      <div className={styles.caption}>{props.caption}</div>
    </div>
  )
}

export default Modal;