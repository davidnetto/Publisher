module.exports = {
    db: {
        mongoUri: 'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'
    },
    auth:{
        jwtKey:'43c3b006ec7526feabea9697c487e414'
    },
    server:{
        port:'8080'
    }
}