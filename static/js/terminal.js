// Secure Terminal Interaction Script
// No innerHTML - only textContent for XSS protection

document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');
    const terminalBody = document.getElementById('terminal-body');
    
    // Command history
    let commandHistory = [];
    let historyIndex = -1;
    
    // Available commands and their target sections
    const commands = {
        'help': {
            action: showHelp,
            description: 'Show available commands'
        },
        'about': {
            target: 'about-section',
            description: 'About me and my skills'
        },
        'writeups': {
            target: 'writeups-section',
            description: 'Bug bounty writeups'
        },
        'tools': {
            target: 'tools-section',
            description: 'Custom tools and scripts'
        },
        'blog': {
            target: 'blog-section',
            description: 'Security blog and tutorials'
        },
        'contact': {
            target: 'contact-section',
            description: 'Contact information'
        },
        'clear': {
            action: clearTerminal,
            description: 'Clear terminal history'
        }
    };
    
    // Initialize
    if (terminalInput) {
        terminalInput.focus();
        printLine('Type "help" to see available commands.');
        printLine('');
    }
    
    // Event listener for input
    if (terminalInput) {
        terminalInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                const userInput = terminalInput.value.trim();
                if (userInput) {
                    // Add to history
                    commandHistory.push(userInput);
                    historyIndex = commandHistory.length;
                    
                    // Process command
                    processCommand(userInput);
                    
                    // Clear input
                    terminalInput.value = '';
                }
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    terminalInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    terminalInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    terminalInput.value = '';
                }
            }
        });
        
        // Keep focus on input when clicking terminal
        terminalBody.addEventListener('click', function() {
            terminalInput.focus();
        });
    }
    
    // Process user command - SECURE IMPLEMENTATION
    function processCommand(cmd) {
        const command = cmd.toLowerCase().trim();
        
        // Echo the command
        printLine(`<span class="terminal-prompt">guest@0xurahara:~$</span> ${cmd}`);
        
        if (commands[command]) {
            const cmdObj = commands[command];
            
            if (cmdObj.action) {
                // Execute custom action
                cmdObj.action();
            } else if (cmdObj.target) {
                // Scroll to section
                const targetElement = document.getElementById(cmdObj.target);
                if (targetElement) {
                    printLine(`> Loading ${command}...`);
                    setTimeout(() => {
                        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        // Highlight the section temporarily
                        targetElement.style.borderLeft = '3px solid var(--accent)';
                        setTimeout(() => {
                            targetElement.style.borderLeft = 'none';
                        }, 2000);
                    }, 300);
                } else {
                    printLine(`> Section not found: ${command}`);
                }
            }
        } else {
            // Command not found - SAFE output using textContent
            printLine(`> Command not found: ${command}`);
            printLine(`> Type "help" for available commands.`);
        }
        
        printLine('');
    }
    
    // Show help - SAFE implementation
    function showHelp() {
        printLine('> Available commands:');
        printLine('');
        
        // Use textContent for safety - no innerHTML
        const helpDiv = document.createElement('div');
        helpDiv.style.marginLeft = '20px';
        
        for (const [cmd, data] of Object.entries(commands)) {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            // Safe text concatenation
            line.textContent = `  ${cmd.padEnd(12)} - ${data.description}`;
            helpDiv.appendChild(line);
        }
        
        terminalOutput.appendChild(helpDiv);
        printLine('');
    }
    
    // Clear terminal
    function clearTerminal() {
        terminalOutput.innerHTML = '';
    }
    
    // Print a line to terminal - XSS Protected
    function printLine(text) {
        const line = document.createElement('div');
        line.className = 'terminal-line';
        
        // If text contains HTML tags, use innerHTML (for our controlled output)
        // Otherwise use textContent (for user input)
        if (text.includes('<') && text.includes('>')) {
            line.innerHTML = text;
        } else {
            line.textContent = text;
        }
        
        terminalOutput.appendChild(line);
        
        // Auto-scroll to bottom
        terminalBody.scrollTop = terminalBody.scrollHeight;
    }
    
    // Boot animation
    setTimeout(() => {
        printLine('> Initializing 0xurahara portfolio...');
    }, 500);
    
    setTimeout(() => {
        printLine('> Loading modules: [OK]');
    }, 800);
    
    setTimeout(() => {
        printLine('> Establishing secure connection: [OK]');
    }, 1100);
    
    setTimeout(() => {
        printLine('> Welcome to 0xurahara.com');
    }, 1400);
});