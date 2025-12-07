import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../src/App'

// App コンポーネントの最低限の表示内容（タイトル文言）を保証するスモークテスト
describe('App', () => {
  it('タイトル「LogiQuest 10」を表示する', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: 'LogiQuest 10' })).toBeInTheDocument()
  })
})
