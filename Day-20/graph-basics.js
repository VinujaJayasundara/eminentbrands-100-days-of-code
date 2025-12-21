// Day 20: Graphs Overview (Adjacency List)



class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex (node) to the graph
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (connection) between two vertices
    addEdge(v1, v2) {
        // For an undirected graph, add connection in both directions
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
}


const socialNetwork = new Graph();


socialNetwork.addVertex("Vinuja");
socialNetwork.addVertex("Gemini");
socialNetwork.addVertex("EminentBrands");

socialNetwork.addEdge("Vinuja", "Gemini");
socialNetwork.addEdge("Vinuja", "EminentBrands");

console.log("Social Network Graph:");
console.log(socialNetwork.adjacencyList);
