import Link from 'next/link'
import { getGames } from './api/apiCalls'
import Cards from '../components/Cards/Cards.js'
import NavBar from '../components/NavBar/NavBar.js'

export async function getStaticProps() {
    const gameData = await getGames()
    const data = gameData.games.map(game => {
        const gameInfo = {
            image: game.image_url,
            name: game.name,
            id: game.id,
        }
        return gameInfo
    })
    return {
        props: {
            games: data
        }
    }
}

export default function Home({ games }) {
    return (
        <section>
            <NavBar />
            <Link href="/sample/">Sample</Link>
            <Cards games={games}/>
        </section>
    )
}
