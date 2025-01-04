const mongoose = require("mongoose")
const Db = "mongodb+srv://dharshitha292:PiPpgNAQaia2u6gV@cluster0.3vt9n.mongodb.net/"
const cnmg = () => mongoose.connect(Db, {
    

}).then(() => {
    console.log("DB Connected Successfully...");
}).catch((err) => {
    console.log(err);
})


module.exports = cnmg;