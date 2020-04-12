const fs = require('fs');

var _ = require('lodash');
let rawdata = fs.readFileSync('./google-sheet/districtwise.json');
let districtData = JSON.parse(rawdata);
let groupDate = _.groupBy(districtData, 'date');
let groupLocation = _.groupBy(districtData, 'location');
let districtDetails = Object.keys(groupLocation);
let dateDetails = Object.keys(groupDate);
dateDetails.sort(function compare(a, b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    return dateA - dateB;
});
let dataObj = {
    "dorson": {
        "red": [],
        "orange": [],
        "yellow": [],
        "green": []
    },
    "district": districtDetails,
    "dateList": dateDetails,
    "dateWise": []
}
for (let index = 0; index < districtDetails.length; index++) {
    const dist = districtDetails[index];
    const element = groupLocation[dist];
    if (element.length > 20) {
        dataObj.dorson.red.push(element.length)
        dataObj.dorson.orange.push(0)
        dataObj.dorson.yellow.push(0)
        dataObj.dorson.green.push(0)
    } else if (element.length > 10 && element.length < 20) {
        dataObj.dorson.red.push(0)
        dataObj.dorson.orange.push(element.length)
        dataObj.dorson.yellow.push(0)
        dataObj.dorson.green.push(0)
    } else {
        dataObj.dorson.red.push(0)
        dataObj.dorson.orange.push(0)
        dataObj.dorson.yellow.push(element.length)
        dataObj.dorson.green.push(0)
    }

}
for (let index = 0; index < dateDetails.length; index++) {
    const dateDet = dateDetails[index];
    const element = groupDate[dateDet];
    dataObj.dateWise.push(element.length)

}
fs.writeFileSync('./google-sheet/process.json', JSON.stringify(dataObj));
console.log(1)
