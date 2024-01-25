// Rectangles

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }
    return line;
}

function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++) {
        if (i < size - 1) {
            square += makeLine(size) + '\n';      
        } else {
            square += makeLine(size);
        }
    }
    return square;
}

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
        if (i < height - 1) {
            rectangle += makeLine(width) + '\n';      
        } else {
            rectangle += makeLine(width);
        }
    }
    return rectangle;
}

// Triangles

function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
        if (i < height - 1) {
            stairs += makeLine(i+1) + '\n';
        } else {
            stairs += makeLine(i+1);
        }
    }
    return stairs;
}

function makeSpaceLine(numSpaces, numChars) {
    let line = '';
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    for (let i = 0; i < numChars; i++) {
        line += '#';
    }
    for (let i = 0; i < numSpaces; i++) {
        line += ' ';
    }
    return line;
}

function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
        triangle += (makeSpaceLine(height - i - 1, i*2 + 1) + '\n')
    }
    return triangle.slice(0, -1);
}

// Diamonds!

function reverse(str) {
    let reversed = '';
    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }
    return reversed;
}

function makeDiamond(height) {
    let diamond = '';
    diamond += makeIsoscelesTriangle(height) + '\n' + reverse(makeIsoscelesTriangle(height));
    return diamond;
}