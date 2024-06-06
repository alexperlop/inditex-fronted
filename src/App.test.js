import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  test('render loading', () => {
    render(
      <App />
    )
    // Assert that the header is rendered
    const loadindElement = screen.getByTestId('loading')
    expect(loadindElement).toBeInTheDocument()
  })
})