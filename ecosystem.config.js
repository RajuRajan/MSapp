module.exports = {
  apps : [{
    name: 'MSapp',
    script: 'server.js',

    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'raj-server',
      host : '13.232.84.173',
      ref  : 'origin/master',
      repo : 'https://github.com/RajuRajan/MSapp.git',
      path : '/var/www/MSapp',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
