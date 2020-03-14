function Snake() {
    this.x = 10;
    this.y = 10;
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.total = 0;
    this.tail = [];
    this.brick = [];
    this.score = 0;
    this.level = 1;
    this.level1 = [0,1,2,3,4,5,6,7,8,9,10,16,17,18,19,20,21,25,26,27,28,29,30,60,90,120,150,180,210,240,270,300,330,360,480,510,540,570,600,630,660,780,810,840,870];
    this.level2 = [0,1,2,3,4,5,6,7,8,9,10,16,17,18,19,20,21,25,26,27,28,29,30,60,90,120,150,180,210,240,270,300,330,360,480,510,540,570,600,630,660,780,810,840,870,
        560,561,562,563,564,565,565,590,620,650,871,872,873,874,875,876,877,878,883,884,885,886,887,888,889,895,896,897,898,899,29,59,89,119,149,179,209,239,269,299,
        329,359,389,419,449,479,659,689,719,749,779,809,839,869];
    this.level3andmore = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,16,17,18,19,20,21,25,26,27,28,29,30,60,90,120,150,180,210,240,270,300,330,360,390,420,450,480,510,
        540,570, 600,630,660,690,720,750,780,810,840,870,560,561,562,563,564,565,565,590,620,650,871,872,873,874,875,876,877,878,879,880,881,882,883,886,887,890,891,
        888,889,895,896,897,898,899,29,59,89,119,149,179,209,239,269,299,329,359,389,419,449,479,659,689,719,749,779,809,839,869,334,335,336,337,338,339,340,310,280,
        250,251,252,253,254,249,248,247,246,245,455,456,457,458,459,465,475,485,495,505,445,435,425,56,66,76,86,96,55,54,53,52];// Possible to design more levels.
    this.draw = function () {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(this.x,this.y,scale,scale);

        for(let i=0; i<this.tail.length; i++){
            this.randomColor = Math.floor(Math.random()*1000);
            ctx.fillStyle = "#"+this.randomColor;
            ctx.fillRect(this.tail[i].x, this.tail[i].y, scale,scale);
        }
    }

    this.update = function () {
        for(let i = 0; i<this.tail.length -1; i++){
            this.tail[i] = this.tail[i+1];
        }
        for(var p = 0; p<30;p++) for(var q = 0;q<30;q++){
            this.brick.push({
                x:p , y:q
            })
        }
        //for(var i = 0 ;i<this.brick.length;i++){
            //console.log(this.brick[i].x,this.brick[i].y)
            //}
        if(this.level === 1){
            for(var i in this.level1){
             ctx.fillStyle = "#8B4513";
             //console.log(this.brick[].x,this.brick[i].y)
             ctx.fillRect(this.brick[this.level1[i]].x*10, this.brick[this.level1[i]].y*10, scale,scale);
            }
        }
        else if(this.level === 2){
            for(var i in this.level2){
                ctx.fillStyle = "#8B4513";
                //console.log(this.brick[].x,this.brick[i].y)
                ctx.fillRect(this.brick[this.level2[i]].x*10, this.brick[this.level2[i]].y*10, scale,scale);
            }
        }
        else {
            for(var i in this.level3andmore){
                ctx.fillStyle = "#8B4513";
                //console.log(this.brick[].x,this.brick[i].y)
                ctx.fillRect(this.brick[this.level3andmore[i]].x*10, this.brick[this.level3andmore[i]].y*10, scale,scale);
            }
        }

        this.tail[this.total - 1] =  {x: this.x, y: this.y};


        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x > 300){
            this.x = 0;
        }
        if(this.y > 300){
            this.x = 0;
        }
        if(this.x < 0){
            this.x = 300;
        }
        if(this.y < 0){
            this.y = 300;
        }

    }

    this.changeDirection = function (direction) {
        switch (direction) {
            case 'Up':
                this.xSpeed = 0;
                this.ySpeed = -scale;
                break;
            case 'Down':
                this.xSpeed = 0;
                this.ySpeed = scale;
                break;
            case 'Left':
                this.xSpeed = -scale;
                this.ySpeed = 0;
                break;
            case 'Right':
                this.xSpeed = scale;
                this.ySpeed = 0;
                break;
        }
    }
    this.eat = function (fruit) {
        if (this.x === fruit.x && this.y === fruit.y){
            this.total++;
            this.score++;
            if((this.score%5)===0){
                this.level++;
            }
            return true;
        }
        return false;
    }

    this.checkCollision = function () {
        for (var i = 0; i<this.tail.length; i++){
            if(this.x === this.tail[i].x && this.y === this.tail[i].y){
                alert("Game-Over And Final Score ="+this.score);
                return true;
            }
        }
        if(this.level === 1){
            for(var i in this.level1){
                if(this.x === this.brick[this.level1[i]].x*10 && this.y === this.brick[this.level1[i]].y*10){
                    alert("Game-Over (Reason for Game-Over = hit by Wall) And Final Score ="+this.score);
                    return true;
                }
            }
        }
        else if(this.level === 2){
            for(var i in this.level2){
                if(this.x === this.brick[this.level2[i]].x*10 && this.y === this.brick[this.level2[i]].y*10){
                    alert("Game-Over (Reason for Game-Over = hit by Wall) And Final Score ="+this.score);
                    return true;
                }
            }
        }
        else {
            for(var i in this.level3andmore){
                if(this.x === this.brick[this.level3andmore[i]].x*10 && this.y === this.brick[this.level3andmore[i]].y*10){
                    alert("Game-Over (Reason for Game-Over = hit by Wall) And Final Score ="+this.score);
                    return true;
                }
            }
        }
    }
}
function Fruit() {
    this.brick = [];
    for(var p = 0; p<30;p++) for(var q = 0;q<30;q++){
        this.brick.push({
            x:p , y:q
        })
    this.x;
    this.y;
     this.picklocation = function() {
         this.x = (Math.floor(Math.random() * rows - 1) + 1) * scale;
         this.y = (Math.floor(Math.random() * columns - 1) + 1) * scale;
         if(this.level === 1)
         for(var i in this.level1){
             if(this.x === this.brick[this.level1[i]].x*10 && this.y === this.brick[this.level1[i]].y*10){
                 this.picklocation();
             }
         }
         else if(this.level === 2){
             for(var i in this.level2){
                 if(this.x === this.brick[this.level2[i]].x*10 && this.y === this.brick[this.level2[i]].y*10){
                 this.picklocation();
                 }
             }
         }
         else {
             for(var i in this.level3andmore){
                if(this.x === this.brick[this.level3andmore[i]].x*10 && this.y === this.brick[this.level3andmore[i]].y*10){
                 this.picklocation();
                }
             }
         }
         }
     };
     this.draw = function () {
         ctx.fillStyle = "#f00";
         ctx.fillRect(this.x,this.y,scale,scale);
     }
}