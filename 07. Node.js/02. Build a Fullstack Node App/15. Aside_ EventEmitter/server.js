// import EventEmitter
import { EventEmitter } from "node:events"

const customerDetails = {
    fullName: 'Merly Sheep',
    email: 'baah@thedevilwearswool.com',
    phone: 1234567890
}

// create the emitter
const emailRequestEmitter = new EventEmitter()

// define the listener function
function generateEmail(customer) {
    console.log(`Email generated for ${customer.email}`)
}

// register the listener
emailRequestEmitter.on('emailRequest', generateEmail)

// emit the event
emailRequestEmitter.emit('emailRequest', customerDetails)
emailRequestEmitter.emit('emailRequest', () => console.log('task assigned'))
emailRequestEmitter.emit('emailRequest', () => console.log('email logged'))