const express = require('express')
const rabbitMqService = require("../services/rabbitmq")

const FILA_NAME = "interface_grafica"

const router = express.Router()

const handleConnection = async () =>{
    const connection = await rabbitMqService.connect();
    const channel = await rabbitMqService.createChannel(connection)
    await rabbitMqService.createQueue(channel, FILA_NAME)
    return channel;
}

router.post('/publish', async (req, res) => {
    // Create a new user
    try {
        const channel = await handleConnection()
        await rabbitMqService.publish(channel, FILA_NAME, "Alguma mensagem super interessante.")
        res.status(200).send({Mensagem:"DEU BOM!" })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router