const { EventEmitter } = require("events");
const fs = require("fs");

const calculating = new EventEmitter();

calculating.on('calculate', async (sub1, sub2, sub3) => {
    const total = ((sub1 + sub2 + sub3) / 3).toFixed(2);
    console.log(`Total percentage is ${total}%`);

    try {
        await fs.promises.writeFile("Cgpa.txt", total.toString());
        console.log('✅ Cgpa written to Cgpa.txt');

        // Read back from file
        const data = await fs.promises.readFile("Cgpa.txt", "utf-8");
        console.log(`📘 The CGPA read from file is: ${data}%`);
    } catch (err) {
        console.error('❌ Error handling file:', err);
    }
});

// Emit event
calculating.emit('calculate', 85, 90, 78);
