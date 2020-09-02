module.exports = ({ env }) => ({
  host: env("HOST", `${process.env.HOST}` || '0.0.0.0'),
  port: env.int('PORT', `${process.env.PORT}` || '5000')
});
