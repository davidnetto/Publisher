const amqp = require('amqplib');
const connect = async () =>{
    return await amqp.connect(`amqp://${process.env.RABBIT_MQ_USERNAME}:${process.env.RABBIT_MQ_PASSWORD}@${process.env.RABBIT_MQ_HOST}:${process.env.RABBIT_MQ_PORT}`)
}

const createChannel = async(conection) =>{
    return await conection.createChannel()
}

const createQueue = async(channel, queue) =>{
    await channel.assertQueue(queue);
}

const publish = async(channel, queue,message) =>{
    await channel.sendToQueue(queue, Buffer.from(message));
}


const rabbitMqService = {
    connect,
    createChannel,
    createQueue,
    publish
}

module.exports = rabbitMqService