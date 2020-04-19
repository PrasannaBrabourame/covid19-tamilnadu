const fs = require('fs');



const drive = require("drive-db");

(async () => {
    const db = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '2'
    });
    fs.writeFileSync('./google-sheet/districtwise.json', JSON.stringify(db));

    const db2 = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '1'
    });
    fs.writeFileSync('./google-sheet/stats.json', JSON.stringify(db2));
    console.log(2)

})();

