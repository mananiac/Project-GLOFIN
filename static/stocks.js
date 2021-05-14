function companyDetails() {
	let stockCompany = document.getElementById("CompanyName").value;

	// console.log(stockCompany)
	var stocksURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=".concat(stockCompany, "&region=US");
	// console.log(stocksURL)
	stockDetails();

	function stockDetails() {
		fetch(stocksURL, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "3e9a5fe148msh4375fe247a150f0p17975fjsnfb1218ca0758",
				"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
				'cache-control': 'no-cache',
				'Content-Type': 'application/json',
				
				'header1': ''
			}
		})
		.then(function (response) {
			return response.json();
		})
		.then(response => {
			console.log(response);
			show(response);
			// document.getElementById("employees").innerHTML = response;
		})
		.catch(err => {
			console.error(err);
		});
	}
	function show(data) {
		let tab =`<h1><strong>Top News:</strong><h1>`;
		// Loop to access all rows 
		for (let r of data.news) {
			tab += `<tr> <br><br>	
			<strong>Title: </strong>${r.title} <br>
			<a href="${r.link}" target="_blank">Read More</a><br>
			<strong>Source: </strong>${r.publisher} <br>
			<hr>
			</tr>`;
		}
		tab +=`<h1><strong>Top Quotes:</strong><h1>`;
		// Loop to access all rows 
		for (let r of data.quotes) {
			tab += `<tr> <br><br>	
			<strong>Symbol: </strong>${r.symbol} <br>
			<strong>Name: </strong>${r.shortname} <br>
			<strong>Exchange: </strong>${r.exchange} <br>
			<strong>Type: </strong>${r.quoteType} <br>
			<strong>Score: </strong>${r.score} <br>
			<hr>
			</tr>`;
		}
		// Setting innerHTML as tab variable 
		document.getElementById("target-stocks").innerHTML = tab;
	}

}

//http://api.marketstack.com/v1/eod?access_key=e76ee40954801e76a2dbc679326aa98a&symbols=AAPL
// function companyDetails() {
// 	let stockCompany = document.getElementById("CompanyName").value;

// 	// console.log(stockCompany)
// 	var stocksURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=".concat(stockCompany,"&region=US");
// 	console.log(stocksURL)
// 	stockDetails();

// 	function stockDetails() {
// 			fetch(stocksURL, {
// 				"method": "GET",
// 				'cache-control': 'no-cache',
//      			 'Content-Type': 'application/json',
//      			 'X-RapidAPI-Key': "3e9a5fe148msh4375fe247a150f0p17975fjsnfb1218ca0758",
// 				  "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com"

// 			})
// 				.then(function (response) {
// 					return response.json();
// 				})
// 				.then(response => {
// 					console.log(response);
// 				})
// 				.catch(err => {
// 					console.error(err);
// 				});
// 		}}


// 		fetch("https://latest-stock-price.p.rapidapi.com/any", {
// 			"method": "GET",
// 			"headers": {
// 				"x-rapidapi-key": "3e9a5fe148msh4375fe247a150f0p17975fjsnfb1218ca0758",
// 				"x-rapidapi-host": "latest-stock-price.p.rapidapi.com"
// 			}
// 		})
// 			.then(function (response) {
// 				return response.json();
// 			})
// 			.then(response => {
// 				console.log(response);
// 			})
// 			.catch(err => {
// 				console.error(err);
// 			});
// 	}

// }
