const deviceSizes = {
  mobile: '600px',
  tablet: '1024px',
};

const device = {
  mobile: `screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `screen and (max-width: ${deviceSizes.tablet})`,
};

const lightColors = {
  headerBackground: 'white',
  color: '#548687',
  btnBackground: '#548687',
  btnFontColor: '#a8dba8',
  switchColor: 'black',
};

const darkColors = {
  headerBackground: '#333',
  color: '#a8dba8',
  btnBackground: '#a8dba8',
  btnFontColor: '#548687',
  switchColor: 'white',
};

export const darkTheme = {
  device,
  colors: darkColors,
  name: 'dark',
};

export const lightTheme = {
  device,
  colors: lightColors,
  name: 'light',
};
