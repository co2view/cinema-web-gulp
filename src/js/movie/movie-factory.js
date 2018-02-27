appMovieModule.factory("movieFactory", function() {

	var movie = {};

	// ?
	return {
		getMovie : function() {
			return movie;
		},
		setMovie : function(m) {
			movie = m;
		}
	}
})