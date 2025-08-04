const firebaseDB = 'https://owndoku-default-rtdb.europe-west1.firebasedatabase.app/'

const quicklinkDB = [
    {
    name: "To-Do's",
    category: "todo",
    link:"html/todo.html",
    Source: "external"
  },
  {
    name: "W3 Media queries",
    category: "Responsive",
    link: "https://www.w3schools.com/css/css_rwd_mediaqueries.asp",
    frameAncestors: true,
    Source: "W3School",
  },
  {
    name: "Local Storage",
    category: "Local Storage",
    link: "html/localstorage.html",
    Source: "DIY"
  },
  {
    name: "Frame-Ancestors",
    category: "Security",
    link: "https://really-simple-ssl.com/definition/what-are-frame-ancestors/#:~:text=The%20frame%2Dancestors%20directive%20provides,in%20an%20iFrame%20at%20all.",
    Source: "external"
  },

  {
    name: "Arrow Function",
    category: "Javascript" ,
    link:"https://www.youtube.com/watch?v=h33Srr5J9nY",
    Source: "Youtube",
  },
  {
    name: "Array Methoden",
    category: "Javascript" ,
    link:"https://www.youtube.com/watch?v=R8rmfD9Y5-c&t=20s",
    Source: "Youtube",
  },

  {
    name: "Bootstrap",
    category: "Framework" ,
    link:"https://getbootstrap.com/docs/5.3/getting-started/introduction/",
    Source: "Bootstrap",
  },

  {
    name: "JSON",
    category: "Javascript" ,
    link:"https://www.w3schools.com/js/js_json_syntax.asp",
  },

  {
    name: "linear-gradient",
    category: "CSS",
    link:"https://www.w3schools.com/css/css3_gradients.asp",
    Source: "W3School"
  },

    {
    name: "Mail Regex",
    category: "JS",
    link:"https://emailregex.com/",
    Source: "external"
  }
];

const categoryDB = [
  {
    "category": "HTML",
    "link": "/assets/html/html.html"
  },
    {
    "category": "CSS",
    "link": "/assets/html/css.html"
  },
    {
    "category": "Javascript",
    "link": "/assets/html/js.html"
  },
      {
    "category": "Github",
    "link": "/assets/html/github.html"
  },
    {
    "category": "SQL",
    "link": "/assets/html/sql.html"
  },
    {
    "category": "Tech",
    "link": "/assets/html/tech.html"
  }
]

let todoList = []