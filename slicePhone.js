Ember.Handlebars.helper('slicePhone', function(value){
	return value.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3');
});