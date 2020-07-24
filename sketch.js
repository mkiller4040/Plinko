const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 
var particles = [];
var plinkos = [];
var columns = [];

var columnHeight = 300;

function setup() 
{
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(100,603,800,10);

  for(var k = 0; k <= width; k = k + 80)
  {
    columns.push(new Column(k, height - columnHeight/2, 10, columnHeight));
  }

  for(var n = 40; n <= width; n = n + 50)
  {
    plinkos.push(new Plinko(n, 75))
  }

  for(var n = 15; n <= width - 10; n = n + 50)
  {
    plinkos.push(new Plinko(n, 175))
  }

  for(var n = 40; n <= width - 20; n = n + 50)
  {
    plinkos.push(new Plinko(n, 275))
  }

  for(var n = 15; n <= width - 30; n = n + 50)
  {
    plinkos.push(new Plinko(n, 375))
  }

}

function draw() 
{
  background(0);  
  Engine.update(engine);

  ground.display();
 
  if(frameCount % 60 === 0)
  {
    particles.push(new Particle(random(width/2 - 10, width/2 + 10), 10, 10))
  }

  for(var k = 0; k < columns.length; k++)
  {
    columns[k].display();
  }

  for(var n = 0; n < particles.length; n++)
  {
    particles[n].display();
  }

  for(var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }

  drawSprites();
}
