import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    boxSizing: 'border-box',
    padding: 0,
    margin: 0,
    fontFamily: '$default',
    overflow: 'hidden',
  },
  body: {
    backgroundColor: '$gray800',
    color: '$white',
    '-webkit-font-smooting': 'antialiased',
  },
})
