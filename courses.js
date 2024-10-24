const courses = [
    { id: 1, title: "Bachelor of Technology (BTech)", description: "A comprehensive program focusing on engineering principles, technology, and innovation." },
    { id: 2, title: "Bachelor of Business Administration (BBA)", description: "Focuses on management, finance, marketing, and entrepreneurship." },
    { id: 3, title: "Bachelor of Designing (BDes)", description: "Explores creativity and technical skills across various design fields." },
    { id: 4, title: "Bachelor of Science (BSc)", description: "Emphasizes scientific research, mathematics, and analytical skills." },
    { id: 5, title: "Bachelor of Commerce (BCom)", description: "Covers accounting, economics, business law, and finance." },
    { id: 6, title: "Bachelor of Arts (BA)", description: "Offers a diverse range of subjects in humanities, social sciences, and fine arts." },
];

function displayCourses() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course';
        courseDiv.innerHTML = `
            <label>
                <input type="checkbox" value="${course.id}">
                <strong>${course.title}</strong>: ${course.description}
            </label>
        `;
        courseList.appendChild(courseDiv);
    });
}

function enrollCourses() {
    const selectedCourses = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
        .map(checkbox => checkbox.value);
    if (selectedCourses.length > 0) {
        const courseNames = selectedCourses.map(id => courses.find(course => course.id == id).title).join(', ');
        const confirmed = confirm(`You have enrolled in courses: ${courseNames}. Click OK to proceed to the course page.`);
        if (confirmed) {
            window.location.href = "pricing.html"; // Replace with  desired HTML file name
        }
    } else {
        alert('No courses selected.');
    }
}

document.getElementById('enroll-button').addEventListener('click', enrollCourses);


displayCourses();
