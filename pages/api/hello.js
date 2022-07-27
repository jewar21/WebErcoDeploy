// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import nextConnect from "next-connect";

// import { FLAG } from "../../utils/firebase/firebaseTypes";
// import remote_config from "../../utils/firebase/controller";

// const flag = nextConnect({
//   // Handle any other HTTP method
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   }
// });

// flag.get(async (req, res) => {
//   const countries = await remote_config.get(FLAG);
//   const response = {
//     countries
//   };
//   res.status(200).json({ response });
// });

// export default flag;

export default function handler(req, res) {
  res.status(200).json({ country: ["co", "pa", "us"] });
}
