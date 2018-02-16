# Password Score

[![Build Status](https://travis-ci.org/davidstutz/password-score.svg?branch=master)](https://travis-ci.org/davidstutz/password-score)

Password Score is a javascript library for estimating password security in the means of entropy. Beneath using dictionaries, the library searches for common passwords or names and scans for patterns like dates in any format, sequences, repetitions or keyboard patterns. Based on the found patterns, the entropy may be used to estimate the average time needed to crack the password.

Estimating the time to crack is still to be implemented. In addition there is still some work to do concerning documentation and the demonstration site.

Demonstration and documentation: [http://davidstutz.de/password-score](http://davidstutz.de/password-score).

Check out [Bootstrap Strength Meter](https://github.com/davidstutz/bootstrap-strength-meter): a Twitter Bootstrap plugin demonstrating how to use Password Score to visualize password strength.

## Data Sources

* `cities.txt`: [Creative Commons Attribution 3.0 License](http://creativecommons.org/licenses/by/3.0/); [http://download.geonames.org/export/dump/](http://download.geonames.org/export/dump/).
* `en.txt`/`de.txt`: [Creative Commons – Attribution / ShareAlike 3.0 license](http://creativecommons.org/licenses/by-sa/3.0/) ; [http://invokeit.wordpress.com/frequency-word-lists/](http://invokeit.wordpress.com/frequency-word-lists/).
* `passwords.txt`: [https://xato.net/passwords/more-top-worst-passwords/](https://xato.net/passwords/more-top-worst-passwords/).
* `female.txt`, `male.txt` and `last.txt`: [http://deron.meranda.us/data/](http://deron.meranda.us/data/).
* `countries-en`/`countries-de.txt`: [http://www.countries-list.info/](http://www.countries-list.info/).
* `data/passwords/*.txt`: [https://wiki.skullsecurity.org/Passwords](https://wiki.skullsecurity.org/Passwords).

## License

Copyright (c) 2013 - 2018 David Stutz
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
* Neither the name of the <ORGANIZATION> nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
