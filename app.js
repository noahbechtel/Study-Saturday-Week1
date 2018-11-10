const express = require("express")
const morgan = require("morgan");
const app = express();
const student = require("./route/student")
const test = require("./route/test")


app.use(morgan("dev"));

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());

app.use('/student', student)
app.use('/test', test)



app.listen(3000, () => {
    console.log(`App listening in port ${3000}`);
});