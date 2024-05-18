const clientDetailSchema = require("../model/clientDetails");

exports.clientDetails = async (req, res) => {
  try {
    const {
      name,
      mobileNumber,
      email,
      country,
      state,
      city,
      pincode,
      address,
    } = req.body;

    const existClientDetails = await clientDetailSchema.findOne({
      mobileNumber,
    });

    if (existClientDetails) {
      return res.status(400).json({
        success: false,
        message:
          "This mobile number is already register, we will get back to you soon",
      });
    }

    const newClientDetails = await clientDetailSchema.create({
      name,
      mobileNumber,
      email,
      country,
      state,
      city,
      pincode,
      address,
    });

    res.status(201).json({
      success: true,
      message: "Registered Successfully",
    });
  } catch (error) {
    console.log("clientDetails :", error);
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
