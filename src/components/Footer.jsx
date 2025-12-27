import styles from './Footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <p data-testid='footer-text'>© 2025 Queue Management System. All rights reserved.</p>
            <p>Developed with <span>❤️</span> by Rashid Siddiqui</p>
        </div>
    )
}

export default Footer