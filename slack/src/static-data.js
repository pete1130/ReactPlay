const channels = [
    { id: 1, name: 'react' },
    { id: 2, name: 'redux', hasUnreads: true },
    { id: 3, name: 'mobx' },
    { id: 4, name: 'react-router' }
];

const people = [
    { id: 1, name: 'Dave' },
    { id: 2, name: 'Sarah' },
    { id: 3, name: 'Zack' },
    { id: 4, name: 'Pam' },
    { id: 5, name: 'Erin' },
    { id: 6, name: 'Joe' }
];

function generateFakeMessages(numOfFakeMessages) {
    return Array.from(Array(numOfFakeMessages))
        .keys()
        .map(i => {
            let userName = randomUser();
            return {
                id: i,
                userName,
                text: `A message from ${userName}`,
                timestamp: new Date()
            };
        });
}

function randomUser() {
    return people.map(person => person.name)[
        Math.floor(Math.random() * 1000) % people.length
    ];
}

function createFakeActivity(channels, numOfMaxMessages) {
    return channels.reduce((result, channel) => {
        let rndNumOfMessages = Math.floor(Math.random() * numOfMaxMessages);
        result[channel.id] = generateFakeMessages(rndNumOfMessages);
        return result;
    }, {});
}

export { generateFakeMessages, randomUser, createFakeActivity };
