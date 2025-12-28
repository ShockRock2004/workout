/* --- DATA CONFIGURATION --- */
const workoutData = {
    "chest-triceps": {
        title: "Chest & Triceps",
        subtitle: "Push Strength / Hypertrophy",
        color: "blue",
        exercises: [
            { name: "Incline Bench Press", img: "incline-bench-press.png", form: "Keep elbows at 45 degrees. Drive up efficiently.", target: "Upper Pectorals" },
            { name: "Decline Bench Press", img: "decline-bench-press.png", form: "Focus on the lower chest sweep.", target: "Lower Pectorals" },
            { name: "Pec Fly", img: "pec-fly.png", form: "Stretch wide, squeeze at the top without touching weights.", target: "Inner Chest" },
            { name: "Flat Bench Press", img: "flat-bench-press.png", form: "Arch back slightly, retract scapula.", target: "Overall Chest" },
            { name: "Seated Overhead Dumbbell Triceps Extension", img: "seated-overhead-dumbbell-triceps-extension.png", form: "Keep elbows tucked in close to ears.", target: "Long Head Triceps" },
            { name: "Cable Pushdowns", img: "cable-pushdowns.png", form: "Lock elbows by your side. Only forearms move.", target: "Lateral Head" },
            { name: "Overhead Cable Triceps Extension", img: "overhead-cable-triceps-extension.png", form: "Lean forward slightly, full extension.", target: "Triceps Stretch" }
        ]
    },
    "back-biceps": {
        title: "Back & Biceps",
        subtitle: "Pull Power / Width",
        color: "blue",
        exercises: [
            { name: "Lat Pulldown", img: "lat-pulldown.png", form: "Pull elbows down to hips, not just back.", target: "Lats Width" },
            { name: "Seated Cable Row", img: "seated-cable-row.png", form: "Keep chest up, squeeze shoulder blades.", target: "Mid-Back Thickness" },
            { name: "Dumbbell Row", img: "dumbbell-row.png", form: "Support on bench, pull to hip pocket.", target: "Unilateral Lats" },
            { name: "T-Bar Rows", img: "t-bar-rows.png", form: "Maintain neutral spine, heavy compound pull.", target: "Overall Back" },
            { name: "Preacher Curl", img: "preacher-curl.png", form: "Armpits over the pad, full stretch.", target: "Bicep Peak" },
            { name: "Concentration Curl", img: "concentration-curl.png", form: "Elbow against inner thigh, isolation.", target: "Short Head" },
            { name: "Rope Hammer Curl", img: "rope-hammer-curl.png", form: "Neutral grip, pull towards shoulders.", target: "Brachialis" }
        ]
    },
    "shoulders": {
        title: "Shoulders",
        subtitle: "3D Delts / Stability",
        color: "blue",
        exercises: [
            { name: "Overhead Shoulder Press", img: "overhead-shoulder-press.png", form: "Core tight, press vertically without arching.", target: "Front Delts" },
            { name: "Dumbbell Front Raise", img: "dumbbell-front-raise.png", form: "Lift to eye level, control descent.", target: "Anterior Delts" },
            { name: "Dumbbell Lateral Raise", img: "dumbbell-lateral-raise.png", form: "Lead with elbows, pour the pitcher.", target: "Side Delts" },
            { name: "Shrugs", img: "shrugs.png", form: "Lift shoulders to ears, pause at top.", target: "Traps" },
            { name: "Reverse Pec Deck", img: "reverse-pec-deck.png", form: "Drive arms back using rear delts only.", target: "Rear Delts" },
            { name: "Upright Row", img: "upright-row.png", form: "Wide grip to protect rotator cuff.", target: "Side Delts/Traps" },
            { name: "Rope Face Pull", img: "rope-face-pull.png", form: "Pull to forehead, external rotation.", target: "Rear Delts/Rotators" }
        ]
    },
    "legs": {
        title: "Legs",
        subtitle: "Foundation / Power",
        color: "blue",
        exercises: [
            { name: "Seated Leg Curl", img: "seated-leg-curl.png", form: "Lock hips into seat, curl fully.", target: "Hamstrings" },
            { name: "Adductor and Abductor", img: "adductor-and-abductor.png", form: "Control the negative, do not swing.", target: "Hips/Inner Thigh" },
            { name: "Barbell Squats", img: "barbell-squats.png", form: "Knees out, chest up, break parallel.", target: "Quads/Glutes" },
            { name: "Seated Leg Extension", img: "seated-leg-extension.png", form: "Squeeze quads hard at the top.", target: "Quads Isolation" },
            { name: "Dumbbell Romanian Deadlift", img: "dumbbell-romanian-deadlift.png", form: "Hinge at hips, slight knee bend.", target: "Hamstrings/Glutes" },
            { name: "Seated Calf Raise Machine", img: "seated-calf-raise-machine.png", form: "Full range of motion, pause at bottom.", target: "Calves" }
        ]
    },
    "abs": {
        title: "Abs & Core",
        subtitle: "Stability / Definition",
        color: "green",
        exercises: [
            { name: "Plank Shoulder Tap", img: "plank-shoulder-tap.png", form: "Anti-rotation, keep hips still.", target: "Core Stability" },
            { name: "Leg Raises", img: "leg-raises.png", form: "Lower back glued to floor/bench.", target: "Lower Abs" },
            { name: "Crunches", img: "crunches.png", form: "Exhale sharply on contraction.", target: "Upper Abs" },
            { name: "Bicycle Crunches", img: "bicycle-crunches.png", form: "Elbow to opposite knee, slow tempo.", target: "Obliques" },
            { name: "Mountain Climbers", img: "mountain-climbers.png", form: "Drive knees to chest, keep rhythm.", target: "Core/Cardio" },
            { name: "Seated Knee Tucks", img: "seated-knee-tucks.png", form: "Balance on glutes, bring knees in.", target: "Rectus Abdominis" }
        ]
    },
    "cardio": {
        title: "Cardio",
        subtitle: "Endurance / Heart Health",
        color: "red",
        exercises: [
            { name: "Elliptical", img: "elliptical.png", form: "Maintain steady RPM, use handles for upper body.", target: "Full Body Endurance" }
        ]
    }
};

