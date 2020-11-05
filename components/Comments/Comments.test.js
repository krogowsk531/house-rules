import React from 'react'
import { getByText, render, screen } from "@testing-library/react";
import Comment from './Comments.js'
import Comments from './Comments.js';

describe('Comment', () => {

    it('should render a card', () => {
        const allDisputes=[
            {
                expansion: 'funtime',
                players: 2,
                minutesPlayed: 10,
                officialRule: 'none',
                interpretation: 'add details'
            },
            {
                expansion: 'number2',
                numPlayers: 12,
                minutesPlayed: 100,
                officialRule: 'free space',
                interpretation: 'go to start'
            }
        ]
        render(
            <Comments 
                allDisputes={allDisputes} 
            />,
        )
        screen.debug()
        officialRule2 = screen.getByText('free space')
        expansion1 = screen.getByText('funtime')
        players2 = screen.getByText(12)

        expect(officialRule2).toBeInTheDocument()
    })
    
})
