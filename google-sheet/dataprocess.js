const fs = require('fs');

var _ = require('lodash');
let rawdata = fs.readFileSync('./google-sheet/districtwise.json');
let districtData = JSON.parse(rawdata);
let stadata = fs.readFileSync('./google-sheet/stats.json');
let statsData = JSON.parse(stadata);
let distdata = fs.readFileSync('./google-sheet/distribution.json');
let distributionData = JSON.parse(distdata);
let discharge = fs.readFileSync('./google-sheet/discharge.json')
let dischargeData = JSON.parse(discharge);
let groupDate = _.groupBy(districtData, 'date');
let groupLocation = _.groupBy(districtData, 'location');
let districtDetails = Object.keys(groupLocation);
//districtDetails = districtDetails.sort();
var arrangeOrder = [];
var distSplitup = Object.entries(groupLocation)
for (let index = 0; index < distSplitup.length; index++) {
    const element = distSplitup[index];
    arrangeOrder.push({ "name": element[0], "count": element[1].length })

}
arrangeOrder = arrangeOrder.sort((a, b) => { return b.count - a.count })
districtDetails = arrangeOrder.map((a) => { return a.name }, [])
dischargeData = dischargeData.sort((a, b) => { return b.count - a.count })
dischargeDistrict = dischargeData.map((a) => { return a.state }, [])
dischargeCount = dischargeData.map((a) => { return a.count }, [])
// var test = groupLocation.sort(function (one, other) {
//     return one.elements.length - other.elements.length;
//  });
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
    "dischargeData":{
        dischargeDistrict,
        dischargeCount
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
    },
    "distribution": []
}

let statDataLast = statsData[statsData.length - 1]
let statDataComp = statsData[statsData.length - 2]
let totalPositiveToday = Number(statDataLast.activecovid) - Number(statDataComp.activecovid)
let totalCuredToday = Number(statDataLast.discharged) - Number(statDataComp.discharged)
let totalTestToday = Number(statDataLast.samplestested) - Number(statDataComp.samplestested)
dataObj.distribution = distributionData[distributionData.length - 1]
dataObj.totalScreened = formatNumber(statDataLast.passengerscreened)
dataObj.totalPositive = formatNumber(statDataLast.activecovid)
dataObj.totalCured = formatNumber(statDataLast.discharged)
dataObj.totalDeath = formatNumber(statDataLast.deathtotal)
dataObj.totalTest = formatNumber(statDataLast.samplestested)
dataObj.totalPositiveToday = totalPositiveToday > 0 ? `+ ${totalPositiveToday}` : `${totalPositiveToday}`
dataObj.totalCuredToday = totalCuredToday > 0 ? `+ ${totalCuredToday}` : `${totalCuredToday}`
dataObj.totalDeathToday = Number(statDataLast.death) > 0 ? `+ ${Number(statDataLast.death)}` : `${Number(statDataLast.death)}`
dataObj.totalTestToday = totalTestToday > 0 ? `+ ${totalTestToday}` : `${totalTestToday}`


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
