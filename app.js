const nodemailer = require('nodemailer');

// Parámetros del servicio de correo
const emailParams = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'email@domain.com',
        pass: 'pass'
    }
};

// Configurar el transporte
const transporter = nodemailer.createTransport({
    host: emailParams.host,
    port: emailParams.port,
    secure: emailParams.secure,
    auth: {
        user: emailParams.auth.user,
        pass: emailParams.auth.pass
    }
});

// Parámetros del correo electrónico
const mailOptions = {
    from: 'Identidad <email@domain.com>',
    to: 'to@gmail.com', // Aquí deberías poner la dirección de correo a la que quieres enviar el mensaje
    cc: ['and@gmail.com'],
    bcc: ['email@domain.com'],
    subject: 'Probando nuevo servidor smtp',
    html: '<p>Contenido HTML del correo</p>'
};

// Enviar el correo electrónico
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error al enviar el correo:', error);
    } else {
        console.log('Correo enviado:', info.response);
    }
});
