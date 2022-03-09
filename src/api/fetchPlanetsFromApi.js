export const receivePlanetsFromApi = () => {
  return fetch('https://swapi.dev/api/planets')
    .then(results => results)
    .then(planets => planets.json())
}
