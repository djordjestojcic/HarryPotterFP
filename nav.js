function loadNav(){

    var x = document.getElementsByTagName("BODY")[0];

    text=`<nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container">
              <img src='img/2.png' height='50px'/><p  class='navP'color='white' font-size='20px'>&nbsp;  
              <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                Menu
                <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <a class="nav-link" href="index.html">Home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="books.html">Books</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="quiz.html">Quiz</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <div class='slider-container'>
                <div class='mySlides fade'>
                  <header class="masthead" style="background-image: url('img/bg.jpg')">
                      <div class="overlay"></div>
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-8 col-md-10 mx-auto">
                            <div class="page-heading">
                              <h1>Harry Potter fan page</h1>
                              <span color='black' class="subheading" font-family='Harry P'>Welcome Nerds</span>
                            </div>
                          </div>
                        </div>
                      </div>
                  </header>
                </div>
                <div class='mySlides fade'>
                  <header class="masthead" style="background-image: url('img/bg1.jpg')">
                    <div class="overlay"></div>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                          <div class="page-heading">
                            <h1>Harry Potter fan page</h1>
                            <span color='black' class="subheading" font-family='Harry P'>Welcome Nerds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
                <div class='mySlides fade'>
                  <header class="masthead" style="background-image: url('img/bg2.jpg')">
                    <div class="overlay"></div>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                          <div class="page-heading">
                            <h1>Harry Potter fan page</h1>
                            <span color='black' class="subheading" font-family='Harry P'>Welcome Nerds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
                <div class='mySlides fade'>
                  <header class="masthead" style="background-image: url('img/bg4.jpg')">
                    <div class="overlay"></div>
                    <div class="container">
                      <div class="row">
                        <div class="col-lg-8 col-md-10 mx-auto">
                          <div class="page-heading">
                            <h1>Harry Potter fan page</h1>
                            <span color='black' class="subheading" font-family='Harry P'>Welcome Nerds</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </header>
                </div>
          </div>`;

    x.innerHTML=text;

}

loadNav();