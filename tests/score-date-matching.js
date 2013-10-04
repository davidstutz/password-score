describe('Date matching', function() {
    
    var formats = [
        'MM/dd/yy', //middle endian
        'MM/dd/yyyy',
        'MM-dd-yy',
        'MM-dd-yyyy',
        'dd.MM.yy', //little endian
        'dd.MM.yyyy',
        'dd-MM-yy',
        'dd-MM-yyyy',
        'yyyy-MM-dd', // big endian
        'yy-MM-dd',
        'ddMMyyyy',
        'ddMyyyy',
        'dMMyyyy',
        'dMyyyy',
        'ddMMyy',
        'ddMyy',
        'dMMyy',
        'dMyy',
    ];
    
    for (var i = 0; i < 26; i++) {
        var year = Math.floor(Math.random()*114) + 1900;
        var month = 1 + Math.floor(Math.random()*11);
        var day = 1 + Math.floor(Math.random()*30);
        
        if ([1,3,5,7,8,10,12].indexOf(month) < 0 && day > 28) {
            day = 28;
        }
        
        var date = new XDate(year, month, day);
        for (var k = 0; k < formats.length; k++) {
            var password = date.toString(formats[k]);
            
            var score  = new Score(password);
            var dateMatches = score.collectDateMatches(formats);
            
            it('[date] "' + password + '" has one date match', function() {
                expect(dateMatches.length).not.toBe(0);
            });
        }
    }
});
