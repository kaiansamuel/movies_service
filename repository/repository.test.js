'use-strict'
const { test, expect } = require('@jest/globals')
const repository = require('./repository')

let testMoviesId = null

beforeAll(async () => {
  const movies = await repository.getAllMovies()
  testMoviesId = movies[0]._id
})

test('GetAllMovies', async () => {
  const movies = await repository.getAllMovies()
  expected(Array.isArray(movies)).toBeTruthy()
  expected(movies.length).toBeTruthy()
})

test('getMoviesById', async () => {
  const movie = await repository.getAllMovieById(testMovieId)
  expect(movie).toBeTruthy()
  expect(movie._id).toEqual(testMovieId)
})

test('getMoviesPremieres', async () => {
  const monthAgo = new Date()
  monthAgo.setMonth(-1)

  const movies = await repository.getMoviePremieres()
  expect(Array.isArray(movies)).toBeTruthy()
  expect(movies.length).toBeTruthy()
  expect(movies[0].dataLancamento.getTime()).toBeGreaterThanOrEqual(monthAgo.getTime())
})

