// Wait for the DOM to load everything, just to be safe
$(document).ready(function() {

   // Create our graph from the data table and specify a container to put the graph in
   createGraph('#data-table', '.chart');

   // Here be graphs
   function createGraph(data, container) {
      // Declare some common variables and container elements
      …

      // Create the table data object
      var tableData = {
         …
      }

      // Useful variables to access table data
      …

      // Construct the graph
      …

      // Set the individual heights of bars
      function displayGraph(bars) {
         …
      }

      // Reset the graph's settings and prepare for display
      function resetGraph() {
         …
         displayGraph(bars);
      }

      // Helper functions
      …

      // Finally, display the graph via reset function
      resetGraph();
   }
});