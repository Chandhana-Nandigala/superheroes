import dbConnect from "../../../db/dbconnect";

import Hero from "../../../models/Hero";
// connecting db
dbConnect();

// get all records, post a new record in same route

export default async (req, res) => {
  const { method } = req;
  switch (method) {
    case "GET":
      try {
        const heros = await Hero.find({});
        res.status(200).json({ success: true, hero: heros });
      } catch (error) {
        res.status(400).json("failed to bring the data");
      }
    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ success: true, hero: hero });
      } catch (error) {
        res.status(400).json("failed to bring the data");
      }
      break;
    default:
      res.status(400).json("failed to bring the data");
      break;
  }
};
