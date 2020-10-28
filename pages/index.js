import React from 'react'
import Link from 'next/link'
import { getGames } from './api/apiCalls'
import Cards from '../components/Cards/Cards.js'
import NavBar from '../components/NavBar/NavBar.js'

class Home extends React.Component {
  static async getInitialProps() {
    // const gameData = await getGames()
    const gameData = { games: [

      {
        "id": "kPDxpJZ8PD",
        "name": "Spirit Island",
        "year_published": 2016,
        "min_players": 1,
        "max_players": 4,
        "min_playtime": 90,
        "max_playtime": 120,
        "min_age": 13,
        "description": "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been &quot;discovered&quot; by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!",
        "description_preview": "Powerful Spirits have existed on this isolated island for time immemorial. They are both part of the natural world and - at the same time - something beyond nature. Native Islanders, known as the Dahan, have learned how to co-exist with the spirits, but with a healthy dose of fear and reverence. However, now, the island has been \"discovered\" by invaders from a far-off land. These would-be colonists are taking over the land and upsetting the natural balance, destroying the presence of Spirits as they go. As Spirits, you must grow in power and work together to drive the invaders from your island... before it's too late!",
        "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
        "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
        "images": {
            "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
            "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
            "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
            "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254941010-61PJxjjnbfL.jpg",
            "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254941010-61PJxjjnbfL.jpg"
        },
        "url": "https://www.boardgameatlas.com/game/kPDxpJZ8PD/spirit-island",
        "price": "54.99",
        "msrp": "79.95",
        "discount": "0.31",
        "primary_publisher": "Greater Than Games",
        "publishers": [
            "Greater Than Games"
        ],
        "mechanics": [
            {
                "id": "PGjmKGi26h",
                "url": "https://www.boardgameatlas.com/mechanic/PGjmKGi26h/undefined"
            },
            {
                "id": "05zCZoLvQJ",
                "url": "https://www.boardgameatlas.com/mechanic/05zCZoLvQJ/undefined"
            },
            {
                "id": "WPytek5P8l",
                "url": "https://www.boardgameatlas.com/mechanic/WPytek5P8l/undefined"
            },
            {
                "id": "U3zhCQH7Et",
                "url": "https://www.boardgameatlas.com/mechanic/U3zhCQH7Et/undefined"
            },
            {
                "id": "lA3KUtVFCy",
                "url": "https://www.boardgameatlas.com/mechanic/lA3KUtVFCy/undefined"
            },
            {
                "id": "DEvPj5twid",
                "url": "https://www.boardgameatlas.com/mechanic/DEvPj5twid/undefined"
            },
            {
                "id": "XM2FYZmBHH",
                "url": "https://www.boardgameatlas.com/mechanic/XM2FYZmBHH/undefined"
            },
            {
                "id": "9mNukNBxfZ",
                "url": "https://www.boardgameatlas.com/mechanic/9mNukNBxfZ/undefined"
            }
        ],
        "categories": [
            {
                "id": "nWDac9tQzt",
                "url": "https://www.boardgameatlas.com/category/nWDac9tQzt/undefined"
            },
            {
                "id": "gsekjrPJz0",
                "url": "https://www.boardgameatlas.com/category/gsekjrPJz0/undefined"
            },
            {
                "id": "ZTneo8TaIO",
                "url": "https://www.boardgameatlas.com/category/ZTneo8TaIO/undefined"
            },
            {
                "id": "upXZ8vNfNO",
                "url": "https://www.boardgameatlas.com/category/upXZ8vNfNO/undefined"
            },
            {
                "id": "MHkqIVxwtx",
                "url": "https://www.boardgameatlas.com/category/MHkqIVxwtx/undefined"
            },
            {
                "id": "nuHYRFmMjU",
                "url": "https://www.boardgameatlas.com/category/nuHYRFmMjU/undefined"
            },
            {
                "id": "O0ogzwLUe8",
                "url": "https://www.boardgameatlas.com/category/O0ogzwLUe8/undefined"
            },
            {
                "id": "buDTYyPw4D",
                "url": "https://www.boardgameatlas.com/category/buDTYyPw4D/undefined"
            }
        ],
        "designers": [
            "R. Eric Reuss"
        ],
        "developers": [],
        "artists": [
            "Jason Behnke",
            "Kat G Bermelin",
            "Loïc Billiau",
            "Cari Corene",
            "Lucas Durham",
            "Rocky Hammer",
            "Sydni Kruger",
            "Nolan Nasser",
            "Jorge Ramos",
            "Adam Rebottaro",
            "Moro Rogers",
            "Graham Sternberg",
            "Shane Tyree",
            "Joshua Wright (I)"
        ],
        "names": [
            "Spirit Island (5th Edition) (Ding & Dent)",
            "Spirit Island (Ding & Dent)",
            "Spirit Island",
            "Szellemek Szigete",
            "Остров духов"
        ],
        "num_user_ratings": 264,
        "average_user_rating": 3.9122769753610878,
        "official_url": "https://store.greaterthangames.com/spirit-island.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        "rules_url": "https://drive.google.com/file/d/0B9kp130SgLtdcGxTcTFodlhaWDg/view",
        "weight_amount": 2,
        "weight_units": "lbs",
        "size_height": 11.6,
        "size_width": 3,
        "size_depth": 11.6,
        "size_units": "inches ",
        "matches_specs": null,
        "spec": [],
        "reddit_all_time_count": 2325,
        "reddit_week_count": 11,
        "reddit_day_count": 13,
        "historical_low_price": 39.97,
        "historical_low_date": "2019-12-27T11:56:05.953Z",
        "rank": 8,
        "trending_rank": 62
    },
    {
        "id": "i5Oqu5VZgP",
        "name": "Azul",
        "year_published": 2017,
        "min_players": 2,
        "max_players": 4,
        "min_playtime": 30,
        "max_playtime": 60,
        "min_age": 8,
        "description": "<p><strong>Azul</strong> was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game.</p>\r\n<p>Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process.</p>\r\n<p>Introduced by the moors, &quot;azulejos&quot; (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles.</p>\r\n<p>As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora.</p>",
        "description_preview": "  Azul  was designed by the world famous, award-winning game author Michael Riesling. Azul captures the beautiful aesthetics of Moorish art in a contemporary board game. \r\n Players compete as artisans decorating the walls of the royal Palace of Dvora. By carefully drafting the correct Quantity and style of tiles, the most clever of artisans plan ahead to maximize the beauty of their work (not to mention their scores!) while ensuring they wasted no supplies in the process. \r\n Introduced by the moors, \"azulejos\" (originally white and blue ceramic tiles) were fully embraced by the Portuguese, when their King Manuel I, on a visit to the Alhambra Palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The King, awestruck by the interior beauty of the Alhambra, immediately ordered that his own Palace in Portugal be decorated with similar wall tiles. \r\n As a tile-laying artist, you have been challenged to embellish the walls of the royal Palace of Dvora. ",
        "image_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
        "thumb_url": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg",
        "images": {
            "thumb": "https://d2k4q26owzy373.cloudfront.net/40x40/games/uploaded/1559254200327-61EFZADvURL.jpg",
            "small": "https://d2k4q26owzy373.cloudfront.net/150x150/games/uploaded/1559254200327-61EFZADvURL.jpg",
            "medium": "https://d2k4q26owzy373.cloudfront.net/350x350/games/uploaded/1559254200327-61EFZADvURL.jpg",
            "large": "https://d2k4q26owzy373.cloudfront.net/700x700/games/uploaded/1559254200327-61EFZADvURL.jpg",
            "original": "https://s3-us-west-1.amazonaws.com/5cc.images/games/uploaded/1559254200327-61EFZADvURL.jpg"
        },
        "url": "https://www.boardgameatlas.com/game/i5Oqu5VZgP/azul",
        "price": "27.49",
        "msrp": "39.99",
        "discount": "0.31",
        "primary_publisher": "Next Move Games",
        "publishers": [
            "Next Move Games",
            "Plan B Games"
        ],
        "mechanics": [
            {
                "id": "8PN2HE86wg",
                "url": "https://www.boardgameatlas.com/mechanic/8PN2HE86wg/undefined"
            }
        ],
        "categories": [
            {
                "id": "hBqZ3Ar4RJ",
                "url": "https://www.boardgameatlas.com/category/hBqZ3Ar4RJ/undefined"
            }
        ],
        "designers": [
            "Michael Kiesling"
        ],
        "developers": [],
        "artists": [
            "Philippe Guérin",
            "Chris Quilliams"
        ],
        "names": [
            "アズール",
            "花磚物語",
            "아줄"
        ],
        "num_user_ratings": 467,
        "average_user_rating": 3.7251313996495985,
        "official_url": "https://www.nextmovegames.com/en/home/48-azul.html?utm_source=boardgameatlas.com&utm_medium=search&utm_campaign=bga_ads",
        "rules_url": "https://www.nextmovegames.com/en/index.php?controller=attachment&id_attachment=9",
        "weight_amount": 3,
        "weight_units": "lbs",
        "size_height": 10.2,
        "size_depth": 10.2,
        "size_units": "inches ",
        "matches_specs": null,
        "spec": [],
        "reddit_all_time_count": 1976,
        "reddit_week_count": 16,
        "reddit_day_count": 13,
        "historical_low_price": 17.99,
        "historical_low_date": "2019-08-03T03:10:26.821Z",
        "rank": 6,
        "trending_rank": 57
    },

    ]}
   const data = gameData.games.map(game => {
     const gameInfo = {rules: game.rules_url,
        image: game.image_url,
        name: game.name, 
        max: game.max_playtime, 
        maxPlayers: game.max_players,
        id: game.id,
        description: game.description,
        description_prev: game.description_preview,
        categories: game.categories
      }
      return gameInfo

    })
    return { games: data}
  }

  render() {
    return(
      <section>
        <NavBar />
        <Link href="/sample/">Sample</Link>
        <Cards games={this.props.games}/> 
      </section>
    ) 
  }
}

export default Home
