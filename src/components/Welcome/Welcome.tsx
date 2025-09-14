import styles from "./styles.module.css";

export default function Welcome() {

  return (
    <div id="inicio" className={styles.content}>
        <div className={styles.title}>
            <span className={styles.titleTextNormal}>
                Bem-vindo(a) ao seu
            </span>
            <span className={styles.titleTextDraft}>
                espaço de cuidado
            </span>
        </div>
        <div className={styles.welcomeText}>
            <span>Um ambiente seguro e acolhedor para sua jornada de autoconhecimento e bem-estar emocional. Aqui, você encontrará o suporte profissional necessário para enfrentar desafios e descobrir seu potencial.</span>
        </div>
        <div className={styles.buttonsContainer}>
            <span className={styles.primaryButton}>
                Agendar Consulta
            </span>
            <span className={styles.secondaryButton}>
                Conheça mais
            </span>
        </div>
    </div>
  );
}
