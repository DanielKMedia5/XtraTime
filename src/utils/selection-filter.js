export default function selectionFilter({ matches, highlights }) {
    return {
        matches: [
            {
                title: 'FA Cup Finals',
                data: matches.filter((item) => item.genre === 'fa cup finals'),
            },
            {
                title: 'FIFA World Cup Finals',
                data: matches.filter((item) => item.genre === 'world cup finals'),
            },
            {
                title: 'EFL Championship play-off Finals',
                data: matches.filter((item) => item.genre === 'efl championship play-off finals'),
            },
            {
                title: 'Women\'s FA Cup Finals',
                data: matches.filter((item) => item.genre === 'womens fa cup finals'),
            },
            {
                title: 'FA Community Shield',
                data: matches.filter((item) => item.genre === 'fa community shield'),
            },
        ],
        highlights: [
            {
                title: 'FA Cup Finals', 
                data: highlights.filter((item) => item.genre === 'fa cup finals'),
            },
            {
                title: 'FIFA World Cup Finals',
                data: highlights.filter((item) => item.genre === 'world cup finals'),
            },
            {
                title: 'EFL Championship play-off Finals',
                data: highlights.filter((item) => item.genre === 'efl championship play-off finals'),
            },
            {
                title: 'UEFA European Championship Finals',
                data: highlights.filter((item) => item.genre === 'uefa european championship finals'),
            },
            {
                title: 'FA Community Shield',
                data: highlights.filter((item) => item.genre === 'fa community shield'),
            },
        ],
        facup: [
            {
                title: 'FA Cup Final Matches', 
                data: matches.filter((item) => item.genre === 'fa cup finals'),
            },
            {
                title: 'FA Cup Final Highlights', 
                data: highlights.filter((item) => item.genre === 'fa cup finals'),
            }
        ],
        worldcup: [
            {
                title: 'World Cup Final Matches', 
                data: matches.filter((item) => item.genre === 'world cup finals'),
            },
            {
                title: 'World Cup Final Highlights', 
                data: highlights.filter((item) => item.genre === 'world cup finals'),
            }
        ],
        communityshield: [
            {
                title: 'FA Community Shield Matches', 
                data: matches.filter((item) => item.genre === 'fa community shield'),
            },
            {
                title: 'FA Community Shield Highlights', 
                data: highlights.filter((item) => item.genre === 'fa community shield'),
            }
        ],
    };
}