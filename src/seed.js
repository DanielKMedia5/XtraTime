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
      title: '2020-21 FA Cup',
      description: 'The 140th edition of the oldest football tournament in the world featuring Chelsea V Leicester City.',
      facts: '15 May 2021 • Wembley Stadium, London • Referee: Michael Oliver • Attendance: 20,000',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2020-21-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019-20 FA Cup',
      description: 'The 139th edition of the oldest football tournament in the world featuring Arsenal V Chelsea.',
      facts: '1 Aug 2020 • Wembley Stadium, London • Referee: Anthony Taylor • Attendance: 0',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2019-20-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2016-17 FA Cup',
      description:
        "The 136th edition of the oldest football tournament in the world featuring Arsenal V Chelsea.",
        facts: '27 May 2017 • Wembley Stadium, London • Referee: Anthony Taylor • Attendance: 89,472',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2016-17-fa-cup-final',
    });
    firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2015-16 FA Cup',
        description:
          "The 135th edition of the oldest football tournament in the world featuring Crystal Palace V Manchester United.",
          facts: '21 May 2016 • Wembley Stadium, London • Referee: Mark Clattenburg • Attendance: 88,619',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2015-16-fa-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2013-14 FA Cup',
        description:
          "The 133rd edition of the oldest football tournament in the world featuring Arsenal V Hull City.",
          facts: '17 May 2014 • Wembley Stadium, London • Referee: Lee Probert • Attendance: 89,345',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2013-14-fa-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2011-12 FA Cup',
        description:
          "The 131st edition of the oldest football tournament in the world featuring Chelsea V Liverpool.",
          facts: '5 May 2012 • Wembley Stadium, London • Referee: Phil Dowd • Attendance: 89,102',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2011-12-fa-cup-final',
      });
  
    // FIFA World Cup Finals
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '1998 FIFA World Cup',
      description:
        'The 16th FIFA World Cup, held once every four years. Featuring Brazil V France.',
        facts: '12 July 1998 • Stade de France, Saint-Denis, France • Referee: Said Belqola (Morocco) • Attendance: 75,000',
      genre: 'world cup finals',
      maturity: '0',
      slug: '1998-fifa-world-cup-final',
    });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1994 FIFA World Cup',
        description:
          'The 15th FIFA World Cup, held once every four years. Featuring Brazil V Italy.',
          facts: '17 July 1994 • Rose Bowl, Pasadena, California • Referee: Sándor Puhl (Hungary) • Attendance: 94,194',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1994-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1986 FIFA World Cup',
        description:
          'The 13th FIFA World Cup, held once every four years. Featuring Argentina V West Germany.',
          facts: '29 June 1986 • Estadio Azteca, Mexico City • Referee: Romualdo Arppi Filho (Brazil) • Attendance: 114,600',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1986-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1982 FIFA World Cup',
        description:
          'The 12th FIFA World Cup, held once every four years. Featuring Italy V West Germany.',
          facts: '11 July 1982 • 	Santiago Bernabéu, Madrid • Referee: 	Arnaldo Cézar Coelho (Brazil) • Attendance: 90,000',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1982-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1974 FIFA World Cup',
        description:
          'The 10th FIFA World Cup, held once every four years. Featuring Netherlands V West Germany.',
          facts: '7 July 1974 • Olympiastadion, Munich • Referee: Jack Taylor (England) • Attendance: 75,200',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1974-fifa-world-cup-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '1966 FIFA World Cup',
        description:
          'The 8th FIFA World Cup, held once every four years. Featuring England V West Germany.',
          facts: '30 July 1966 • Wembley Stadium, London • Referee: Gottfried Dienst (Switzerland) • Attendance: 96,924',  
        genre: 'world cup finals',
        maturity: '0',
        slug: '1966-fifa-world-cup-final',
      });
      

      // EFL Championship play-off Finals
    firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2020 EFL Championship play-off',
        description:
          'The 2020 EFL Championship play-off Final featuring Brentford V Fulham.',
          facts: '4 August 2020 • Wembley Stadium, London • Referee: Martin Atkinson • Attendance: 0',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2020-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2017 EFL Championship play-off',
        description:
          'The 2017 EFL Championship play-off Final featuring Huddersfield Town V Reading.',
          facts: '29 May 2017 • Wembley Stadium, London • Referee: Neil Swarbrick • Attendance: 76,682',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2017-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2016 EFL Championship play-off',
        description:
          'The 2016 EFL Championship play-off Final featuring Hull City V Sheffield Wednesday.',
          facts: '28 May 2016 • Wembley Stadium, London • Referee: Bobby Madley • Attendance: 70,189',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2016-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2014 EFL Championship play-off',
        description:
          'The 2014 EFL Championship play-off Final featuring Derby County V Queens Park Rangers.',
          facts: '24 May 2014 • Wembley Stadium, London • Referee: Lee Mason • Attendance: 87,348',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2014-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2011 EFL Championship play-off',
        description:
          'The 2011 EFL Championship play-off Final featuring Reading V Swansea City.',
          facts: '30 May 2011 • Wembley Stadium, London • Referee: Phil Dowd • Attendance: 86,581',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2011-efl-championship-final',
      });
      firebase.firestore().collection('matches').add({
        id: getUUID(),
        title: '2010 EFL Championship play-off',
        description:
          'The 2010 EFL Championship play-off Final featuring Blackpool V Cardiff City.',
          facts: '22 May 2010 • Wembley Stadium, London • Referee: Andre Marriner • Attendance: 82,244',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2010-efl-championship-final',
      });

      // Women's FA Cup Finals
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2021 Women\'s FA Cup',
      description: 'The 52nd Women\'s FA Cup Final featuring Arsenal Women V Chelsea Women.',
      facts: '5 December 2021 • Wembley Stadium, London • Referee: Helen Conley • Attendance: 40,942',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2021-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2020 Women\'s FA Cup',
      description: 'The 51st Women\'s FA Cup Final featuring Everton Women V Manchester City Women.',
      facts: '1 November 2020 • Wembley Stadium, London • Referee: Rebecca Welch • Attendance: 0',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2020-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019 Women\'s FA Cup',
      description: 'The 50th Women\'s FA Cup Final featuring Manchester City Women V West Ham United Women.',
      facts: '4 May 2019 • Wembley Stadium, London • Referee: Abigail Byrne • Attendance: 43,264',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2019-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2018 Women\'s FA Cup',
      description: 'The 49th Women\'s FA Cup Final featuring Arsenal Women V Chelsea Women.',
      facts: '5 May 2018 • Wembley Stadium, London • Referee: Lindsey Robinson • Attendance: 45,423',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2018-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2017 Women\'s FA Cup',
      description: 'The 48th Women\'s FA Cup Final featuring Birmingham City Women V Manchester City Women.',
      facts: '13 May 2017 • Wembley Stadium, London • Referee: Rebecca Welch • Attendance: 35,271',
      genre: 'womens fa cup finals',
      maturity: '0',
      slug: '2017-womens-fa-cup-final',
    });

    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2016 Women\'s FA Cup',
      description: 'The 47th Women\'s FA Cup Final featuring Arsenal Women V Chelsea Women.',
      facts: '14 May 2016 • Wembley Stadium, London • Referee: Sarah Garratt • Attendance: 32,912',
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
        facts: '7 August 2021 • Wembley Stadium, London • Referee: Paul Tierney • Attendance: 45,602',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2021-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2020 FA Community Shield',
      description:
        'The 98th FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Liverpool.',
        facts: '29 August 2020 • Wembley Stadium, London • Referee: Andre Marriner • Attendance: 0',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2020-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2019 FA Community Shield',
      description:
        'The 97th FA Community Shield featuring FA Cup winners Manchester City V Premier League runners-up Liverpool.',
        facts: '4 August 2019 • Wembley Stadium, London • Referee: Martin Atkinson • Attendance: 77,565',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2019-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2015 FA Community Shield',
      description:
        'The 93rd FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Chelsea.',
        facts: '2 August 2015 • Wembley Stadium, London • Referee: Anthony Taylor • Attendance: 85,437',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2015-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2013 FA Community Shield',
      description:
        'The 91st FA Community Shield featuring FA Cup winners Wigan Athletic V Premier League winners Manchester United.',
        facts: '11 August 2013 • Wembley Stadium, London • Referee: Mark Clattenburg • Attendance: 80,235',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2013-fa-community-shield',
    });
    firebase.firestore().collection('matches').add({
      id: getUUID(),
      title: '2012 FA Community Shield',
      description:
        'The 90th FA Community Shield featuring FA Cup winners Chelsea V Premier League winners Manchester City.',
        facts: '12 August 2012 • Villa Park, Birmingham • Referee: Kevin Friend • Attendance: 36,394',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2012-fa-community-shield',
    });
  
    /* Highlights
      ============================================ */
    // FA Cup Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2018-19 FA Cup',
      description:
        'The 138th edition of the oldest football tournament in the world featuring Manchester City V Watford.',
        facts: '18 May 2019 • Wembley Stadium, London • Referee: Kevin Friend • Attendance: 85,954',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2018-19-fa-cup-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2017-18 FA Cup',
      description:
        'The 137th edition of the oldest football tournament in the world featuring Chelsea V Manchester United.',
        facts: '19 May 2018 • Wembley Stadium, London • Referee: Michael Oliver • Attendance: 87,647',
      genre: 'fa cup finals',
      maturity: '0',
      slug: '2017-18-fa-cup-final',
    });
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2014-15 FA Cup',
        description:
          'The 134th edition of the oldest football tournament in the world featuring Arsenal V Aston Villa.',
          facts: '30 May 2015 • Wembley Stadium, London • Referee: Jon Moss • Attendance: 89,283',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2014-15-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2012-13 FA Cup',
        description:
          'The 132nd edition of the oldest football tournament in the world featuring Manchester City V Wigan Athletic.',
          facts: '11 May 2013 • Wembley Stadium, London • Referee: Andre Marriner • Attendance: 86,254',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2012-13-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2010-11 FA Cup',
        description:
          'The 130th edition of the oldest football tournament in the world featuring Manchester City V Stoke City.',
          facts: '14 May 2011 • Wembley Stadium, London • Referee: Martin Atkinson • Attendance: 88,643',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2010-11-fa-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2009-10 FA Cup',
        description:
          'The 129th edition of the oldest football tournament in the world featuring Chelsea V Portsmouth.',
          facts: '15 May 2010 • Wembley Stadium, London • Referee: Chris Foy • Attendance: 88,335',
        genre: 'fa cup finals',
        maturity: '0',
        slug: '2009-10-fa-cup-final',
      });
  
    // FIFA World Cup Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2014 FIFA World Cup',
      description:
        'The 20th FIFA World Cup, held once every four years. Featuring Germany V Argentina.',
        facts: '13 July 2014 • Maracanã Stadium, Rio de Janeiro • Referee: Nicola Rizzoli (Italy) • Attendance: 74,738',
      genre: 'world cup finals',
      maturity: '0',
      slug: '2014-fifa-world-cup-final',
    });
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2010 FIFA World Cup',
        description:
          'The 19th FIFA World Cup, held once every four years. Featuring Netherlands V Spain.',
          facts: '11 July 2010 • Soccer City, Johannesburg • Referee: Howard Webb (England) • Attendance: 84,490',
        genre: 'world cup finals',
        maturity: '0',
        slug: '2010-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1990 FIFA World Cup',
        description:
          'The 14th FIFA World Cup, held once every four years. Featuring West Germany V Argentina.',
          facts: '8 July 1990 • Stadio Olimpico, Rome • Referee: Edgardo Codesal (Mexico) • Attendance: 73,603',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1990-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1978 FIFA World Cup',
        description:
          'The 11th FIFA World Cup, held once every four years. Featuring Argentina V Netherlands.',
          facts: '25 June 1978 • Estadio Monumental, Buenos Aires • Referee: Sergio Gonella (Italy) • Attendance: 71,483',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1978-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1970 FIFA World Cup',
        description:
          'The 9th FIFA World Cup, held once every four years. Featuring Brazil V Italy.',
          facts: '21 June 1970 • Estadio Azteca, Mexico City • Referee: Rudi Glöckner (East Germany) • Attendance: 107,412',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1970-fifa-world-cup-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '1962 FIFA World Cup',
        description:
          'The 7th FIFA World Cup, held once every four years. Featuring Brazil V Czechoslovakia.',
          facts: '17 June 1962 • Estadio Nacional, Santiago • Referee: Nikolay Latyshev (Soviet Union) • Attendance: 68,679',
        genre: 'world cup finals',
        maturity: '0',
        slug: '1962-fifa-world-cup-final',
      });

    // EFL Championship play-off Finals
    firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2021 EFL Championship play-off',
        description:
          'The 2021 EFL Championship play-off Final featuring Brentford V Swansea City.',
          facts: '29 May 2021 • Wembley Stadium, London • Referee: Chris Kavanagh • Attendance: 11,689',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2021-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2019 EFL Championship play-off',
        description:
          'The 2019 EFL Championship play-off Final featuring Aston Villa V Derby County.',
          facts: '27 May 2019 • Wembley Stadium, London • Referee: Paul Tierney • Attendance: 85,826',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2019-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2018 EFL Championship play-off',
        description:
          'The 2018 EFL Championship play-off Final featuring Aston Villa V Fulham.',
          facts: '26 May 2018 • Wembley Stadium, London • Referee: Anthony Taylor • Attendance: 85,243',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2018-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2015 EFL Championship play-off',
        description:
          'The 2015 EFL Championship play-off Final featuring Middlesbrough V Norwich City.',
          facts: '25 May 2015 • Wembley Stadium, London • Referee: Mike Dean • Attendance: 85,656',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2015-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2013 EFL Championship play-off',
        description:
          'The 2013 EFL Championship play-off Final featuring Crystal Palace V Watford.',
          facts: '27 May 2013 • Wembley Stadium, London • Referee: Martin Atkinson • Attendance: 82,025',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2013-efl-championship-final',
      });
      firebase.firestore().collection('highlights').add({
        id: getUUID(),
        title: '2012 EFL Championship play-off',
        description:
          'The 2012 EFL Championship play-off Final featuring Blackpool V West Ham.',
          facts: '19 May 2012 • Wembley Stadium, London • Referee: Howard Webb • Attendance: 78,523',
        genre: 'efl championship play-off finals',
        maturity: '0',
        slug: '2012-efl-championship-final',
      });

      // UEFA European Championship Finals
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2012 UEFA European Championship',
      description:
        'The 14th UEFA European Championship Final featuring Spain V Italy.',
        facts: '1 July 2012 • Olympic Stadium, Kyiv • Referee: Pedro Proença (Portugal) • Attendance: 63,170',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2012-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2008 UEFA European Championship',
      description:
        'The 13th UEFA European Championship Final featuring Spain V Germany.',
        facts: '29 June 2008 • Ernst-Happel-Stadion, Vienna, Austria • Referee: Roberto Rosetti (Italy) • Attendance: 51,428',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2008-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2004 UEFA European Championship',
      description:
        'The 12th UEFA European Championship Final featuring Greece V Portugal.',
        facts: '4 July 2004 • Estádio da Luz, Lisbon • Referee: Markus Merk (Germany) • Attendance: 62,865',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2004-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2000 UEFA European Championship',
      description:
        'The 11th UEFA European Championship Final featuring France V Italy.',
        facts: '2 July 2000 • De Kuip, Rotterdam • Referee: Anders Frisk (Sweden) • Attendance: 50,000',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '2000-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '1996 UEFA European Championship',
      description:
        'The 10th UEFA European Championship Final featuring Germany V Czech Republic.',
        facts: '30 June 1996 • Wembley Stadium, London • Referee: Pierluigi Pairetto (Italy) • Attendance: 72,611',
      genre: 'uefa european championship finals',
      maturity: '0',
      slug: '1996-uefa-european-championship-final',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '1992 UEFA European Championship',
      description:
        'The 9th UEFA European Championship Final featuring Denmark V Germany.',
        facts: '26 June 1992 • Nya Ullevi, Gothernburg • Referee: Bruno Galler (Switzerland) • Attendance: 37,800',
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
        facts: '5 August 2018 • Wembley Stadium, London • Referee: Jonathan Moss • Attendance: 72,724',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2018-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2017 FA Community Shield',
      description:
        'The 95th FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Chelsea.',
        facts: '6 August 2017 • Wembley Stadium, London • Referee: Bobby Madley • Attendance: 83,325',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2017-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2016 FA Community Shield',
      description:
        'The 94th FA Community Shield featuring FA Cup winners Manchester United V Premier League winners Leicester City.',
        facts: '7 August 2016 • Wembley Stadium, London • Referee: Craig Pawson • Attendance: 85,437',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2016-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2014 FA Community Shield',
      description:
        'The 92nd FA Community Shield featuring FA Cup winners Arsenal V Premier League winners Manchester City.',
        facts: '10 August 2014 • Wembley Stadium, London • Referee: Michael Oliver • Attendance: 71,523',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2014-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2011 FA Community Shield',
      description:
        'The 89th FA Community Shield featuring FA Cup winners Man City V Premier League winners Man United.',
        facts: '7 August 2011 • Wembley Stadium, London • Referee: Phil Dowd • Attendance: 77,169',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2011-fa-community-shield',
    });
    firebase.firestore().collection('highlights').add({
      id: getUUID(),
      title: '2010 FA Community Shield',
      description:
        'The 88th FA Community Shield featuring FA Cup winners Chelsea V Premier League winners Manchester United.',
        facts: '8 August 2010 • Wembley Stadium, London • Referee: Andre Marriner • Attendance: 84,623',
      genre: 'fa community shield',
      maturity: '0',
      slug: '2010-fa-community-shield',
    });

    }