import passport from "passport";
import SteamStrategy from "passport-steam";

passport.use(
  new SteamStrategy(
    {
      returnURL: "http://localhost:3000/api/auth/steam/return",
      realm: "http://localhost:3000/",
      apiKey: process.env.STEAM_API_KEY,
    },
    function (identifier, profile, done) {
      // V tomto jednoduchém příkladu vracíme profil jako uživatele
      process.nextTick(() => {
        profile.identifier = identifier;
        return done(null, profile);
      });
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

export default passport;
