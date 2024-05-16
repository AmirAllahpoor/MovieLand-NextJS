import NotFoundPage from "@/components/notfound/NotFound";
import Head from "next/head";

const PageNotFounded = () => {
    return ( 
        <>
        <Head>
            <title>404 : Page Not Found!</title>
        </Head>
        <NotFoundPage />
        </>    
     );
}
 
export default PageNotFounded;