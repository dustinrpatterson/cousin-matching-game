;(function () {
  angular.module('cousinMemory')
    .service('GameService', function () {
      var imgRoot = 'assets/img/cards/'

      function Deck () {
        this.cards = [{
          name: 'Addi Baird',
          url: imgRoot + 'Addi.JPG',
        }, {
          name: 'Anna Baird',
          url: imgRoot + 'Anna.JPG',
        }, {
          name: 'Calla Avondet',
          url: imgRoot + 'Calla.JPG',
        }, {
          name: 'Halle Hunter',
          url: imgRoot + 'Halle.JPG',
        }, {
          name: 'Hudson Hunter',
          url: imgRoot + 'Hudson.JPG',
        }, {
          name: 'Huntley Bradshaw',
          url: imgRoot + 'Huntley.JPG',
        }, {
          name: 'James Baird',
          url: imgRoot + 'James.JPG',
        }, {
          name: 'Jamie Bradshaw',
          url: imgRoot + 'Jamie.JPG',
        }, {
          name: 'Landen Patterson',
          url: imgRoot + 'Landen.JPG',
        }, {
          name: 'Maizy Hunter',
          url: imgRoot + 'Maizy.JPG',
        }, {
          name: 'Marcus Hunter',
          url: imgRoot + 'Marcus.JPG',
        }, {
          name: 'Miles Hunter',
          url: imgRoot + 'Miles.JPG',
        }, {
          name: 'Reagan Avondet',
          url: imgRoot + 'Reagan.jpg',
        }, {
          name: 'Remington Bradshaw',
          url: imgRoot + 'Remington.JPG',
        }, {
          name: 'Stella Hunter',
          url: imgRoot + 'Stella.JPG',
        }, {
          name: 'Sydnee Patterson',
          url: imgRoot + 'Sydnee.JPG',
        }, {
          name: 'Tinlee Patterson',
          url: imgRoot + 'Tinlee.JPG',
        }]
      }

      this.getDeck = function () {
        var pairs = shuffle(new Deck().cards).concat(shuffle(new Deck().cards))
        var shuffled = shuffle(shuffle(pairs))
        return shuffled
      }

      function shuffle (deck) {
        for (var j, x, i = deck.length; i; j = Math.floor(Math.random() * i), x = deck[--i], deck[i] = deck[j], deck[j] = x) {}
        return deck
      }
    })
}())
