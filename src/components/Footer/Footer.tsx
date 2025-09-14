import styles from "./styles.module.css";
import { FaRegHeart } from "react-icons/fa";


export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.title}><FaRegHeart color="#b55409" /><span>Dr. Chistian</span></span>
        <span className={styles.main}>Psicóloga | CRP: [Número] | Atendimento Online</span>
        <span className={styles.footer}>© 2024 Todos os direitos reservados. Desenvolvido com ❤️ para cuidar de você.</span>
      </div>
    </div>
  );
}
