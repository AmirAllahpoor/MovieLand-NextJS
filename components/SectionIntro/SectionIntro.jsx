import Link from "next/link";
import Image from "next/image";
const SectionIntro = ({MovieData}) => {
    return ( 
        <div className="relative top-20 overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-bold tracking-tighter text-gray-800 sm:text-6xl">
                I hope you enjoy the videos!
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Our site offers attractive high quality videos to its users. We try to make you watch movies with pleasure and make good use of your free time!
              </p>
            </div>
            <div>
              <div className="mt-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src={MovieData[0].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[1].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[2].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[3].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[4].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[5].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <Image
                            src={MovieData[6].poster}
                            alt=""
                            className="h-full w-full object-cover object-center"
                            width={100}
                            height={100}
                            layout="responsive"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
  
                <Link
                  href="/movies"
                  className="inline-block rounded-md border border-transparent bg-zinc-600 px-8 py-3 text-center font-medium text-white hover:bg-zinc-700"
                >
                  Watch Movies Now!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default SectionIntro;