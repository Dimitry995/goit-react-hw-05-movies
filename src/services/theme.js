export const theme = {
  borders: {
    prime: '2px solid orangered',
    secondary: '1px solid rgb(190, 190, 190)',
  },

  colors: {
    prime: 'white',
    second: 'orangered',
    primeBg: 'rgb(240, 240, 240)',
    secondBg: 'rgb(230, 230, 230)',
    otherBg: 'rgb(210, 210, 210)',
    headerBg: 'rgb(180, 190, 240)',
  },

  fontSizes: [14, 16, 18, 20, 24, 36],

  opacities: [0.6, 1],

  radii: [3, 4],

  shadows: {
    prime:
      '0px 1px 3px 0px rgba(0, 0, 0, 0.2), 0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    second: '0 2px 4px -1px rgb(170, 170, 170)',
    other:
      '0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 4px 5px 0 rgba(0, 0, 0, 0.04), 0 1px 10px 0 rgba(0, 0, 0, 0.02)',
  },

  space: [6, 10, 12, 16, 20, 24, 36, 40],

  sizes: [48, 72, 96, 120, 216, 312, 408, 600],

  transitions: {
    opacity: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
    all: 'all 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  },
};
