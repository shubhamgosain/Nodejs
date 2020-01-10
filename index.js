const express= require('express');
const app=express();
const logger=require('./middleware/logger.js');
const PORT=process.env.PORT || 5000;



//Init middleware
//app.use(logger);


//Memebers api route
app.use('/api/members',require('./routes/api/members.js'));




app.listen(PORT,()=> console.log(`Server started on port ${PORT}`));

