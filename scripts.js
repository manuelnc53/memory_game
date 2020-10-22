const images=[
"0c1441647638de31d9c72f1969a8145a.jpg",
"0e7c1806e54f2579f509a959ca17e2a1.jpg",
"11658805-plata-símbolo-del-pez-cristiano-ilustración.jpg",
"15802459449976.jpg",
"46233578-64d017c41947bff5dd15832437670099-640-0.jpg",
"54399ce726b6a382eadc4801d2a52a33.jpg",
"5c4b76a630ee3-487616-500x500.jpg",
"5d2f4e929d7a8.jpeg",
"5e7f5c92fe3b07d88d8d80be75acc933.png",
"7277-04_copy.jpg",
"955167-mla26158720382_102017-o-61e405a41a5702439715222824005556-640-0.jpg",
"983d7180e264b08758e6caed0ba5934f.jpg",
"balde-rojo.jpg",
"Basketball.jpeg",
"craft-evan-image.jpg",
"elegir-sandia.jpg",
"f1280x720-122646_254321_5050.jpg",
"f35cdf8fff13423d8923a9b9008ae010.jpg",
"f51d08be05919290355ac004cdd5c2d6.png",
"kiwi_g.jpg",
"León-2.jpg",
"li-e1523236000541.jpg",
"music.jpg",
"nuevo-logo-instagram-android.jpg",
"ny02071K_400x400.jpg",
"pen-drive.jpg",
"Pepperoni-Pizza-1.jpg",
"que-come-pavo-real.jpg",
"razas-perro-pequenos-grandes-m.jpg",
"redimi2-y-residente-redimi2-y-reside_13553642_20200328171006.jpg",
"reposera-descansar-80012.jpg",
"th5-640x426-17028.jpg",
"unnamed.png",
"Violin11.jpg",
]
let secretCard
let selectCard
let max = 3

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
}
function mezclar(cantidad){
  /**Vacio todo */
  document.getElementById('memory-game').innerHTML=""
  /**Ordeno aleatoriamente las imagenes */
  shuffleArray(images)
  /**Lo dibujo en el frontend */
  for(let i=0; i< cantidad; i++){
    let imageTemplate= 
    `<div class="memory-card flip" data-framework="aurelia">
      <div class="front-face">
        <span>${i+1}</span>
        <img src="./img/${images[i]}"/>
      </div>
      
      <div class="back-face"> <span>${i+1}</span> </div>
    </div>`
    document.getElementById('memory-game').innerHTML+=imageTemplate
  }
  document.getElementById("firstCard").classList.remove('flip');
  setTimeout(()=>{
    document.getElementById("cardQuestion").src= "./img/" + images[Math.floor(Math.random() * (cantidad))]
  }, 2000)
  
  

}
function siguiente(){
  if(max < images.length-1){
    ++max
  }
  secretCard=null
  selectCard=null
  mezclar(max)
  

}
function flipCard(){
  /**La primera carta esta dada vuelta */
  if(!secretCard){
    secretCard = this.children[0].src
    this.classList.add('flip');
    const cards = document.getElementById("memory-game").querySelectorAll('.memory-card');
    cards.forEach(card => card.classList.remove('flip'));
    cards.forEach(card => card.addEventListener('click', flipCard));
  }else{
    /**Las demas cartas estan dadas vueltas */
    selectCard=this.children[0].children[1].src
    this.classList.add('flip');
  }
  /**Ganó*/
  if(selectCard==secretCard){
    document.getElementById("winner").style.display="block"
  }
  
}



 
mezclar(3)
document.getElementById("firstCard").addEventListener('click', flipCard)
document.getElementById("winner").addEventListener('click', ()=>{document.getElementById("winner").style.display="none"})
document.getElementById("siguiente").addEventListener('click', siguiente)