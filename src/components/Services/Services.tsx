import styles from "./styles.module.css";
import { LuUser, LuUsers } from "react-icons/lu";

export default function Services() {
  return (
    <div id="servicos" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>Meus <span className={styles.textDraft}>Serviços</span></span>
          <span className={styles.subTitle}>
            Atendimento psicológico online com qualidade, segurança e
            flexibilidade
          </span>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}><LuUser color="#b55409"/></span>
              <span className={styles.cardTitle}>
                Psicoterapia Individual Adulto Online
              </span>
            </div>
            <div className={styles.cardAbout}>
              <p>
                Atendimento personalizado para adultos através de
                videoconferência, oferecendo flexibilidade e conforto no seu
                próprio espaço.
              </p>
            </div>
            <div className={styles.cardAdvantages}>
              <ul>
                <li>Horários flexíveis</li>
                <li>Ambiente seguro</li>
                <li>Sigilo profissional</li>
              </ul>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.cardIcon}><LuUsers color="#b55409"/></span>
              <span className={styles.cardTitle}>
                Psicoterapia de Casal Online
              </span>
            </div>
            <div className={styles.cardAbout}>
              <p>
                Atendimento personalizado para adultos através de
                videoconferência, oferecendo flexibilidade e conforto no seu
                próprio espaço.
              </p>
            </div>
            <div className={styles.cardAdvantages}>
              <ul>
                <li>Horários flexíveis</li>
                <li>Ambiente seguro</li>
                <li>Sigilo profissional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
