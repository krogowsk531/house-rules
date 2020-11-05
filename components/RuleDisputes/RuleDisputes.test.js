import React from 'react'
import { render, screen } from "@testing-library/react";
import RuleDisputes from './RuleDisputes.js';
import userEvent from '@testing-library/user-event';

describe('Rule Disputes', () => {
  it('should render a form with inputs', () => {
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
  })
  it('should update as data is entered into inputs', () => {
    render(
      <RuleDisputes />
    )
    userEvent.type(screen.getByPlaceholderText("expansion name"), "stretchy stretch")
    expect(screen.getByDisplayValue("stretchy stretch")).toBeInTheDocument()
  })
})