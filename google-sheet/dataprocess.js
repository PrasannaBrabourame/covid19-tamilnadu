const fs = require('fs');

var _ = require('lodash');
let rawdata = fs.readFileSync('./google-sheet/districtwise.json');
let districtData = JSON.parse(rawdata);
let stadata = fs.readFileSync('./google-sheet/stats.json');
let statsData = JSON.parse(stadata);
let groupDate = _.groupBy(districtData, 'date');
let groupLocation = _.groupBy(districtData, 'location');
let districtDetails = Object.keys(groupLocation);
let dateDetails = Object.keys(groupDate);
dateDetails.sort(function compare(a, b) {
    var dateA = new Date(a);
    var dateB = new Date(b);
    return dateA - dateB;
});
function formatNumber(num) {
    var n1, n2;
    num = num + '' || '';
    n1 = num.split('.');
    n2 = n1[1] || null;
    n1 = n1[0].replace(/(\d)(?=(\d\d)+\d$)/g, "$1,");
    num = n2 ? n1 + '.' + n2 : n1;
    return num;
}
let dataObj = {
    "dorson": {
        "red": [],
        "orange": [],
        "yellow": [],
        "green": []
    },
    "totalScreened": "",
    "totalPositive": "",
    "totalCured": "",
    "totalDeath": "",
    "totalTest": "",
    "totalPositiveToday": "",
    "totalCuredToday": "",
    "totalDeathToday": "",
    "totalTestToday": "",
    "district": districtDetails,
    "dateList": dateDetails,
    "dateWise": [],
    "spreadTrend": {
        "date": [],
        "positive": [],
        "cured": [],
        "death": [],
        "active": []
    }
}
let statDataLast = statsData[statsData.length - 1]
let statDataComp = statsData[statsData.length - 2]
dataObj.totalScreened = formatNumber(statDataLast.passengerscreened)
dataObj.totalPositive = formatNumber(statDataLast.activecovid)
dataObj.totalCured = formatNumber(statDataLast.discharged)
dataObj.totalDeath = formatNumber(statDataLast.deathtotal)
dataObj.totalTest = formatNumber(statDataLast.samplestested)
dataObj.totalPositiveToday = formatNumber(Number(statDataComp.activecovid) - Number(statDataLast.activecovid))
dataObj.totalCuredToday = formatNumber(Number(statDataLast.discharged) - Number(statDataComp.discharged))
dataObj.totalDeathToday = formatNumber(Number(statDataLast.death))
dataObj.totalTestToday = formatNumber(Number(statDataLast.samplestested) - Number(statDataComp.samplestested))


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

for (let index = 0; index < statsData.length; index++) {
    const element = statsData[index];
    dataObj.spreadTrend.date.push(element.date);
    dataObj.spreadTrend.cured.push(element.discharged);
    dataObj.spreadTrend.positive.push(element.activecovid);
    dataObj.spreadTrend.death.push(element.deathtotal);
    let active = Number(element.activecovid) - (Number(element.deathtotal) + Number(element.discharged));
    dataObj.spreadTrend.active.push(active)

}
fs.writeFileSync('./google-sheet/process.json', JSON.stringify(dataObj));
console.log(1)
