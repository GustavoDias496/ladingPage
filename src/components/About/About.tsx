import styles from "./styles.module.css";
import perfil from "../../assets/eu1.jpg";

export default function About() {
  return (
    <div id="sobre" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.aboutSection}>
          <div className={styles.title}>
            <span className={styles.titleMain}>Sobre </span>
            <span className={styles.titleDraft}>mim</span>
          </div>

          <div className={styles.aboutText}>
            <p>
              Sou psicóloga clínica com mais de [X] anos de experiência em
              atendimento online. Formada em Psicologia pela [Universidade], com
              especialização em [Especialização] e pós-graduação em [Área de
              especialização].
            </p>
            <p>
              Minha abordagem terapêutica é baseada na [Abordagem terapêutica],
              priorizando um ambiente seguro e acolhedor onde você pode se
              expressar livremente e trabalhar suas questões no seu próprio
              ritmo.
            </p>
            <p>
              Trabalho principalmente com questões relacionadas a ansiedade,
              depressão, relacionamentos, autoestima, transições de vida e
              desenvolvimento pessoal. Acredito que cada pessoa possui recursos
              internos únicos para superar desafios e alcançar bem-estar.
            </p>
          </div>

          <div className={styles.status}>
            <div className={styles.crpContainer}>
              <span>🛡️</span>
              <span>CRP: 14564564136</span>
            </div>
            <div className={styles.xpContainer}>
              <span>⭐</span>
              <span>3+ de experiência</span>
            </div>
          </div>
        </div>

        <div className={styles.photoContainer}>
          <img className={styles.photo} src={perfil} alt="Foto de perfil" />
        </div>
      </div>
    </div>
  );
}
