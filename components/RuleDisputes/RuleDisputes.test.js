import React from 'react'
import { render, screen } from "@testing-library/react";
import RuleDisputes from './RuleDisputes.js';
import userEvent from '@testing-library/user-event';

describe('Rule Disputes', () => {
  it('should render a form with inputs and comments section', () => {
    render(
      <RuleDisputes />
    )

    expect(screen.getByText("Dispute Game Rule")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("expansion name")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("number of players")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("minutes played")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("official rule")).toBeInTheDocument()
    expect(screen.getByPlaceholderText("your house rule")).toBeInTheDocument()
    expect(screen.getByRole("button")).toBeInTheDocument()
    expect(screen.getByText("DISPUTED COMMENTS")).toBeInTheDocument()
  })
  it('should update as data is entered into inputs', () => {
    render(
      <RuleDisputes />
    )
    userEvent.type(screen.getByPlaceholderText("expansion name"), "stretchy stretch")
    expect(screen.getByDisplayValue("stretchy stretch")).toBeInTheDocument()
  })
  it('should not let user submit form without manadatory values', () => {
    render(
      <RuleDisputes />
    )
    expect(screen.getByText("SUBMIT")).toBeDisabled()
  })
  it('should be able to show a new comment a user submits', () => {
    render(
      <RuleDisputes />
    )
    userEvent.type(screen.getByPlaceholderText("expansion name"), "stretchy stretch")
    userEvent.type(screen.getByPlaceholderText("number of players"), '4')
    userEvent.type(screen.getByPlaceholderText("minutes played"), '50')
    userEvent.type(screen.getByPlaceholderText("official rule"), "this is a very official rule")
    userEvent.type(screen.getByPlaceholderText("your house rule"), "no i like this better")
    userEvent.click(screen.getByText("SUBMIT"))
    screen.debug()

    expect(screen.getByText("Dispute 1")).toBeInTheDocument()
    expect(screen.getByText("Expansion: stretchy stretch")).toBeInTheDocument()
    expect(screen.getByText("Game Playtime: 50 minutes")).toBeInTheDocument()
    expect(screen.getByText("Official Rule: this is a very official rule")).toBeInTheDocument()
    expect(screen.getByText("Your House Rule: no i like this better")).toBeInTheDocument()
  })
})