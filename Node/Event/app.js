const EventEmitter = require('events')

const  customEvent = new EventEmitter()


//customEvent.emit()  here emitting event wont work as we have to first lis ten to event and then response or emmit

customEvent.on('eventname', ()=>{

    console.log("listning event")
})

customEvent.on('eventname',(name,id)=>{

    console.log(`we can pass paramaters too and they are name: ${name} and id : ${id}`)
})

customEvent.emit('eventname','abhi',9195)