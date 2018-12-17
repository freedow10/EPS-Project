function func1() {
	var user = {
		FirstName : 'mehmet',
		LastName = 'mehmet',
		Mail = 'mehmet',
		Password = 'mehmet'
	};

	//var userstring = JSON.stringify(user);
	fetch('https://localhost:44386/api/users', {
		method: 'post',
		headers: {
		  "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
		},
		body: user
	  })
	  .then(json)
	  .then(function (data) {
		console.log('Request succeeded with JSON response', data);
	  })
	  .catch(function (error) {
		console.log('Request failed', error);
	  });
  }