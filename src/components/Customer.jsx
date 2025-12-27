import { FaCheck, FaTrash, FaClock, FaTag } from 'react-icons/fa';
import styles from './Customer.module.css';

const Customer = ({ customer, changeCustomerStatus, removeCustomer }) => {
    const isServing = customer.status === 'serving';

    return (
        <div className={styles.card} data-testid='customer-card'>
            <div className={`${styles.statusIndicator} ${isServing ? styles.statusIndicatorServing : styles.statusIndicatorWaiting}`} />

            <div className={styles.header} data-testid='customer-header'>
                <div className={styles.mainInfo} data-testid='customer-main-info'>
                    <h3 className={styles.name} data-testid='customer-name'>{customer.name}</h3>
                    <span className={styles.email} data-testid='customer-email'>{customer.email}</span>
                </div>
                <div className={styles.actions} data-testid='customer-actions'>
                    {!isServing && (
                        <button
                            className={`${styles.actionBtn} ${styles.serveBtn}`}
                            onClick={() => changeCustomerStatus(customer.id, 'serving')}
                            title="Start Serving"
                            data-testid='serve-btn'
                        >
                            <FaCheck size={14} />
                        </button>
                    )}
                    <button
                        className={`${styles.actionBtn} ${styles.removeBtn}`}
                        onClick={() => removeCustomer(customer.id)}
                        title="Remove from Queue"
                        data-testid='remove-btn'
                    >
                        <FaTrash size={14} />
                    </button>
                </div>
            </div>

            <div className={styles.meta} data-testid='customer-meta'>
                <span className={`${styles.badge} ${isServing ? styles.badgeServing : styles.badgeWaiting}`} data-testid='customer-badge'>
                    {customer.status}
                </span>

                {customer.serviceType && (
                    <span className={styles.serviceType} data-testid='customer-service-type'>
                        <FaTag size={10} />
                        {customer.serviceType}
                    </span>
                )}

                <span className={styles.time} data-testid='customer-joined-at'>
                    <FaClock size={12} />
                    {customer.joinedAt}
                </span>
            </div>
        </div>
    )
}

export default Customer