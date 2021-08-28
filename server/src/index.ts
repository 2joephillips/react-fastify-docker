import fastify from 'fastify';

const server = fastify({ logger: true });

const startUp = async () => {
  server.register(require('fastify-cors'), {
    origin: 'http://localhost:3000',
  });
  server.get('/ping', async (request, reply) => {
    return 'pong\n';
  });

  server.listen(5000, '0.0.0.0', (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};

startUp();
