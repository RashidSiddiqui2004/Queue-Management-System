import './App.css'

import { useState } from 'react'

import QueueForm from './components/QueueForm'
import QueueDisplay from './components/QueueDisplay'
import Footer from './components/Footer'

function App() {

  // To store the queue
  const [queue, setQueue] = useState([]);

  // To add a new customer at the end of the queue
  const addCustomer = (customer) => {
    setQueue([...queue, customer]);
  }

  // To change the status of a customer
  const changeStatusOfCustomer = (customerId, newStatus) => {
    setQueue(queue.map(customer =>
      customer.id === customerId ?
        { ...customer, status: newStatus } : customer
    ))
  }

  // To remove a customer from the queue
  const removeCustomer = (customerId) => {
    setQueue(queue.filter(customer => customer.id !== customerId))
  }

  return (
    <main id='main'>
      <header className='header'>
        <div>
          <h2 data-testid='queue-management-system-title'>Queue Management System</h2>
          <p data-testid='queue-management-system-description'>Manage your customers efficiently</p>
        </div>
        <div>
          <button id='author' data-testid='author-button'>Rashid Siddiqui</button>
          <button id='embed' data-testid='embed-button'>Embed</button>
        </div>
      </header>

      {/* Main Application */}
      <div id='app'>
        <QueueForm onAddCustomer={addCustomer} data-testid='queue-form' />
        <QueueDisplay queue={queue} changeCustomerStatus={changeStatusOfCustomer} removeCustomer={removeCustomer} data-testid='queue-display' />
      </div>

      <Footer />
    </main>
  )
}

export default App
