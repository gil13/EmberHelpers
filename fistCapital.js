Ember.Handlebars.helper('firstCapital', function(value){
	value = value.toLowerCase();
	return value[0].toUpperCase() + value.slice(1);
});