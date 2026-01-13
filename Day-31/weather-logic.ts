// Day 31: JS to TS Refactoring (Weather Logic)

// 1. Define the shape of the API response
interface WeatherData {
    name: string;
    main: {
        temp: number;
        humidity: number;
    };
    weather: Array<{
        description: string;
        icon: string;
    }>;
}

// 2. Add types to the async function
async function getWeatherData(city: string): Promise<WeatherData | null> {
    const apiKey: string = "YOUR_API_KEY"; // Placeholder
    const url: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("City not found");
        
        // Cast the json result to our Interface
        const data: WeatherData = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching weather:", error);
        return null;
    }
}

// 3. Type-safe DOM manipulation logic (Concept)
function updateUI(data: WeatherData): void {
    console.log(`The temperature in ${data.name} is ${data.main.temp}°C`);
}

// Testing the logic
getWeatherData("London").then(data => {
    if (data) updateUI(data);
});