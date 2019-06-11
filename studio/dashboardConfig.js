export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5cffe4dfbf8da3442e537e35',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7wn9pz29',
                  apiId: '745eabda-e718-4a61-88cd-d37241811c1d'
                },
                {
                  buildHookId: '5cffe4df03a3f9a9eba4ea3a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-aeuhisqe',
                  apiId: '13a50b44-0a64-41fd-bde0-376f8191e989'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/BodenWorld/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-portfolio-web-aeuhisqe.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
