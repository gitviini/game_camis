const player = document.querySelector('.player')
const display = document.querySelector('.display')
let sprite = document.querySelector('.sprite')
let aquiles = document.querySelector('.aquiles')

function reduct(n = [0,0]){
  let res = [(((n[0])/48).toFixed(0)*48)-48*2,(((n[1])/45).toFixed(0)*45)-45*2]
  return res
}

class Game{
  constructor(display=Element){ 
    this.flip = true
    this.keys = []
    this.tick = 120
    this.velocity = [0,0]
    this.position = [48,45]
    //tamanho do player
    this.player_size = [48,45]
    //recebendo tamanho específico da div display
    this.outlines = [0,0]
    this.size = [display.clientHeight,display.clientWidth]

    this.get_key()
    
    this.name_tag = player.children[0]

    window.onkeydown = () =>{
        this.motion()
        this.view()
        this.questions()
    }
  }
  
  questions(){
    if(this.position[0] >= r[0]-48 && this.position[1] >= r[1]-45){
      window.location.href = '2.html'
    }
  }

  get_key(){
    document.onkeydown = (e) =>{
      this.keys.indexOf(e.key) != -1 ? {} : this.keys.push(e.key)
    }
    document.onkeyup = (e) =>{
      let index = this.keys.indexOf(e.key)
      index != -1 ? this.keys.splice(index,1) : {}
    }
  }
  
  motion(){    
    //UP
    if(this.keys.indexOf('w') != -1 || this.keys.indexOf('ArrowUp') != -1){
      this.velocity[0] = -this.player_size[0]
    }
    //DOWN
    else if(this.keys.indexOf('s') != -1 || this.keys.indexOf('ArrowDown') != -1){
      this.velocity[0] = this.player_size[0]
    }
    else{this.velocity[0] = 0}
    //RIGHT
    if(this.keys.indexOf('d') != -1 || this.keys.indexOf('ArrowRight') != -1){
      this.velocity[1] = this.player_size[1]
    }
    //LEFT
    else if(this.keys.indexOf('a') != -1 || this.keys.indexOf('ArrowLeft') != -1){
      this.velocity[1] = -this.player_size[1]
    }
    else{this.velocity[1] = 0}
    this.position[0] += this.velocity[0]
    this.position[1] += this.velocity[1]

    this.velocity[1] < 0 ? this.flip = true : {}
    this.velocity[1] > 0 ? this.flip = false : {}
    
    if(this.position[0]-this.player_size[0] < 0){
      this.position[0] = 0
      this.name_tag.style.top = '32.5px'
    }else{this.name_tag.style.top = 'initial'}
    if(this.position[0]+this.player_size[0] > this.size[0]){this.position[0] = this.size[0] - this.player_size[0]}
    if(this.position[1]-this.player_size[1] < 0){this.position[1] = 0
    this.name_tag.style.left = '5px'
    }else{this.name_tag.style.left = 'initial'}
    if(this.position[1]+this.player_size[1] >= this.size[1]){this.position[1] = this.size[1] - this.player_size[1]
    this.name_tag.style.right = '5px'
    }else{this.name_tag.style.right = 'initial'}
  }
  
  set_sprite(sprite_name =''){
    sprite.style.backgroundImage = `url('./sprites/${sprite_name}.gif');`
  }

  view(){
    this.flip == true ? sprite.style.transform = 'rotate3d(0,1,0,180deg)' : sprite.style.transform = 'rotate3d(0,1,0,0deg)'
    player.style.left = `${this.position[1]}px`
    player.style.top = `${this.position[0]}px`
    this.size = [display.clientHeight,display.clientWidth]
  }
}

const game = new Game()

//game.size = reduct([display.clientHeight,display.clientWidth])

//display.style.width = `${game.size[1]}px`;display.style.height = `${game.size[0]}px`

var r = reduct([display.clientHeight,display.clientWidth])

aquiles.style.inset = `${r[0]}px ${r[1]}px`;