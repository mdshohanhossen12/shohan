// ১. ওয়েবসাইটে ঢোকার সাথে সাথে নিয়মিত ব্যাকগ্রাউন্ডে ছোট অ্যানিমেশন
window.addEventListener('DOMContentLoaded', () => {
    setInterval(createFallingPetal, 600);
});

// গোলাপের পাপড়ি ও হার্ট তৈরি করার ফাংশন
function createFallingPetal() {
    const petal = document.createElement('div');
    petal.classList.add('falling-petal');
    
    const flowers = ['🌹', '🌸', '💖', '🌺', '❤️', '🌷', '✨'];
    petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
    
    petal.style.left = Math.random() * 95 + 'vw';
    petal.style.animationDuration = Math.random() * 3 + 4 + 's';
    petal.style.fontSize = Math.random() * 15 + 18 + 'px';
    
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 7000);
}

// ২. যেকোনো জায়গায় ক্লিক করলে আনলিমিটেড গোলাপ ও হার্ট রিঅ্যাক্ট
document.addEventListener('click', function(e) {
    const clickItem = document.createElement('div');
    clickItem.classList.add('click-heart');
    
    // প্রতি ক্লিকে র্যান্ডম গোলাপ বা হার্ট রিঅ্যাক্ট হবে
    const clickEmojis = ['🌹', '💖', '❤️', '🌸', '✨'];
    clickItem.innerHTML = clickEmojis[Math.floor(Math.random() * clickEmojis.length)];
    
    clickItem.style.left = e.clientX + 'px';
    clickItem.style.top = e.clientY + 'px';
    
    document.body.appendChild(clickItem);

    setTimeout(() => {
        clickItem.remove();
    }, 1200);
});

// ৩. বোতামে ক্লিক করলে ১ মিনিট "Mariya ❤️ Santo" এবং ১.৫ মিনিট গোলাপের বৃষ্টি
function triggerRoseShower() {
    alert("তোমার জন্য বিশেষ জাদুকরী মুহূর্ত শুরু হচ্ছে! ❤️🌹");
    
    // ১.৫ মিনিট (৯০ সেকেন্ড = ৯০,০০০ মিলি-সেকেন্ড) ধরে গোলাপ ও হার্টের বৃষ্টি
    const roseInterval = setInterval(() => {
        createFallingPetal();
    }, 100);

    setTimeout(() => {
        clearInterval(roseInterval);
    }, 90000); // ১.৫ মিনিট পর থামবে

    // ১ মিনিট (৬০ সেকেন্ড = ৬০,০০০ মিলি-সেকেন্ড) ধরে "Mariya ❤️ Santo" টেক্সট অ্যানিমেশন
    const textInterval = setInterval(() => {
        createLoveText();
    }, 1200);

    setTimeout(() => {
        clearInterval(textInterval);
    }, 60000); // ১ মিনিট পর থামবে
}

// "নাম না জানা কেউ ❤️ আমি শুধু তোমার" ভাসমান টেক্সট তৈরির ফাংশন
function createLoveText() {
    const loveText = document.createElement('div');
    loveText.classList.add('floating-love-text');
    loveText.innerHTML = 'আমার সপ্নের রাজ কুমারি ❤️  তোমার প্রিও  মানুষ ';
    
    loveText.style.left = Math.random() * 80 + 10 + 'vw';
    loveText.style.top = Math.random() * 80 + 10 + 'vh';
    
    document.body.appendChild(loveText);

    setTimeout(() => {
        loveText.remove(); 
    }, 4000);
}
// ৪. ব্যাকগ্রাউন্ড মিউজিক অটো প্লে সিস্টেম
let isMusicPlaying = false;

document.addEventListener('click', function() {
    const music = document.getElementById('bg-music');
    if (music && !isMusicPlaying) {
        music.play().then(() => {
            isMusicPlaying = true;
            console.log("Romantic music started playing!");
        }).catch(error => {
            console.log("Autoplay prevented:", error);
        });
    }
}, { once: true }); // প্রথমবার ক্লিক করলেই গান বাজবে

// মিউজিক অন/অফ করার টগল ফাংশন
function toggleMusic() {
    const music = document.getElementById('bg-music');
    const btn = document.getElementById('music-control-btn');
    
    if (music.paused) {
        music.play();
        btn.innerHTML = '🎵';
        btn.style.background = '#e84393';
    } else {
        music.pause();
        btn.innerHTML = '🔇';
        btn.style.background = '#b2bec3';
    }
}