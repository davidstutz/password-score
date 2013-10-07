describe('Dictionary/Password matching', function () {
    
    // Some common words.
    var dictionary = {
        'genug': 1,
        'sonst': 2,
        'ganze': 3,
        // 'scheiße': 4,
        'halt': 5,
        'sollten': 6,
        'zusammen': 7,
        'gegen': 8,
        'jahre': 9,
        'erst': 10,
        // 'denke': 11,
        // 'steht': 12,
        // 'habt': 13,
        // 'verdammt': 14,
        // 'moment': 15,
        // 'ihren': 16,
        // 'glauben': 17,
        // 'bringen': 18,
        // 'niemand': 19
    };
    
    var genug = [
        '63?u6',
        '63nu6',
        '6enu6',
        '6enug',
        'g3?u6',
        'ge?ug',
        'genu6',
        '6enug',
        'genug'
    ];
    
    var leet = [
        'leet',
        'l33t',
        'l3et',
        '1337',
        'l337',
        '|eet',
        '|3et',
        '|337'
    ];
    
    var password = [
        'password',
        'p4ssword',
        'passw0rd',
        'p4ssw0rd',
        'pa$$word',
        'p4$$w0rd',
        'passw9rd',
        'p4$$w9rd',
        'passwo2d',
        'p4$$w92d',
        'p4$$w02d'
    ];
    
    var dictionary = {
        'genug': 8,
        'leet': 16,
        'password': 32
    };
    
    var chars = '1234567890@([<&!|?$+%';
    
    var charScore = new Score('');
    for (var char in charScore.leet) {
        var singleScore = new Score(char);
        var singleSubs = singleScore.collectLeetSpeakSubstitutions();
        
        it ('[leet] "' + char + '" has ' + singleScore.leet[char].length + ' substitutions', function() {
            expect(singleSubs.length).toBe(singleScore.leet[char].length);
        });
    }
    
    for (var firstChar in charScore.leet) {
        for (var secondChar in charScore.leet) {
            var string = firstChar + secondChar;
            var doubleScore = new Score(string);
            var doubleSubs = doubleScore.collectLeetSpeakSubstitutions();
            
            it ('[leet] "' + string + '" has ' + (doubleScore.leet[firstChar].length*doubleScore.leet[secondChar].length) + ' substitution', function() {
                expect(doubleSubs.length).toBe(doubleScore.leet[firstChar].length*doubleScore.leet[secondChar].length);
            })
        }
    }
    
    for (var i = 0; i < genug.length; i++) {
        var genugScore = new Score(genug[i]);
        var genugSubs = genugScore.collectLeetSpeakSubstitutions();
        
        it('[leet] "' + genug[i] + '" has correct leet speak substitution', function() {
            expect(genugSubs).toContain('genug');
        });
        
        var genugMatches = genugScore.collectLeetSpeakMatches(dictionary);
        
        it('[leet] "' + genug[i] + '" has leet speak matches.', function() {
            expect(genugMatches.length).not.toBe(0);
        });
    }
    
    for (var i = 0; i < leet.length; i++) {
        var leetScore = new Score(leet[i]);
        var leetSubs = leetScore.collectLeetSpeakSubstitutions();
        
        it('[leet] "' + leet[i] + '" has correct leet speak substitution', function() {
            expect(leetSubs).toContain('leet');
        });
        
        var leetMatches = leetScore.collectLeetSpeakMatches(dictionary);
        
        it('[leet] "' + leet[i] + '" has leet speak matches.', function() {
            expect(leetMatches.length).not.toBe(0);
        });
    }
    
    for (var i = 0; i < password.length; i++) {
        var passwordScore = new Score(password[i]);
        var passwordSubs = passwordScore.collectLeetSpeakSubstitutions();
        
        it('[leet] "' + password[i] + '" has correct leet speak substitution', function() {
            expect(passwordSubs).toContain('password');
        });
        
        var passwordMatches = passwordScore.collectLeetSpeakMatches(dictionary);
        
        it('[leet] "' + password[i] + '" has leet speak matches.', function() {
            expect(passwordMatches.length).not.toBe(0);
        });
    }
});
