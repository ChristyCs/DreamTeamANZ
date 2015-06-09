d3.csv("ANZChampionshipResults/2008-Table1.csv", function(d) {

	return {
		round: +d.Round,
		date: d.Date,
		time: d.Time,
		
	}
	

	}	
);