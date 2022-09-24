import { Client } from "faunadb";

const faunadb = new Client({
  secret: process.env.FAUNA_DB_KEY ? process.env.FAUNA_DB_KEY : "",
  domain: "db.us.fauna.com",
  port: 443,
  scheme: "https",
});

export default faunadb;
