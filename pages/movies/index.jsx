import Movie from "@/components/Movie/movie";
import Head from "next/head";

const MoviesPage = ({MovieList}) => {

    return ( 
        <>
            <Head>
                <title>MovieLand | MovieList</title>
            </Head>
            <Movie MoviesList={MovieList}/>
        </>
     );
}
 
export default MoviesPage;

export async function getServerSideProps(){
    const res = await fetch("https://moviesapi.ir/api/v1/movies?page={page}")
    const responsedata = await res.json()
    const data = await responsedata.data
  
    return {
      props : {
        MovieList : data
      }
    }
}