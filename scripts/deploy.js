const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export',
    {
        branch: 'master',
        repo: 'https://github.com/rodrigodivino/edge-bundling',
        user: {
            name: 'rodrigodivino',
            email: 'rodrigodivino.ufpa@gmail.com'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)