module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index.html", {
      title: "Dynamic title",
      heading: "Home page",
    });
  });
};
