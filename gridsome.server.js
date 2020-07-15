// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`


module.exports = function (api) {

  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(`{
      graphCMS {
        albums {
          id
          title
        }
      }
    }`)

    console.log('----');
    console.log(data.graphCMS.albums);
    console.log('----');

    data.graphCMS.albums.forEach((node) => {
      console.log(node);
      createPage({
        path: `/album/${node.id}`,
        component: './src/templates/Album.vue',
        context: {
          id: node.id
        }
      })
    })
  })

}
