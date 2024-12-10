const {default: connectDB} from  = require ("@/lib/config/db");
const {NextResponse} = require("next/server");
import userModel from "@/lib/models/userModel";

const LoadDb = async()=>{
  await connectDB();
}
LoadDb();

// login user 
export async function POST(request){
  const formdata = await request.formdata();
  const timeSatmp = Date.now();
  const {username,email,password} = formdata
}