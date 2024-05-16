import Link from "next/link"
import Image from "next/image";
const Movie = ({MoviesList}) => {
    return ( 
        <>
        <div className="relative top-36 w-full h-full flex flex-wrap gap-10 justify-center ">
        {
            MoviesList && (
                MoviesList.map(movie => {
                    return (
                        <Link href={`/movies/${movie.id}`} key={movie.id}>
                        <div className="bg-white w-64 h-[34rem] overflow-hidden rounded-xl shadow-lg shadow-[#62626252] mb-10 flex flex-col justify-between cursor-pointer" key={movie.id}>
                            <Image src={movie.poster} layout="responsive" alt="" width={100} height={100} className="w-full"/>
                            <div className="w-full px-2 mb-7">
                                <h1 className="text-lg font-sans font-bold mt-3 text-zinc-700 text-center">{movie.title}</h1>
                                <div className="w-full flex flex-row justify-evenly">
                                <h1 className="text-base font-sans mt-3 text-zinc-700"> Year : {movie.year}</h1>
                                <h1 className="text-base font-sans mt-3 text-zinc-700">IMDB : {movie.imdb_rating}</h1>
                                </div>
                                <h1 className="text-base font-sans mt-3 text-zinc-700 text-center">Genres : {movie.genres[0]}  {movie.genres[1]}</h1>
                            </div>
                        </div>
                        </Link>
                    )
                })
            )
        }
        </div>
        </>
     );
}
 
export default Movie;