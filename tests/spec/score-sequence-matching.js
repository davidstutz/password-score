describe('Sequence matching', function() {
    
    // Test sequences.
    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            
            var start = Math.round(Math.random()*24);
            var length = 3 + Math.round(Math.random() * (24 - start));
            
            var seqScore = new Score('');
            for (var key in seqScore.sequences) {
                if (start + length <= seqScore.sequences[key].length) {
                
                    var password = seqScore.sequences[key].substring(start, start + length);

                    var score = new Score(password);
                    var seqMatches = score.collectSequenceMatches();

                    it('[sequence] password "' + password + '" has sequence matches', function() {
                        expect(seqMatches.length).toBe(1);
                    });
                    
                    var pattern = seqMatches[0].pattern;
                    it('[sequence] password "' + password + '" matches pattern "' + pattern + '"', function() {
                        expect(password).toContain(pattern);
                    });
                }
            }
        }
    }
    
});
