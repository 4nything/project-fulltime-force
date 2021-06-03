import app from './app';

async function main() {
    await app.listen(app.get('port'));
}

main();