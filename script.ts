import { prisma } from "./lib/prisma";

async function main() {
  // Create a new user with a post
  const user = await prisma.movie.create({
    data: {
      title: "Inception",
      description: "a mind-bending thriller directed by Christopher Nolan.",
      genre: "Sci-Fi",
      releaseDate: new Date("2010-07-16"),
      rating: 8.8,
    },
  });
  console.log(user);
}

main();
