module.exports = {
  apps: [
    {
      name: 'verticalizado',
      script: '/home/meucurso/verticalizado-backend/src/server.js',
      env: {
        NODE_ENV: 'production',
	SENDGRID_KEY: "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",      
        // Outras variáveis de ambiente que você precisa definir
      },
      env_file: '.env',
    },
  ],
};

