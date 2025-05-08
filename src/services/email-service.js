const {TicketRepository} = require('../repositories/');
const ticketRepo = new TicketRepository(); // ✅ Works

const { Mailer } = require('../config');

// const ticketRepo = new TicketRepository();

async function sendEmail(mailFrom , mailTo , subject , text){
   try {
        const response = await Mailer.sendMail({
                from : mailFrom,
                to : mailTo,
                subject : subject,
                text : text ,
        })

        return response;
   } catch (error) {
        console.log(error);
        throw new Error("Something Went Wrong");
        
   }
}


async function createTicket(data){
        try {
                const response = await ticketRepo.create(data);
                return response;
        } catch (error) {
                console.log(error);
                throw new Error("Something Went Wrong");
        }
}


async function getPendingEmails(data) {
        try {
           const response  = await ticketRepo.getPendingTickets();
           return response;

        } catch (error) {
               console.log(error);
               throw error;
                
        }
}

module.exports = {
    sendEmail,
    createTicket,
    getPendingEmails,
}