/*
{
    id: ,
    name: '',
    title: '',
    summary: '',
    clientRepo: '',
    serverRepo: '',
    liveSite: '',
    altText: '',
    thumbNail: '',
    imgId: ''
  }
*/

import { Images } from './ImagesContainer'

export const projectContainer = {
  projects: [
    {
      id: 1,
      name: 'Expense Tracker',
      title: 'Full Stack Expense Tracker App',
      summary: 'This is a Full Stack app that was built using React.js, Node.js, Express, and Postgresql. You can create an account, add expenses and delete expenses. This is a minimal viable product (MVP). Live site is hosted on Heroku so may take 10-15 seconds to fire up.',
      clientRepo: 'https://github.com/Andacanaver/expense-tracker-frontend',
      serverRepo: 'https://github.com/Andacanaver/expense-tracker-backend',
      liveSite: 'https://expense.moesprojects.com',
      altText: 'expense tracker app thumbnail',
      thumbNail: Images.expenseTracker,
      imgId: 'expense-img',
      hasServer: true
    },
    {
      id: 2,
      name: 'Massage Products',
      title: 'Full Stack Massage Products App',
      summary: 'This is a fullstack app that I created to show massage products for a massage therapist. I would eventually like to flesh it out more and get it ready for e-commerce use. This app was built using React.js, Node.js, Express, and Postgresql. Live site is hosted on Heroku so may take 10-15 seconds to fire up.',
      clientRepo: 'https://github.com/Andacanaver/massage-products-client',
      serverRepo: 'https://github.com/Andacanaver/massage-products-api',
      liveSite: 'https://moesprojects.com',
      altText: 'massage products app thumbnail',
      thumbNail: Images.massageProducts,
      imgId: 'massage-img',
      hasServer: true
    },
    {
      id: 3,
      name: 'Noteful',
      title: 'Full Stack Note App',
      summary: 'This is a Full Stack app that was built using React.js, Node.js, and Express. You can try it out by clicking the image or the Name of the app. Live site is hosted on Heroku so may take 10-15 seconds to fire up.',
      clientRepo: 'https://github.com/Andacanaver/noteful-two',
      serverRepo: 'https://github.com/Andacanaver/noteful-server',
      liveSite: 'https://noteful-app-zeta.now.sh/',
      altText: 'noteful app thumbnail',
      thumbNail: Images.noteful,
      imgId: 'noteful-img',
      hasServer: true
    },
    {
      id: 4,
      name: 'Cocktail Search',
      title: 'API Capstone - Cocktail Search',
      summary: 'This is an asynchronous app for searching cocktails. It was built using HTML/CSS/Javascript/jQuery and uses the "thecocktaildb" api.',
      clientRepo: 'https://github.com/Andacanaver/api-capstone',
      serverRepo: '',
      liveSite: 'https://andacanaver.github.io/api-capstone/',
      altText: 'My API Capstone project screenshot',
      thumbNail: Images.apiCapstone,
      imgId: '',
      hasServer: false
    },
    {
      id: 5,
      name: 'Quiz App',
      title: 'Javascript/jQuery Quiz App',
      summary: 'This is a small quiz app that I built with jQuery and Javascript for learning in my bootcamp.',
      clientRepo: 'https://github.com/Andacanaver/quiz-app-wireframe',
      serverRepo: '',
      liveSite: 'https://andacanaver.github.io/quiz-app-wireframe/',
      altText: 'Quiz app thumbnail',
      thumbNail: Images.quiz,
      imgId: '',
      hasServer: false
    },
    {
      id: 6,
      name: 'Election Map',
      title: 'Javascript Election Map',
      summary: 'This is an Election Map that I made with Javascript.',
      clientRepo: 'https://github.com/Andacanaver/quiz-app-wireframe',
      serverRepo: '',
      liveSite: 'https://andacanaver.github.io/election-map/',
      altText: 'Election Map',
      thumbNail: Images.electionMap,
      imgId: '',
      hasServer: false
    },
    {
      id: 7,
      name: 'Rogue Pickings',
      title: 'Rogue Pickings',
      summary: 'Website created from a design comp',
      clientRepo: 'https://github.com/Andacanaver/206-rogue-pickings',
      serverRepo: '',
      liveSite: '../html/rogue-pickings/index.html',
      altText: 'Rogue Pickings Screenshot',
      thumbNail: Images.roguePickings,
      imgId: '',
      hasServer: false
    },
    {
      id: 8,
      name: 'Lolcat Clock',
      title: 'Lolcat Clock',
      summary: 'This is one of the first projects I completed while learning Javascript.',
      clientRepo: 'https://github.com/Andacanaver/lolcat-clock',
      serverRepo: '',
      liveSite: 'https://andacanaver.github.io/lolcat-clock/',
      altText: 'Lolcat Clock Thumbnail',
      thumbNail: Images.lolcat,
      imgId: '',
      hasServer: false
    },
    {
      id: 9,
      name: 'Jubilee Austen',
      title: 'Jubilee Austen',
      summary: 'This is one of the first projects that I completed using HTML and CSS.',
      clientRepo: 'https://github.com/Andacanaver/jubilee-austen',
      serverRepo: '',
      liveSite: '../html/jubilee-austen/index.html',
      altText: 'Jubilee Austen Screenshot',
      thumbNail: Images.jubilee,
      imgId: '',
      hasServer: false
    },
    {
      id: 10,
      name: 'Holistee Manifesto',
      title: 'Holistee Manifesto',
      summary: 'This was my take on the Holistee Manifesto.',
      clientRepo: 'https://github.com/Andacanaver/quiz-app-wireframe',
      serverRepo: '',
      liveSite: '../html/holistee-manifesto/Index.html',
      altText: 'Holistee Manifesto Screenshot',
      thumbNail: Images.holestee,
      imgId: '',
      hasServer: false
    },
    {
      id: 11,
      name: 'Magic 8 Ball',
      title: 'Magic 8 Ball',
      summary: 'This is a Magic 8 Ball project that I did while learning Javascript.',
      clientRepo: 'https://github.com/Andacanaver/magic8ball',
      serverRepo: '',
      liveSite: '"https://andacanaver.github.io/magic8ball//',
      altText: 'Magic 8 Ball',
      thumbNail: Images.quiz,
      imgId: '',
      hasServer: false
    }
  ]
}