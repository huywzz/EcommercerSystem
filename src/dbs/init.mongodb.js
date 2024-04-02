const mongoose = require('mongoose')
const { db: { name, host }, } = require('../config/config.app')
const connectString = `mongodb://${host}/${name}`

class Database {
    constructor() {
        this.connect()
    }
    connect() {
        mongoose.set('debug', true)
        mongoose.set('debug', {
            color: true
        })
        mongoose.connect(connectString).then(() => {
            console.log('connected');
        }).catch(err => {
            console.log('database connect err::', err);
        })
    }
    static getInstance() {
        if (!Database.instance) {
            Database.instance = new Database()
        }
        return Database.instance
    }

}
const databaseInstance = Database.getInstance()

module.exports = databaseInstance
