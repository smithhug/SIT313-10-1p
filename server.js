const express = require("express")
const bodyParser = require("body-parser")
const app = express()

require("dotenv").config();

const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail = async (msg) => {
    try {
        await sgMail.send(msg);
        console.log("Message sent successfully!");
    } catch (error) {
        console.error(error);

        if (error.response) {
            console.error(error.response.body);
        }
    }
};

app.use(bodyParser.urlencoded({extended:true}))

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Methods", "POST");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });

app.get('/', (req,res)=>{
    res.sendFile(__dirname + "/index.html")
})

app.post('/', (req, res)=>{
    const toAddress = req.body.email
    console.log("To Address:")
    console.log(toAddress)
    console.log(req.body)
    sendMail({
        to: toAddress,
        from: 'smithhug.deakin@gmail.com',
        subject: 'Welcome',
        text: 'This is a welcome email',
    });
})

app.listen(8080, function(request, response){
    console.log("Server running on port 8080")
} )