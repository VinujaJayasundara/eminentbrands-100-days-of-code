// Day 6 Challenge: Call an open API using async/await and Fetch

// The 'async' keyword signals this function handles Promises
async function fetchAndDisplayData() {
    console.log("Starting API call...");

    try {
        // 'await' pauses execution until the Fetch Promise resolves
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

        // 'await' pauses again until the data is successfully converted to JSON
        const data = await response.json();

        // Display the data received
        console.log("--- Data Received ---");
        console.log("User ID:", data.userId);
        console.log("Title:", data.title);
        console.log("Completed:", data.completed);

    } catch (error) {
        // Catches any errors during the network request or processing
        console.error("Failed to fetch data:", error);
    }
}

fetchAndDisplayData();