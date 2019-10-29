/* eslint-env jest */
import render from '../../../src/core/render'
import TemplateParam from '../../../src/model/template-param'

describe('render', () => {
  it('renders no params', () => {
    const expected = 'template'
    const text = render(expected, [])
    expect(text).toEqual(expected)
  })

  it('renders one existing param', () => {
    const params = [
      new TemplateParam('this-key', 'expected value')
    ]
    const text = render('Renders {this-key} here', params)
    expect(text).toEqual('Renders expected value here')
  })

  it('does not render non existing params', () => {
    const params = [
      new TemplateParam('this-key', 'non replaced value')
    ]
    const text = render('Renders {another-key} here', params)
    expect(text).not.toContain('non replaced value')
  })
})
