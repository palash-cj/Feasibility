const toggleButton=document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('headlinks')[0]

toggleButton.addEventListener('click', ()=>{
    navbarLinks.classList.toggle('active')
})

var check = function() {
  if (document.getElementById('passwd').value ==
    document.getElementById('confirm_passwd').value) {
    document.getElementById('message').style.color = 'green';
    document.getElementById('message').innerHTML = 'matching';
  } else {
    document.getElementById('message').style.color = 'red';
    document.getElementById('message').innerHTML = 'not matching';
  }
}

/* When the user clicks on the button, 
        toggle between hiding and showing the dropdown content */
        function myFunction1() {
            document.getElementById("myDrop1").classList.toggle("show");
        }
          
          // Close the dropdown if the user clicks outside of it
          window.onclick = function(event) {
            if (!event.target.matches('#one')) {
                var openDropdown = document.getElementById("myDrop1");
            
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }  
            }
            if (!event.target.matches('#two')) {
                var openDropdown = document.getElementById("myDrop2");
            
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }  
            }
            if (!event.target.matches('#three')) {
                var openDropdown = document.getElementById("myDrop3");
            
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }  
            }
            if (!event.target.matches('#four')) {
                var openDropdown = document.getElementById("myDrop4");
            
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }  
            }
            if (!event.target.matches('#five')) {
                var openDropdown = document.getElementById("myDrop5");
            
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }  
            }

          }

          function myFunction2() {
            document.getElementById("myDrop2").classList.toggle("show");
          }

          
          
          function myFunction3() {
            document.getElementById("myDrop3").classList.toggle("show");
          }

          function myFunction4() {
            document.getElementById("myDrop4").classList.toggle("show");
          }

          function myFunction5() {
            document.getElementById("myDrop5").classList.toggle("show");
          }

          var e = document.getElementById("monthly"),
          d = document.getElementById("annually"),
          t = document.getElementById("switcher"),
          m = document.getElementById("month"),
          y = document.getElementById("year");
      
      e.addEventListener("click", function(){
        t.checked = false;
        
        m.classList.remove("hide");
        y.classList.add("hide");
      });
      
      d.addEventListener("click", function(){
        t.checked = true;
        
        m.classList.add("hide");
        y.classList.remove("hide");
      });
      
      t.addEventListener("click", function(){
        
        m.classList.toggle("hide");
        y.classList.toggle("hide");
      })

     function selectOption(that){
      if(that.value=="organisation"){
        document.getElementById("new").style.display="block";
        document.getElementById("new1").style.display="block";
        document.getElementById("new2").style.display="block";
      }else {
        document.getElementById("new").style.display="none";
        document.getElementById("new1").style.display="none";
        document.getElementById("new2").style.display="none";
      }
     } 
    

    function testFinish(){
      var frm=document.getElementById("frm");
      console.log(frm)
      var ck=document.querySelector('#tnc');
      if(frm['full-name'].value != '' && frm['email'].value != ''  && frm['phone'].value != ''
       && frm['opt'].value != 0 && frm['opt1'].value != 0 && frm['address'].value != '' && ck.checked == true){
        if(frm['opt'].value=='organisation'){
          if(frm['job'].value != '' && frm['org'].value!=''){
            frm['finish'].disabled=false;
            
          }
        }else{
          frm['finish'].disabled=false;
          //document.getElementById('butn').style.background="#0096ff";
          // document.getElementById('butn').style.cursor="pointer";
        }
        

      }else{
        frm['finish'].disabled=true;
      }
    }

    function check1(){
      var ck=document.querySelector('#rememberMe');
      var frm=document.getElementById('frm');
      if(frm['email'].value != '' && frm['password'].value != '' && ck.checked==true){
        frm['login'].disabled=false;
        document.getElementById('butn').style.cursor="pointer";
      }else{
        frm['login'].disabled=true;
      }
    }

    function testReset(){
      var frm=document.getElementById('frm');
      if(frm['password'].value!='' && frm['re-password'].value!=''){
        frm['finish'].disabled=false;
        document.getElementById('butn').style.background="#0096ff";
        document.getElementById('butn').style.cursor="pointer";
      }else {
        frm['finish'].disabled=true;
      }
    }
    function forgot(){
      var frm=document.getElementById('frm');
      if(frm['email'].value!=''){
        frm['finish'].disabled=false;
        document.getElementById('butn').style.background="#0096ff";
        document.getElementById('butn').style.cursor="pointer";
      }else{
        frm['finish'].disabled=true;
      }
    }

    

     
     