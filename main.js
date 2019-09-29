//selecting the DOM elements

const time=document.getElementById('time');
      greeting=document.getElementById('greeting');
      name=document.getElementById('name');
      focus=document.getElementById('focus');


//show time
function showTime()
{
    let today=new Date(),
    hour=today.getHours(),
    min=today.getMinutes(),
    sec=today.getSeconds();

    const amPm=hour>=12 ? 'PM' : 'AM';
    //12 hours format
    hour=hour%12 ||12;
    //output the time
    time.innerHTML=`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
   setTimeout(showTime,1000);
} 

//add zeroes
function addZero(n)
{
    return (parseInt(n,10)<10 ? '0' : '')+ n;  
}

//setbackground and greeting
function setBgGreet()
{
var today=new Date();
    hour=today.getHours();
    if(hour<=12)
    {
        document.body.style.backgroundImage="url('Budda.jpg')";
        document.body.style.width=100;
        greeting.textcontent="Good Morning.";
        //morning
    }
    else if(hour<18)
    {
    //afternoon
        document.body.style.backgroundImage = "url('G:\projects\dynamic-time\Budda.jpg')";
        greeting.textcontent = "Good Afternoon.";
        document.body.style.color = "white";
    }
    else
    {
//evening
        document.body.style.backgroundImage = "url('stevr.jpg')";
        greeting.textcontent = "Good Night.";
        document.body.style.color="white";
    }
}
//run and call show time
showTime(); 
setBgGreet();
