var arrowKeyPressCount = 0;

function activateEasterEgg() {
    document.body.style.overflow = 'hidden';
    var heIsComing = document.querySelector('.heIsComing');
    heIsComing.style.display = 'block';
    setTimeout(function() {
        heIsComing.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 5000);
}


setTimeout(function() {
    activateEasterEgg();
}, 15000);