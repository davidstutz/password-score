function testAdjacency(keyboard, a, b) {
    it(a + ' and ' + b + ' are adjacent', function() {
        expect(keyboard.areAdjacent(a, b)).toBe(true);
    });
}
    
describe('QWERTY keyboard', function () {
    
    var neighboursG = ['h', 'f', 't' ,'y', 'v', 'b', 'F', 'T', 'Y', 'H', 'B', 'V'];
    var score = new Score('admin123');
    
    for (var i = 0; i < neighboursG.length; i++) {
        testAdjacency(score.keyboards.QWERTY, 'g', neighboursG[i]);
    }
    
    var neighbours2 = ['1', '3', 'w', 'q', 'Q', 'W', '!', '#'];
    for (var i = 0; i < neighbours2.length; i++) {
        testAdjacency(score.keyboards.QWERTY, '2', neighbours2[i]);
    }
});

describe('QWERTZ keyboard', function() {
    
    var neighboursG = ['h', 'f', 't' ,'z', 'v', 'b', 'F', 'T', 'Z', 'H', 'B', 'V'];
    var score = new Score('admin123');
    
    for (var i = 0; i < neighboursG.length; i++) {
        testAdjacency(score.keyboards.QWERTZ, 'g', neighboursG[i]);
    }
    
    var neighbours2 = ['1','3', 'w', 'q', 'Q', 'W', '!', '§'];
    for (var i = 0; i < neighbours2.length; i++) {
        testAdjacency(score.keyboards.QWERTZ, '2', neighbours2[i]);
    }
});