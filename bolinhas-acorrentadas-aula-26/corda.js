class Corda{
     constructor(pontoA, corpoB){
        this.ajax = Constraint.create({
            pointA:pontoA, bodyB:corpoB
        })
            World.add(mundo,this.ajax);
            this.pontoA = pontoA
            this.pontoB = corpoB
        }
       rogerguedes(){
    line(this.pontoA.x,this.pontoA.y,this.pontoB.position.x,this.pontoB.position.y);
    } 
    }