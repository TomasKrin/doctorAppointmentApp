require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const moment = require("moment");

const app = express();
const PORT = process.env.PORT || 3000;

const { URI } = process.env;

const client = new MongoClient(URI);

app.use(cors());
app.use(express.json());

app.post("/appointments/new", async (req, res) => {
  try {
    if (req.body.name && req.body.last_name && req.body.date && req.body.start && req.body.end) {
      const con = await client.connect();

      const newRegisterDate = new Date(req.body.date);
      const week = moment(newRegisterDate).format("W");

      const checkUser = await con
        .db("DoctorAppointmentApp")
        .collection("appointments")
        .find({
          person: `${req.body.name} ${req.body.last_name}`,
        })
        .toArray();

      if (checkUser) {
        const registeredWeeksArray = [];
        checkUser.forEach((userRegistration) => {
          const registeredDate = new Date(userRegistration.date);
          const registeredWeek = moment(registeredDate).format("W");
          registeredWeeksArray.push(registeredWeek);
        });

        if (registeredWeeksArray.includes(week)) {
          await con.close();
          res.status(409).send("You already have an appointment this week");
        } else {
          const appointmentExists = await con
            .db("DoctorAppointmentApp")
            .collection("appointments")
            .findOne({
              date: req.body.date,
              start: req.body.start,
              end: req.body.end,
            });

          if (appointmentExists) {
            await con.close();
            res.status(409).send("Appointment this time already exists, select other time");
          } else {
            const data = await con
              .db("DoctorAppointmentApp")
              .collection("appointments")
              .insertOne({
                person: `${req.body.name} ${req.body.last_name}`,
                date: req.body.date,
                start: req.body.start,
                end: req.body.end,
              });
            await con.close();
            res.send(data);
          }
        }
      }
    } else {
      res.status(400).send("Invalid information or something is missing");
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }
});

app.get("/appointments", async (req, res) => {
  try {
    const con = await client.connect();
    const data = await con.db("DoctorAppointmentApp").collection("appointments").find().toArray();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error });
  }
});

app.listen(PORT, () => {
  console.log(`It works on ${PORT} port`);
});
