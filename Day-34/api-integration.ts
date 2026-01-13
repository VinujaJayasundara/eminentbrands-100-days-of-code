/**
 * Day 34: TS with API Calls
 * Fetching real data from JSONPlaceholder
 */

// 1. Define the "Contract" for the API data
interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

// 2. Async function with a Typed Promise return
async function fetchTodo(id: number): Promise<void> {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;

    try {
        const response = await fetch(url);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 3. Type Assertion: Tell TS to treat 'data' as a 'Todo' object
        const data: Todo = await response.json() as Todo;

        console.log("--- API Response Received ---");
        console.log(`Task ID: ${data.id}`);
        console.log(`Title: ${data.title}`);
        console.log(`Status: ${data.completed ? "✅ Done" : "⏳ Pending"}`);

    } catch (error) {
        // Narrowing the error type
        if (error instanceof Error) {
            console.error("Fetch failed:", error.message);
        }
    }
}

(async () => {
    await fetchTodo(5);
})();