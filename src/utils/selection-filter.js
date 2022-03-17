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
                title: 'Womens FA Cup Finals',
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
        ]
    };
}