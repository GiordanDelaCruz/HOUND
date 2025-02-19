import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import morgan from "morgan";
import pg from "pg";
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vocsmhbcgypycbmkiewj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const app = express();
const port = process.env.PORT || 3000;



/***********************************************************/
/******              Middlewares                      ******/
/***********************************************************/
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));

/***********************************************************/
/******             Route Handling                    ******/
/***********************************************************/


/***********************************************************/
/******              Start Server                     ******/
/***********************************************************/
app.listen( port, () => {
    console.log(`Server started on port ${3000}`);
});