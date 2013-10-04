describe('Keyboard matching', function() {
    
    var keyboard = QWERTY.keyboard;
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    
    for (var k = 0; k < 26; k++) {
        
        var password = '' + chars[Math.floor(Math.random()*(chars.length - 1))];
        var length = 2 + Math.floor(Math.random()*34);
        for (var l = 0; l < length; l++) {

            var next;

            do {
                next = keyboard[password[password.length - 1]][Math.floor(Math.random()*(keyboard[password[password.length - 1]].length - 1))];
            } while (next === null || next === undefined || ! QWERTY.areAdjacent(password[password.length - 1], next));
            
            password += next[0];
        }
        
        var score = new Score(password);
        var keyMatches = score.collectKeyboardMatches(QWERTY);
        
        it ('[keyboard] "' + password + '" has one keyboard match', function() {
            expect(Math.round(keyMatches.length)).toBe(1);
        });
    }
    
    // Keyboard matches with "noise".
    for (var k = 0; k < 26; k++) {
        
        var password = '' + chars[Math.floor(Math.random()*(chars.length - 1))];
        var length = 2 + Math.floor(Math.random()*34);
        for (var l = 0; l < length; l++) {
            
            var noise = Math.floor(Math.random()*length);
            
            if (noise == 0) {
                password += '^^^^^^^^';
            }
            
            var next;

            do {
                next = keyboard[password[password.length - 1]][Math.floor(Math.random()*(keyboard[password[password.length - 1]].length - 1))];
            } while (next === null || next === undefined || ! QWERTY.areAdjacent(password[password.length - 1], next));
            
            password += next[0];
        }
        
        var score = new Score(password);
        var keyMatches = score.collectKeyboardMatches(QWERTY);
        
        it ('[keyboard] "' + password + '" has keyboard matches', function() {
            expect(keyMatches.length).not.toBe(0);
        });
    }
});
