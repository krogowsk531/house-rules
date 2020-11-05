import React from 'react'
import { render, screen } from "@testing-library/react";
import Comments from './Comments.js';

describe('Comment', () => {
    it('should render a card', () => {
        const allDisputes=[
            {
                expansion: 'funtime',
                numplayers: 2,
                minutesPlayed: 10,
                officialRule: 'none',
                ruleDispute: 'add details'
            },
            {
                expansion: 'number2',
                numPlayers: 12,
                minutesPlayed: 100,
                officialRule: 'free space',
                ruleDispute: 'go to start'
            }
        ]
        render(
            <Comments 
                allDisputes={allDisputes} 
            />,
        )
        const expansion1 = screen.getByText('Expansion: funtime')
        const players2 = screen.getByText('Number of Players: 12')
        const minutesPlayed2 = screen.getByText('Game Playtime: 100')
        const officialRule2 = screen.getByText('Official Rule: free space')
        const interpretation1 = screen.getByText('Your House Rule: add details')

        expect(expansion1).toBeInTheDocument();
        expect(players2).toBeInTheDocument();
        expect(minutesPlayed2).toBeInTheDocument();
        expect(officialRule2).toBeInTheDocument();
        expect(interpretation1).toBeInTheDocument();
    })
    
})
