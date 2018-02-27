// Service for common module
appCommonModule.service('homeService', function($http) {
	
	this.apiBasicUrl = 'api/cinemas/';
	
	this.getAll = function() {
		return $http({
			method:'get',
			url:this.apiBasicUrl,
			contentType: "application/json"
		});
	};
});