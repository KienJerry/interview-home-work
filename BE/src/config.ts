export const config = {
  PORT: process.env.PORT || '3003',
  BASE_PATH: process.env.BASE_PATH || '/interview-home-work/api',
  SWAGGER_PATH: process.env.SWAGGER_PATH || '/interview-home-work/swagger',
  API_KEY: process.env.API_KEY || '666FBAE90B7A40428A33B4EF677879BB',
  AUTH: {
    SECRET: process.env.AUTH_SECRET || 'KienDev',
    EXPIRES_IN: process.env.AUTH_EXPIRES_IN || '1d',
    SALT_ROUND: +(process.env.AUTH_SALT_ROUND || '10'),
  },
  MYSQL: {
    HOST: process.env.MYSQL_HOST || '127.0.0.1',
    PORT: process.env.MYSQL_PORT || '3306',
    USERNAME: process.env.MYSQL_USERNAME || 'root',
    PASSWORD:
      '',
    // PASSWORD:
    //   process.env.MYSQL_PASSWORD ||
    //   '',
    DATABASE: process.env.MYSQL_DATABASE || 'interview_home_work',
    // IS_SYNCHORNIZE: true, 
    IS_SYNCHORNIZE: JSON.parse(process.env.MYSQL_IS_SYNCHORNIZE || 'false'),
  },
};
