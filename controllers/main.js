var covidData = require('../models/covid')

module.exports.getAll = function(req, res) {
    res.status(200);
    res.send(covidData)
}

module.exports.getOne = function(req, res) {

    let iso = (req.params.iso).toUpperCase()
    let countryData = covidData[iso]
    if (countryData){
        res.status(200);
        res.send(countryData)
    } else {
        res.status(404);
        res.send("Not found")
    }
    
}

module.exports.add = function(req, res) {
    const incomingData = req.body;
    for (let countryCode in incomingData) {        
            if (!covidData.hasOwnProperty(countryCode)) {
                covidData[countryCode] = incomingData[countryCode];
            } else {
                res.status(409);
                res.send("Key already exists");
            }
    }
    res.status(200);
    res.send(incomingData);
};

module.exports.update = function(req, res) {
    const iso = (req.params.iso).toUpperCase()
    const incomingData = req.body;
    if (covidData.hasOwnProperty(iso)) {
        Object.assign(covidData[iso], incomingData[iso]);
    } else {
        res.status(404);
        res.send("Key does not exist");
        return
    }
    res.status(200);
    res.send(incomingData);
};


module.exports.deleteOne = function(req, res) {
    let iso = (req.params.iso).toUpperCase()
    console.log(iso)
    if (covidData.hasOwnProperty(iso)){
        console.log("deleting")
        delete covidData[iso]
    } else {
        res.status(404);
        res.send("Key does not exist");
        return
    }
    res.status(200);
    res.send("Deleted Successfully");
}


module.exports.deleteAll = function(req, res) {
    covidData = {}
    res.status(200);
    res.send('Deleted All');
}
