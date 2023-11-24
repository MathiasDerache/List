function scrollToTop() {
    // Faites défiler vers le haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Utilisez 'smooth' pour un défilement fluide, 'auto' pour un défilement instantané
    });
}

function activateEasterEgg() {
    scrollToTop();

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
}, 10000);