const muscleIcons = {
    "chest-triceps": "ph-barbell",
    "back-biceps": "ph-person-arms-spread",
    "shoulders": "ph-person-simple-throw",
    "legs": "ph-person-simple-walk",
    "abs": "ph-person-simple-run", 
    "cardio": "ph-heart" 
};

/* --- ROUTER & VIEW LOGIC --- */
const router = {
    navigate: (viewId) => {
        document.querySelectorAll('.view').forEach(el => el.classList.remove('active-view'));
        document.getElementById(`view-${viewId}`).classList.add('active-view');
        
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));
        if(viewId === 'home' || viewId === 'workout') {
            document.querySelector('.nav-btn:nth-child(1)').classList.add('active');
            document.body.style.overflow = viewId === 'workout' ? 'hidden' : 'auto'; 
        } else {
            document.querySelector('.nav-btn:nth-child(2)').classList.add('active');
            document.body.style.overflow = 'auto';
        }
    }
};

/* --- RENDER HOMEPAGE --- */
function initHome() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = '';

    for (const [key, data] of Object.entries(workoutData)) {
        const iconClass = muscleIcons[key] || 'ph-barbell';
        
        const card = document.createElement('div');
        card.className = 'muscle-card';
        card.setAttribute('data-id', key);
        
        card.innerHTML = `
            <div style="display:flex; align-items:center;">
                <i class="ph ${iconClass}"></i>
                <h3>${data.title}</h3>
            </div>
            <i class="ph ph-caret-right" style="font-size: 1.2rem; color: var(--text-muted); background: none; -webkit-text-fill-color: var(--text-muted);"></i>
        `;
        
        card.addEventListener('click', () => loadWorkoutPage(key));
        grid.appendChild(card);
    }
}

/* --- RENDER WORKOUT PAGE (SCROLL SNAP) --- */
function loadWorkoutPage(key) {
    const data = workoutData[key];
    const container = document.getElementById('exercise-list');
    container.innerHTML = '';

    // 1. FIXED BACK BUTTON
    const backBtn = document.createElement('button');
    backBtn.className = 'back-nav-btn fixed-back-btn';
    backBtn.innerHTML = '<i class="ph ph-arrow-left"></i> Back';
    backBtn.onclick = () => {
        router.navigate('home');
    };
    container.appendChild(backBtn);

    // 2. INTRO SLIDE
    const introSlide = document.createElement('div');
    introSlide.className = 'workout-intro-slide';
    introSlide.innerHTML = `
        <h1 style="font-size: 4rem; text-transform: uppercase; margin-bottom: 1rem; text-align: center;">${data.title}</h1>
        <p style="color: var(--text-muted); font-size: 1.2rem; letter-spacing: 2px; text-transform: uppercase;">${data.subtitle}</p>
        <div style="margin-top: 3rem; animation: bounce 2s infinite">
            <i class="ph ph-arrow-down" style="font-size: 2rem; color: #00c6ff;"></i>
        </div>
    `;
    container.appendChild(introSlide);

    // 3. EXERCISE SLIDES
    data.exercises.forEach((ex) => {
        const card = document.createElement('div');
        card.className = 'exercise-card';
        const imgPath = `assets/images/${key}/${ex.img}`;
        
        card.innerHTML = `
            <div class="ex-image">
                <img src="${imgPath}" alt="${ex.name}" onerror="this.src='https://via.placeholder.com/800x800/0a0a0f/333?text=${ex.name}'">
            </div>
            <div class="ex-content">
                <div class="meta">
                    <span class="tag" style="border-color: #00c6ff; color: #00c6ff;">${ex.target}</span>
                </div>
                <h2 style="font-size: 3rem; margin-top: 1rem;">${ex.name}</h2>
                <p style="color:var(--text-muted); line-height: 1.6; font-size: 1.1rem; margin-top: 1.5rem;">${ex.form}</p>
            </div>
        `;
        container.appendChild(card);
    });

    router.navigate('workout');
}

