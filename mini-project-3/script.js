var spanText = $('.result');
var randomizer = $('.button1');
var reset = $('.button2');

reset.on('click', clear);

function clear(){
  var nameEntered = $('.name-input').val('');
  $('input[name="albumName"]').prop('checked', false);
  spanText.html('');
}

var hs1Arr = ["Maybe we'll work it out.", "Hope you're wearing your best clothes.", "Just stop your crying, have the time of your life.", "Stop your crying, baby, it'll be alright.", "We're just two ghosts standing in the place of you and me.", "We're just two ghosts swimming in a glass half empty.", "I'm just happy getting you stuck in between my teeth.", "Wherever I go, you bring me home.", "Tell me something just before you go.", "Couldn't take you home to mother in a skirt that short.", "My only angel.", "I must admit I thought I'd like to make you mine as I went about my business through the warning signs.", "Should we just search romantic comedies on Netflix and then see what we find?", "I hope you can see, the shape that I'm in while he's touching your skin.", "I'M HAVING YOUR BABY, IT'S NONE OF YOUR BUSINESS.", "It's New York, baby, always jacked up!", "Do you have family in Carolina?"];

var hs2Arr = ["I know you were way too bright for me.", "You're so golden.", "Lovin' you's the antidote.", "I'm out of my head, and I know that you're scared because hearts get broken.", "You are like strawberries on a summer evening.", "You are sunflower.", "You are that summer feeling.", "You are watermelon sugar high.", "You are distanced, but not far from my heart.", "I get so lost inside your eyes.", "Just let me adore you, like it's the only thing I'll ever do", "You're wonder under summer sky.", "I just wanna tell you somethin'. Lately, you've been on my mind.", "It'd be so sweet if things just stayed the same.", "Do you know who you are?", "I noticed that there's a piece of you in how I dress. Take it as a compliment.", "Don't you call him baby.", "Coucou ! Tu dors ? Oh, j'suis désolée...", "I'm well aware I write too many songs about you.", "What if I'm someone you won't talk about?", "I get the feeling that you'll never need me again.", "I just hope you see me in a little better light.", "Do you think it's easy being of the jealous kind? ’Cause I miss the shape of your lips.", "You live in daydreams with me.", "My eyes want you more than a melody.", "I don't wanna make you feel bad, but I've been trying hard not to talk to you.", "I don't wanna make you feel bad, but I've been trying hard not to act a fool.", "Let me inside, wish I could get to know you.", "Sunflowers just died, keep it sweet in your memory. I'm still tongue-tied.", "I keep thinking back to a time under the canyon moon.", "I'll be gone too long from you.", "All we ever want is automatic all the time.", "Treat people with kindness.", "TPWK.", "We'll be a fine line.", "You sunshine, you temptress.", "We'll be alright." ];

var emojiArr = ["👑", "💅", "💋", "🥰", "😉", "😍", "🤩", "😚", "😛", "🤪", "😝", "🤗", "😌", "🥴", "🤡", "💫", "🙈", "🦄", "🌸", "🌹", "🌺", "🌻", "🌼", "🌷", "🌈", "✨", "🍉", "🍒", "🍓", "🥝", "💌", "🎀", "💘", "💝", "💖", "💗", "💓", "💞", "💕", "🧡", "💛", "💚", "💙", "💜", "🤎", "🖤", "🤍", "🌞", "☁️", "👼", "🌙"];


randomizer.on('click', complimentGenerator);

function complimentGenerator(){

  var nameEntered = $('.name-input').val();

  function pickEmoji(){
      var random = Math.random() * emojiArr.length;
      var rounded = Math.floor(random);
      var result = emojiArr[rounded];

      return result;
  }

  var finalEmoji = pickEmoji();

  if ($("#self-titled-id").is(':checked')) {

  function pickCompliment(){
      var random = Math.random() * hs1Arr.length;
      var rounded = Math.floor(random);
      var result = hs1Arr[rounded];

      return result;
    }

var finalCompliment = pickCompliment();
var finalName = nameEntered;

spanText.html(finalEmoji + ' ' + finalName + ', ' +  finalCompliment + ' ' + finalEmoji);

  } // if hs1 clicked

  else if ($("#fine-line-id").is(':checked')) {
      function pickCompliment(){
      var random = Math.random() * hs2Arr.length;
      var rounded = Math.floor(random);
      var result = hs2Arr[rounded];

      return result;
    }

var finalCompliment = pickCompliment();
var finalName = nameEntered;

spanText.html(finalEmoji + ' ' + finalName + ', ' +  finalCompliment + ' ' + finalEmoji);


  } // if hs2 clicked

  else {
      var nameEntered = $('.name-input').val('');
      $('input[name="albumName"]').prop('checked', false);
      spanText.html('');
  } // nothing in the form is filled

} // main function
