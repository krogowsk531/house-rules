import { getGames, getSingleGame } from '../api/apiCalls.js'
import RuleDisputeForm from '../../components/RuleDisputeForm/RuleDisputeForm.js'


export async function getStaticPaths() {
  const games = await getGames()
  const paths = games.games.map(game => ({
    params: { gameid: game.id }
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({params}) {
  return {
    props: {
      game: await getSingleGame(params.gameid)
    }
  }
}

export default function GameDetails({ game }) {
  return (
    <>
      <h2 className="game-name">{game.games[0].name}</h2>
      <img className="game-image"
        src={game.games[0].image_url}
        alt={game.games[0].name}
      />
      <p className="game-detail-para">{game.games[0].description_preview}</p>
      <h3 className="game-detail-heading">Number of Players</h3>
      <p className="game-detail-para">Min: {game.games[0].min_players} - Max: {game.games[0].max_players}</p>
      <h3 className="game-detail-heading">Estimate Play Time</h3>
      <p className="game-detail-para">{game.games[0].max_playtime}</p>
      <h3 className="game-detail-heading"><a href={game.games[0].rules_url}>Official Game Rules</a></h3>
      <RuleDispute />
    </>
  )
}
