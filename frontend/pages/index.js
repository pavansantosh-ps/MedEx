import Head from 'next/head'
import Link from 'next/link'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>MedEx</title>
      </Head>
      <div className="homeStyles.about">
      <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span class="block xl:inline">About </span>
            <span class="block text-indigo-600 xl:inline">MedEx</span>
          </h1>
          <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div class="rounded-md shadow">
              <Link href='/login'>
              <a class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                login Here
              </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
      </div>
    </div>
  )
}
