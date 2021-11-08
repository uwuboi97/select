//basic text drawing code shamelessly stolen from https://p5js.org/examples/typography-words.html

//this is a simple example of how you can generate random text using just p5 and a text file.
let fontsize = 12;
let corpus;


function preload() {
  //poem from History As Process by Amiri Baraka
  //corpus = 'lololololol';
   font = loadFont("Assets/type.ttf");
  corpus = loadStrings("Assets/combined.txt");
}

function setup() {
  createCanvas(windowWidth, 2000);
  

  // Set text characteristics
  
  textSize(fontsize);
  textFont(font);
  textAlign(LEFT, CENTER);
  frameRate(1);
  noLoop();
}

function draw() {
    textWrap(WORD);
  background(255);

  // Align the text to the right
  // and run drawWords() in the left third of the canvas
 let n=100;
  for(let i = 0;i<n;i++){
    let y =map(i, 0, n-1, width*0.01, height);
    console.log(print=y);

    let x = 20;
    
     drawWords(x,y);
  }
}



function drawWords(x, y) {
    //Clean up the corpus to make sure any double spacing or things like that don't prevent us from getting words
 let n = int(random(corpus.length))
  let filteredCorpus = corpus[n].split(' ').filter(y => y!="");
  let ind = floor(random(corpus.length));
  console.log(corpus[ind])


  // Then we generate a random variable from the length of our corpus, then randomly decide how many words to pull from that point (between 1 and 4)

  let wordBegin = int(random(filteredCorpus.length));
  let wordEnd = wordBegin + random(1, 4000);

  
  
  fill(0);
  // The text() function needs three parameters:
  // the text to draw, the horizontal position,
  // and the vertical position

  // We take out the words at those positions, then take a random word from it.
  
  text(filteredCorpus.slice(wordBegin, wordEnd).join(' ').trim(), x, y,900);


}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    redraw();
    }
}