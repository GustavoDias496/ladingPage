import { FiMessageCircle } from "react-icons/fi";
import styles from "./styles.module.css";
import { LuPhone } from "react-icons/lu";
import { MdMailOutline } from "react-icons/md";



export default function Contact() {
  return (
    <div id="contato" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>
            Entre em  <span className={styles.textDraft}>Contato</span>
          </span>
          <span className={styles.subTitle}>
            Estou aqui para ajudar você. Entre em contato e vamos conversar sobre como posso apoiar sua jornada
          </span>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <LuPhone />
            </span>
            <span className={styles.cardTitle}>E-books</span>
            <p className={styles.cardDescription}>
              (11) 99999-9999
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <MdMailOutline />
            </span>
            <span className={styles.cardTitle}>E-mail</span>
            <p className={styles.cardDescription}>
              contato@psicologo.com
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <FiMessageCircle />
            </span>
            <span className={styles.cardTitle}>WhatsApp</span>
            <p className={styles.cardDescription}>
              (11) 99999-9999
            </p>
          </div>
        </div>
        <div className={styles.whatsappContainer}>
          <span className={styles.whatsappIcon}>
            <FiMessageCircle />
          </span>
          <span className={styles.whatsappText}>
            Agendar pelo WhatsApp
          </span>
        </div>
      </div>
    </div>
  );
}
