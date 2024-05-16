import SectionIntro from "@/components/SectionIntro/SectionIntro";
import Head from "next/head";

const Page = ({MovieData}) => {

  return ( 
    <> 
    <Head>
      <title>Movie Land | HomePage</title>
      <meta name="description" content="this is homepage of movieland"/>
    </Head>
      <SectionIntro MovieData={MovieData}/>
    </>
  );
}
 
export default Page ;

export async function getServerSideProps(){
  const res = await fetch("https://moviesapi.ir/api/v1/movies?page={page}")
  const responsedata = await res.json()
  const data = await responsedata.data

  return {
    props : {
      MovieData : data
    }
  }
}
