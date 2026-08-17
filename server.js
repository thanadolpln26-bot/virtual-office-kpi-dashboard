import express from 'express';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const app=express();
const __dirname=path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(__dirname));
app.get('/health',(req,res)=>res.json({ok:true,service:'virtual-office-kpi-dashboard'}));
const port=process.env.PORT||3000;
app.listen(port,'0.0.0.0',()=>console.log(`Virtual Office listening on ${port}`));
