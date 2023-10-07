let ageIntervalId; // Variable to hold the interval ID

function calculateAge() {
    const dobInput = document.getElementById("dob");
    const ageOutput = document.getElementById("age");

    const dob = new Date(dobInput.value);
    const now = new Date();
    const ageMilliseconds = now - dob;
    const ageYears = ageMilliseconds / (365.25 * 24 * 60 * 60 * 1000); // Account for leap years

    ageOutput.textContent = `Age: ${ageYears.toFixed(12)} years old`;
}

function startAgeUpdate() {
    calculateAge(); // Initial calculation

    // Start updating the age every 0.1 second (100 milliseconds)
    ageIntervalId = setInterval(calculateAge, 100);
}
