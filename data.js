var data = function(){
	 this.allData = [];
     this.data2008 = [];
     this.data2009 = [];
     this.data2010 = [];
     this.data2011 = [];
     this.data2012 = [];
     this.data2013 = [];
}

data.prototype = {
	constructer : data,
    readData : function(d){               
                return {
                    round: +d.Round,
                    date: d.Date,
                    time: d.Time,
                    hometeam: d['Home Team'],
                    score: d.Score,
                    awayteam: d['Away Team'],
                    venue: d.Venue                
                 };
            },
    getAll : function(){
    	return this.allData;
    },
    set2008 : function(list){
    	this.data2008 = list;
    },
    set2009 : function(list){
        this.data2009 = list;
    },
    set2010 : function(list){
        this.data2010 = list;
    },
    set2011 : function(list){
        this.data2011 = list;
    },
    set2012 : function(list){
        this.data2012 = list;
    },
    set2013 : function(list){
        this.data2013 = list;
    },

}