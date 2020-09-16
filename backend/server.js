const mongoose = require("mongoose");
const getSecret = require("./secret");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");
const Doctor = require("./doctor");

const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const secret = "mysecretsshhh";

const API_PORT = 3001;
const app = express();
const router = express.Router();
app.use(cookieParser());

mongoose.connect(getSecret("dbUri"));
let db = mongoose.connection;

router.get("/CreateNewDoctor", (req, res) => {
  console.log("CreateNewDoctor");
  return { success: "success", error: "error" };
});

router.post("/CreateNewDoctor", (req, res) => {
  const doc = new Doctor();
  const {
    id,
    name,
    email,
    phonenumber,
    sex,
    specialty,
    avalibility,
    address,
    price,
    password,
  } = req.body;
  doc.id = id;
  doc.name = name;
  doc.email = email;
  doc.phonenumber = phonenumber;
  doc.specialty = specialty;
  doc.sex = sex;
  doc.avalibility = avalibility;
  doc.address = address;
  doc.price = price;
  doc.location_lat = 0;
  doc.location_lng = 0;
  doc.password = password;

  Doctor.create(doc, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to main page
      console.log("success");
    }
  });
});

router.post("/finddoctorbyname", (req, res) => {
  const { username } = req.body;
  Doctor.find({ username: username }, function (err, newlyCreated) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to main page
      console.log("success", newlyCreated[0]["id"]);
      return res.json({ success: newlyCreated[0]["id"] });
    }
  });
});
router.post("/findAllRequestByDoctorName", (req, res) => {
  const { username } = req.body;
  console.log(username);
  Data.find({ fesition: username }, function (err, data) {
    if (err) {
      console.log(err);
    } else {
      //redirect back to main page
      return res.json({ data: data });
    }
  });
});

// PASSPORT CONFIGURATION
app.use(
  require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false,
  })
);
// app.use(passport.initialize());
// app.use(passport.session());

app.use(function (req, res, next) {
  res.locals.currentUser = req.user;
  next();
});

router.post("/register", function (req, res) {
  const doc = new Doctor();
  const {
    id,
    username,
    email,
    phonenumber,
    sex,
    specialty,
    avalibility,
    address,
    price,
    password,
  } = req.body;
  doc.id = id;
  doc.username = username;
  doc.email = email;
  doc.phonenumber = phonenumber;
  doc.specialty = specialty;
  doc.sex = sex;
  doc.avalibility = avalibility;
  doc.address = address;
  doc.price = price;
  doc.location_lat = 0;
  doc.location_lng = 0;
  doc.password = password;
  doc.save(function (err, doc) {
    if (err) {
      res.status(500).send("Error registering new user please try again.");
    } else {
      res.status(200).send("Welcome to the club!");
    }
  });
});

router.post("/authenticate", function (req, res) {
  const { username, password } = req.body;

  console.log(username, password, req.body);
  Doctor.findOne({ username }, function (err, doc) {
    if (err) {
      console.error(err);
      res.status(500).json({
        error: "Internal error please try again",
      });
    } else if (!doc) {
      console.log("Incorrect email or password");
      res.status(401).json({
        error: "Incorrect email or password",
      });
    } else {
      doc.isCorrectPassword(password, function (err, same) {
        if (err) {
          console.log(err);
          res.status(500).json({
            error: "Internal error please try again",
          });
        } else if (!same) {
          console.log("!same", same);
          res.status(401).json({
            error: "Incorrect email or password",
          });
        } else {
          // Issue token
          console.log("success!!!!!!");

          const payload = { username };
          const token = jwt.sign(payload, secret, {
            expiresIn: "1h",
          });
          //console.log(res.cookie("token", token, { httpOnly: true }));
          cookie = res.cookie("token", token, { httpOnly: true });
          //res.cookie("token", token, { httpOnly: true }).sendStatus(200);
          //return { cookie: cookie };
          return res.json({
            success: "1",
            username: username,
            password: password,
            status: 200,
            doc: doc,
          });
          //res.cookie("token", token, { httpOnly: true }).sendStatus(200);
        }
      });
    }
  });
});

const withAuth = function (req, res, next) {
  console.log("withAuth server");
  const token = req.cookies.token;
  if (!token) {
    res.status(401).send("Unauthorized: No token provided");
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send("Unauthorized: Invalid token");
      } else {
        req.username = decoded.username;
        next();
      }
    });
  }
};

app.get("/api/secret", withAuth, function (req, res) {
  res.send("The password is potato");
});

router.get("/checkToken", withAuth, function (req, res) {
  res.sendStatus(200);
});

// PASSPORT CONFIGURATION END

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

// absolutly all the Doctors
router.get("/GetAllDoctors", (req, res) => {
  console.log("get doctors");
  Doctor.find((err, data) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ data: data });
  });
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
  const authToken = "d2b53ae381892ac9be8470bc8ea5dd39";
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
