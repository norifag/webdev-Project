const buttons = [
    'slide1',
    'slide2',
    'slide3',
    'slide4',
    'slide5',
];

buttons.forEach((b) => {
    document.getElementById(b).addEventListener('click', (e) => {
        console.log(e)
    })
})
