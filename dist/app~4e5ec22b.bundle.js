(()=>{"use strict";var n,r={5948:(n,r,A)=>{A.d(r,{Z:()=>a});var e=A(7537),o=A.n(e),i=A(3645),t=A.n(i)()(o());t.push([n.id,"@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n\n    .app-bar .app-bar__brand h1 {\n        font-size: 1.5em;\n    }\n\n    .app-bar .app-bar__menu {\n        display: none;\n    }\n\n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n\n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n\n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 120px;\n        text-align: center;\n        margin: 0;\n    }\n\n    .movies {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n\n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 2em;\n        margin-top: 10px;\n    }\n}\n\n@media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n\n@media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n}","",{version:3,sources:["webpack://./src/styles/responsive.css"],names:[],mappings:"AAAA;IACI;QACI,+BAA+B;QAC/B,iBAAiB;IACrB;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,WAAW;IACf;;IAEA;QACI,qBAAqB;IACzB;;IAEA;QACI,qBAAqB;QACrB,YAAY;QACZ,kBAAkB;QAClB,SAAS;IACb;;IAEA;QACI,8BAA8B;IAClC;;IAEA;QACI,+BAA+B;IACnC;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;;IAEA;QACI,oBAAoB;QACpB,kBAAkB;IACtB;AACJ;;AAEA;IACI;QACI,cAAc;QACd,gBAAgB;IACpB;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ;;AAEA;IACI;QACI,qCAAqC;IACzC;AACJ",sourcesContent:["@media screen and (min-width: 650px) {\n    .app-bar {\n        grid-template-columns: 1fr auto;\n        padding: 8px 32px;\n    }\n\n    .app-bar .app-bar__brand h1 {\n        font-size: 1.5em;\n    }\n\n    .app-bar .app-bar__menu {\n        display: none;\n    }\n\n    .app-bar .app-bar__navigation {\n        position: static;\n        width: 100%;\n    }\n\n    .app-bar .app-bar__navigation ul li {\n        display: inline-block;\n    }\n\n    .app-bar .app-bar__navigation ul li a {\n        display: inline-block;\n        width: 120px;\n        text-align: center;\n        margin: 0;\n    }\n\n    .movies {\n        grid-template-columns: 1fr 1fr;\n    }\n\n    .movie {\n        grid-template-columns: auto 1fr;\n    }\n\n    .movie .movie__title {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n\n    .movie .movie__overview {\n        grid-column-start: 1;\n        grid-column-end: 3;\n    }\n}\n\n@media screen and (min-width: 800px) {\n    .app-bar .app-bar__brand h1 {\n        font-size: 2em;\n        margin-top: 10px;\n    }\n}\n\n@media screen and (min-width: 850px) {\n    .movies {\n        grid-template-columns: repeat(3, 1fr);\n    }\n}\n\n@media screen and (min-width: 1200px) {\n    .movies {\n        grid-template-columns: repeat(4, 1fr);\n    }\n}\n\n@media screen and (min-width: 1600px) {\n    .movies {\n        grid-template-columns: repeat(5, 1fr);\n    }\n}"],sourceRoot:""}]);const a=t},890:(n,r,A)=>{A.d(r,{Z:()=>s});var e=A(7537),o=A.n(e),i=A(3645),t=A.n(i),a=A(1667),p=A.n(a),l=new URL(A(6835),A.b),d=t()(o()),B=p()(l);d.push([n.id,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    background-color: #fff;\r\n    transition: ease 300ms;\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 100px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #9c9c9c;\r\n    border-radius: 100px;\r\n    height: 120px;\r\n}\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    top: 0;\r\n    z-index: 1000;\r\n    position: relative;\r\n    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */\r\n    /* height: 70px; */\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #1a1a1a;\r\n    /* text-transform: uppercase; */\r\n    font-size: 22px;\r\n    font-variant: small-caps;\r\n    font-weight: bold;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    font-weight: 500;\r\n}\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n    font-weight: bolder;\r\n}\r\n.app-bar .app-bar__navigation ul li a.active {\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n    background-position: center;\r\n    object-fit: cover;\r\n    background-size: cover;\r\n    transition: ease-in 300ms;\r\n    border-radius: 12px;\r\n    margin-bottom: 13px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 0px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    width: 100%;\r\n    margin: 0 0 10px 0;\r\n    overflow: hidden;\r\n    font-weight: 500;\r\n    color: #000;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n        width: 100%;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n    display: none;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n\r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter #footerTools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n/*\r\n  Button\r\n*/\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    background-color: #DB0000;\r\n    border: 1px solid #770000;\r\n    border-radius: 4px;\r\n\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n\r\n    cursor: pointer;\r\n    transition: .15s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #DB0000BB;\r\n}\r\n\r\n.btn:active {\r\n    background-color: #DB0000DD;\r\n}\r\n\r\n.btn:focus-visible {\r\n    outline: 3px solid #DB000055;\r\n}\r\n\r\n.movie-bg {\r\n    background-image: url("+B+") !important;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    object-position: center;\r\n    object-fit: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.movie-bg .movie-bg-header {\r\n    padding-top: 160px;\r\n}\r\n\r\n.movie-bg .movie-bg-header h3 {\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}\r\n.movie-bg .movie-bg-header p {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}","",{version:3,sources:["webpack://./src/styles/style.css"],names:[],mappings:"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",sourcesContent:["* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n::-webkit-scrollbar {\r\n    width: 8px;\r\n    background-color: #fff;\r\n    transition: ease 300ms;\r\n\r\n\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    background-color: #e4e4e4;\r\n    border-radius: 100px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: #9c9c9c;\r\n    border-radius: 100px;\r\n    height: 120px;\r\n}\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    scroll-behavior: smooth;\r\n}\r\n\r\n\r\n/*\r\n  AppBar\r\n*/\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    top: 0;\r\n    z-index: 1000;\r\n    position: relative;\r\n    /* box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2); */\r\n    /* height: 70px; */\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #1a1a1a;\r\n    /* text-transform: uppercase; */\r\n    font-size: 22px;\r\n    font-variant: small-caps;\r\n    font-weight: bold;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n    width: 100%;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li {\r\n    list-style: none;\r\n    margin-top: 10px;\r\n}\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n    font-weight: 500;\r\n}\r\n.app-bar .app-bar__navigation ul li a:hover {\r\n    font-weight: bolder;\r\n}\r\n.app-bar .app-bar__navigation ul li a.active {\r\n    font-weight: bolder;\r\n}\r\n\r\n/*\r\n  Main Content\r\n*/\r\n\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n  Movies\r\n*/\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n  Movie Item\r\n*/\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n    background-position: center;\r\n    object-fit: cover;\r\n    background-size: cover;\r\n    transition: ease-in 300ms;\r\n    border-radius: 12px;\r\n    margin-bottom: 13px;\r\n    height: 300px;\r\n}\r\n\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 0px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    width: 100%;\r\n    margin: 0 0 10px 0;\r\n    overflow: hidden;\r\n    font-weight: 500;\r\n    color: #000;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n        width: 100%;\r\n    color: #000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 3;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n    display: none;\r\n}\r\n\r\n\r\n/*\r\n  Movie\r\n*/\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n/*\r\n  Like\r\n*/\r\n.like {\r\n    width: 55px;\r\n    height: 55px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color: #db0000;\r\n\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n\r\n    font-size: 18px;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\n/*\r\n  Footer\r\n*/\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\nfooter #footerTools {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    gap: 8px;\r\n}\r\n\r\n/*\r\n  Button\r\n*/\r\n\r\n.btn {\r\n    display: inline-block;\r\n    padding: 12px 24px;\r\n    background-color: #DB0000;\r\n    border: 1px solid #770000;\r\n    border-radius: 4px;\r\n\r\n    font-weight: 500;\r\n    font-size: 16px;\r\n    color: #ffffff;\r\n\r\n    cursor: pointer;\r\n    transition: .15s ease-in-out;\r\n}\r\n\r\n.btn:hover {\r\n    background-color: #DB0000BB;\r\n}\r\n\r\n.btn:active {\r\n    background-color: #DB0000DD;\r\n}\r\n\r\n.btn:focus-visible {\r\n    outline: 3px solid #DB000055;\r\n}\r\n\r\n.movie-bg {\r\n    background-image: url('../public/images/bg_hero1.jpg') !important;\r\n    background-position: center;\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n    object-position: center;\r\n    object-fit: cover;\r\n    height: 100vh;\r\n}\r\n\r\n.movie-bg .movie-bg-header {\r\n    padding-top: 160px;\r\n}\r\n\r\n.movie-bg .movie-bg-header h3 {\r\n    font-size: 48px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}\r\n.movie-bg .movie-bg-header p {\r\n    font-size: 22px;\r\n    font-weight: 500;\r\n    text-align: center;\r\n    color: #fff;\r\n    text-shadow: 1px 1px #000;\r\n}"],sourceRoot:""}]);const s=d},9362:(n,r,A)=>{var e=A(3379),o=A.n(e),i=A(7795),t=A.n(i),a=A(569),p=A.n(a),l=A(3565),d=A.n(l),B=A(9216),s=A.n(B),c=A(4589),m=A.n(c),C=A(5948),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=p().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=s();o()(C.Z,b),C.Z&&C.Z.locals&&C.Z.locals},4915:(n,r,A)=>{var e=A(3379),o=A.n(e),i=A(7795),t=A.n(i),a=A(569),p=A.n(a),l=A(3565),d=A.n(l),B=A(9216),s=A.n(B),c=A(4589),m=A.n(c),C=A(890),b={};b.styleTagTransform=m(),b.setAttributes=d(),b.insert=p().bind(null,"head"),b.domAPI=t(),b.insertStyleElement=s();o()(C.Z,b),C.Z&&C.Z.locals&&C.Z.locals}},A={};function e(n){var o=A[n];if(void 0!==o)return o.exports;var i=A[n]={id:n,exports:{}};return r[n](i,i.exports,e),i.exports}e.m=r,n=[],e.O=(r,A,o,i)=>{if(!A){var t=1/0;for(d=0;d<n.length;d++){for(var[A,o,i]=n[d],a=!0,p=0;p<A.length;p++)(!1&i||t>=i)&&Object.keys(e.O).every((n=>e.O[n](A[p])))?A.splice(p--,1):(a=!1,i<t&&(t=i));if(a){n.splice(d--,1);var l=o();void 0!==l&&(r=l)}}return r}i=i||0;for(var d=n.length;d>0&&n[d-1][2]>i;d--)n[d]=n[d-1];n[d]=[A,o,i]},e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var A in r)e.o(r,A)&&!e.o(n,A)&&Object.defineProperty(n,A,{enumerable:!0,get:r[A]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var A=r.getElementsByTagName("script");A.length&&(n=A[A.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{e.b=document.baseURI||self.location.href;var n={400:0};e.O.j=r=>0===n[r];var r=(r,A)=>{var o,i,[t,a,p]=A,l=0;if(t.some((r=>0!==n[r]))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(p)var d=p(e)}for(r&&r(A);l<t.length;l++)i=t[l],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(d)},A=self.webpackChunkmovie_catalogue=self.webpackChunkmovie_catalogue||[];A.forEach(r.bind(null,0)),A.push=r.bind(null,A.push.bind(A))})(),e.nc=void 0;var o=e.O(void 0,[179,194,2,17,337,268,378,924],(()=>e(5253)));o=e.O(o)})();
//# sourceMappingURL=app~4e5ec22b.bundle.js.map