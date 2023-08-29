// consts
const apikey = "433bb169a60f6ea03d8a88944bcc8745";
const apiEndpoint = "https://api.themoviedb.org/3";
const imageBaseUrl = "https://image.tmdb.org/t/p/original/";

// yotube api key
// const youtubeApiKey = "AIzaSyD-8ZzZ3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4Z3Z4";

const youtubeApiKey = "AIzaSyC1Y8Yc8CKqUU_uYwrYPFUp0YQSWvL80U8";


const apiPaths = {
    fetchAllCategories: `${apiEndpoint}/genre/movie/list?api_key=${apikey}`,
    fetchMoviesList:(id)=> `${apiEndpoint}/discover/movie?api_key=${apikey}&with_genres=${id}`,
    fetchTrendingMovies: `${apiEndpoint}/trending/all/week?api_key=${apikey}&language=en-US`,

    searchOnYoutube : (query)=> `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${query}&key=AIzaSyC1Y8Yc8CKqUU_uYwrYPFUp0YQSWvL80U8`,  
};


// My code not showing banner output

// // Boot app the app
// function init() {
//     // fetchAndBuildMovieSection(apiPaths.fetchTrendingMovies, "Trending Now");
//     fetchTrendingMovies()
//     fetchAndBuildAllSections();
// }

// function fetchTrendingMovies() {
//     fetchAndBuildMovieSection(apiPaths.fetchTrendingMovies, "Trending Now")
//     .then(list => {
//         // console.log(list);
//         const randomIndex = parseInt(Math.random() * list.length);
//         buildMovieSection(list[0]);
//     }).catch(err => {
//         console.error(err)
//     });
// }


// function buildBannerSection(movie) {
//     const bannerCont = document.getElementById("banner-section");

//     bannerCont.style.backgroundImage = `url('${imageBaseUrl}${movie.backdrop_path}')`;

//     const div=document.createElement("div");
    
//     div.innerHTML=`
//         <h2 class="banner_title">${movie.title}</h2>
//         <p class="banner_info">#6 in Movie Today</p>
//         <p class="banner_info">${movie.release_date}</p>
//         <p class="banner_overview ">${movie.overview && movie.overview.length>200? movie.overview.slice(0,200).trim()+ '...':movie.overview}</p>
//         <div class="action-buttons-cont">
//             <button class="action-button play-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg> Play</button>
//             <button class="action-button more-info-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="CircleI" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg> More Info</button>

//         </div>
//         `;

//     div.className="banner-content container"

//     bannerCont.appendChild(div);
// }



// ... (constants and other functions)

// Boot app the app
function init() {
    fetchTrendingMovies(); // Fetch trending movies and build banner section
    fetchAndBuildAllSections();
}

async function fetchTrendingMovies() {
    try {
        const response = await fetch(apiPaths.fetchTrendingMovies);
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const randomMovie = data.results[randomIndex];
        buildBannerSection(randomMovie);
    } catch (error) {
        console.error(error);
    }
};

function buildBannerSection(movie) {
    const bannerCont = document.querySelector(".banner-section"); // Use querySelector to select by class
    bannerCont.style.backgroundImage = `url('${imageBaseUrl}${movie.backdrop_path}')`;

    const bannerContent = document.createElement("div");
    bannerContent.className = "banner-content container";

    bannerContent.innerHTML = `
        <h2 class="banner_title">${movie.title}</h2>
        <p class="banner_info">Trending Movie Realeaed "${movie.release_date}"</p>
        <p class="banner_overview">${movie.overview && movie.overview.length > 200 ? movie.overview.slice(0, 200).trim() + '...' : movie.overview}</p>
        <div class="action-buttons-cont">
            <button class="action-button play-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="Play" aria-hidden="true"><path d="M5 2.69127C5 1.93067 5.81547 1.44851 6.48192 1.81506L23.4069 11.1238C24.0977 11.5037 24.0977 12.4963 23.4069 12.8762L6.48192 22.1849C5.81546 22.5515 5 22.0693 5 21.3087V2.69127Z" fill="currentColor"></path></svg> Play</button>
            <button class="action-button more-info-btn"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="ltr-0 e1mhci4z1" data-name="CircleI" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" fill="currentColor"></path></svg> More Info</button>
        </div>
    `;

    bannerCont.appendChild(bannerContent);
}

// ... (rest of the code)



