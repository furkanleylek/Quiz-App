import Image from 'next/image'
import { Inter } from '@next/font/google'
import HomeContainer from '@/containers/homeContainer'
import { fetchSports, fetchRandom, fetchFilms, fetchHistory, fetchGeneralKnowledge, fetchMusic } from '@/services'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {

  const pagePromises = [
    fetchSports(),
    fetchRandom(),
    fetchFilms(),
    fetchHistory(),
    fetchMusic(),
    fetchGeneralKnowledge(),
  ]
  const [sportsQuiz, randomQuiz, filmQuiz, historyQuiz, musicQuiz, generalKnowledgeQuiz] = await Promise.all(pagePromises)

  return (
    <main className='flex flex-col justify-center items-center h-full w-screen border-2 border-solid border-red-500'>
      <HomeContainer sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} />
    </main>
  )
}
