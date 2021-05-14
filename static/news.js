// // Your API key is newsapi: b6d9d19023bd426abc3abc7587299ce0
// //gnewsapi:  0MftGPjZJ4tfQSd4VkFE9sBCCcyTL8mMkNj05i638FCTHJFUVArjmTMVsIJ9
// // gnews.io:  076c8ae854b0393195dbc17e10ece757
// console.log("This is my index js file");

// // Initialize the news api parameters
// let source = 'the-times-of-india';
// let apiKey = '0MftGPjZJ4tfQSd4VkFE9sBCCcyTL8mMkNj05i638FCTHJFUVArjmTMVsIJ9'

// // Grab the news container
// let newsAccordion = document.getElementById('newsAccordion');

// // Create an ajax get request
// const xhr = new XMLHttpRequest();
// // xhr.open('GET', `https://gnewsapi.net/api/search?q=covid-19&language=en&country=us&api_token=[API TOKEN]`, true);
// // xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);
// xhr.open('GET', `https://gnews.io/api/v3/search?q=example&token=076c8ae854b0393195dbc17e10ece757`, true);

// // What to do when response is ready
// xhr.onload = function () {
//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);
//         let articles = json.articles;
//         console.log(articles);
//         let newsHtml = "";
//         articles.forEach(function(element, index) {
//             // console.log(element, index)
//             let news = `<div class="card">
//                             <div class="card-header" id="heading${index}">
//                                 <h2 class="mb-0">
//                                 <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
//                                     aria-expanded="false" aria-controls="collapse${index}">
//                                    <b>Breaking News ${index+1}:</b> ${element["title"]}
//                                 </button>
//                                 </h2>
//                             </div>

//                             <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//                                 <div class="card-body"> ${element["description"]}. <a href="${element['article_url']}" target="_blank" >Read more here</a>  </div>
//                             </div>
//                         </div>`;
//             newsHtml += news;
//         });
//         newsAccordion.innerHTML = newsHtml;
//     }
//     else {
//         console.log("Some error occured")
//     }
// }

// xhr.send()

// api url 
// const api_url =
//     "https://gnews.io/api/v3/topics/business?&token=076c8ae854b0393195dbc17e10ece757";
const api_url =
    "https://gnewsapi.net/api/search?q=finance&country=us&language=en&api_token=0MftGPjZJ4tfQSd4VkFE9sBCCcyTL8mMkNj05i638FCTHJFUVArjmTMVsIJ9";


// Defining async function 
async function getapi(url) {

    // Storing response 
    const response = await fetch(url);

    // Storing data in form of JSON 
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function 
getapi(api_url);

// Function to hide the loader 
function hideloader() {
    document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table 
function show(data) {
    let tab =
        `<tr> 
		
		</tr>`;

    // Loop to access all rows 
    for (let r of data.articles) {
        tab += `<tr> <br><br>
        <tr><img src="${r.image_url}" width=50% height=60%  class="mx-auto w-50"><br></tr> 
	    <tr>${r.title} <br></tr> 
	    <tr><a href="${r.article_url}" target="_blank">Read More</a><br></tr> 
	    <tr><strong>Source: </strong> ${r.source_name}<br></tr>	
          	<hr>
        </tr>`;
    }
    // Setting innerHTML as tab variable 
    document.getElementById("employees").innerHTML = tab;
}

