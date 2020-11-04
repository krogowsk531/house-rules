import Home from '../pages/index.js'
import Cards from '../components/Cards/Cards.js'
import { screen, render, waitFor } from '@testing-library/react'
import { getGames } from '../pages/api/apiCalls'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
// jest.mock('../pages/api/apiCalls')

import React from 'react'
import ReactDOM from 'react-dom/server'
import Link from 'next/link'

describe('Homepage', () => {
  let props;
  beforeEach(() => {
    props = global.getStaticProps = {
      games: [
        {id:"1", name: "game1", image: "game1url"},
        {id:"2", name: "game2", image: "game2url"}
      ]
    }
        
  })
  it('render page fetch data', () => {
    render(
      <Home games={props.games}/>
    )

    expect(screen.getByText("House Rules")).toBeInTheDocument()
    expect(screen.getByAltText("game1")).toBeInTheDocument()
    expect(screen.getByAltText("game2")).toBeInTheDocument()
  })
  it('should have cards that are links', () => {
    const element = React.createElement(
      'a',
      {
        href: '/GameDetails/[gameid]',
        // query: { gameid: "1"}
      },
      "to another page"
    )
    const html = ReactDOM.renderToString(element)
    expect(html).toMatchInlineSnapshot(
      `"<a href=\\"/GameDetails/[gameid]\\" data-reactroot=\\"\\">to another page</a>"`
    )
    // render(
    //   <Home games={props.games}/>
    // )
    // userEvent.click(screen.getByAltText("game1"))
    // screen.debug()
  })
})