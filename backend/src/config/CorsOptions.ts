import dotenv from "dotenv";

dotenv.config();

export const corsOptions = {
    origin: `${process.env.FRONT_END_URL}`,
    optionsSuccessStatus: 200
};