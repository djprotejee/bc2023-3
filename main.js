const fs = require('node:fs');

fs.readFile('data.json', 'utf-8', (err, data) => {
    if (err === null) {
        console.log(data.toString());
        const JSONdata = JSON.parse(data);
        const output = [];

        JSONdata.forEach(info => {
            const StockCode = info.StockCode;
            const ValCode = info.ValCode;
            const Attraction = info.Attraction;
            output.push(`${StockCode}-${ValCode}-${Attraction}`)
        });

    fs.writeFile('output.txt', output.join('\n'), 'utf-8', (err) => {
        if (err === null) {    
            console.log('saved successfully');
        } else {
            console.log(err);
        }
    });
    
    } else {
        console.log(err);
    }
});

