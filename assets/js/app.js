function handleSubmitIndividual() {
    d3.event.preventDefault();

    var rookie = d3.select("#rookieInput").node().value;
    console.log(rookie);
    d3.select("#rookieInput").node().value = "";

    buildRookieStats(rookie);
}


function buildRookieStats(rookie) {
    var url = "/rookie";
    d3.json(url).then(function(response) {
        console.log(response);
        
        var filteredRookie = response.filter(function(item) {
            return item["Name"] === filteredRookie;
        });
        Rookie = filteredRookie[0];
        console.log(`Rookie is ${Object.getOwnPropertyNames(PokemonC)}`)
        var RookieStats = {
            Player: Rookie["Player"], 
            Position: Rookie["POS"], 
            Height: Rookie['Height'], 
            Weight: Rookie["Weight (LBS)"], 
            Rookie: Rookie["Team"],
        console.log(rookieStats);

        var trace = {
            x: Object.getOwnPropertyNames(RookieStats),
            y: Object.values(RookieStats),
            name: Rookie["Player"],
            type: "bar"
        }

        var data = [trace];
        var layout = { 
            title: "RookieStats"
        };
        Plotly.newPlot("IndividualStats", data, layout);
        console.log(Object.values(RookieStats));
    });
}
d3.select("#SubmitRookie").on("click", handleSubmitIndividual);