/**
 * Copyright 2012, 2013 David Stutz
 * Project & Licensing: https://github.com/davidstutz/password-score
 */

/**
 * Represents a keyboard for checking adjacency on.
 * 
 * @param {object} object
 * @param {number} average
 */
function Keyboard(object, average) {
    this.keyboard = object;
    this.averageNeighbours = average;

    this.areAdjacent = function(a, b) {
        if (a in this.keyboard) {
            for (var i = 0; i < this.keyboard[a].length; i++) {
                if (this.keyboard[a][i] !== null && this.keyboard[a][i].indexOf(b) >= 0) {
                    return true;
                }
            }
        }
        
        return false;
    };
};

//  0 1
// 2 x 3
//  4 5

QWERTZ = new Keyboard({ // 480/105 = 4.571428571
    '^': [null, null, null, '^°', '1!', null, null], // 1
    '°': [null, null, null, '^°', '1!', null, null], // 1
    '1': [null, null, '^°', '1!', '2"', null, 'qQ@'], // 3
    '!': [null, null, '^°', '1!', '2"', null, 'qQ@'], // 3
    '2': [null, null, '1!', '2"', '3§', 'qQ@', 'wW'], // 4
    '"': [null, null, '1!', '2"', '3§', 'qQ@', 'wW'], //4
    '3': [null, null, '2"', '3§', '4$', 'wW', 'eE€'], //4
    '§': [null, null, '2"', '3§', '4$', 'wW', 'eE€'], //4
    '4': [null, null, '3§', '4$', '5%', 'eE€', 'rR'], //4
    '$': [null, null, '3§', '4$', '5%', 'eE€', 'rR'], //4
    '5': [null, null, '4$', '5%', '6&', 'rR', 'tT'], //4
    '%': [null, null, '4$', '5%', '6&', 'rR', 'tT'], //4
    '6': [null, null, '5%', '6&', '7/{', 'tT', 'yY'], //4
    '&': [null, null, '5%', '6&', '7/{', 'tT', 'yY'], //4
    '7': [null, null, '6&', '7/{', '8([', 'yY', 'uU'], //4
    '/': [null, null, '6&', '7/{', '8([', 'yY', 'uU'], //4
    '{': [null, null, '6&', '7/{', '8([', 'yY', 'uU'], //4
    '8': [null, null, '7/{', '8([', '9)]', 'uU', 'iI'], // 4
    '(': [null, null, '7/{', '8([', '9)]', 'uU', 'iI'], // 4
    '[': [null, null, '7/{', '8([', '9)]', 'uU', 'iI'], // 4
    '9': [null, null, '8([', '9)]', '0=}', 'iI', 'oO'], // 4
    ')': [null, null, '8([', '9)]', '0=}', 'iI', 'oO'], // 4
    ']': [null, null, '8([', '9)]', '0=}', 'iI', 'oO'], // 4
    '0': [null, null, '9)]', '0=}', 'ß?\\', 'oO', 'pP'], // 4
    '=': [null, null, '9)]', '0=}', 'ß?\\', 'oO', 'pP'], // 4
    '}': [null, null, '9)]', '0=}', 'ß?\\', 'oO', 'pP'], // 4
    'ß': [null, null, '0=}', 'ß?\\', '´`', 'pP', 'üÜ'], // 4
    '?': [null, null, '0=}', 'ß?\\', '´`', 'pP', 'üÜ'], // 4
    '\\': [null, null, '0=}', 'ß?\\', '´`', 'pP', 'üÜ'], // 4
    '`': [null, null, 'ß?\\', '´`', null, 'üÜ', '+*~'], // 3
    '´': [null, null, 'ß?\\', '´`', null, 'üÜ', '+*~'], // 3
    'q': ['1!', '2"', null, 'qQ@', 'wW', null, 'aA'], // 4
    'Q': ['1!', '2"', null, 'qQ@', 'wW', null, 'aA'], // 4
    '@': ['1!', '2"', null, 'qQ@', 'wW', null, 'aA'], // 4
    'w': ['2"', '3§', 'qQ@', 'wW', 'eE€', 'aA', 'sS'], // 6
    'W': ['2"', '3§', 'qQ@', 'wW', 'eE€', 'aA', 'sS'], // 6
    'e': ['3§', '4$', 'wW', 'eE€', 'rR', 'sS', 'dD'], // 6
    'E': ['3§', '4$', 'wW', 'eE€', 'rR', 'sS', 'dD'], // 6
    '€': ['3§', '4$', 'wW', 'eE€', 'rR', 'sS', 'dD'], // 6
    'r': ['4$', '5%', 'eE€', 'rR', 'tT', 'dD', 'fF'], // 6
    'R': ['4$', '5%', 'eE€', 'rR', 'tT', 'dD', 'fF'], // 6
    't': ['5%', '6&', 'rR', 'tT', 'zZ', 'fF', 'gG'], // 6
    'T': ['5%', '6&', 'rR', 'tT', 'zZ', 'fF', 'gG'], // 6
    'z': ['6&', '7/{', 'tT', 'zZ', 'uU', 'gG', 'hH'], // 6
    'Z': ['6&', '7/{', 'tT', 'zZ', 'uU', 'gG', 'hH'], // 6
    'u': ['7/{', '8([', 'zZ', 'uU', 'iI', 'hH', 'jJ'], // 6
    'U': ['7/{', '8([', 'zZ', 'uU', 'iI', 'hH', 'jJ'], // 6
    'i': ['8([', '9)]', 'uU', 'iI', 'oO', 'jJ', 'kK'], // 6
    'I': ['8([', '9)]', 'uU', 'iI', 'oO', 'jJ', 'kK'], // 6
    'o': ['9)]', '0=}', 'iI', 'oO', 'pP', 'kK', 'lL'], // 6
    'O': ['9)]', '0=}', 'iI', 'oO', 'pP', 'kK', 'lL'], // 6
    'p': ['0=}', 'ß?\\', 'oO', 'pP', 'üÜ', 'lL', 'öÖ'], // 6
    'P': ['0=}', 'ß?\\', 'oO', 'pP', 'üÜ', 'lL', 'öÖ'], // 6
    'ü': ['ß?\\', '´`', 'pP', 'üÜ', '+*~', 'öÖ', 'äÄ'], // 6
    'Ü': ['ß?\\', '´`', 'pP', 'üÜ', '+*~', 'öÖ', 'äÄ'], // 6
    '+': ['´``', null, 'üÜ', '+*~', null, 'äÄ', '\'#'], // 4
    '*': ['´``', null, 'üÜ', '+*~', null, 'äÄ', '\'#'], // 4
    '~': ['´``', null, 'üÜ', '+*~', null, 'äÄ', '\'#'], // 4
    'a': ['qQ@', 'wW', null, 'aA', 'sS', '<>|', 'yY'], // 5
    'A': ['qQ@', 'wW', null, 'aA', 'sS', '<>|', 'yY'], // 5
    's': ['wW', 'eE€', 'aA', 'sS', 'dD', 'yY', 'xX'], // 6
    'S': ['wW', 'eE€', 'aA', 'sS', 'dD', 'yY', 'xX'], // 6
    'd': ['eE€', 'rR', 'sS', 'dD', 'fF', 'xX', 'cC'], // 6
    'D': ['eE€', 'rR', 'sS', 'dD', 'fF', 'xX', 'cC'], // 6
    'f': ['rR', 'tT', 'dD', 'fF', 'gG', 'cC', 'vV'], // 6
    'F': ['rR', 'tT', 'dD', 'fF', 'gG', 'cC', 'vV'], // 6
    'g': ['tT', 'zZ', 'fF', 'gG', 'hH', 'vV', 'bB'], // 6
    'G': ['tT', 'zZ', 'fF', 'gG', 'hH', 'vV', 'bB'], // 6
    'h': ['zZ', 'uU', 'gG', 'hH', 'jJ', 'bB', 'nN'], // 6
    'H': ['zZ', 'uU', 'gG', 'hH', 'jJ', 'bB', 'nN'], // 6
    'j': ['uU', 'iI', 'hH', 'jJ', 'kK', 'nN', 'mM'], // 6
    'J': ['uU', 'iI', 'hH', 'jJ', 'kK', 'nN', 'mM'], // 6
    'k': ['iI', 'oO', 'jJ', 'kK', 'lL', 'mM', ',;'], // 6
    'K': ['iI', 'oO', 'jJ', 'kK', 'lL', 'mM', ',;'], // 6
    'l': ['oO', 'pP', 'kK', 'lL', 'öÖ', ',;', '.:'], // 6
    'L': ['oO', 'pP', 'kK', 'lL', 'öÖ', ',;', '.:'], // 6
    'ö': ['pP', 'üÜ', 'lL', 'öÖ', 'äÄ', '.:', '-_'], // 6
    'Ö': ['pP', 'üÜ', 'lL', 'öÖ', 'äÄ', '.:', '-_'], // 6
    'ä': ['üÜ', '+*~', 'öÖ', 'äÄ', '#\'', '-_', null], // 5
    'Ä': ['üÜ', '+*~', 'öÖ', 'äÄ', '#\'', '-_', null], // 5
    '#': ['+*~', null, 'äÄ', '#\'', null, null, null], // 2
    '\'': ['+*~', null, 'äÄ', '#\'', null, null, null], // 2
    '<': [null, 'aA', null, '<>|', 'yY', null, null], // 2
    '>': [null, 'aA', null, '<>|', 'yY', null, null], // 2
    '|': [null, 'aA', null, '<>|', 'yY', null, null], // 2
    'y': ['aA', 'sS', '<>|', 'yY', 'xX', null, null], // 4
    'Y': ['aA', 'sS', '<>|', 'yY', 'xX', null, null], // 4
    'x': ['sS', 'dD', 'yY', 'xX', 'cC', null, null], // 4
    'X': ['sS', 'dD', 'yY', 'xX', 'cC', null, null], // 4
    'c': ['dD', 'fF', 'xX', 'cC', 'vV', null, null], // 4
    'C': ['dD', 'fF', 'xX', 'cC', 'vV', null, null], // 4
    'v': ['fF', 'gG', 'cC', 'vV', 'bB', null, null], // 4
    'V': ['fF', 'gG', 'cC', 'vV', 'bB', null, null], // 4
    'b': ['gG', 'hH', 'vV', 'bB', 'nN', null, null], // 4
    'B': ['gG', 'hH', 'vV', 'bB', 'nN', null, null], // 4
    'n': ['hH', 'jJ', 'bB', 'nN', 'mM', null, null], // 4
    'N': ['hH', 'jJ', 'bB', 'nN', 'mM', null, null], // 4
    'm': ['jJ', 'kK', 'nN', 'mM', ',;', null, null], // 4
    'M': ['jJ', 'kK', 'nN', 'mM', ',;', null, null], // 4
    ',': ['kK', 'lL', 'mM', ',;', '.:', null, null], // 4
    ';': ['kK', 'lL', 'mM', ',;', '.:', null, null], // 4
    '.': ['lL', 'öÖ', ',;', '.:', '-_', null, null], // 4
    ':': ['lL', 'öÖ', ',;', '.:', '-_', null, null], // 4
    '-': ['öÖ', 'ä', '.:', '-_', null, null, null], // 3
    '_': ['öÖ', 'ä', '.:', '-_', null, null, null] // 3
}, 4.571428571);

