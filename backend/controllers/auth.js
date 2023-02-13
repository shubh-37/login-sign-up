function auth(app, Models) {
  const { User } = Models;
  app.post("/register", async function register(req, res) {
    const { emailId, password } = req.body;
    const user = await User.findOne({ emailId });
    res.send("register a person");
  });

  app.post("/login", async function login(req, res) {
    res.send("login a user");
  });
}

module.exports = auth;
