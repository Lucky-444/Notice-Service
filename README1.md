1st do `npm i`
then go to src folder
       `cd src`
then do `npx sequelize init --force`
then do `npx sequelize db:migrate`


{
        what is notification service
        now create a new model
        create a new model called `Notification` in the `models` folder
        create a new file called `notification.js` in the `models` folder
        add the following code to the `notification.js` file
        `npx sequelize model:generate --name Ticket --attributes subject:string,content:string,recepientEmail:string,status:string`
}

{
        for notification service we use a new email
        use nodemailer
        run
        `npm i nodemailer`

}

{
        there should be two different databases for a microservice
        project
        
}

{
        there is a booking service 
        from booking service to create a ticket
        the booking service does not wait for the confirmation of the booking ticket
        mails can be send it later
        there is no immidiate serve of notification
        require


        a lot of ticket get started
        to reduce the load the booking service

        we add some relaxation on notification service
        whenever notification service is available it will subscribe one event and do that
        process...........

        we are use rabbit MQ 

}

{
        set up your rabbit mq in windows os
        1st install erlang 
        2nd go to install `rabbitmq.exe` file
        after set up 
        just start your 
        `RabbitMq Service-Start`
        then goto this URl
        `http://localhost:15672/`
        login as {
                user : guest
                password : guest 
        }  

        now your RabbitMq started


}
{
        ampqlib --> rabbitMq lib for node js
        
}


{
        Home work ==> already Knows CRONS
        now shedule this CRON here
}