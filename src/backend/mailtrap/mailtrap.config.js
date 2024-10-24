import { MailtrapClient } from "mailtrap";
import dotenv from "dotenv";

dotenv.config();

// const TOKEN = ;
// const ENDPOINT = ;

export const mailtrapclient = new MailtrapClient({ endpoint: process.env.MAILTRAP_ENDPOINT, token: process.env.MAILTRAP_TOKEN });

export const sender = {
  email: "mailtrap@demomailtrap.com",
  name: "Aaron De Leon",
};
// const recipients = [
//   {
//     email: "aarondeleonmaria14@gmail.com",
//   }
// ];

