const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

("use strict");
const nodemailer = require("nodemailer");

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));

router.get("/", (req, res) => {
  res.json({ message: "HELLOW WORLDUUHHHH" });
});

router.get("/checking", (req, res) => {
  var datetime = new Date("yyyy-MM-dd hh.mm.ss");
  console.log("checking", new Date(Date.now()).toLocaleString());

  // Data.find((err, data) => {
  //   if (err) return res.json({ success: false, error: err });
  //   console.log(data);
  // });
});

// absolutly all the request
router.get("/GetAllRequests", (req, res) => {
  console.log("getData");
  Data.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

//Request Page
// return all the requests that the time isnt set yet == 00:00
router.get("/getRequests", (req, res) => {
  console.log("getRequests");
  const data = new Data();
  //{ time: "00:00" },
  Data.find({ time: "00:00" }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

router.get("/getData", (req, res) => {
  console.log("getData");
  Data.find({ time: "00:00" }, (err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: data });
  });
});

// Card page
// Update the time to what the secratery set and the timeOfsecretarySet
router.post("/updateReq", (req, res) => {
  console.log("updateReq");
  const { id, number, time, update } = req.body;
  console.log(id, update, number, time);
  txt = "נקבעה לך פגישה בבית חולים ברזיאלי למחר בשעה " + time;
  sendsms(number, txt);
  Data.findOneAndUpdate({ id: Number(id) }, update, (err) => {
    if (err)
      return (
        console.log("update err", err) &
        res.json({ success: false, error: err })
      );
    // sendEmail("yuval2604@gmail.com", "16:00");
    // sendEmail("bestcareforyou@gmail.com", "16:00");
    return res.json({ success: true });
  });
});

// tablereq page
// Update the time to what the secratery set and the timeOfsecretarySet
router.post("/updateReqTable", (req, res) => {
  console.log("updateReqTable");
  const { id, number, time, date, update } = req.body;
  console.log(id, update, time, date, number);

  txt = "נקבעה לך פגישה בבית חולים ברזיאלי בתאריך " + date;
  txt = txt + "בשעה  " + time;
  txt = txt + "\n נשמח לשמוע את דעתך בשירות שלנו ";
  txt =
    txt +
    "\n https://forms.office.com/Pages/ResponsePage.aspx?id=GyjZOgg7k0atoCMyRJetMArymNScyXRLrz7nhV-kiaNUQkpUV1FTUTVON09VNkJNOUdWWE1PMjNHMy4u";
  console.log(txt);
  sendsms(number, txt);
  Data.findOneAndUpdate({ id: Number(id) }, update, (err) => {
    if (err)
      return (
        console.log("update err", err) &
        res.json({ success: false, error: err })
      );
    // sendEmail("yuval2604@gmail.com", "16:00");
    // sendEmail("bestcareforyou@gmail.com", "16:00");
    return res.json({ success: true });
  });
});

//Home-one page
// create a new request
// Update also timeOfPatiant
router.post("/getAllData", (req, res) => {
  console.log("getAllData");
  const {
    avalibility,
    speciality,
    fesition,
    name,
    number,
    email,
    id,
    time,
    timeOfPatiant,
    timeOfsecretarySet,
  } = req.body;

  console.log(avalibility, speciality, fesition, name, number, email, id);
  const data = new Data();
  let date_ob = new Date();

  let hours = date_ob.getHours();
  hours = String(parseInt(hours) + 3);
  let minutes = date_ob.getMinutes();
  data.id = id;
  data.name = name;
  data.email = email;
  data.number = number;
  data.avalibility = avalibility;
  data.speciality = speciality;
  data.fesition = fesition;
  data.time = "00:00";
  data.timeOfPatiant = hours + ":" + minutes;
  data.timeOfsecretarySet = "00:00"; // need to be change
  data.dateofevent = new Date(Date.now()).toLocaleString();
  console.log(data);
  Data.create(data, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to main page
      console.log("success");
    }
  });
});

router.post("/updateData", (req, res) => {
  console.log("updateData");
  const { id, update } = req.body;
  console.log(id, update);
  Data.findOneAndUpdate({ id: id }, update, { new: true }, (err) => {
    if (err)
      return (
        console.log("update err", err) &
        res.json({ success: false, error: err })
      );
    return res.json({ success: true });
  });
});

router.post("/putData", (req, res) => {
  let data = new Data();

  const { id, message } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS",
    });
  }
  data.message = message;
  data.id = id;

  data.save((err) => {
    if (err)
      return (
        res.json({ success: false, error: err }) & console.log("return err")
      );
    return console.log("return success ") & res.json({ success: true });
  });
});

const http = require("http");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

function sendsms(Number, text) {
  const twiml = new MessagingResponse();
  twiml.toString();

  // Download the helper library from https://www.twilio.com/docs/node/install
  // Your Account Sid and Auth Token from twilio.com/console
  // DANGER! This is insecure. See http://twil.io/secure
  const accountSid = "AC6c2ea7a22f9a17358b5d01363f710cd1";
  const authToken = "d226c945bf682ad113e54c2bbdaba107";
  const client = require("twilio")(accountSid, authToken);
  number = "+972" + Number.substring(1);
  client.messages
    .create({
      body: text,
      from: "+12029292192",
      to: number,
      // to: "+972524266552"
    })
    .then((message) => console.log(message.sid));
}

// node js send email
function sendEmail(emailto, time) {
  nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.googlemail.com", // Gmail Host
      port: 465, // Port
      secure: true, // this is true as port is 465
      auth: {
        user: "yuval2604", //Gmail username
        pass: "Yuval2604", // Gmail password
      },
    });

    let mailOptions = {
      from: '"Artisans Web" <admin@artisansweb.net>',
      to: emailto, // Recepient email address. Multiple emails can send separated by commas
      subject: "Welcome Email To Get Doctor",
      text: "Go to http://167.71.44.156:3000/main. Your time is : " + time,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log("Message sent: %s %s ", emailto, time);
    });
  });
}

// //
var allowCrossDomain = function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

app.use("/api", router);

app.listen(
  API_PORT,
  () =>
    console.log(
      `LISTENING ON UHH PORT ${API_PORT} ${new Date(
        Date.now()
      ).toLocaleString()}`
    )
  // sendEmail("yuval2604@gmail.com", "16:00")
);
