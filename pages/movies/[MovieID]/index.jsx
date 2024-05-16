import MovieCard from "@/components/MovieCard/MovieCard";
import Head from "next/head";

const MovieIdPage = ({MyMovieData}) => {
    console.log(MyMovieData)
    return ( 
        <>
            <Head>
                <title>Movie : {MyMovieData.title}</title>
            </Head>
            <MovieCard DataMovies={MyMovieData}/>
        </>
     );
}
 
export default MovieIdPage;

export async function getServerSideProps({params}){
    const { MovieID } = params
    const res = await fetch(`https://moviesapi.ir/api/v1/movies/${MovieID}`)
    const resdata = await res.json()

    return { 
        props : {
            MyMovieData : resdata
        }
    }
}