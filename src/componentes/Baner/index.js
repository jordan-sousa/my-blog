import styles from './Baner.module.css'
import circuloColorido from 'assets/circulo_colorido.png'
import leao from 'assets/leao.png'

export default function Baner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    My Blog
                </h1>
                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Jorda Sousa,
                    Desenvolvedor fullstack. Aqui compartilho vários conhecimentos,
                    espero que aprenda algo novo :)
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
                    src={leao}
                    aria-hidden={true}
                />
            </div>
        </div>
    )
}