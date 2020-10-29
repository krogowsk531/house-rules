import { useRouter } from 'next/router'
import { getSingleGame } from '../api/apiCalls.js'

const GameDetails = () => {
  const router = useRouter()
  const { gameid } = router.query
  console.log(gameid)
  // const data = await getSingleGame(gameid)
  // console.log(data)
  return <p>this is a detail page </p>
}
// should NOT use getInitialProps more than once (already in root index.js -- use other react hooks/react lifecycle methods)
GameDetails.getInitialProps = async () => {
  return {}
}
//** how to pass gameid into getinitialprops - does this involve hooks? query object in context param?*/

export default GameDetails