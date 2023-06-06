
//Motor 
const Engine = Matter.Engine;
//Mundo
const World = Matter.World;
//Corpos
const Bodies = Matter.Bodies;
//Corpo
const Body = Matter.Body;

//adicione a const Constraint
const Constraint = Matter.Constraint;
//variaveis
var motor;
var world;

var solo, parado;

var botao;

function setup() {
    createCanvas(600, 400);

    //ETAPA 1: Configurar o motor de física
    //criar o motor
    motor = Engine.create();
    mundo = motor.world;

    parado = {
      isStatic:true,
    }
    //cria o solo
    solo = Bodies.rectangle(300,390,600,30, parado);
    //adiciona no mundo
    World.add(mundo, solo);
  
    //adiciona a imagem do botão

    //cria o objeto bola da classe Ball
bola = new Bola(100);
bola2 = new Bola(200);
bola3 = new Bola(300);
bola4 = new Bola(400);
bola5 = new Bola(500)
//cria a corrente da classe 
cr7 = new Corda({x:100, y:10}, bola.body);
yurialberto = new Corda({x:200, y:10}, bola2.body)
fagner = new Corda({x:300, y:10}, bola3.body)
renatoaugusto = new Corda({x:400, y:10},bola4.body)
casio = new Corda ({x:500, y:10},bola5.body) 
    ellipseMode(RADIUS);
    rectMode(CENTER);
}


function draw() {
  background("cyan");
    
  //atualizar o motor
  Engine.update(motor);



  //desenha o solo
  fill('brown');
  rect(solo.position.x, solo.position.y, 600, 30);

  //mostra a bolinha
    bola.neymar()
    bola2.neymar()
    bola3.neymar()
    bola4.neymar()
    bola5.neymar()
    //mostra a corrente
  cr7.rogerguedes()
  yurialberto.rogerguedes()
  fagner.rogerguedes()
  renatoaugusto.rogerguedes()
  casio.rogerguedes()
}

//é aqui que adiciona a função para aplicar força na bola
