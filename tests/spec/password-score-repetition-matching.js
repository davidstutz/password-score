describe('Repetition matching', function() {
    
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"§$%&/()=?}],.#+@';
    
    // Single repetitions.
    for (var i = 0; i < chars.length; i++) {
        for (var j = 0; j < 1; j++) {
            
            var char = chars[Math.floor(Math.random() * chars.length)];
            var length = 2 + Math.round(Math.random() * 10);
            
            var password = '';
            for (var k = 0; k < length; k++) {
                password += char;
            }

            var score = new Score(password);
            var repMatches = score.collectRepetitionMatches();
            
            it('[repetition] password "' + password + '" has repetition matches', function() {
                expect(repMatches.length).not.toBe(0);
            });
            
            var pattern = repMatches[0].pattern;
            it('[repetition] password "' + password + '" matches pattern "' + pattern + '"', function() {
                expect(password).toContain(pattern);
            });
        }
    }
    
});
