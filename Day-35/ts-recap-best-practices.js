/**
 * Day 35: TS Best Practices & Final Recap
 * Goal: Combine Enums, Interfaces, and Generics into one clean system.
 */
// 1. Using Enum for strict status management
var ProjectStatus;
(function (ProjectStatus) {
    ProjectStatus["Planning"] = "PLANNING";
    ProjectStatus["Development"] = "DEVELOPMENT";
    ProjectStatus["Completed"] = "COMPLETED";
})(ProjectStatus || (ProjectStatus = {}));
// 4. A Generic Function (The ultimate TS best practice for reusability)
function logCollection(items) {
    console.log("Total items in collection: ".concat(items.length));
    items.forEach(function (item, index) {
        console.log("".concat(index + 1, ":"), item);
    });
}
var myPortfolio = [
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
