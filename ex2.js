var urls = [
    'https://dog.ceo/api/breed/beagle/images/random',
    'https://dog.ceo/api/breed/chow/images/random',
    'https://dog.ceo/api/breed/akita/images/random',
    'https://dog.ceo/api/breed/dingo/images/random',
    'https://dog.ceo/api/breed/eskimo/images/random'
];


console.log('starting promise chain');

$.get(urls[0])
    .then((data) => {
        console.log('chain 1:', data);
        return $.get(urls[1]);
    })

console.log('fina')