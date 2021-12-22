function buttonAnim(curr){
  var active = document.querySelector("#"+curr)
  active.classList.add("pressed")
  setTimeout(function(){active.classList.remove("pressed")},100)
}
newArr = document.querySelectorAll(".btn")
sounds = ["sounds/green.mp3","sounds/red.mp3","sounds/yellow.mp3","sounds/blue.mp3"]
for(let i=0;i<newArr.length;i++){
  newArr[i].addEventListener('click',function(){
    buttonAnim(this.id)
    new Audio(sounds[i]).play()
  })
}
// for(var i = 0;i < 5; i++){
//     setTimeout(function(){
//         console.log('count ', i);
//     }, 3000);
// }
var maxLevel = 5
var level = 1
var temp = []
var body = document.querySelector("body")
var header = document.querySelector("h1")
var pg = document.querySelector("p")
// var newSounds = []
var track = []
var diff = 500
var inp = document.querySelector("input")
inp.addEventListener('input',function(e){
  keydown = e.target.value
  if(keydown==="w"||keydown==="s"||keydown==="d"){
    pg.classList.add("hide")
    if(keydown==="s"){
      maxLevel = 10
    }else if(keydown==="d"){
      maxLevel = 25
    }
    for(let i=level;i<=maxLevel;i++){
      temp.push(newArr[Math.floor(Math.random()*newArr.length)])
      // newSounds.push("sounds/"+temp[i-1].id+".mp3")
    }
    for(var i = 0; i <1 ; i++){
        (function(i){
            setTimeout(function(){
                header.innerText = "Level "+(i+1)
                buttonAnim(temp[i].id)
                new Audio("sounds/"+temp[i].id+".mp3").play()
            }, 500*(i+1));
        })(i)
    }
  }else{
    console.log(keydown)
  }
})
document.addEventListener('keydown',function(event){
  temp = []
  keydown = event.key;
  if(keydown==="w"||keydown==="s"||keydown==="d"){
    pg.classList.add("hide")
    if(keydown==="s"){
      maxLevel = 10
    }else if(keydown==="d"){
      maxLevel = 25
    }
    for(let i=level;i<=maxLevel;i++){
      temp.push(newArr[Math.floor(Math.random()*newArr.length)])
      // newSounds.push("sounds/"+temp[i-1].id+".mp3")
    }
    for(var i = 0; i <1 ; i++){
        (function(i){
            setTimeout(function(){
                header.innerText = "Level "+(i+1)
                buttonAnim(temp[i].id)
                new Audio("sounds/"+temp[i].id+".mp3").play()
            }, 500*(i+1));
        })(i)
    }
  }else{
    console.log(keydown)
  }

})

var result = 0
for(let i=0;i<newArr.length;i++){
  newArr[i].addEventListener('click',function(){
    function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
    function addImg(){
      var img = document.createElement("img");
      img.src = "images/troll.jpg";
      var src = document.getElementsByClassName("para")[0];
      console.log("Here")
      src.appendChild(img);
    }
    buttonAnim(this.id)
    new Audio(sounds[i]).play()
    track.push(this)
    // console.log( track)
    if(level==7&&track.length<2){
      addImg()
    }
    if(level>6){
      diff = 200
    }else if(level>12){
      diff = 80
    }else if(level>17){
      diff = 60
    }
    if(level>maxLevel){
        new Audio("sounds/claps.mp3").play()
        header.innerText = "Congratulations! You're Winner!"
        if(level>8){
          document.getElementsByTagName("img")[0].src = "images/cup.jpg"
        }
        header.style.color = "#A6CF98"
        body.classList.add("congrats")
        level = 1
        track = []
      }else if(track.length===level){
        let lol = temp.slice(0,level)
        result = lol.length===track.length&&lol.every(function(elem,idx){
          return elem === track[idx]
          })
        // console.log(track,lol)
        if(result){
          if(level<maxLevel){
            level++
            shuffle(temp)
            setTimeout(function(){
              for(var i = 0; i <level; i++){
                  (function(i){
                      let lvl = (i+1)===maxLevel?"Final Level":"Level "+(i+1)
                      header.innerText =  lvl
                      setTimeout(function(){
                          buttonAnim(temp[i].id)
                          new Audio("sounds/"+temp[i].id+".mp3").play()
                      }, diff*(i+1));
                  })(i)
              }
            },400)
            track = []
          }else{
            level++
          }
        }else{
          track = []
          header.innerText = "Game Over! Press any key or Refresh the Page!"
          new Audio("sounds/wrong.mp3").play()
          body.classList.add("game-over")
          setTimeout(function(){body.classList.remove("game-over")},100);
          level = 1
        }
      }else{
        for(let i=0;i<track.length;i++){
          if(track[i]!==temp[i]){
              track = []
              header.innerText = "Game Over! Press any key or Refresh the Page!"
              new Audio("sounds/wrong.mp3").play()
              body.classList.add("game-over")
              setTimeout(function(){body.classList.remove("game-over")},100);
              level = 1
          }
        }
      }
    })
  }


















// for(let i=0;i<newArr.length;i++){
//   newArr[i].addEventListener('click',function(){
//     buttonAnim(this.id)
//     new Audio(sounds[i]).play()
//     if(this.id==temp[0].id){
//       // console.log(temp[i].id,this.id)
//       level++
//     }else{
//       document.querySelector("h1").innerText = "Game Over!"
//       level = 0
//     }
//     for(var i = 0; i <level; i++){
//         (function(i){
//             document.querySelector("h1").innerText = "Level "+(i+1)
//             setTimeout(function(){
//                 buttonAnim(temp[i].id)
//                 new Audio(newSounds[i]).play()
//             }, 500*(i+1));
//         })(i)
//     }
//   })
// }

// console.log(level)
