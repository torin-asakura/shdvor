import { globalStyle } from '@vanilla-extract/css'

globalStyle('html, body, #__next', {
  margin: 0,
  padding: 0,
  WebkitFontSmoothing: 'antialiased',
  WebkitOverflowScrolling: 'touch',
  height: 'auto',
  scrollBehavior: 'smooth',
})

globalStyle('html, body', {
  overflowX: 'hidden',
})

globalStyle('body', {
  minHeight: '100vh',
})

globalStyle('#__next', {
  display: 'flex',
  flexDirection: 'column',
})

globalStyle('.swiper-slide', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})
