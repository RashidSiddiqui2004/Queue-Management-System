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
          <h2>Queue Management System</h2>
          <p>Manage your customers efficiently</p>
        </div>
        <div>
          <button id='author'>Rashid Siddiqui</button>
          <button id='embed'>Embed</button>
        </div>
      </header>

      {/* Main Application */}
      <div id='app'>
        <div id='queue-add'>
          <QueueForm onAddCustomer={addCustomer} />
        </div>
        <div id='queue-list'>
          <QueueDisplay queue={queue} changeCustomerStatus={changeStatusOfCustomer} removeCustomer={removeCustomer} />
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default App
