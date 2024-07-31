import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha_foto.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresetacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Olá! Sou Joab Oliveira, entusiasta ao desenvolvimento de Software e seu padrão de Qualidade. No momento aplicado ao JavaScript e React.js. Posteriormente as trilhas de QA, que o Alura oferece. Vamos conversar?
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="foto do joab"
                />
            </div>
        </div>
    )
}