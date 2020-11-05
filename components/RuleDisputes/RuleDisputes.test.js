import React from 'react'
import { render, screen } from "@testing-library/react";
import RuleDisputes from './RuleDisputes.js';

describe('Rule Disputes', () => {
  it('should render a form', () => {
    render(
      <RuleDisputes />
    )
    screen.debug()
  })
})