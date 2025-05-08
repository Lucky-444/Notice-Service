const express = require("express");
const amqplib = require('amqplib');
const { EmailService } = require('./services');

async function connectQueue() {
    try {
        const connection = await amqplib.connect("amqp://localhost");
        const channel = await connection.createChannel();
  
        await channel.assertQueue("noti-queue");
        
        channel.consume("noti-queue" ,async (data)=>{

            const object = JSON.parse(Buffer.from(data.content).toString());



           await EmailService.sendEmail("airlinenotinoti@gmail.com" ,object.recepientEmail,object.subject,object.content);
            console.log(`${Buffer.from(data.content)}`);//
            // store it in a buffer
            // and when it is not busy then start to fetch the data 
            channel.ack(data);//give the acknowledgement back to server 
            // that data is already consumed
            // no more send of the same data again

        })
      } catch (error) {
         console.log(error);
          
      }
}






const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const mailsender = require("./config/email-config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    await connectQueue();
    console.log("queue is Up")
    
});
