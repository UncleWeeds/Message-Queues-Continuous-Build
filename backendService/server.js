const express = require("express")
const app = express()
const amqp = require("amqplib")
var channel, connection

connect();
async function connect() {
    try{
    const amqpServer = "amqp://rabbitmq:5672";
    connection = await amqp.connect(amqpServer);
    channel = await connection.createChannel();
    await channel.assertQueue("rabbit");
    } catch(err) {
        console.log(err);
    }
}

app.post("/click", async (req, res) => {

    await channel.sendToQueue("rabbit", Buffer.from('click'))
    return res.send("Click Added!!");
})

app.listen(5001, () => {
    console.log(`Service is running at 5001`)
})

