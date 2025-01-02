const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv=require("dotenv");
dotenv.config();
if (!process.env.GEMINI_API) {
  throw new Error("GEMINI_API environment variable is missing.");
}
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
async function geminichatai(message){
  try{
  console.log("model intercepted");
  if (typeof message !== "string" ) {
    console.log("string is no there");
    console.log(message);
  }

  // const chat= message;

const result =await model.generateContent(message);

 // Ensure correct structure
const responseText =  result.response.candidates[0].content.parts[0].text;
return responseText;
  }
  catch(error){
    console.error("Error in geminichatai:", error);
  }

}
module.exports=geminichatai