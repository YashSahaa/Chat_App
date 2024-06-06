
const socket = io(); // this will trigger io.on('connection')

let username = "";
const joinChat = document.getElementById('join-chat');
const usernameInput = document.getElementById('username');
const form = document.getElementById('form');
const groupChat = document.getElementById('group-chat');
const sendbtn = document.getElementById('send-button');
const messageContainer = document.getElementById("message-container");
const messageInput = document.getElementById('message-input');

joinChat.addEventListener('click',(e)=>{
    e.preventDefault();
    e.stopPropagation();
    if(usernameInput.value){
        username = usernameInput.value;
        //alert('chat page loading.....');
        //now diplay chat page and hide form page
        form.style.display = 'none';
        groupChat.style.display = 'block'; 

    }
    else{
        alert('please enter non-empty username');
    }
})

sendbtn.addEventListener('click',(event)=>{
    event.preventDefault();
    event.stopPropagation();
    let data = {
        id: socket.id,
        message: messageInput.value,
        username: username,
    };

    socket.emit('sending message',data);
    renderMessage(data,"SENT");
})

function renderMessage(data,type){
    const msgDiv = document.createElement('div');
    msgDiv.innerText = data.username +" : "+ data.message;

    if(type==="SENT"){
        msgDiv.setAttribute('class','message sent');
    }
    else{
        msgDiv.setAttribute('class','message');
    }
    messageContainer.append(msgDiv);
    messageInput.value="";
}

socket.on('io spreading message',(data)=>{
    if(data.id!==socket.id){
        renderMessage(data,"RECEIVED");
    }
    
});