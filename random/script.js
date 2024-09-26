const canvas = document.getElementById("wheel");
const ctx = canvas.getContext("2d");
const people = [];
let targetIndex = null;

document.getElementById("addPerson").addEventListener("click", addPerson);
document.getElementById("spinWheel").addEventListener("click", spinWheel);
document.getElementById("targetPerson").addEventListener("click", targetLastPerson);

function addPerson() {
    const nameInput = document.getElementById("nameInput");
    const name = nameInput.value.trim();
    if (name && !people.includes(name)) {
        people.push(name);
        updatePeopleList();
        drawWheel();
        nameInput.value = "";
    }
}

function updatePeopleList() {
    const peopleList = document.getElementById("peopleList");
    peopleList.innerHTML = people.map((person, index) => 
        `<li>${person} <button onclick="removePerson(${index})">Remove</button></li>`
    ).join("");
}

function removePerson(index) {
    people.splice(index, 1);
    updatePeopleList();
    drawWheel();
}

function drawWheel() {
    const numSegments = people.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    people.forEach((person, index) => {
        const angleStart = index * anglePerSegment;
        const angleEnd = angleStart + anglePerSegment;
        
        ctx.beginPath();
        ctx.moveTo(200, 200);
        ctx.arc(200, 200, 200, angleStart, angleEnd);
        ctx.fillStyle = `hsl(${(360 / numSegments) * index}, 70%, 50%)`;
        ctx.fill();
        ctx.stroke();

        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate(angleStart + anglePerSegment / 2);
        ctx.fillStyle = "#fff";
        ctx.font = "16px Arial";
        ctx.fillText(person, 100, 10);
        ctx.restore();
    });
}

let spinning = false;

function spinWheel() {
    if (people.length === 0 || spinning) return;
    
    spinning = true;
    let duration = Math.random() * 3000 + 3000;
    let spinAngle = Math.random() * 360 + 1080; // Spin at least 3 full rounds
    
    const start = performance.now();

    const animate = (time) => {
        const elapsed = time - start;
        const progress = elapsed / duration;
        const currentAngle = spinAngle * progress;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.save();
        ctx.translate(200, 200);
        ctx.rotate((currentAngle * Math.PI) / 180);
        drawWheel();
        ctx.restore();

        if (elapsed < duration) {
            requestAnimationFrame(animate);
        } else {
            spinning = false;
            const selected = Math.floor((spinAngle % 360) / (360 / people.length));
            alert(`Selected: ${people[selected]}`);
        }
    };

    requestAnimationFrame(animate);
}

function targetLastPerson() {
    if (people.length === 1) {
        alert(`Only one person left: ${people[0]}`);
        return;
    }

    targetIndex = Math.floor(Math.random() * people.length);
    alert(`Targeting last person to be: ${people[targetIndex]}`);
}
