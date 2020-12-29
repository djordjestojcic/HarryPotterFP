
//Dinamicko ispisivanje sadrzaja
function books(){
    var row2=document.getElementById("row2");
    text=`<h2 class="section-heading ">Harry Potter Books</h2>

    <p>TSince the release of the first novel, Harry Potter and the Philosopher's Stone, on 26 June 1997, the books have found immense popularity, positive reviews and commercial success worldwide. They have attracted a wide adult audience as well as younger readers and are often considered cornerstones of modern young adult literature. As of February 2018, the books have sold more than 500 million copies worldwide, making them the best-selling book series in history, and have been translated into eighty languages. The last four books consecutively set records as the fastest-selling books in history, with the final installment selling roughly eleven million copies in the United States within twenty-four hours of its release.
    </p>`;
    for(i=1;i<=7;i++){
        text+=`<div class="col-1.5 mx-auto" id="book${i}">
                <img  width="160px"height='200px'src="img/books/${i}.png" onclick="openModal(${i})" class="imgModal" id='bookImg${i}'>
                </div>`;
    }
    text+=`<p>The series was originally published in English by two major publishers, Bloomsbury in the United Kingdom and Scholastic Press in the United States. A play, Harry Potter and the Cursed Child, based on a story co-written by Rowling, premiered in London on 30 July 2016 at the Palace Theatre, and its script was published by Little, Brown. The original seven books were adapted into an eight-part namesake film series by Warner Bros. Pictures, which is the third highest-grossing film series of all time as of February 2020. In 2016, the total value of the Harry Potter franchise was estimated at $25 billion,making Harry Potter one of the highest-grossing media franchises of all time.</p>`;
    row2.innerHTML+=text;
}

books();

//Prikazivanje selektovane knjige u modalu
function openModal(id){
    var modal1=document.getElementById("myModal1");
    var img=document.getElementById(`bookImg${id}`);
    var modalImg=document.getElementById("img01");
    var capiton=document.getElementById("caption");
    modal1.style.display='block';
    modalImg.src=img.src;

    if(id==1){
        capiton.innerHTML=`Harry Potter and the
        Philosopher's Stone (1997)`;
    }
    if(id==2){
        capiton.innerHTML=`Harry Potter and the
        Chamber of Secrets (1998)`;
    }
    if(id==3){
        capiton.innerHTML=`Harry Potter and the
        Prisoner of Azkaban (1999)`;
    }
    if(id==4){
        capiton.innerHTML=`	Harry Potter and the
        Goblet of Fire (2000)`;
    }
    if(id==5){
        capiton.innerHTML=`	Harry Potter and the
        Order of the Phoenix (2003)`;
    }
    if(id==6){
        capiton.innerHTML=`Harry Potter and the
        Half-Blood Prince (2005)`;
    }
    if(id==7){
        capiton.innerHTML=`Harry Potter and the
        Deathly Hallows (2007)`;
    }        
};

function closeModal(){
    
    var ugasi=document.getElementById("myModal1");
    ugasi.style.display='none';

}