function fetchAndBuildAllSections() {
    fetch(apiPaths.fetchAllCategories)
        .then(res => res.json())  // Parse the response as JSON
        .then(res => {
            const categories=res.genres;
            if(Array.isArray(categories) && categories.length > 0) {
                // categories.slice(0,3).forEach(category => {    // slice(0,2) means 0 to 2 small for our easyness
                categories.forEach(category => {
                    fetchAndBuildMovieSection(
                        apiPaths.fetchMoviesList(category.id),
                        category.name
                        );
                });
            }
            // console.table(movies);
        })  // Log the data
        .catch(err => console.log(err));
}



async function fetchAndBuildMovieSection(fetchUrl, categoryName) {
    // console.log(fetchUrl, categoryName);
    try {
        const res = await fetch(fetchUrl);
        const res_1 = await res.json();
        // console.table(res.results);
        const movies = res_1.results;
        if (Array.isArray(movies) && movies.length > 0) {
            // buildMovieSection(movies.slice(0, 6), categoryName);
            buildMovieSection(movies, categoryName);
        }
        return movies;
    } catch (err) {
        return console.error(err);
    }
}

function buildMovieSection(list, categoryName) {
   console.log(list, categoryName);

    const moviesCont = document.getElementById("movie-cont");

    const moviesListHTML = list.map(item => {
        return `
        <div class="movie-item" onmouseenter="searchMovieTrailer('${item.title}', 'yt${item.id}')">
        <img class="move-item-img" src="${imageBaseUrl}${item.backdrop_path}" alt="${item.title}" />
        <div class="iframe-wrap" id="yt${item.id}"></div>
        </div>
        `;
    }).join("");

    const movieSectionHTML = `
        <h2 class="movie-section-heading">${categoryName} <span class="explore-nudge">Explore All</span></h2>
        <div class="movie-row">
            ${moviesListHTML}
        </div>
    `;

    // console.log(movieSectionHTML);

    const div=document.createElement("div");
    div.className="movies-section";
    div.innerHTML=movieSectionHTML;

    // append to the container
    moviesCont.appendChild(div);

    // moviesCont.innerHTML += movieSectionHTML;

    // const exploreNudge = document.querySelector(".explore-nudge");

}


// function searchMoviesTrailer(movieName) {
//     if (!movieName) return;

//     fetch(apiPaths.searchOnYoutube(movieName))
//     .then(res => res.json())
//     .then(res => {
//         const bestResult = res.items[0];
//         const youtubeVideoUrl = `https://www.youtube.com/watch?v=${bestResult.id.videoId}`;
//         console.log(youtubeVideoUrl);
//     }).catch(err => console.log(err));
// }


// function searchMovieTrailer(movieName, iframeId) {
//     if (!movieName) return;

//     fetch(apiPaths.searchOnYoutube(movieName))
//     .then(res => res.json())
//     .then(res => {
//         const bestResult = res.items[0];
        
//         const iframeContainer = document.getElementById(iframeId);

//         const iframe = document.createElement('iframe');
//         iframe.width = "245";
//         iframe.height = "150";
//         iframe.src = `https://www.youtube.com/embed/${bestResult.id.videoId}?autoplay=1&controls=0`;

//         iframeContainer.innerHTML = "";
//         iframeContainer.appendChild(iframe);
//     })
//     .catch(err => console.log(err));
// }


function searchMovieTrailer(movieName, iframId) {
    if (!movieName) return;

    fetch(apiPaths.searchOnYoutube(movieName))
    .then(res => res.json())
    .then(res => {
        const bestResult = res.items[0];
        
        const elements = document.getElementById(iframId);
        console.log(elements, iframId);

        const div = document.createElement('div');
        div.innerHTML = `<iframe width="245px" height="150px" src="https://www.youtube.com/embed/${bestResult.id.videoId}?autoplay=1&controls=0"></iframe>`

        elements.append(div);
        
    })
    .catch(err=>console.log(err));
}


window.addEventListener("load", function(){
    console.log("Page loaded!");
    init();
    
    window.addEventListener("scroll", function(){
        console.log("Scrolling");
        // header ui update
        const header = document.getElementById("header");
        if(window.scrollY > 20){
            header.classList.add("black-bg");
        }else{
            header.classList.remove("black-bg");
        }
    })
});




// https://api.themoviedb.org/3/genre/movie/lisapi_key-433bb169a60f6ea03d8a88944bcc8745&language=en-US

// https://api.themoviedb.org/3/genre/movie/lisapi_key-75435244418260664897044b8e2dc621&language=en-US