// Toggle active state for sidebar menu items
document.querySelectorAll('.sidebar-menu a').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.sidebar-menu a').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Toggle active state for chat items
document.querySelectorAll('.chat-item').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelectorAll('.chat-item').forEach(i => {
            i.classList.remove('active');
        });
        this.classList.add('active');
        
        // Update chat header with selected user
        const userName = this.querySelector('.chat-item-name').textContent;
        document.querySelector('.chat-header h3').textContent = userName;
    });
});

// Send message functionality
document.querySelector('.chat-input button').addEventListener('click', sendMessage);
document.querySelector('.chat-input input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const input = document.querySelector('.chat-input input');
    const message = input.value.trim();
    
    if (message) {
        const messagesContainer = document.querySelector('.chat-messages');
        const now = new Date();
        const timeString = now.getHours() + ':' + (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        
        const messageElement = document.createElement('div');
        messageElement.className = 'message agent';
        messageElement.innerHTML = `
            <div class="message-content">${message}</div>
            <div class="message-time">${timeString}</div>
        `;
        
        messagesContainer.appendChild(messageElement);
        input.value = '';
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}
