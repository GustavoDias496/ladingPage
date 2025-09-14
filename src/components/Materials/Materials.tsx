import styles from "./styles.module.css";
import { FiBookOpen, FiMessageCircle } from "react-icons/fi";
import { GoCalendar } from "react-icons/go";


export default function Materials() {
  return (
    <div id="materiais" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <span className={styles.title}>
            Materiais <span className={styles.textDraft}>Didáticos</span>
          </span>
          <span className={styles.subTitle}>
            Recursos complementares para apoiar seu processo terapêutico
          </span>
        </div>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <FiBookOpen />
            </span>
            <span className={styles.cardTitle}>E-books</span>
            <p className={styles.cardDescription}>
              Guias práticos sobre ansiedade, relacionamentos e autoestima
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <FiMessageCircle />
            </span>
            <span className={styles.cardTitle}>Artigos</span>
            <p className={styles.cardDescription}>
              Conteúdo informativo sobre saúde mental e bem-estar
            </p>
          </div>
          <div className={styles.card}>
            <span className={styles.cardIcon}>
              <GoCalendar />
            </span>
            <span className={styles.cardTitle}>Exercícios</span>
            <p className={styles.cardDescription}>
              Atividades práticas para desenvolvimento pessoal
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
