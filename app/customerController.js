/**
 * 
 */

app.controller('customerController', function($scope, $modal, $filter) {
	$scope.customers = [ {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	}, {
		"id" : 1,
		"name" : "Sandeep Kane",
		"mobile" : "9762583893",
		"email" : "sandeep.kanr6@gmail.com",
		"address" : "Moshi PCNTDA",
		"status" : "Active"
	} ];
	
	$scope.columns = [
	                    {text:"ID",predicate:"id",sortable:true,dataType:"number"},
	                    {text:"Name",predicate:"name",sortable:true},
	                    {text:"Mobile",predicate:"mobile",sortable:true},
	                    {text:"email",predicate:"email",sortable:true},
	                    {text:"Address",predicate:"address",sortable:true},
	                    {text:"Status",predicate:"status",sortable:true}
	                ];

})