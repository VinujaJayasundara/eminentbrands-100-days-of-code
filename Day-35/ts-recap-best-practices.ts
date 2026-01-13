/**
 * Day 35: TS Best Practices & Final Recap
 * Goal: Combine Enums, Interfaces, and Generics into one clean system.
 */

// 1. Using Enum for strict status management
enum ProjectStatus {
    Planning = "PLANNING",
    Development = "DEVELOPMENT",
    Completed = "COMPLETED"
}

// 2. Using Type Alias for a Union
type Priority = "High" | "Medium" | "Low";

// 3. Interface with Readonly properties
interface Project {
    readonly id: number;
    name: string;
    status: ProjectStatus;
    priority: Priority;
}

// 4. A Generic Function (The ultimate TS best practice for reusability)
function logCollection<T>(items: T[]): void {
    console.log(`Total items in collection: ${items.length}`);
    items.forEach((item, index) => {
        console.log(`${index + 1}:`, item);
    });
}


const myPortfolio: Project[] = [
    { 
        id: 101, 
        name: "Eminent Brands Website", 
        status: ProjectStatus.Development, 
        priority: "High" 
    },
    { 
        id: 102, 
        name: "Weather Logic TS", 
        status: ProjectStatus.Completed, 
        priority: "Medium" 
    }
];

logCollection(myPortfolio);