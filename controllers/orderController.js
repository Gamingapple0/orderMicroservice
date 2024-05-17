const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_KEY);
const { db } = require("../config/firebase");
const {collection, addDoc } = require("firebase/firestore")

const firestore = db;

const validateOrder = async (req, res) => {
  try {
    const { to, subject, text,item, shipping } = req.body;
    const docRef = await addDoc(collection(db, "orders"), {
      item: item,
      user:to,      
      shipping:shipping,
      time: new Date()
    });

    
    console.log(to, subject, text);

    const msg = {
      to: to,
      from: 'madhikarmianshu@gmail.com', // Replace with your email address
      subject: subject,
      text: text
    };

    sgMail.send(msg)
      .then(() => {
        console.log('Email sent');
        res.status(200).send({message:'Email sent successfully',docRef:docRef});
      })
      .catch(error => {
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
      });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
  // 
  module.exports = { validateOrder };