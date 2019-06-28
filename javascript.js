const userName = document.querySelector('#customname');
const btn = document.querySelector('.customized');
const para = document.querySelector('.story');
let story = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty: they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised —— :insertx: weighs 300 pounds, and it was a hot day.";
let name = ['Willy the Goblin','Big Daddy','Father Christmas'];
let place = ['the soup kitchen','Disneyland','the White House'];
let adj = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];
function generate(){
    
    newStory = story.split(':insertx:').join(name[Math.floor(Math.random()*name.length)]);
    newStory = newStory.split(':inserty:').join(place[Math.floor(Math.random()*place.length)]);
    newStory = newStory.split(':insertz:').join(adj[Math.floor(Math.random()*adj.length)]);
    if(document.getElementById('uk').checked){
        newStory = newStory.split('94 fahrenheit').join('34 centigrade');
    }
    if(document.getElementById('uk').checked){
        newStory = newStory.split('300 pounds').join('21 stone');
    }
    if (userName.value !== ""){
        newStory =newStory.split('Bob').join(userName.value);
    }
    para.textContent = newStory;
    newStory = "";
}

btn.addEventListener('click',generate);

