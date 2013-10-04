describe('Repitition matching', function() {
    
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"§$%&/()=?}],.#+@';
    
    // Single repititions.
    for (var i = 0; i < chars.length; i++) {
        for (var j = 0; j < 1; j++) {
            
            var char = chars[Math.floor(Math.random() * chars.length)];
            var length = 2 + Math.round(Math.random() * 10);
            
            var password = '';
            for (var k = 0; k < length; k++) {
                password += char;
            }

            var score = new Score(password);
            var repMatches = score.collectRepititionMatches();
            
            it('[repitition] password "' + password + '" has repitition matches', function() {
                expect(repMatches.length).not.toBe(0);
            });
            console.log(repMatches);
            var pattern = repMatches[0].pattern;
            it('[repitition] password "' + password + '" matches pattern "' + pattern + '"', function() {
                expect(password).toContain(pattern);
            });
        }
    }
    
});
