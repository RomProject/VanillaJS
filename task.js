
///Grabing elements////////////////////////


  const text = document.querySelector('#text')
  const date = document.querySelector('#date')
  const hour = document.querySelector('#hour')
  const add = document.querySelector('#add')
  const clean = document.querySelector("#clean")
  const notedetail = document.querySelector('.notedetail')

///The clean btn//////

clean.addEventListener('click', function (e) {
    text.value = ""
    hour.value = ""
    date.value = ""
})


///Adding the notes/////

add.addEventListener('click', function (e) {

    
  
    


    const newnote = document.createElement('div')
    newnote.className = "note"
    const newnoteimg = document.createElement('img')
    newnoteimg.className = "noteimg"
    newnoteimg.src = "notebg.png"
    const newcontent = document.createElement('div')
    newcontent.className = "notecontent"
    const newtxt = document.createElement('div')
    newtxt.className = "notetxt"
    newtxt.textContent = text.value

    const newdate = document.createElement('div')
    newdate.className = "notedate"
    newdate.textContent = date.value
    const newhour = document.createElement('div')
    newhour.className = "notehour"
    newhour.textContent = hour.value
    

/////CREATING id for the notes///////////////////

    const id = Math.floor(Math.random()*1000)
    const savenote = {text:text.value,date:date.value,hour:hour.value}
    localStorage.setItem(id , JSON.stringify(savenote))

////////////////////////////////////////////////////////////////
    
  
    
    
    ///////appending childern/////


    newcontent.appendChild(newtxt)
    newcontent.appendChild(newdate)
    newcontent.appendChild(newhour)
    newnote.appendChild(newnoteimg)
    newnote.appendChild(newcontent)
    notedetail.appendChild(newnote)


    //note remove func////////////////////
    const closebtn = document.createElement('div')
    newnote.appendChild(closebtn)



    newnote.addEventListener("mouseover", function (e) {
        
        closebtn.classList.add("far", "fa-window-close", "exit")
      
    })

    closebtn.addEventListener('click', function (e) {
        
        newnote.style.display = "none"

    })


    ///Input validations////////////

    if (text.value == "") {

        alert("Please add text")

        newnote.style.display = "none"

        localStorage.clear()

    }

    if (hour.value == "" & date.value == "") {

        alert("Please add date & time")


        newnote.style.display = "none"

        

    }

   else if (date.value == "") {

        alert("Please add a date")

        newnote.style.display = "none"

    

    }

    else if(hour.value == ""){


        alert("Please add time")

    newnote.style.display ="none"
    
    

    }

    if(newnote.style.display == "none"){

        localStorage.clear()

    }
    
    



})



////////save notes in local storage/////////////////

for(let i = 0 ; i < localStorage.length ; i++){

    const notekey = localStorage.key(i)

    const notestorage =JSON.parse( localStorage.getItem(notekey))



  

    const newnote = document.createElement('div')
    newnote.className = "note"
    const newnoteimg = document.createElement('img')
    newnoteimg.className = "noteimg"
    newnoteimg.src = "notebg.png"
    const newcontent = document.createElement('div')
    newcontent.className = "notecontent"
    const newtxt = document.createElement('div')
    newtxt.className = "notetxt"
    newtxt.textContent = notestorage.text

    const newdate = document.createElement('div')
    newdate.className = "notedate"
    newdate.textContent = notestorage.date
    const newhour = document.createElement('div')
    newhour.className = "notehour"
    newhour.textContent = notestorage.hour

    newcontent.appendChild(newtxt)
    newcontent.appendChild(newdate)
    newcontent.appendChild(newhour)
    newnote.appendChild(newnoteimg)
    newnote.appendChild(newcontent)
    notedetail.appendChild(newnote)


///////////////Deleate notes from local strogae//////////////

    const closebtn = document.createElement('div')
    newnote.appendChild(closebtn)
    newnote.addEventListener("mouseover", function (e) {
        
        closebtn.classList.add("far", "fa-window-close", "exit")
      
    })

    closebtn.addEventListener('click', function (e) {
       
        localStorage.removeItem(notekey)
        newnote.style.display = "none"

    })
    }   
 ///////////////////////////////////////////////////////////////












