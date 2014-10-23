describe('Dictionary/Password matching', function () {
    
    // Some common passwords.
    var passwords = {
        'password': 1,
        '123456': 2,
        '12345678': 3,
        '1234': 4,
        'qwerty': 5,
        '12345': 6,
        'dragon': 7,
        'pussy': 8,
        'baseball': 9,
        'football': 10,
       // 'letmein': 11,
        // 'monkey': 12,
        // '696969': 13,
        // 'abc123': 14,
        // 'mustang': 15,
        // 'michael': 16,
        // 'shadow': 17,
        // 'master': 18,
        // 'jennifer': 19
    };
    
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
    
    var chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!"§$%&/()=?}],.#+@';
    
    function testMatch(password, pattern, type) {
        it('[' + type + '] password "' + password + '" matches pattern "' + pattern + '"', function() {
            expect(password).toContain(pattern);
        });
    }
    
    // Simple matching.
    for (var d in dictionary) {
        var password = d;
        var score = new Score(password);
        var dictMatches = score.collectDictionaryMatches(dictionary);
        
        it('[dictionary] password "' + password + '" has one dictionary match', function() {
            expect(dictMatches.length).not.toBe(0);
        });
    }
    
    // Test combinations of common passwords and words to get the correct matches.
    for (var p in passwords) {
        for (var d in dictionary) {
            var password = '';
            
            var before = Math.floor(Math.random()*6);
            for (var k = 0; k < before; k++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            var order = Math.round(Math.random());
            if (order) {
                password += d;
            }
            else {
                password += p;
            }
            
            var middle = Math.floor(Math.random()*10);
            for (var k = 0; k < middle; k++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            if (order) {
                password += p;
            }
            else {
                password += d;
            }
            
            var after = Math.floor(Math.random()*5);
            for (var k = 0; k < after; k++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            
            var score = new Score(password);
            var dictMatches = score.collectDictionaryMatches(dictionary);
            var passMatches = score.collectDictionaryMatches(passwords);
            
            it('[dictionary] password "' + password + '" has one dictionary match', function() {
                expect(dictMatches.length).not.toBe(0);
            });
            
            it('[password] password "' + password + '" has one password match', function() {
                expect(passMatches.length).not.toBe(0);
            });
            
            for (var k = 0; k < dictMatches.length; k++) {
                testMatch(password, dictMatches[k].pattern, 'dictionary');
            }
            
            for (var k = 0; k < passMatches.length; k++) {
                testMatch(password, passMatches[k].pattern, 'password');
            }
        }
    }
    
    // Test reversed dictionary.
    for (var d in dictionary) {
        var password = '';
            
        var before = Math.floor(Math.random()*6);
        for (var k = 0; k < before; k++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        password += d.split('').reverse().join('');

        var after = Math.floor(Math.random()*5);
        for (var k = 0; k < after; k++) {
            password += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        
        var score = new Score(password);
        var revMatches = score.collectDictionaryMatches(dictionary);
        
        it('[reversed] password "' + password + '" has one dictionary match', function() {
            expect(revMatches.length).not.toBe(0);
        });
        
        for (var k = 0; k < revMatches.length; k++) {
            testMatch(password, revMatches[k].pattern, 'reversed');
        }
    }
});
