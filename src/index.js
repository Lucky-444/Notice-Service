const express = require("express");

const { ServerConfig } = require("./config");
const apiRoutes = require("./routes");

const mailsender = require("./config/email-config");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);

app.listen(ServerConfig.PORT, async () => {
 try {
    console.log(`Successfully started the server on PORT : ${ServerConfig.PORT}`);
    const response = await mailsender.sendMail({
      from: ServerConfig.GMAIL_EMAIL,
      to: "abc868@gmail.com",
      subject: "Server Started ? now as well now ",
      text: "Server is running successfully",
    });
  
    console.log(response);
 } catch (error) {
    console.log(error);
    throw error;
 }

});
