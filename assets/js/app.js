function handleSubmitIndividual() {
    d3.event.preventDefault();

    var rookie = d3.select("#rookieInput").node().value;
    console.log(rookie);
    d3.select("#rookieInput").node().value = "";

    buildRookieStats(rookie);
}

function buildRookieStats(rookie) {
    var url = 
}
