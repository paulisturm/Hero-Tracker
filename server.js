const express = require('express');
const routes = require('./controllers');
const exphbs = require('express-handlebars');
const session = require('express-session');
const hbs = exphbs.create({});
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));


const sess = {
  secret: 'Super secret secret',
  cookie: {
    expires: 720000
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore ({
    db: sequelize
  })
};
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

sequelize.sync({force: false }).then(() => {
  app.listen(PORT, () => {console.log(`App listening on port ${PORT}!`)});
});
  