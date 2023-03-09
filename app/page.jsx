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
    <main className='h-full'>
      <HomeContainer sportsQuiz={sportsQuiz} randomQuiz={randomQuiz} filmQuiz={filmQuiz} historyQuiz={historyQuiz} musicQuiz={musicQuiz} generalKnowledgeQuiz={generalKnowledgeQuiz} />
    </main>
  )
}
