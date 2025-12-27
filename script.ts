import { prisma } from "./lib/prisma";

async function createMovie() {
  // Create a new user with a post
  const movie = await prisma.movie.create({
    data: {
      title: "Inception",
      description: "a mind-bending thriller directed by Christopher Nolan.",
      genre: "Sci-Fi",
      releaseDate: new Date("2010-07-16"),
      rating: 8.8,
    },
  });
  console.log(movie);
}

async function createMultipleMovies() {
  // Create a new user with a post
  const movies = await prisma.movie.createMany({
    data: [
      {
        title: "Alien Covenant",
        description:
          "A science fiction movie that explores possibilities of Alien Covenant travel?",
        genre: "Sci-Fi",
        releaseDate: new Date("2010-07-16"),
        rating: 8.5,
      },
      {
        title: "The Dark Knight",
        description: "A superhero movie that follows the story of Batman.",
        genre: "Action",
        releaseDate: new Date("2008-07-18"),
        rating: 8.8,
      },
      {
        title: "Intersteller",
        description:
          "A science fiction movie that explores the possibilities of intersteller travel.",
        genre: "Sci-Fi",
        releaseDate: new Date("2014-11-07"),
      },
    ],
  });
  console.log(movies);
}

async function getAllMovies() {
  const allMovies = await prisma.movie.findMany();
  console.log(allMovies);
}

async function getMovieById(movieId: number) {
  const movie = await prisma.movie.findUnique({ where: { id: movieId } });
  console.log(movie);
}

function main() {
  //   createMovie();
  //   createMultipleMovies();
  //   getAllMovies();
  getMovieById(1);
}

main();
