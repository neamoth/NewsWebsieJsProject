console.log('news portal is working');

let catagory = 'business';
let country = 'us';
let api = '6a8371ed4ec047638f8e1c062483bfed';

let newsAccordion = document.getElementById('newsAccordion');

const xhr = new XMLHttpRequest;
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=${country}&category=${catagory}&apiKey=${api}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newshtml = "";
        articles.forEach(function (element, index){
            let news = `
                <div class="accordion" id="newsAccordion">
                <div class="card">
                    <div class="card-header" id="heading${index+1}">
                        <h2 class="mb-0">
                            <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index+1}"
                                aria-expanded="true" aria-controls="collapse${index+1}">
                                <b>Breaking News ${index+1}:</b> ${element.title}
                            </button>
                        </h2>
                    </div>
                    <div id="collapse${index+1}" class="collapse" aria-labelledby="heading${index+1}" data-parent="#newsAccordion">
                        <div class="card-body">
                        <h4>${element.title}</h4><br>
                        <img src="${element.urlToImage}" alt="" style="width: 650px; height: 325px;"><hr>
                        <h6>By ${element.author } &nbsp; &nbsp; | &nbsp;  &nbsp; Published ${element.publishedAt}</h6><hr>
                        <p><b>Description:</b> ${element.description}</p>
                        <p><b>Content:</b> ${element.content}
                        <a href="${element.url}" target="_blank"><b>....Read more</b></a></p>
                        </div>
                    </div>
                </div>
`;
            newshtml += news;
        });
        newsAccordion.innerHTML = newshtml;
    } else {
        console.log('Something Wrong');
    }
}
xhr.send();

