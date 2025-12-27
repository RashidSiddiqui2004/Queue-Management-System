import { FaCheck, FaTrash, FaClock, FaTag } from 'react-icons/fa';
import styles from './Customer.module.css';

const Customer = ({ customer, changeCustomerStatus, removeCustomer }) => {
    const isServing = customer.status === 'serving';

    return (
        <div className={styles.card}>
            <div className={`${styles.statusIndicator} ${isServing ? styles.statusIndicatorServing : styles.statusIndicatorWaiting}`} />

            <div className={styles.header}>
                <div className={styles.mainInfo}>
                    <h3 className={styles.name}>{customer.name}</h3>
                    <span className={styles.email}>{customer.email}</span>
                </div>
                <div className={styles.actions}>
                    {!isServing && (
                        <button
                            className={`${styles.actionBtn} ${styles.serveBtn}`}
                            onClick={() => changeCustomerStatus(customer.id, 'serving')}
                            title="Start Serving"
                        >
                            <FaCheck size={14} />
                        </button>
                    )}
                    <button
                        className={`${styles.actionBtn} ${styles.removeBtn}`}
                        onClick={() => removeCustomer(customer.id)}
                        title="Remove from Queue"
                    >
                        <FaTrash size={14} />
                    </button>
                </div>
            </div>

            <div className={styles.meta}>
                <span className={`${styles.badge} ${isServing ? styles.badgeServing : styles.badgeWaiting}`}>
                    {customer.status}
                </span>

                {customer.serviceType && (
                    <span className={styles.serviceType}>
                        <FaTag size={10} />
                        {customer.serviceType}
                    </span>
                )}

                <span className={styles.time}>
                    <FaClock size={12} />
                    {customer.joinedAt}
                </span>
            </div>
        </div>
    )
}

export default Customer