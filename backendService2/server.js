const amqp = require('amqplib');

let clickCount = 0;

async function connect() {
  const amqpServer = 'amqp://rabbitmq:5672';
  const connection = await amqp.connect(amqpServer);
  const channel = await connection.createChannel();
  await channel.assertQueue('rabbit');

  channel.consume('rabbit', (message) => {
    clickCount++;
    console.log(`Click count: ${clickCount}`);
    channel.ack(message);
  });
}

connect();