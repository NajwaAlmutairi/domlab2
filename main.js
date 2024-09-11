
function changeWidthHeight() {
    let boxDiv = document.getElementById('box');
    let randomWidth = Math.floor(Math.random() * (500 - 100 + 1)) + 100;
    let randomHeight = Math.floor(Math.random() * (500 - 100 + 1)) + 100;

    boxDiv.style.width = randomWidth + 'px';
    boxDiv.style.height = randomHeight + 'px';

    const colorsList = [
        'aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy',
        'olive', 'purple', 'red', 'silver', 'teal', 'white', 'yellow',
        'aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque',
        'blanchedalmond', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse',
        'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan',
        'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey',
        'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid',
        'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray',
        'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue',
        'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen'
    ];
    let randomIndex = Math.floor(Math.random() * 63);
    let selectedColor = colorsList[randomIndex]
    boxDiv.style.backgroundColor = selectedColor;
    
    let randomX = Math.floor(Math.random() * (900 - 50 + 1)) + 50;
    let randomY = Math.floor(Math.random() * (900 - 50 + 1)) + 50;

    boxDiv.style.transform = `translate(${randomX}px, ${randomY}px)`;

}

setInterval(changeWidthHeight, 2000);