let username = "";
const joinChat = document.getElementById('join-chat');
const usernameInput = document.getElementById('username');
const form = document.getElementById('form');
const groupChat = document.getElementById('group-chat');

joinChat.addEventListener('click',(e)=>{
    e.preventDefault();
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