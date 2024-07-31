import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Joab!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Joab"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudande de Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou quando trabalhei na Ikhon tecnólogia, durante o período de dois anos. Participei de várias etapas do processo e interagi com todos os demais da equipes, compreendendo suas funções e a necessidade de cada um. Foi quando tive o interresse na área de desenvolvimento, mas não tive continuidade por sair da empresa. 
            </p>
            <p className={styles.paragrafo}>
                Ao passar dos anos e ver as mudanças no mercado de trabalho, decidi buscar a formação e connhecimento necessário. Iniciei a faculdade de Análise e desenvolvimento de sistemas na Estácio e posteriomente os cursos da Alura. Com isso tendo uma abordagem mais ampla em uma e na outra uma mais específica e direcionada ao dsenvolvimento Front-end. 
            </p>
            <p className={styles.paragrafo}>
                Passei pela formação de iniciante como lógica de programação, HTML, CSS e o JavaScript, como também Git e Github. Posteriomente busquei uma trilha focada no React.js. Agora vou buscar amplicar com diversos cursos variáveis, como banco de dados, scrum, fremework e testes. 
            </p>
            <p className={styles.paragrafo}>
                Hoje no último semestre da faculdade, busco a insersão ao mercado de trabalho, para aprimorar, aperfeiçoar e praticar no dia a dia a rotina de uma fábrica em ação.  
            </p>
            <p className={styles.paragrafo}>
                Eu possuo um perfil dedicado, dsciplinado, focado e tenho facilidade em me adaptar. 
            </p>
            
           
        </PostModelo>
    )
}