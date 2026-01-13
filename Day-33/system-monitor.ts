// Day 33: TypeScript + Node.js Integration
import * as os from 'os';

// 1. Defining a strict interface for our System Report
interface SystemReport {
    platform: string;
    cpuCount: number;
    freeMemoryGB: number;
    totalMemoryGB: number;
    upTimeHours: number;
}

// 2. Function to gather hardware data
function getSystemReport(): SystemReport {
    return {
        platform: os.platform(),
        cpuCount: os.cpus().length,
        // Convert bytes to GB and round to 2 decimals
        freeMemoryGB: parseFloat((os.freemem() / 1024 ** 3).toFixed(2)),
        totalMemoryGB: Math.round(os.totalmem() / 1024 ** 3),
        upTimeHours: parseFloat((os.uptime() / 3600).toFixed(2))
    };
}

// 3. Output the report
const report = getSystemReport();

console.log("--- 🖥️ Node.js System Monitor (TS) ---");
console.log(`OS Platform: ${report.platform}`);
console.log(`CPUs: ${report.cpuCount} cores`);
console.log(`RAM: ${report.freeMemoryGB}GB Free / ${report.totalMemoryGB}GB Total`);
console.log(`System Uptime: ${report.upTimeHours} hours`);

// Logic Check: Alert if memory is low
if (report.freeMemoryGB < 1) {
    console.warn("⚠️ Warning: System memory is running low!");
}