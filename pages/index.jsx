import Head from 'next/head'

import MovieItem from '../components/MovieItem';
import MovieRepo from '../libraries/repositories/movies';

export async function getStaticProps() {
  const { results } = await MovieRepo.fetchNowPlaying();
  console.log('results : ', results);
  return {
    props: {
      movies: results,
    }
  }
}

export default function Home({ movies }) {
  return (
    <>
      <Head>
        <title>Movies Catalogue - NextJS</title>
      </Head>
      <div className="min-h-screen overflow-x-hidden overflow-y-auto">
        <nav className="shadow-md bg-white z-30 fixed top-0 right-0 w-full h-16 flex justify-start items-center">
          <div className="container mx-auto">
            <div className="flex justify-between items-center">
              <div className="font-bold text-2xl">Logo</div>
              <div className="grid grid-cols-3 gap-3">
                <div className="text-right  ">
                  <a href="#">Now Playing</a>
                </div>
                <div className="text-right  ">
                  <a href="#">Up Coming</a>
                </div>
                <div className="text-right  ">
                  <a href="#">Sign In</a>
                </div>
                {/* <div className="text-right">
                  <a href="#">Register</a>
                </div> */}
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto min-h-screen pt-16 mb-12">
          <div className="my-8">
            <h1 className="text-4xl">Now Playing Movies</h1>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {
              movies.map((movie) => (
                <MovieItem key={movie.id} {...movie} />
              ))
            }
          </div>
        </div>
        <footer className="bg-gray-300 h-40">
          <div className="container mx-auto h-full py-3">
            <div className="text-center h-full flex justify-center items-center">
              &copy; Copyright - 2021
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
