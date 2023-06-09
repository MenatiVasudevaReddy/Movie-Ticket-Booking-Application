var nodemailer = require('nodemailer');

function sendEmail(to,subject,body)
{

    var transporter = nodemailer.createTransport({

        service: 'gmail',
        auth: {
            user: 'kishoreml2909@gmail.com',
            pass: 'beyond29'
        }
    });

    var mailOptions = {
        from: 'kishoreml2909@gmail.com',
        to: to,
        subject: subject,
        text: body
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error)
            console.log(error);
        else {
            console.log("mail sent" + info.response);
        }
    })

}

module.exports = sendEmail;