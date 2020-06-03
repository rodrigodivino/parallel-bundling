const ghpages = require('gh-pages');
console.log('Iniciando deploy')
ghpages.publish(
    '__sapper__/export/parallel-bundling',
    {
        branch: 'gh-pages',
        repo: 'https://github.com/rodrigodivino/parallel-bundling',
        user: {
            name: 'rodrigodivino',
            email: 'rodrigodivino.ufpa@gmail.com'
        }
    },
    () => {
        console.log('Foi!')
    }
)