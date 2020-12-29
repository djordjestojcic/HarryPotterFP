
var modal=$("#myModal");
var modalP=$("#modalP");
var modalH=$("modalH");
var currentPage=0;

//Dinamicki prikazuje karaktere na index.html stranici u tabeli, uz pomoc API-ja
function buildPage(){
    var characters;

    $.ajax({
        type:'GET',
        url:'http://hp-api.herokuapp.com/api/characters',
        dataType:'json',
        success:function(data){
            characters=data.splice(0,11);
            var tabela =$('#tabelaaa');
            var slika=$('slika')
            var text=`<table id='tabela'class='tabela'id='tabela'><tr>`
            
            for(i=0;i<=characters.length-1;i++){
                    text+=`
                    <tr>
                        <td>
                            <img class='modalImg 'width='200px'height='220px'src='${characters[i].image}'/>
                            <h3 class="text-gray">${characters[i].name}</h3>
                            <p class="mb-0 text-gray-50">House: ${characters[i].house}<br> Species: ${characters[i].species} <br> Gender: ${characters[i].gender}<br> Actor: ${characters[i].actor}</p>
                            <hr class="d-none d-lg-block mb-0 ml-0">
                            <a class='pp' id='a' value='${i}' onClick='pokaziModal(${i})'>View more</a>
                        </td> 
                    </tr>`
                    ;    
            }
            text+=`</tr></table>`;
                tabela.append(text);              
        }
    }); 
}
//Popunjava modal podacima za selektovanog lika
function pokaziModal(index){
    $.ajax({
        type:'GET',
        url:`http://hp-api.herokuapp.com/api/characters`,
        dataType:'json',
        success:function(data){ 
            console.log(data);
            characters=data;
            var character=characters[index];
            var text=``;
            text+=`
            <img  class='modalImg center' src='${character.image}'width="350" height="350" class='center'/>
            <h1 class='hhh'>${character.name}</h1><br>
            <table style='100%'class='tebela1' id='tabela1'>`;
            
            for (i in character){
                text+=`
                <tr>
                    <th><b>${i.replace(/_/gi,"")}</b>:<th>
                    <td> ${character[i]}</td>
                </tr>`;
            };
            text+=`</table>`
            modal.show();
            modalP.append(text);
        }
    })
}
//Funkcija za Read more
function myFunction(index) {
    var dots = document.getElementById(`dots${index}`);
    var moreText = document.getElementById(`more${index}`);
    var btnText = document.getElementById(`myBtn${index}`);
    var more =document.getElementsByClassName('more');
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
      more.style.display='none';
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
      more.style.display='inline';
    }
}

buildPage();

function ugasiModal(){
    modal.css("display","none");
    modalP.html("");    
}

