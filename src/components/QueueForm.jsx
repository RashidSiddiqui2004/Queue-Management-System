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
        <div className={styles.formContainer}>
            <h2 className={styles.title}>Add Customer</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputWrapper}>
                    <input
                        className={styles.input}
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    >
                        <option value="">Select Service Type</option>
                        {/* Service type options for IT Industry */}
                        <option value="consultation">Consultation</option>
                        <option value="support">Support</option>
                        <option value="training">Training</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <button className={styles.button} type="submit">
                    <FaUser />
                    <p>Check In</p>
                </button>
            </form>
        </div>
    )
}

export default QueueForm