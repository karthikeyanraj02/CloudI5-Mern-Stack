const FAQ = require("../model/faqModel");
const faqData = require("../data/faq.json");
const dotenv = require("dotenv");
const databaseConnection = require("../config/database");

dotenv.config({ path: "backend/config/.env" });
databaseConnection();

const seedFaq = async () => {
  try {
    await FAQ.deleteMany();
    console.log("FAQ's Deleted");
    await FAQ.insertMany(faqData);
    console.log("FAQ's Added");
  } catch (error) {
    console.log(error.message);
  }
  process.exit();
};

seedFaq();
