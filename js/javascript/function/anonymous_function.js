let data = function () {
  console.log("Anonymous function");
};

data(); // Output: Anonymous function

function process(callback) {
  callback("Processing data...");
}

process(data); // Output: Processing data...
