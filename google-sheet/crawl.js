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
    const db3 = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '3'
    });
    fs.writeFileSync('./google-sheet/distribution.json', JSON.stringify(db3));
    const db4 = await drive({
        sheet: '1ohySElL1ef73VDGIFPcwwHsDVDp6bHcUiEKHgQ8KReM',
        tab: '4'
    });
    fs.writeFileSync('./google-sheet/discharge.json', JSON.stringify(db4));
    console.log("Crawl Completed")

})();

