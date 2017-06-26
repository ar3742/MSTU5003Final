// Code goes here
//change text color on click
  //am
  function changecolor(element){
    if (element.innerHTML == "am"){
        element.innerHTML = "am";
        element.style.color = "green";
    } else {
        element.innerHTML = "am";
        element.style.color = "red";
    }
    return false;
  }


//___________________________________________
//___________________________________________
//change illustrations
//FOR ONE IMAGE- save incase necessary
//function changeImage() {
//var imgEl = document.querySelector('#whitespace');
//imgEl.src = "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg";
//}

//code tried for array
//var illImages = new Array();
//illImages[0]= "http://www.solidbackgrounds.com/images/2560x1440/2560x1440-white-solid-color-background.jpg"
//illImages[1]= "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg"
//illImages[2]= "https://userscontent2.emaze.com/images/bc35f5b9-31f4-49a9-9611-03be248393c2/702c55698967f5a6d6f8c7d9deacfb41.jpg"
//illImages[3]= "http://ww2.valdosta.edu/~mbsecor/DRSEUSSY.bmp"
//illImages[4]= "https://s-media-cache-ak0.pinimg.com/originals/23/fa/f3/23faf3d130f2dc0f70eaa2ef530cc0fc.jpg"

//var i = 0
//function changeImage(){
  //var i = i + 1;
  //var url = 'url(' + illImages[i] + ')';
 // document.getElementById ('whitespace').style.backgroundImage=url;
//}


//another trial
//var images = ["http://www.solidbackgrounds.com/images/2560x1440/2560x1440-white-solid-color-background.jpg", "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg", "https://userscontent2.emaze.com/images/bc35f5b9-31f4-49a9-9611-03be248393c2/702c55698967f5a6d6f8c7d9deacfb41.jpg","http://ww2.valdosta.edu/~mbsecor/DRSEUSSY.bmp", "https://s-media-cache-ak0.pinimg.com/originals/23/fa/f3/23faf3d130f2dc0f70eaa2ef530cc0fc.jpg"]
//var currentImage = 0;

//function goNext() {
  //currentImage += 1;
  
  //if(currentImage >= images.length) {
    //currentImage = 0;
  //}
  //document.getElementById("whitespace").src = images[currentImage];
//}
//__________________________________________________
//__________________________________________________


//FOR MULTIPLE IMAGES--works!
function changeImage() {
  var imgEl = document.querySelector('#whitespace');
  var random = Math.floor(Math.random() * 4);
  if (random === 0) {
    imgEl.src = "http://images.clipartpanda.com/green-eggs-and-ham-clip-art-suess.jpg";
  } else if (random === 1) {
    imgEl.src = "https://userscontent2.emaze.com/images/bc35f5b9-31f4-49a9-9611-03be248393c2/702c55698967f5a6d6f8c7d9deacfb41.jpg";
  } else if (random === 2) {
    imgEl.src = "http://ww2.valdosta.edu/~mbsecor/DRSEUSSY.bmp";
  } else {
    imgEl.src = "https://s-media-cache-ak0.pinimg.com/originals/23/fa/f3/23faf3d130f2dc0f70eaa2ef530cc0fc.jpg";
  }
}
//___________________________________________________
//___________________________________________________
//automated response to submit
function ShowMessage() {
                var result = confirm("You're off to Great Places, Today is Your Day! We can't wait to read your story!");
                if (result) {
                    return true;
                } else {
                    return false;
                }
            }

//self evaluation responses 
var FormStuff = {
  
  init: function() {
    this.applyConditionalRequired();
    this.bindUIActions();
  },
  
  bindUIActions: function() {
    $("input[type='radio'].on("change", this.applyConditionalRequired);
  },
  
  applyConditionalRequired: function() {
    
    $(".require-if-active").each(function() {
      var el = $(this);
      if ($(el.data("require-pair")).is(":checked")) {
        el.prop("required", true);
      } else {
        el.prop("required", false);
      }
    });
    
  }
  
};



