function accordeon(){
    let titres = document.getElementsByTagName('h1');
    let textes = document.getElementsByTagName('p');

    for(i=0;i<titres.length;i++){
        titres[i].addEventListener('click', (e) => {
      textclick= e.target;
      frere = textclick.nextElementSibling;
       
        

        if(frere.classList.contains('active')){
            frere.classList.remove('active');
            console.log('ouvert');
            
        }else{
            for(i=0;i<textes.length;i++){
            textes[i].classList.remove('active');
        }
        frere.classList.add('active');
    }
})}};
