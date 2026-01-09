// Auto-Call Application
// No persistent storage - all data is session-only

class AutoCallApp {
    constructor() {
        this.mainForm = document.getElementById('mainForm');
        this.loadingScreen = document.getElementById('loadingScreen');
        this.resultScreen = document.getElementById('resultScreen');
        this.callForm = document.getElementById('callForm');
        this.newCallBtn = document.getElementById('newCallBtn');
        
        this.callStartTime = null;
        this.callTimerInterval = null;
        this.callData = null; // Session-only storage
        
        this.init();
    }
    
    init() {
        // Form submit handler
        this.callForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.startCall();
        });
        
        // New call button handler
        this.newCallBtn.addEventListener('click', () => {
            this.resetApp();
        });
        
        // Prevent accidental page refresh during call
        window.addEventListener('beforeunload', (e) => {
            if (!this.loadingScreen.classList.contains('hidden')) {
                e.preventDefault();
                e.returnValue = '';
                return 'Ein Anruf ist im Gange. Möchten Sie die Seite wirklich verlassen?';
            }
        });
    }
    
    startCall() {
        const name = document.getElementById('name').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const sanitizedPhone = phone.replace(/[^+\d]/g, '');
        
        if (!name || !phone) {
            alert('Bitte füllen Sie alle Felder aus.');
            return;
        }
        
        // Store call data in memory only (not persistent)
        this.callData = {
            name: name,
            phone: phone,
            sanitizedPhone,
            startTime: new Date(),
            answered: null,
            duration: null
        };
        
        // Switch to loading screen
        this.showLoadingScreen(name, phone);
        this.initiateDeviceCall(sanitizedPhone);
        
        // Simulate call process
        this.simulateCall();
    }
    
    showLoadingScreen(name, phone) {
        this.mainForm.classList.add('hidden');
        this.resultScreen.classList.add('hidden');
        this.loadingScreen.classList.remove('hidden');
        
        document.getElementById('callingName').textContent = name;
        document.getElementById('callingPhone').textContent = phone;
        
        // Start timer
        this.callStartTime = Date.now();
        this.startCallTimer();
    }

    initiateDeviceCall(phone) {
        if (!phone) return;
        
        const telLink = document.createElement('a');
        telLink.href = `tel:${phone}`;
        telLink.style.display = 'none';
        document.body.appendChild(telLink);
        telLink.click();
        telLink.remove();
    }
    
    startCallTimer() {
        this.callTimerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.callStartTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            document.getElementById('callTimer').textContent = 
                `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }, 1000);
    }
    
    stopCallTimer() {
        if (this.callTimerInterval) {
            clearInterval(this.callTimerInterval);
            this.callTimerInterval = null;
        }
    }
    
    simulateCall() {
        /*
         * In a real implementation, this would:
         * 1. Initiate a call to the provided number
         * 2. Monitor call status via webhooks
         * 3. Automatically hang up when answered
         * 4. Return actual call duration and status
         * 
         * For demonstration purposes, we simulate the call behavior:
         * - Random delay (3-8 seconds) before "answer"
         * - Random chance of being answered (70%)
         * - Auto hang-up immediately if answered
         */
        
        const ringDuration = 3000 + Math.random() * 5000; // 3-8 seconds
        const willAnswer = Math.random() < 0.7; // 70% chance of answering
        
        setTimeout(() => {
            if (willAnswer) {
                // Person answered - hang up immediately
                const callDuration = Math.floor((Date.now() - this.callStartTime) / 1000);
                this.endCall(true, callDuration);
            } else {
                // No answer after timeout
                const maxRingTime = 20000; // 20 seconds max ring time
                
                setTimeout(() => {
                    const callDuration = Math.floor((Date.now() - this.callStartTime) / 1000);
                    this.endCall(false, callDuration);
                }, maxRingTime - ringDuration);
            }
        }, ringDuration);
    }
    
    endCall(answered, duration) {
        this.stopCallTimer();
        
        // Update call data
        if (this.callData) {
            this.callData.answered = answered;
            this.callData.duration = duration;
            this.callData.endTime = new Date();
        }
        
        // Show results
        this.showResults(answered, duration);
    }
    
    showResults(answered, duration) {
        this.loadingScreen.classList.add('hidden');
        this.resultScreen.classList.remove('hidden');
        
        // Update result icon
        const resultIcon = document.getElementById('resultIcon');
        if (answered) {
            resultIcon.textContent = '✓';
            resultIcon.classList.remove('not-answered');
        } else {
            resultIcon.textContent = '✗';
            resultIcon.classList.add('not-answered');
        }
        
        // Update result details
        document.getElementById('resultName').textContent = this.callData.name;
        document.getElementById('resultPhone').textContent = this.callData.phone;
        
        const statusElement = document.getElementById('resultStatus');
        if (answered) {
            statusElement.textContent = 'Angenommen (sofort aufgelegt)';
            statusElement.classList.add('answered');
            statusElement.classList.remove('not-answered');
        } else {
            statusElement.textContent = 'Nicht angenommen';
            statusElement.classList.add('not-answered');
            statusElement.classList.remove('answered');
        }
        
        const minutes = Math.floor(duration / 60);
        const seconds = duration % 60;
        document.getElementById('resultDuration').textContent = 
            `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    
    resetApp() {
        // Clear all session data
        this.callData = null;
        this.callStartTime = null;
        this.stopCallTimer();
        
        // Reset form
        this.callForm.reset();
        
        // Show main form
        this.resultScreen.classList.add('hidden');
        this.loadingScreen.classList.add('hidden');
        this.mainForm.classList.remove('hidden');
    }
}

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AutoCallApp();
});
