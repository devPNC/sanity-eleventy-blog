export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62ce2e04db83ad20827631dc',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-i8owkutr',
                  apiId: 'dbc1d7ce-ce9b-4c29-b337-d1ea7e3e2da3'
                },
                {
                  buildHookId: '62ce2e053ae3dd215f6ec0ff',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ghpqwgd4',
                  apiId: '099e523d-8d26-44ad-b32a-2ecab2d7ab40'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/devPNC/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ghpqwgd4.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
