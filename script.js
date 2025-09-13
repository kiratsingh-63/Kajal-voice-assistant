let btn = document.querySelector("#btn");
let content = document.querySelector("#content");
let voice = document.querySelector("#voice");


 function speak(text) {
    let text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.pitch = 1;
    text_speak.volume=1;
    text_speak.lang = "hi-Gb";
    window.speechSynthesis.speak(text_speak);
 }

 function wishMe() {
    let day = new Date();
    let hour = day.getHours();
    if(hour>=0 && hour<12){
        speak("Good Morning Sir");
    }
    else if(hour>=12 && hour<16){
        speak("Good Afternoon Sir ");
    }
    else{
        speak("Good Evening Sir");
    }
 }

 window.addEventListener("load",()=>{
     wishMe();
   
 })

 let speechRecognition = window.speechRecognition || window.webkitSpeechRecognition;
let recongnition = new speechRecognition();
recongnition.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript = event.results[currentIndex][0].transcript;
    content.innerText = transcript;
    takeCommand(transcript.toLowerCase());
};

btn.addEventListener("click",()=>{
    recongnition.start();
    btn.style.display = "none";
    voice.style.display = "block";
})      
 function takeCommand(massage){
    btn.style.display = "flex";
    voice.style.display = "none";
    if(massage.includes("hello ")||massage.includes("hi ")){
        speak("hello sir what can i do for you");
    }
    else if(massage.includes("who are you")){
        speak("i am virtual assistant created by ayush");
    }
    else if(massage.includes(" i am neema")){
        speak("You are very fat , Go to gym daily and get fit you are very lazy i know that you cooks very well but please do not eat any junk food");
    }
    else if(massage.includes(" go to hell")){
        speak("Ok, You also come along");
    }
    else if(massage.includes("i love you")){
        speak("sorry i am not in love with you");
    }

    else if(massage.includes("how are you")){
        speak("i am fine sir");
    }
    else if(massage.includes("open youtube")){
        speak("opening youtube...");
        window.open("https://www.youtube.com/","_blank");
       
    }
    else if(massage.includes("open google")){
        speak("opening google...");
        window.open("https://www.google.com/","_blank");
       
    }
    else if(massage.includes("open facebook")){
        speak("opening facebook...");
        window.open("https://www.facebook.com/","_blank");
       
    }
    else if(massage.includes("open instagram")){
        speak("opening instagram...");
        window.open("https://www.instagram.com/","_blank");
       
    }
    else if(massage.includes("open whatsapp")){
        speak("opening whatsapp...");
        window.open("whatsapp://");
       
    }
    else if(massage.includes("open calculator")){
        speak("opening calculator...");
        window.open("calculator://");
       
    }
    else if(massage.includes("time")){
        let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"});
        speak(time)
    }

    else if(massage.includes("date")){
        let date = new Date().toLocaleString(undefined,{day:"numeric",month:"short"});
        speak(date)
    }
    else{
        speak("this is what found on internet regarding "+massage.replace("shifra","")||massage.replace("shipra",""));
        window.open(`https://www.google.com/search?q=${massage.replace("shifra","")||massage.replace("shipra","")}`);
    }
    
 }