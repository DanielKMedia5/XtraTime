export function seedDatabase(firebase) {
    function getUUID() {
      // eslint gets funny about bitwise
      /* eslint-disable */
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
          const piece = (Math.random() * 16) | 0;
          const elem = c === 'x' ? piece : (piece & 0x3) | 0x8;
          return elem.toString(16);
      });
      /* eslint-enable */
    }
  
    /* Matches
      ============================================ */
    // FA Cup Finals
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2020-21 FA Cup Final',
      description: 'The 140th edition of the oldest football tournament in the world featuring Chelsea V Leicester City.',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2020-21-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019-20 FA Cup Final',
      description: 'The 139th edition of the oldest football tournament in the world featuring Arsenal V Chelsea.',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2019-20-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2016-17 FA Cup Final',
      description:
        "The 136th edition of the oldest football tournament in the world featuring Arsenal V Chelsea.",
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2016-17-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2015-16 FA Cup Final',
        description:
          "The 135th edition of the oldest football tournament in the world featuring Crystal Palace V Manchester United.",
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2015-16-fa-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2013-14 FA Cup Final',
        description:
          "The 133rd edition of the oldest football tournament in the world featuring Arsenal V Hull City.",
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2013-14-fa-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2011-12 FA Cup Final',
        description:
          "The 131st edition of the oldest football tournament in the world featuring Chelsea V Liverpool.",
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2011-12-fa-cup-final',
      });
  
    // FIFA World Cup Finals
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '1998 FIFA World Cup Final',
      description:
        'The 16th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Brazil V France.',
      genre: 'world cup finals',
      maturity: '0',
      slug: '1998-fifa-world-cup-final',
    });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1994 FIFA World Cup Final',
        description:
          'The 15th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Brazil V Italy.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1994-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1986 FIFA World Cup Final',
        description:
          'The 13th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Argentina V West Germany.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1986-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1982 FIFA World Cup Final',
        description:
          'The 12th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Italy V West Germany.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1982-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1974 FIFA World Cup Final',
        description:
          'The 10th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Netherlands V West Germany.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1974-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1966 FIFA World Cup Final',
        description:
          'The 8th FIFA World Cup, a worldwide football tournament held once every four years. Featuring England V West Germany.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1966-fifa-world-cup-final',
      });
      

      // EFL Championship play-off Finals
    firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2020 EFL Championship play-off Final',
        description:
          'The 2020 EFL Championship play-off Final featuring Brentford V Fulham.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2020-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2017 EFL Championship play-off Final',
        description:
          'The 2017 EFL Championship play-off Final featuring Huddersfield Town V Reading.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2017-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2016 EFL Championship play-off Final',
        description:
          'The 2016 EFL Championship play-off Final featuring Hull City V Sheffield Wednesday.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2016-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2014 EFL Championship play-off Final',
        description:
          'The 2014 EFL Championship play-off Final featuring Derby County V Queens Park Rangers.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2014-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2011 EFL Championship play-off Final',
        description:
          'The 2011 EFL Championship play-off Final featuring Reading V Swansea City.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2011-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2010 EFL Championship play-off Final',
        description:
          'The 2010 EFL Championship play-off Final featuring Blackpool V Cardiff City.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2010-efl-championship-final',
      });

      // Women's FA Cup Finals
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2021 Womens FA Cup Final',
      description: 'The 52nd Womens FA Cup Final featuring Arsenal V Chelsea.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2021-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2020 Womens FA Cup Final',
      description: 'The 51st Womens FA Cup Final featuring Everton V Manchester City.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2020-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019 Womens FA Cup Final',
      description: 'The 50th Womens FA Cup Final featuring Manchester City V West Ham United.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2019-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2018 Womens FA Cup Final',
      description: 'The 49th Womens FA Cup Final featuring Arsenal V Chelsea.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2018-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2017 Womens FA Cup Final',
      description: 'The 48th Womens FA Cup Final featuring Birmingham City V Manchester City.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2017-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2016 Womens FA Cup Final',
      description: 'The 47th Womens FA Cup Final featuring Arsenal V Chelsea.',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2016-womens-fa-cup-final',
    });

    // FA Community Shield
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2021 FA Community Shield',
      description:
        'The 99th FA Community Shield featuring FA Cup winners Leicester City V Premier League winners Manchester City.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2021-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2020 FA Community Shield',
      description:
        'The 98th FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Liverpool.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2020-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019 FA Community Shield',
      description:
        'The 97th FA Community Shield featuring domestic treble winners Manchester City V Premier League runners-up Liverpool.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2019-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2015 FA Community Shield',
      description:
        'The 93rd FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Chelsea.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2015-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2013 FA Community Shield',
      description:
        'The 91st FA Community Shield featuring FA Cup winners Wigan Athletic V Premier League winners Manchester United.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2013-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2012 FA Community Shield',
      description:
        'The 90th FA Community Shield featuring FA Cup winners Chelsea V Premier League winners Manchester City.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2012-fa-community-shield',
    });
  
    /* Highlights
      ============================================ */
    // FA Cup Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2018-19 FA Cup Final',
      description:
        'Highlights from the 138th edition of the oldest football tournament in the world featuring Manchester City V Watford.',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2018-19-fa-cup-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2017-18 FA Cup Final',
      description:
        'Highlights from the 137th edition of the oldest football tournament in the world featuring Chelsea V Manchester United.',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2017-18-fa-cup-final',
    });
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2014-15 FA Cup Final',
        description:
          'Highlights from the 134th edition of the oldest football tournament in the world featuring Arsenal V Aston Villa.',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2014-15-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2012-13 FA Cup Final',
        description:
          'Highlights from the 132nd edition of the oldest football tournament in the world featuring Manchester City V Wigan Athletic.',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2012-13-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2010-11 FA Cup Final',
        description:
          'Highlights from the 130th edition of the oldest football tournament in the world featuring Manchester City V Stoke City.',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2010-11-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2009-10 FA Cup Final',
        description:
          'Highlights from the 129th edition of the oldest football tournament in the world featuring Chelsea V Portsmouth.',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2009-10-fa-cup-final',
      });
  
    // FIFA World Cup Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2014 FIFA World Cup Final',
      description:
        'The 20th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Germany V Argentina.',
      genre: 'world cup finals',
      maturity: '0',
      slug: '2014-fifa-world-cup-final',
    });
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2010 FIFA World Cup Final',
        description:
          'The 19th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Netherlands V Spain.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '2010-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1990 FIFA World Cup Final',
        description:
          'The 14th FIFA World Cup, a worldwide football tournament held once every four years. Featuring West Germany V Argentina.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1990-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1978 FIFA World Cup Final',
        description:
          'The 11th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Argentina V Netherlands.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1978-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1970 FIFA World Cup Final',
        description:
          'The 9th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Brazil V Italy.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1970-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1962 FIFA World Cup Final',
        description:
          'The 7th FIFA World Cup, a worldwide football tournament held once every four years. Featuring Brazil V Czechoslovakia.',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1962-fifa-world-cup-final',
      });

    // EFL Championship play-off Finals
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2021 EFL Championship play-off Final',
        description:
          'The 2021 EFL Championship play-off Final featuring Brentford V Swansea City.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2021-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2019 EFL Championship play-off Final',
        description:
          'The 2019 EFL Championship play-off Final featuring Aston Villa V Derby County.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2019-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2018 EFL Championship play-off Final',
        description:
          'The 2018 EFL Championship play-off Final featuring Aston Villa V Fulham.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2018-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2015 EFL Championship play-off Final',
        description:
          'The 2015 EFL Championship play-off Final featuring Middlesbrough V Norwich City.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2015-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2013 EFL Championship play-off Final',
        description:
          'The 2013 EFL Championship play-off Final featuring Crystal Palace V Watford.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2013-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2012 EFL Championship play-off Final',
        description:
          'The 2012 EFL Championship play-off Final featuring Blackpool V West Ham.',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2012-efl-championship-final',
      });

      // UEFA European Championship Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2012 UEFA European Championship Final',
      description:
        'The 14th UEFA European Championship Final featuring Spain V Italy.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2012-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2008 UEFA European Championship Final',
      description:
        'The 13th UEFA European Championship Final featuring Spain V Germany.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2008-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2004 UEFA European Championship Final',
      description:
        'The 12th UEFA European Championship Final featuring Greece V Portugal.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2004-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2000 UEFA European Championship Final',
      description:
        'The 11th UEFA European Championship Final featuring France V Italy.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2000-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '1996 UEFA European Championship Final',
      description:
        'The 10th UEFA European Championship Final featuring Germany V Czech Republic.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '1996-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '1992 UEFA European Championship Final',
      description:
        'The 9th UEFA European Championship Final featuring Denmark V Germany.',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '1992-uefa-european-championship-final',
    });
   
    // FA Community Shield
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2018 FA Community Shield',
      description:
        'The 96th FA Community Shield featuring FA Cup winners Chelsea V Premier League winners Manchester City.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2018-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2017 FA Community Shield',
      description:
        'The 95th FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Chelsea.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2017-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2016 FA Community Shield',
      description:
        'The 94th FA Community Shield featuring FA Cup winners Manchester United V Premier League winners Leicester City.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2016-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2014 FA Community Shield',
      description:
        'The 92nd FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Manchester City.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2014-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2011 FA Community Shield',
      description:
        'The 89th FA Community Shield featuring FA Cup winners Manchester City V Premier League winners Manchester United.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2011-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2010 FA Community Shield',
      description:
        'The 88th FA Community Shield featuring FA Cup winners Chelsea V Premier League winners Manchester United.',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2010-fa-community-shield',
    });

    }