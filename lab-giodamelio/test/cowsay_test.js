const expect = require('chai').expect;

const cowsay = require('../src/cowsay');

describe('cowsay function', function() {
  it('says hello world', function() {
    const EXPECTED = '╔══════════════╗\n║ Hello World! ║\n╚═╤════════════╝\n  │       ,-^-.\n  │       !oYo!\n  ╰───── /./=\\.\\______\n            ##        )\\/\\\n             ||-----w||\n             ||      ||\n             Vader Cow!\n  ';
    expect(cowsay('Hello World!')).to.equal(EXPECTED);
  });
});
