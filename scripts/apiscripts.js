function func1() {
	var user = {
		FirstName : $( "#FirstName" ).val(),
		LastName : $( "#LastName" ).val(),
		Mail : $( "#Email" ).val(),
		Password : $( "#Password" ).val(),
	};
var l = JSON.stringify(user);

	fetch('https://localhost:44386/api/users', {  
    method: 'POST',
		mode: "no-cors",  
    headers: {  
     'Content-Type': 'application/json'
    },  
     body: l
})
.then(function (data) {  
  console.log('Request success: ', data);  
})  
.catch(function (error) {  
  console.log('Request failure: ', error);  
});
};