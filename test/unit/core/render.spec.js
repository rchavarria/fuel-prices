/* eslint-env jest */
import render from '../../../src/core/render'

describe('render', () => {
  it('renders no params', () => {
    const expected = 'template'
    const text = render(expected, [])
    expect(text).toEqual(expected)
  })
})
