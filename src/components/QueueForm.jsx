import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

import styles from './QueueForm.module.css';

const QueueForm = ({ onAddCustomer }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [serviceType, setServiceType] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email) return;

        const newCustomer = {
            id: Date.now(),
            name,
            email,
            serviceType,
            status: 'waiting',
            joinedAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        if (onAddCustomer) {
            onAddCustomer(newCustomer);
        }

        setName('');
        setEmail('');
    };

    return (
        <div className={styles.formContainer} data-testid='queue-form'>
            <h2 className={styles.title} data-testid='queue-form-title'>Add Customer</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        data-testid='queue-form-name'
                        required
                    />
                </div>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        type="email"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        data-testid='queue-form-email'
                        required
                    />
                </div>

                <div>
                    {/* Dropdown for service type */}
                    <select
                        className={styles.input}
                        value={serviceType}
                        onChange={(e) => setServiceType(e.target.value)}
                        required
                        data-testid='queue-form-service-type'
                    >
                        <option value="">Select Service Type</option>
                        {/* Service type options for IT Industry */}
                        <option value="consultation">Consultation</option>
                        <option value="support">Support</option>
                        <option value="training">Training</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button className={styles.button} type="submit" data-testid='queue-form-check-in'>
                    <FaUser />
                    <p>Check In</p>
                </button>
            </form>
        </div>
    )
}

export default QueueForm