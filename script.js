const API_KEY = '22702854f3a7f9662ad7778bcffca72e'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const input = document.querySelector('input')
const button = document.querySelector('button')
const section = document.querySelector('section')

const renderList = (movies) => {
  input.value = ''
  movies.forEach((movie) => {
    let newDiv = document.createElement('div')
    let newH2 = document.createElement('h2')
    newH2.innerText = movie.title
    newDiv.innerHTML = `<img src =${IMAGE_BASE_PATH + movie.poster_path} />`
    section.appendChild(newDiv)
    newDiv.appendChild(newH2)
  })
}

const getMovies = async () => {
  let search = input.value
  let response = await axios.get(
    `${DOMAIN}/search/movie?query=${search}&api_key=${API_KEY}`
  )
  renderList(response.data.results)
}

button.addEventListener('click', getMovies)

/* if movie poster is clicked, show movie details at top of page */
