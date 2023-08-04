import mongoose from "mongoose";

const main = () => {
  const DB_URL =
    process.env.MONGO_URL ||
    `mongodb+srv://aufa:Aufaroot18@cluster0.qft9z.mongodb.net/express?retryWrites=true&w=majority`;

  try {
    mongoose.connect(DB_URL);
    const db = mongoose.connection;

    db.on("error", (error) => {
      console.log(error);
    });

    db.once("connected", () => {
      console.log("connected");
    });
  } catch (error) {
    console.log("error", error.message);
  }
};

main();
