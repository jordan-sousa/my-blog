import styles from './ScrollToTopButton.module.css'
import { isVisible } from "@testing-library/user-event/dist/utils";
import setaPraCima from 'assets/seta-para-cima.png'
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTopButton() {
    const { pathname } = useLocation();
    const [isVisible, setIsVisible] = useState(false)

    const rolarPraCima = () => {
        if (window.scrollY > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }
    const ScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.scrollTo(0, 0);
        window.addEventListener('scroll', rolarPraCima);
        return () => {
            window.removeEventListener('scroll', rolarPraCima);
        };
    }, [pathname], []);

    // return null;
    return (
        <button
            className={styles.botaoDeSubir}
            onClick={ScrollToTop}
            style={{ display: isVisible ? 'block' : 'none' }}
        >
            <img
                className={styles.botaoDeSubir}
                src={setaPraCima}
                alt='Seta pra cima'
            />
        </button>
    )

}
