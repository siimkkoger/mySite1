let express = require('express');
let router = express.Router();
let mailer = require("nodemailer");

router.post('/contact', (req, res) => {
// Use Smtp Protocol to send Email
    let transporter = mailer.createTransport({
        service: "gmail",
        secure: false,
        port: 25,
        auth: {
            user: "siimkkoger@gmail.com",
            pass: "icnzmfyesjvplimv"
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    let mail = {
        from: '"Shaun Carp" <shauncarp@gmail.com<',
        to: "siimkkoger@gmail.com",
        subject: "4Years2Come feedback",
        text: "Some random text thanks :)"
    };

    transporter.sendMail(mail, (error, response) => {
        if(error){
            console.log(error);
        }else{
            console.log("Message sent: " + response.message);
        }

        transporter.close();
    });
});

module.exports = router;










