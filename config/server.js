module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  // url: env("URL",'https://evaluatz-db.herokuapp.com')
});
