const mongoose = require("mongoose");
const mailSender = require("../utils/MailSender");
const otpTemplate  = require("../controller/mail/templates/emailVerificationTemplate");

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 5 * 60,
  },
});

async function sendVerificationEmail(email, otp) {
  try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from StudyNotion",
      otpTemplate (otp)
    );
    console.log("Email Send Successfully");
    console.log(mailResponse);
  } catch (err) {
    console.log("Error occurs while Sending Mail", err);
    throw err;
  }
}

otpSchema.pre("save", async function (next) {
  console.log("New document saved to database");
  if (this.isNew) {
		await sendVerificationEmail(this.email, this.otp);
	}
	next();
});

module.exports = mongoose.model("OTP", otpSchema);
