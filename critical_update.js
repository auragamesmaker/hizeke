// Critical System Update Script v2.1.4 - Security Module
// WARNING: This is a prank script. No actual data is accessed.

(function() {
    // Dummy cryptographic functions
    function encryptData(data) {
        return btoa(data + Math.random().toString(36).substring(2));
    }

    // Fake network request simulation
    function sendToServer(data) {
        return new Promise(resolve => setTimeout(() => resolve('0x' + Math.random().toString(16).slice(2)), 1000));
    }

    // Console styling
    const style = `
        body {
            background-color: #000;
            color: #0f0;
            font-family: 'Courier New', monospace;
            margin: 0;
            padding: 20px;
            overflow: hidden;
        }
        #console {
            width: 100%;
            height: 100vh;
            background-color: #111;
            border: 2px solid #0f0;
            padding: 15px;
            overflow-y: auto;
            white-space: pre-wrap;
            font-size: 14px;
            line-height: 1.5;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.5);
        }
        .blink {
            animation: blink 1s step-end infinite;
        }
        @keyframes blink {
            50% { opacity: 0; }
        }
    `;

    // Create style element
    const styleSheet = document.createElement('style');
    styleSheet.textContent = style;
    document.head.appendChild(styleSheet);

    // Create console div
    const consoleDiv = document.createElement('div');
    consoleDiv.id = 'console';
    document.body.appendChild(consoleDiv);

    // Fake console messages
    const messages = [
        'Initializing Data Extraction Protocol...',
        'Bypassing Firewall: 192.168.1.1 [SUCCESS]',
        'Accessing /user/documents... [OK]',
        'Scanning: photos, passwords, financials...',
        'Decrypting AES-256 encryption... [SIMULATED]',
        'Extracting: ' + encryptData('user_data_') + '... 20% complete',
        'Connecting to C&C Server: 172.16.254.1...',
        'Extracting: ' + encryptData('sensitive_files_') + '... 60% complete',
        'Uploading data to darkpool... [SIMULATED]',
        'Extracting: ' + encryptData('private_keys_') + '... 95% complete',
        'ALERT: Intrusion Detection Bypassed!',
        'Data transfer complete.',
        "Type 'exit' to close this window."
    ];

    let index = 0;
    function typeMessage() {
        if (index < messages.length) {
            consoleDiv.innerHTML += messages[index] + '\n';
            consoleDiv.scrollTop = consoleDiv.scrollHeight;
            index++;
            setTimeout(typeMessage, Math.random() * 800 + 400);
        } else {
            consoleDiv.innerHTML += '<span class="blink">_</span>';
            document.addEventListener('keydown', (e) => {
                if (e.key.toLowerCase() === 'exit') {
                    window.close();
                }
            });
        }
    }

    // Start typing effect
    setTimeout(typeMessage, 500);

    // Fake async data processing
    async function fakeHack() {
        for (let i = 0; i < 3; i++) {
            await sendToServer('fake_data_' + i);
        }
    }
    fakeHack();

    // Prevent immediate window close
    window.onbeforeunload = () => 'System processing. Exit now?';
})();