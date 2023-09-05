let controlbtn=document.querySelectorAll('.control')
let activecontrolbtn=document.querySelector('.active-btn')
let main=document.querySelector('.main')

// adding bg-color on click and removing the previous one
for(let i=0;i<controlbtn.length;i++)
{   
    controlbtn[i].addEventListener('click' ,function(){

        activecontrolbtn.classList.remove('active-btn')
        controlbtn[i].classList.add('active-btn');
        activecontrolbtn=controlbtn[i];
    })
}
//toggle on double click, the background color will disappear
for(let i=0;i<controlbtn.length;i++)
{
    controlbtn[i].addEventListener('dblclick',function(){
        controlbtn[i].classList.toggle('active-btn')
    })
}

controlbtn.forEach(btn =>{
    btn.addEventListener('click',(e)=>{
        // console.log(e.target)
        document.querySelectorAll('.active').forEach(activememb =>{
            activememb.classList.remove('active')
        })  
        btn.classList.add('active');
        // console.log(btn.dataset.id)
        document.getElementById(btn.dataset.id).classList.add("active");
    })
})
