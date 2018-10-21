var updateCards = products => {
  var elements = document.querySelectorAll('.good');
  for (var i = 0; i < elements.length; i++) {
    if (products[i].isHit) {
      elements[i].classList.add('good--hit');
    }
    if (products[i].inStock) {
      elements[i].classList.add('good--available');
    }else {
      elements[i].classList.add('good--unavailable');
    }
    }
  }
    
updateCards(assortmentData);
////////////////////////////////////////////////////////////

var cardsData = [
  {
    isAvailable: true,
    imgUrl: 'device/item-1.jpg',
    text: 'Селфи-палка для начинающих',
    price: 200,
    isSpecial: false
  },
  {
    isAvailable: false,
    imgUrl: 'device/item-2.jpg',
    text: 'Профессиональная селфи-палка',
    price: 1500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-3.jpg',
    text: 'Непотопляемая селфи-палка',
    price: 2500,
    isSpecial: false
  },
  {
    isAvailable: true,
    imgUrl: 'device/item-4.jpg',
    text: 'Селфи-палка «Следуй за мной»',
    price: 4900,
    isSpecial: true,
    specialPrice: 100
  }
];

var makeElement = function (tagName, className, text) {
  var element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

var createCard = function (product) {
  var listItem = makeElement('li', 'product');

  var title = makeElement('h2', 'product__title', product.text);
  listItem.appendChild(title);

  var picture = makeElement('img', 'product__image');
  picture.src = product.imgUrl;
  picture.alt = product.text;
  listItem.appendChild(picture);

  var price = makeElement('p', 'product__price', product.price);
  listItem.appendChild(price);

  var availabilityClass = 'product--available';
  if (!product.isAvailable) {
    availabilityClass = 'product--unavailable';
  }
  listItem.classList.add(availabilityClass);

  if (product.isSpecial) {
    listItem.classList.add('product--special');
    var specialPrice = makeElement('p', 'product__special-price', product.specialPrice);
    listItem.appendChild(specialPrice);
  }

  return listItem;
};

var cardList = document.querySelector('.products');

for (var i = 0; i < cardsData.length; i++) {
  var cardItem = createCard(cardsData[i]);
  cardList.appendChild(cardItem);  
}

//////////////////////// Object course ////////////////////////

var gameRules = {
  diceNumber: 1,
  maxAttempts: 1
};

var firstCat = {
  name: 'Кекс',
  points: 0
};

var secondCat = {
  name: 'Рудольф',
  points: 0
};

var thirdCat = {
  name: 'Рокки',
  points: 0
};

var cats = [firstCat, secondCat, thirdCat];

var runGame = function (rules, players) {
  for (var currentAttempt = 1; currentAttempt <= rules.maxAttempts; currentAttempt++) {
    for (var i = 0; i < players.length; i++) {
      var throwResult = keks.throwDice(rules.diceNumber, rules.diceNumber * 6);
      players[i].points += throwResult;
      console.log(players[i].name + ' выбросил ' + players[i].points);
    }
  }
  return players;
};

var getWinners = function (players) {
  var winners = [];
  var max = players[0];

  for (var i = 0; i < players.length; i++) {
    var currentPlayer = players[i];
    if (currentPlayer.points > max.points) {
      max = currentPlayer;
      winners = [max];
    } else if (currentPlayer.points === max.points) {
      winners.push(currentPlayer);
    }
  }

  return winners;
};


var printWinners = function (players, winners) {
  if (players.length === winners.length) {
    console.log('Все коты как на подбор!');
    return;
  }

  var message = 'Победил ';
  if (winners.length > 1) {
    message = 'Победили ';    
  }
  
  for (var i = 0; i < winners.length; i++) {
    if (i >= 1) {
      message += ', ';      
    }
    message += winners[i].name;
  }

  message += ' с количеством очков: ' + winners[0].points;

  console.log(message);
};

cats = runGame(gameRules, cats);
var tops = getWinners(cats);
printWinners(cats, tops);

