import { useRouter } from 'next/router'

const GameDetails = () => {
  const router = useRouter()
  const { gameid } = router.query

  return <p>this is a detail page {gameid}</p>
}

export default GameDetails