/* --- WEEKLY PLANNER & PERSISTENCE --- */
let selectedMobileItem = null; // State for mobile interaction

function savePlan() {
    const planData = [];
    document.querySelectorAll('.drop-zone').forEach(zone => {
        const day = zone.getAttribute('data-day');
        const slot = zone.getAttribute('data-slot');
        const item = zone.querySelector('.draggable-item');
        if (item) {
            planData.push({
                day: day,
                slot: slot,
                id: item.getAttribute('data-original-id'),
                title: item.innerText.replace('✕', '').trim()
            });
        }
    });
    localStorage.setItem('aeroWeeklyPlan', JSON.stringify(planData));
}

function loadPlan() {
    const saved = localStorage.getItem('aeroWeeklyPlan');
    if (!saved) return;
    const planData = JSON.parse(saved);
    planData.forEach(entry => {
        const zone = document.querySelector(`.drop-zone[data-day="${entry.day}"][data-slot="${entry.slot}"]`);
        if (zone) {
            renderDroppedItem(zone, entry.id, entry.title);
        }
    });
}

function renderDroppedItem(zone, id, title) {
    zone.innerHTML = `
        <div class="draggable-item" data-original-id="${id}" style="cursor: default; width: 100%; height: 100%; margin:0; justify-content: center; background: #00c6ff; color: #000; font-weight: 700;">
            ${title} <span class="delete-btn" style="font-size:12px; opacity: 0.6; margin-left: 10px; cursor: pointer; padding: 5px;">✕</span>
        </div>
    `;
    zone.querySelector('.delete-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        zone.innerHTML = 'Drop Workout';
        savePlan();
    });
}

function initPlanner() {
    const source = document.getElementById('draggable-source');
    source.innerHTML = '';
    
    // Sidebar items
    for (const [key, data] of Object.entries(workoutData)) {
        const item = document.createElement('div');
        item.className = 'draggable-item';
        item.draggable = true;
        item.setAttribute('data-id', key);
        item.innerHTML = `<i class="ph ${muscleIcons[key]}"></i> ${data.title}`;
        
        // Desktop Drag Start
        item.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', key);
            e.dataTransfer.effectAllowed = 'copy';
        });

        // Mobile Tap Selection Logic
        item.addEventListener('click', () => {
            // Only active on small screens or touch
            if (window.innerWidth <= 768) {
                // Clear previous selection
                document.querySelectorAll('.draggable-item').forEach(el => el.classList.remove('selected'));
                // Set new selection
                if (selectedMobileItem === key) {
                    selectedMobileItem = null; // Deselect
                } else {
                    selectedMobileItem = key;
                    item.classList.add('selected');
                }
            }
        });

        source.appendChild(item);
    }

    // Grid Generation
    const weekGrid = document.getElementById('week-grid');
    weekGrid.innerHTML = '';
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    days.forEach(day => {
        const row = document.createElement('div');
        row.className = 'day-row';
        row.innerHTML = `
            <div class="day-label">${day}</div>
            <div class="drop-zone" data-day="${day}" data-slot="1">Drop Workout</div>
            <div class="drop-zone" data-day="${day}" data-slot="2">Drop Workout</div>
        `;
        weekGrid.appendChild(row);
    });

    // Drop Listeners (Desktop & Mobile)
    document.querySelectorAll('.drop-zone').forEach(zone => {
        // Desktop Drag Over
        zone.addEventListener('dragover', (e) => { e.preventDefault(); zone.classList.add('drag-over'); });
        zone.addEventListener('dragleave', () => { zone.classList.remove('drag-over'); });
        
        // Desktop Drop
        zone.addEventListener('drop', (e) => {
            e.preventDefault();
            zone.classList.remove('drag-over');
            const key = e.dataTransfer.getData('text/plain');
            const data = workoutData[key];
            if(data) {
                renderDroppedItem(zone, key, data.title);
                savePlan();
            }
        });

        // Mobile Tap to Assign
        zone.addEventListener('click', () => {
            if (window.innerWidth <= 768 && selectedMobileItem) {
                const data = workoutData[selectedMobileItem];
                if(data) {
                    renderDroppedItem(zone, selectedMobileItem, data.title);
                    savePlan();
                    // Reset selection after drop
                    selectedMobileItem = null;
                    document.querySelectorAll('.draggable-item').forEach(el => el.classList.remove('selected'));
                }
            }
        });
    });

    loadPlan();
}

/* --- INITIALIZATION --- */
document.addEventListener('DOMContentLoaded', () => {
    initHome();
    initPlanner();
});