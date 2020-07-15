// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'About band - Powerwolf',
  plugins: [
    {
      use: '@gridsome/source-graphql',
      options: {
        url: process.env['API_ENDPOINT'],
        fieldName: 'graphCMS',
        typeName: 'graphTypes',
        headers: {
          Authorization: `Bearer ${process.env['API_TOKEN']}`,
        }
      }
    }
  ]
}
