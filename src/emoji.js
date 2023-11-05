
const emojiList = [
  
  {
    emoji: "😃",
    emoji_name: "Grinning Face with Smiling Eyes",
    meaning: "A smiling face with positive vibes.",
  },
  {
    emoji: "😄",
    emoji_name: "Grinning Face with Open Mouth and Smiling Eyes",
    meaning: "An expression of extreme happiness.",
  },
  {
    emoji: "😁",
    emoji_name: "Beaming Face with Smiling Eyes",
    meaning: "A very cheerful and delighted facial expression.",
  },
  {
    emoji: "😅",
    emoji_name: "Grinning Face with Sweat",
    meaning: "Smiling despite feeling nervous or relieved.",
  },
  {
    emoji: "😆",
    emoji_name: "Grinning Squinting Face",
    meaning: "Expressing extreme happiness with squinted eyes.",
  },
  {
    emoji: "😂",
    emoji_name: "Face with Tears of Joy",
    meaning: "Laughing so hard that tears are flowing.",
  },
  {
    emoji: "🤣",
    emoji_name: "Rolling on the Floor Laughing",
    meaning: "Laughing uncontrollably and rolling on the floor.",
  },
  {
    emoji: "😊",
    emoji_name: "Smiling Face with Smiling Eyes",
    meaning: "A friendly and warm smile with positive energy.",
  },
  {
    emoji: "😍",
    emoji_name: "Heart Eyes",
    meaning: "Expressing love, affection, or admiration.",
  },
  {
    emoji: "👍",
    emoji_name: "Thumbs Up",
    meaning: "Showing approval, agreement, or liking something.",
  },
  {
    emoji: "👎",
    emoji_name: "Thumbs Down",
    meaning: "Expressing disapproval, disagreement, or dislike.",
  },
  {
    emoji: "🙏",
    emoji_name: "Folded Hands",
    meaning: "Requesting or giving blessings, gratitude, or reverence.",
  },
  {
    emoji: "💪",
    emoji_name: "Flexed Biceps",
    meaning: "Strength, power, or determination.",
  },
  {
    emoji: "💔",
    emoji_name: "Broken Heart",
    meaning: "Feeling heartbroken or sad.",
  },
  {
    emoji: "💥",
    emoji_name: "Collision",
    meaning: "An impactful moment or explosion of energy.",
  },
  {
    emoji: "🌟",
    emoji_name: "Glowing Star",
    meaning: "Something remarkable, special, or shining.",
  },
  {
    emoji: "🌈",
    emoji_name: "Rainbow",
    meaning: "Diversity, hope, or a positive outlook.",
  },
  {
    emoji: "🍀",
    emoji_name: "Four Leaf Clover",
    meaning: "Good luck and fortune.",
  },
  {
    emoji: "🐾",
    emoji_name: "Paw Prints",
    meaning: "Animals or pets, or following a trail.",
  },
  {
    emoji: "🚀",
    emoji_name: "Rocket",
    meaning: "A symbol of progress, speed, or launching something new.",
  },
  {
    emoji: "🌍",
    emoji_name: "Earth Globe Europe-Africa",
    meaning: "Representing the Earth, travel, or global matters.",
  },
  {
    emoji: "🌞",
    emoji_name: "Sun with Face",
    meaning: "Depicting a sunny day or happiness.",
  },
  {
    emoji: "🌚",
    emoji_name: "New Moon Face",
    meaning: "Referring to the nighttime or secrets.",
  },
  {
    emoji: "🔥",
    emoji_name: "Fire",
    meaning: "Symbolizing heat, passion, or something amazing.",
  },
  {
    emoji: "❤️",
    emoji_name: "Red Heart",
    meaning: "Expressing love, affection, or a strong liking.",
  },
  {
    emoji: "🎉",
    emoji_name: "Party Popper",
    meaning: "Celebrating and having fun.",
  },
  {
    emoji: "💡",
    emoji_name: "Light Bulb",
    meaning: "Indicating a bright idea or inspiration.",
  },
  {
    emoji: "💻",
    emoji_name: "Laptop",
    meaning: "Related to technology, work, or remote tasks.",
  },
  {
    emoji: "🍁",
    emoji_name: "Maple Leaf",
    meaning: "Symbolizing autumn, change, or Canada.",
  },
  {
    emoji: "🌻",
    emoji_name: "Sunflower",
    meaning: "Represents beauty, brightness, or admiration.",
  },
  {
    emoji: "🌺",
    emoji_name: "Hibiscus",
    meaning: "Symbol of beauty, love, or grace.",
  },
  {
    emoji: "🍓",
    emoji_name: "Strawberry",
    meaning: "Signifying freshness, sweetness, or summer.",
  },
  {
    emoji: "🍇",
    emoji_name: "Grapes",
    meaning: "Associated with wine, fruitfulness, or abundance.",
  },
  {
    emoji: "🍔",
    emoji_name: "Hamburger",
    meaning: "Representing fast food or a tasty burger.",
  },
  {
    emoji: "🍟",
    emoji_name: "French Fries",
    meaning: "A favorite snack or side dish.",
  },
  {
    emoji: "🌮",
    emoji_name: "Taco",
    meaning: "Referring to Mexican cuisine or craving tacos.",
  },
  {
    emoji: "🍕",
    emoji_name: "Pizza",
    meaning: "A classic Italian dish or love for pizza.",
  },
  {
    emoji: "🍦",
    emoji_name: "Ice Cream",
    meaning: "Signifying frozen dessert, joy, or a treat.",
  },
  {
    emoji: "🍰",
    emoji_name: "Shortcake",
    meaning: "Associated with sweets, dessert, or celebration.",
  },
  {
    emoji: "🍩",
    emoji_name: "Doughnut",
    meaning: "Indicating snacks, indulgence, or craving.",
  },
  {
    emoji: "🍸",
    emoji_name: "Cocktail Glass",
    meaning: "Symbolizing drinks, cheers, or happy hours.",
  },
  {
    emoji: "🍺",
    emoji_name: "Beer Mug",
    meaning: "Representing beer, beverages, or relaxation.",
  },
  {
    emoji: "🍷",
    emoji_name: "Wine Glass",
    meaning: "Associated with wine, celebrations, or elegance.",
  },
  {
    emoji: "☕",
    emoji_name: "Hot Beverage",
    meaning: "Indicating coffee, warmth, or a cozy moment.",
  },
  {
    emoji: "🍵",
    emoji_name: "Teacup Without Handle",
    meaning: "Symbol of tea, relaxation, or tea time.",
  },
  {
    emoji: "🍣",
    emoji_name: "Sushi",
    meaning: "Associated with Japanese cuisine or sushi lovers.",
  },
  {
    emoji: "🍤",
    emoji_name: "Fried Shrimp",
    meaning: "Representing seafood, appetizers, or craving shrimp.",
  },
  {
    emoji: "🍙",
    emoji_name: "Rice Ball",
    meaning: "Signifying rice dishes, Japanese culture, or onigiri.",
  },
  {
    emoji: "🍏",
    emoji_name: "Green Apple",
    meaning: "Symbolizing freshness, health, or fruit.",
  },
  {
    emoji: "🍎",
    emoji_name: "Red Apple",
    meaning: "Representing a classic apple or a teacher's gift.",
  },
  {
    emoji: "🍐",
    emoji_name: "Pear",
    meaning: "Associated with pears, health, or fruit.",
  },
  {
    emoji: "🍍",
    emoji_name: "Pineapple",
    meaning: "Signifying hospitality, tropical vibes, or summer.",
  },
  {
    emoji: "🍉",
    emoji_name: "Watermelon",
    meaning: "A refreshing fruit or summertime treat.",
  },
  {
    emoji: "🥥",
    emoji_name: "Coconut",
    meaning: "Symbol of coconuts, tropical drinks, or the beach.",
  },
  {
    emoji: "🍓",
    emoji_name: "Strawberry",
    meaning: "Signifying freshness, sweetness, or summer.",
  },
  {
    emoji: "🌽",
    emoji_name: "Ear of Corn",
    meaning: "Associated with corn, farming, or agriculture.",
  },
  {
    emoji: "🥦",
    emoji_name: "Broccoli",
    meaning: "Representing vegetables, health, or greens.",
  },
  {
    emoji: "🥕",
    emoji_name: "Carrot",
    meaning: "Associated with carrots, health, or a healthy diet.",
  },
  {
    emoji: "🍆",
    emoji_name: "Eggplant",
    meaning: "Symbol of eggplants, vegetables, or expressing aubergine color.",
  },
  {
    emoji: "🌶️",
    emoji_name: "Hot Pepper",
    meaning: "Indicating spiciness, heat, or chili peppers.",
  },
  {
    emoji: "🍛",
    emoji_name: "Curry Rice",
    meaning: "Associated with curry dishes or Indian cuisine.",
  },
  {
    emoji: "🍝",
    emoji_name: "Spaghetti",
    meaning: "Representing Italian pasta, noodles, or craving pasta.",
  },
  {
    emoji: "🍱",
    emoji_name: "Bento Box",
    meaning: "Symbolizing Japanese lunch, takeout, or a meal.",
  },
  {
    emoji: "🍲",
    emoji_name: "Pot of Food",
    meaning: "Associated with cooking, a meal, or dinner.",
  },
  {
    emoji: "🍜",
    emoji_name: "Steaming Bowl",
    meaning: "Signifying noodles, ramen, or a hot meal.",
  },
  {
    emoji: "🍢",
    emoji_name: "Oden",
    meaning: "Indicating Japanese oden or traditional skewers.",
  },
  {
    emoji: "🍣",
    emoji_name: "Sushi",
    meaning: "Associated with Japanese cuisine or sushi lovers.",
  },
  {
    emoji: "🍤",
    emoji_name: "Fried Shrimp",
    meaning: "Representing seafood, appetizers, or craving shrimp.",
  },
  {
    emoji: "🍥",
    emoji_name: "Fish Cake with Swirl",
    meaning: "Associated with Japanese narutomaki or fish cakes."
},
{
    emoji: "🍨",
    emoji_name: "Ice Cream",
    meaning: "Signifying frozen dessert, joy, or a treat."
},
{
    emoji: "🍧",
    emoji_name: "Shaved Ice",
    meaning: "Representing shaved ice treats or cooling down."
},
{
    emoji: "🍦",
    emoji_name: "Soft Ice Cream",
    meaning: "Associated with soft serve ice cream or a sweet treat."
},
{
    emoji: "🍩",
    emoji_name: "Doughnut",
    meaning: "Indicating snacks, indulgence, or craving."
},
{
    emoji: "🎂",
    emoji_name: "Birthday Cake",
    meaning: "Symbolizing birthday celebrations or cake."
},
{
    emoji: "🍰",
    emoji_name: "Shortcake",
    meaning: "Associated with sweets, dessert, or celebration."
},
{
    emoji: "🥧",
    emoji_name: "Pie",
    meaning: "Representing pies, desserts, or enjoying pie."
},
{
    emoji: "🍫",
    emoji_name: "Chocolate Bar",
    meaning: "Indicating chocolate, sweets, or cravings."
},
{
    emoji: "🍬",
    emoji_name: "Candy",
    meaning: "Symbolizing candy, sweetness, or treats."
},
{
    emoji: "🍭",
    emoji_name: "Lollipop",
    meaning: "Representing lollipops, candy, or something sweet."
},
{
    emoji: "🍮",
    emoji_name: "Custard",
    meaning: "Associated with custard desserts or enjoying custard."
},
{
    emoji: "🥤",
    emoji_name: "Cup with Straw",
    meaning: "Symbolizing drinks, beverages, or enjoying a drink."
},
{
    emoji: "☕",
    emoji_name: "Hot Beverage",
    meaning: "Indicating coffee, warmth, or a cozy moment."
},
{
    emoji: "🍵",
    emoji_name: "Teacup Without Handle",
    meaning: "Symbol of tea, relaxation, or tea time."
},
{
    emoji: "🍼",
    emoji_name: "Baby Bottle",
    meaning: "Associated with babies, infant care, or feeding."
},
{
    emoji: "🥄",
    emoji_name: "Spoon",
    meaning: "Representing utensils, eating, or stirring."
},
{
    emoji: "🍾",
    emoji_name: "Bottle with Popping Cork",
    meaning: "Symbolizing celebrations, champagne, or success."
},
{
    emoji: "🥂",
    emoji_name: "Clinking Glasses",
    meaning: "Indicating toasts, celebrations, or raising a glass."
},
{
    emoji: "🍻",
    emoji_name: "Clinking Beer Mugs",
    meaning: "Symbolizing toasts, celebrations, or enjoying beer."
},
{
  emoji: "🍁",
  emoji_name: "Maple Leaf",
  meaning: "Symbolizing autumn, change, or Canada."
},
{
  emoji: "🌻",
  emoji_name: "Sunflower",
  meaning: "Represents beauty, brightness, or admiration."
},
{
  emoji: "🌺",
  emoji_name: "Hibiscus",
  meaning: "Symbol of beauty, love, or grace."
},
{
  emoji: "🍓",
  emoji_name: "Strawberry",
  meaning: "Signifying freshness, sweetness, or summer."
},
{
  emoji: "🍇",
  emoji_name: "Grapes",
  meaning: "Associated with wine, fruitfulness, or abundance."
},
{
  emoji: "🍔",
  emoji_name: "Hamburger",
  meaning: "Representing fast food or a tasty burger."
},
{
  emoji: "🍟",
  emoji_name: "French Fries",
  meaning: "A favorite snack or side dish."
},
{
  emoji: "🌮",
  emoji_name: "Taco",
  meaning: "Referring to Mexican cuisine or craving tacos."
},
{
  emoji: "🍕",
  emoji_name: "Pizza",
  meaning: "A classic Italian dish or love for pizza."
},
{
  emoji: "🍦",
  emoji_name: "Ice Cream",
  meaning: "Signifying frozen dessert, joy, or a treat."
},
{
  emoji: "🍰",
  emoji_name: "Shortcake",
  meaning: "Associated with sweets, dessert, or celebration."
},
{
  emoji: "🍩",
  emoji_name: "Doughnut",
  meaning: "Indicating snacks, indulgence, or craving."
},
{
  emoji: "🍸",
  emoji_name: "Cocktail Glass",
  meaning: "Symbolizing drinks, cheers, or happy hours."
},
{
  emoji: "🍺",
  emoji_name: "Beer Mug",
  meaning: "Representing beer, beverages, or relaxation."
},
{
  emoji: "🍷",
  emoji_name: "Wine Glass",
  meaning: "Associated with wine, celebrations, or elegance."
},
{
  emoji: "☕",
  emoji_name: "Hot Beverage",
  meaning: "Indicating coffee, warmth, or a cozy moment."
},
{
  emoji: "🍵",
  emoji_name: "Teacup Without Handle",
  meaning: "Symbol of tea, relaxation, or tea time."
},
{
  emoji: "🍣",
  emoji_name: "Sushi",
  meaning: "Associated with Japanese cuisine or sushi lovers."
},
{
  emoji: "🍤",
  emoji_name: "Fried Shrimp",
  meaning: "Representing seafood, appetizers, or craving shrimp."
}
];
console.log(emojiList.length);

export default emojiList
