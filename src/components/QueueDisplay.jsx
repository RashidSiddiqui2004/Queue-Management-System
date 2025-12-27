
import { FaUsers } from 'react-icons/fa';
import Customer from './Customer';
import styles from './QueueDisplay.module.css';

const QueueDisplay = ({ queue, changeCustomerStatus, removeCustomer }) => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Current Queue ({queue.length})</h2>

            {queue.length === 0 ? (
                <div className={styles.emptyState}>
                    <FaUsers className={styles.emptyIcon} />
                    <h3>No customers in queue</h3>
                    <p>Add customers to get started.</p>
                </div>
            ) : (
                <div className={styles.list}>
                    {/* serving customers at the front */}
                    {
                        queue.filter(customer => customer.status === 'serving').map((customer) => (
                            <Customer
                                key={customer.id}
                                customer={customer}
                                changeCustomerStatus={changeCustomerStatus}
                                removeCustomer={removeCustomer}
                            />
                        ))
                    }
                    {/* customers who are not being served */}
                    {queue.filter(customer => customer.status !== 'serving').map((customer) => (
                        <Customer
                            key={customer.id}
                            customer={customer}
                            changeCustomerStatus={changeCustomerStatus}
                            removeCustomer={removeCustomer}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

export default QueueDisplay