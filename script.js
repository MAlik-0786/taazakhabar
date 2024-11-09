window.onload = function() {
async function fetchdata(query) {
    const API_KEY = "7d69dcc451e84443aaec300aeb7a0a6a";
    const URL = `https://newsapi.org/v2/everything?q=${query}&language=en&apiKey=${API_KEY}`
    try {
        document.querySelector(".home_card").innerHTML = `<div class="d-flex justify-content-center">
  <div class="spinner-border text-primary" role="status">
    <span class="sr-only"></span>
  </div>
</div>`;
document.querySelector(".newscard").innerHTML = "";

        // fetching api
        const response = await fetch(URL);

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const articlesWithImages = data.articles.filter(article => article.urlToImage);
        const card = `
        <div class="card text-bg-dark mx-2 h-50%">
            <img src="${articlesWithImages[10].urlToImage || 'placeholder.jpg'}" class="card-img" alt="...">
            <div class="card-img-overlay">
                <h5 class="card-title">${articlesWithImages[10].title.slice(0, 20)}...</h5>
                <p class="card-text text-white">${articlesWithImages[10].description.slice(0, 70)}...</p>
                  <a href="${articlesWithImages[10].url}" target="_blank" class="text-white">explore more</a>
                <p class="card-text"><small>${articlesWithImages[10].publishedAt}</small></p>
            </div>
        </div>
        <div class="card chart mx-2 p-2" style="width: 18rem; height: 150%;">
            <img src="${articlesWithImages[1]?.urlToImage || 'placeholder.jpg'}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${articlesWithImages[1]?.title.slice(0, 50)}...</h5>
                <h6 class="card-text">${articlesWithImages[1]?.description}...</h6>
                <a href="${articlesWithImages[1]?.url}" target="_blank" class="btn btn-primary">explore more</a>
            </div>
        </div>
        
    `;

        document.querySelector(".home_card").innerHTML = card;
//axtrackting all data from request and showing
        let str = "";
        for (let item of articlesWithImages) {
            str += `
            <div class="col-md-3 col-sm-6 col-12 my-1 mx-2  ">
            <div class="card p-1" style="width: 18rem; height: 100%;">
                <img src="${item.urlToImage || 'placeholder.jpg'}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${item.title.slice(0, 24)}...</h5>
                    <h6 class="card-text">${item.description.slice(0, 100)}...</h6>
                    <a href="${item.url}" target="_blank" class="btn btn-primary">explore more</a>
                </div>
                </div>
                
            </div>`;
        }

        document.querySelector(".newscard").innerHTML = str;

    } catch (error) {
        document.querySelector("body").innerHTML = `<body class="d-flex align-items-center justify-content-center" style="height: 100vh; background-color: #f8f9fa;">

    <div class="text-center">
        <h1 class="display-1 text-danger">404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist. It might will be updating.</p>
        <a href="index.html" class="btn btn-primary">Go Back Home</a>
    </div>

</body>`;
    }
}
fetchdata("india");

// function  for search news
searchbtn.addEventListener("click", () => {

    const q = searchinput.value
    fetchdata(q);
    searchinput.value = ""
})

//function for all nav search
Health.addEventListener("click", () => {
    q = Health.innerHTML
    fetchdata(q);
})

Travel.addEventListener("click", () => {
    q = Travel.innerHTML
    fetchdata(q);
})
Design.addEventListener("click", () => {
    q = Design.innerHTML;
    fetchdata(q)
})

Business.addEventListener("click", () => {
    q = Business.innerHTML;
    fetchdata(q)
})
Politics.addEventListener("click", () => {
    q = Politics.innerHTML;
    fetchdata(q);
})
sport.addEventListener("click", () => {
    q = sport.innerHTML
    fetchdata(q)
})
cricket.addEventListener("click", () => {
    q = cricket.innerHTML
    fetchdata(q)
})
Technology.addEventListener("click", () => {
    q = Technology.innerHTML
    fetchdata(q)
})
Science.addEventListener("click", () => {
    q = Science.innerHTML
    fetchdata(q);
})
};