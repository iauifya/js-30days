const addMovieBtn = document.querySelector('#add-movie-btn');
const searchBtn = document.querySelector('#search-btn');
const movies = [];

const addMovieHandler = () => {
    const title = document.querySelector('#title').value;
    const extraName = document.querySelector('#extra-name').value;
    const extraValue = document.querySelector('#extra-value').value;

    if (title.trim() === '' || extraName.trim() === '' || extraValue.trim() === '') {
        return;
    }

    const newMovies = {
        info: {
            title,
            [extraName]: extraValue //因為這邊不確定屬性的名稱是什麼，所以利用屬性變數的方式呈現
        },
        id: Math.random()
    }
    movies.push(newMovies);
    renderMovies();
    console.log(movies);
}
const renderMovies = (filter = '') => {
    const movieList = document.querySelector('#movie-list');
    if (movies.length === 0) {
        movieList.classList.remove('visible');
    } else {
        movieList.classList.add('visible');
    }
    movieList.innerHTML = '';
    const filterMovies = !filter ? movies : movies.filter(movie => movie.info.title.includes(filter));
    filterMovies.forEach((movie, index) => {
        let movieEl = document.createElement('li');
        if (movie.info === undefined) { //此代表目前尚不存在此屬性，可用於你在檢查這屬性是否存在，或是你可能希望為它分配一些虛擬默認值
            //...
        }
        const { info, ...otherProps } = movie; //array destructuring
        console.log(otherProps);
        let text = info.title + '-';
        for (const key in info) {
            if (key !== 'title') {
                text = text + `${key}:${info[key]}`; //這邊的key跟keyValue做法還是有點模糊
            }
        }
        movieEl.textContent = text;
        movieList.append(movieEl);

    })
}
const searchMovieHandler = () => {
    const filterTerm = document.querySelector('#filter-title').value;
    renderMovies(filterTerm);
}
addMovieBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);