QWERTY = new Keyboard({
    '~': [null, null, null, '~`', '1!', null, null], // 1
    '`': [null, null, null, '~`', '1!', null, null], // 1
    '1': [null, null, '`~', '1!', '2@', null, 'qQ'], // 3
    '!': [null, null, '`~', '1!', '2@', null, 'qQ'], // 3
    '2': [null, null, '1!', '2@', '3#', 'qQ', 'wW'], // 4
    '@': [null, null, '1!', '2@', '3#', 'qQ', 'wW'], //4
    '3': [null, null, '2@', '3#', '4$', 'wW', 'eE'], //4
    '#': [null, null, '2@', '3#', '4$', 'wW', 'eE'], //4
    '4': [null, null, '3#', '4$', '5%', 'eE', 'rR'], //4
    '$': [null, null, '3#', '4$', '5%', 'eE', 'rR'], //4
    '5': [null, null, '4$', '5%', '6^', 'rR', 'tT'], //4
    '%': [null, null, '4$', '5%', '6^', 'rR', 'tT'], //4
    '6': [null, null, '5%', '6^', '7&', 'tT', 'yY'], //4
    '^': [null, null, '5%', '6^', '7&', 'tT', 'yY'], //4
    '7': [null, null, '6^', '7&', '8*', 'yY', 'uU'], //4
    '&': [null, null, '6^', '7&', '8*', 'yY', 'uU'], //4
    '8': [null, null, '7&', '8*', '9(', 'uU', 'iI'], // 4
    '*': [null, null, '7&', '8*', '9(', 'uU', 'iI'], // 4
    '9': [null, null, '8*', '9(', '0)', 'iI', 'oO'], // 4
    '(': [null, null, '8*', '9(', '0)', 'iI', 'oO'], // 4
    '0': [null, null, '9(', '0)', '-_', 'oO', 'pP'], // 4
    ')': [null, null, '9(', '0)', '-_', 'oO', 'pP'], // 4
    '-': [null, null, '0)', '-_', '=+', 'pP', '[{'], // 4
    '_': [null, null, '0)', '-_', '=+', 'pP', '[{'], // 4
    '=': [null, null, '-_', '=+', '\\|', '{[', '}]'], // 4
    '+': [null, null, '-_', '=+', '\\|', '{[', '}]'], // 4
    '\\': [null, null, '=+', '\\|', null, '}]', null], // 2
    '|': [null, null, '=+', '\\|', null, '}]', null], // 2
    'q': ['1!', '2@', null, 'qQ', 'wW', null, 'aA'], // 4
    'Q': ['1!', '2@', null, 'qQ', 'wW', null, 'aA'], // 4
    'w': ['2@', '3#', 'qQ', 'wW','eE', 'aA', 'sS'], // 6
    'W': ['2@', '3#', 'qQ', 'wW','eE', 'aA', 'sS'], // 6
    'e': ['3#', '4$', 'wW', 'eE', 'rR', 'sS', 'dD'], // 6
    'E': ['3#', '4$', 'wW', 'eE', 'rR', 'sS', 'dD'], // 6
    'r': ['4$', '5%', 'eE', 'rR', 'tT', 'dD', 'fF'], // 6
    'R': ['4$', '5%', 'eE', 'rR', 'tT', 'dD', 'fF'], // 6
    't': ['5%', '6^', 'rR', 'tT', 'yY', 'fF', 'gG'], // 6
    'T': ['5%', '6^', 'rR', 'tT', 'yY', 'fF', 'gG'], // 6
    'y': ['6^', '7&', 'tT', 'yY', 'uU', 'gG', 'hH'], // 6
    'Y': ['6^', '7&', 'tT', 'yY', 'uU', 'gG', 'hH'], // 6
    'u': ['7&', '8*', 'yY', 'uU', 'iI', 'hH', 'jJ'], // 6
    'U': ['7&', '8*', 'yY', 'uU', 'iI', 'hH', 'jJ'], // 6
    'i': ['8*', '9(', 'uU', 'iI', 'oO', 'jJ', 'kK'], // 6
    'I': ['8*', '9(', 'uU', 'iI', 'oO', 'jJ', 'kK'], // 6
    'o': ['9(', '0)', 'iI', 'oO', 'pP', 'kK', 'lL'], // 6
    'O': ['9(', '0)', 'iI', 'oO', 'pP', 'kK', 'lL'], // 6
    'p': ['0)', '-_', 'oO', 'pP', '[{', 'lL', ':;'], // 6
    'P': ['0)', '-_', 'oO', 'pP', '[{', 'lL', ':;'], // 6
    '[': ['-_', '=+', 'pP', '[{', ']}', ':;', '\'"'], // 6
    '{': ['-_', '=+', 'pP', '[{', ']}', ':;', '\'"'], // 6
    ']': ['=+', '\\|', '[{', ']}', null, '\'"', null], // 4
    '}': ['=+', '\\|', '[{', ']}', null, '\'"', null], // 4
    'a': ['qQ', 'wW', null, 'aA', 'sS', null, 'zZ'], // 4
    'A': ['qQ', 'wW', null, 'aA', 'sS', null, 'zZ'], // 4
    's': ['wW', 'eE', 'aA', 'sS', 'dD', 'zZ', 'xX'], // 6
    'S': ['wW', 'eE', 'aA', 'sS', 'dD', 'zZ', 'xX'], // 6
    'd': ['eE', 'rR', 'sS', 'dD', 'fF', 'xX', 'cC'], // 6
    'D': ['eE', 'rR', 'sS', 'dD', 'fF', 'xX', 'cC'], // 6
    'f': ['rR', 'tT', 'dD', 'fF', 'gG', 'cC', 'vV'], // 6
    'F': ['rR', 'tT', 'dD', 'fF', 'gG', 'cC', 'vV'], // 6
    'g': ['tT', 'yY', 'fF', 'gG', 'hH', 'vV', 'bB'], // 6
    'G': ['tT', 'yY', 'fF', 'gG', 'hH', 'vV', 'bB'], // 6
    'h': ['yY', 'uU', 'gG', 'hH', 'jJ', 'bB', 'nN'], // 6
    'H': ['yY', 'uU', 'gG', 'hH', 'jJ', 'bB', 'nN'], // 6
    'j': ['uU', 'iI', 'hH', 'jJ', 'kK', 'nN', 'mM'], // 6
    'J': ['uU', 'iI', 'hH', 'jJ', 'kK', 'nN', 'mM'], // 6
    'k': ['iI', 'oO', 'jJ', 'kK', 'lL', 'mM', ',;'], // 6
    'K': ['iI', 'oO', 'jJ', 'kK', 'lL', 'mM', ',;'], // 6
    'l': ['oO', 'pP', 'kK', 'lL', ':;', ',<', '.>'], // 6
    'L': ['oO', 'pP', 'kK', 'lL', ':;', ',<', '.>'], // 6
    ':': ['pP', '[{', 'lL', ':;', '\'"', '.>', '?/'], // 6
    ';': ['pP', '[{', 'lL', ':;', '\'"', '.>', '?/'], // 6
    '\'': ['[{', ']}', ':;', '\'"', null, '?/', null], // 5
    '"': ['[{', ']}', ':;', '\'"', null, '?/', null], // 5
    'z': ['aA', 'sS', null, 'zZ', 'xX', null, null], // 4
    'Z': ['aA', 'sS', null, 'zZ', 'xX', null, null], // 4
    'x': ['sS', 'dD', 'zZ', 'xX', 'cC', null, null], // 4
    'X': ['sS', 'dD', 'zZ', 'xX', 'cC', null, null], // 4
    'c': ['dD', 'fF', 'xX', 'cC', 'vV', null, null], // 4
    'C': ['dD', 'fF', 'xX', 'cC', 'vV', null, null], // 4
    'v': ['fF', 'gG', 'cC', 'vV', 'bB', null, null], // 4
    'V': ['fF', 'gG', 'cC', 'vV', 'bB', null, null], // 4
    'b': ['gG', 'hH', 'vV', 'bB', 'nN', null, null], // 4
    'B': ['gG', 'hH', 'vV', 'bB', 'nN', null, null], // 4
    'n': ['hH', 'jJ', 'bB', 'nN', 'mM', null, null], // 4
    'N': ['hH', 'jJ', 'bB', 'nN', 'mM', null, null], // 4
    'm': ['jJ', 'kK', 'nN', 'mM', ',<', null, null], // 4
    'M': ['jJ', 'kK', 'nN', 'mM', ',<', null, null], // 4
    ',': ['kK', 'lL', 'mM', ',<', '.>', null, null], // 4
    '<': ['kK', 'lL', 'mM', ',<', '.>', null, null], // 4
    '.': ['lL', ':;', ',<', '.>', '/?', null, null], // 4
    '>': ['lL', ':;', ',<', '.>', '/?', null, null], // 4
    '/': [':;', '\'"', '.>', '/?', null, null, null], // 3
    '?': [':;', '\'"', '.>', '/?', null, null, null] // 3
}, 4.571428571);
