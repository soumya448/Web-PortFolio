document.addEventListener('DOMContentLoaded', () => {
    const cubeContainer = document.querySelector('.cube-container');
    
    function createCube() {
        const cube = document.createElement('div');
        cube.classList.add('cube');
        cube.style.left = `${Math.random() * 100}vw`;
        cube.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random fall duration
        cubeContainer.appendChild(cube);

        // Remove the cube after it falls
        setTimeout(() => {
            cube.remove();
        }, 5000); // Slightly longer than the max animation duration
    }

    // Continuously create cubes
    setInterval(createCube, 300); // Adjust the frequency of cube creation
});



function scrollToSection() {
    document.getElementById('projects').scrollIntoView({
      behavior: 'smooth'
    });
  }
  