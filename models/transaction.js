const mongoose = require("mongoose");

const Schema = mongoose.Schemea;

const transactionSchema = new Schema({
    day: {

    },
    excercise: []
})


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;