module.exports = ({ env }) => ({
  host: env("HOST", "https://evaluatz-db.herokuapp.com"),
  port: env.int("PORT", 1337)
});
