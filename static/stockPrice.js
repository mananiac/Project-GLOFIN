function companyDetails() {



	// var stocksURL = "https://latest-stock-price.p.rapidapi.com/any";
	var stocksURL = "https://latest-stock-price.p.rapidapi.com/price?Indices=NIFTY%20500";

	// console.log(stocksURL)
	stockDetails();

	function stockDetails() {
		fetch(stocksURL, {
			"method": "GET",
			"headers": {
				"x-rapidapi-key": "3e9a5fe148msh4375fe247a150f0p17975fjsnfb1218ca0758",
				"x-rapidapi-host": "latest-stock-price.p.rapidapi.com",
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
		let tab =``;
		// Loop to access all rows 
		for (let r of data) {
			tab += `<tr> <br>
			<strong>Symbol:</strong> ${r.symbol} <br>
			<strong>Day High: </strong>${r.dayHigh} <br>
			<strong>Day Low: </strong>${r.dayLow} <br>	
			<strong>Last Price:</strong> ${r.lastPrice} <br>	
			<strong>Percentage Change: </strong>${r.pChange} <br>				
			<strong>Last Update Time: </strong> ${r.lastUpdateTime} <br>
			<hr>
			</tr>`;
		}
		// Setting innerHTML as tab variable 
		document.getElementById("info").innerHTML = tab;
	}
}