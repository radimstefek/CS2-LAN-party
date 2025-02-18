import nextConnect from "next-connect";
import session from "express-session";
import passport from "../../../lib/passport";

const handler = nextConnect();

handler.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);
handler.use(passport.initialize());
handler.use(passport.session());

handler.get(
  passport.authenticate("steam", { failureRedirect: "/auth/login" }),
  (req, res) => {
    // Po úspěšném přihlášení přesměrujte uživatele do dashboardu nebo domů
    res.redirect("/");
  }
);

export default handler;
