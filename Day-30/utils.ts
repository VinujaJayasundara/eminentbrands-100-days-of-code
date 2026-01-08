// Exporting a specific interface and function
export interface LoggerConfig {
    prefix: string;
    timestamp: boolean;
}

export function logMessage(message: string, config: LoggerConfig): void {
    const time = config.timestamp ? `[${new Date().toLocaleTimeString()}] ` : "";
    console.log(`${time}${config.prefix}: ${message}`);
}