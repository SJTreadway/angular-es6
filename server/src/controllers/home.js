import config from '../config/site-config';
import _ from 'lodash';

let env = process.env.NODE_ENV || 'development';

let Home = {};

Home.index = function(request, response) {
	let data = {};

  return response.render('home.html', {
    data: data,
    env: env,
    title: 'Steven\'s Anagram Application',
    config: config,
    classes: 'home'
  });
};

export default Home;
