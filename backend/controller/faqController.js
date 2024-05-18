const FAQ = require("../model/faqModel");

exports.getFaq = async (req, res) => {
  try {
    const data = await FAQ.find();
    res.status(200).json({
      success: true,
      message: "sucessfully retrived",
      data,
    });
  } catch (error) {
    console.log("getFaq :", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
