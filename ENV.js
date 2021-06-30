const variables = {
  production: {
    googleApiKey: 'AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7DcgoogleApiKey=AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7Dc'
  },

  development: {
    googleApiKey: 'AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7DcgoogleApiKey=AIzaSyCMCH-brUV4-ltdKG3MYL0u7whCLp-p7Dc'
  }
}


const getEnvVariables = () => {
  if (__DEV__){
    return variables.development
  }
  return variables.production
}

export default getEnvVariables;