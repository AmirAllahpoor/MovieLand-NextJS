import Image from "next/image";

const MovieCard = ({DataMovies}) => {
    return ( 
        <>
        <div className="mt-32 ml-10 flex flex-col pr-10">
            <div className=" flex flex-row">
                <div className="w-52">
                    <Image src={DataMovies.poster} width={100} height={100} className="rounded-xl" layout="responsive" alt=""/>
                </div>
                <div className="ml-10">
                <h1 className="text-2xl font-sans font-bold text-zinc-800">{DataMovies.title}</h1>
                <h1 className="text-sm mt-5 font-sans text-zinc-700">Director : {DataMovies.director}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Writer : {DataMovies.writer}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Actor : {DataMovies.actors}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">IMDB Rating : {DataMovies.imdb_rating}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Genres : {DataMovies.genres[0]} {DataMovies.genres[1]} {DataMovies.genres[2]}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Country : {DataMovies.country}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Year : {DataMovies.year}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Released : {DataMovies.released}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">RunTime : {DataMovies.runtime}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Awards : {DataMovies.awards}</h1>
                <h1 className="text-sm mt-1 font-sans text-zinc-700">Issue : {DataMovies.plot}</h1>
                </div>
            </div> 
            <div className="w-full flex flex-row justify-between mt-10">
                {
                    DataMovies.images.map(img => {
                        return(
                            <div className="w-[29rem]" key={DataMovies.id}>
                                <Image src={img} width={100} height={100} className="rounded-xl" layout="responsive" alt="" />
                            </div>
                        )
                    })
                }
            </div>
        </div>
        </>
     );
}
 
export default MovieCard;