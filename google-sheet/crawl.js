const fs = require('fs');



const drive = require("drive-db");

(async () => {
    const db = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '2'
    });
    fs.writeFileSync('districtwise.json', JSON.stringify(db));

    const db2 = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '1'
    });
    fs.writeFileSync('stats.json', JSON.stringify(db2));

})();

