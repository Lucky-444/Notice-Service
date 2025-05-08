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