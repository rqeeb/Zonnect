import {resend} from "resend";
import dotenv from "dotenv";
dotenv.config();

export const resendClient = new resend(process.env.RESEND_API_KEY);

