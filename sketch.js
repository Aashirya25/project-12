
 var garden,rabbit,apple,leaf
 var gardenimg,rabbitimg,appleimg,leafimg
 var score = 0

  function preload()
  {
  gardenimg = loadImage("garden.png")
  rabbitimg = loadImage("rabbit.png")
  appleimg = loadImage("apple.png")
  leafimg = loadImage("leaf.png")
  }

  function setup()
  {
  createCanvas (400,400)
  //moving background
  garden = createSprite(200,200)
  garden.addImage(gardenimg)

  //create rabbit
  rabbit = createSprite(180,340,20,20)
  rabbit.scale = 0.09
  rabbit.addImage(rabbitimg)
  }
  if (rabbit.isTouching(apple)){
    score=score+1
    apple.remove();
  }
  else (rabbit.isTouching(leaf))
  {
    score = score -1
    leaf.remove();
  }
  if (score=10)
  {
    apple.velovityY=0
    leaf.velocityY=0
  }

  function draw()
  {
  background(0)
  //rabbit moving with the mouse
  rabbit.x = mouseX
  edges = createEdgeSprites();
  rabbit.collide(edges)

  //display score
  textSize (20);
  text("Score: "+score,200,200);
  drawSprites()

  var sprite = Math.round(random(1,2));

  if (frameCount % 80 == 0)
  {
   if (sprite == 1)
  {
    createApples();
  }
   else 
  {
    createLeaves();
  }
  }
  }


  function createApples()
  {
  apple = createSprite(random(50,350),40,10,10)
  apple.addImage(appleimg);
  apple.scale = 0.08
  apple.velocityY = 3
  apple.lifetime = 150
  apple.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }

  function createLeaves()
  {
  leaf = createSprite(random(50,350),40,10,10)
  leaf.addImage(leafimg);
  leaf.scale = 0.08
  leaf.velocityY = 3
  leaf.lifetime = 150
  leaf.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
  }