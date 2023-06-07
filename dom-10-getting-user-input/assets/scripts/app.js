const addMovie = document.getElementById('add-modal');
// const addMovieModal = document.querySelector('#add-modal');
// const addMovieModal = document.body.children[1];
const startAddMovieButton = document.querySelector('header button');
// const startAddMovieButton = document.querySelector('header').lastElementChild;
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovie.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
// const noDeleteMovieButton = document.querySelector('btn_deleteNo');
// const yesDeleteMovieButton = noDeleteMovieButton.nextElementSibling;
const userInputs = addMovie.querySelectorAll('input');
const entryTextBox = document.querySelector('#entry-text');
// const userInputs = addMovieModal.getElementsByTagName('input');
const movies = [];
const updateUI = () => {
    if (movies.length === 0) {
        entryTextBox.style.display = 'block';
    } else {
        entryTextBox.style.display = 'none';
    }
}
const toggleBackdrop = () => {
    backdrop.classList.toggle('visible');
};

const addMovieModal = () => {
    // function() {}
    addMovie.classList.add('visible');
    toggleBackdrop();
    // clearMovieInput();
};

const cancelMovieModal = () => {
    // function() {}
    addMovie.classList.remove('visible');
    // toggleBackdrop();
    // clearMovieInput();
};

const cancelAddMovieHandler = () => {
    cancelMovieModal();
    clearMovieInput();
};

const clearMovieInput = () => {
    for (const userInput of userInputs) {
        userInput.value = '';
    }
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (
        titleValue.trim() === '' ||
        imageUrlValue.trim() === '' ||
        ratingValue.trim() === '' ||
        +ratingValue < 1 ||
        +ratingValue > 5
    ) {
        alert('Please enter valid values (rating between 1 and 5).');
        return;
    }
    const newMovie = {
        id: Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue
    }
    movies.push(newMovie);
    console.log(movies);
    cancelMovieModal();
    clearMovieInput();
    renderNewMovieElement(newMovie.id, newMovie.title, newMovie.imageUrl, newMovie.rating);
    updateUI();

};
const deleteMovie = (movieID) => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.id === movieID) {
            break;
        }
    }
    movieID++;
    movies.splice(movieIndex, 1);
    const listRoot = document.querySelector('#movie-list');
    listRoot.children[movieIndex].remove();
}
const deleteMovieHandler = movieID => {
    deleteMovieModal.classList.add('visible');
    toggleBackdrop();

}
const cancelDeleteModal = () => {
    toggleBackdrop();
    const deleteMovieModal = document.querySelector('#delete-modal');
    deleteMovieModal.classList.remove('visible');

}
const renderNewMovieElement = (id, title, imageUrl, rating) => {
    const newMovieElement = document.createElement('li');
    newMovieElement.className = 'movie-element';
    newMovieElement.innerHTML = `
    <div class="movie-element__img">
      <img src="${imageUrl}" alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `
    const listRoot = document.querySelector('#movie-list');
    listRoot.append(newMovieElement);
    newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));
}
const backdropClickHandler = () => {
    cancelMovieModal();
    cancelDeleteModal();
};



startAddMovieButton.addEventListener('click', addMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);