/* Basic styling */
body {
    margin: 0;
    font-family: Arial, sans-serif;
    background: #e0f7ff; /* Light blue theme */
    overflow: hidden;
}

/* Startup screen styling */
#startup-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeOut 2s forwards;
    animation-delay: 2s;
    z-index: 10;
}

#startup-screen h1 {
    font-size: 3em;
    color: #007acc; /* Darker blue for contrast */
}

/* Fade out animation */
@keyframes fadeOut {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

/* Blurred background effect */
.gallery-container {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}

/* Gallery grid styling */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px;
    width: 90%;
    max-width: 1200px;
}

.gallery img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
}

/* Color blending effect */
body::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, #e0f7ff, #ffffff, #cceeff);
    z-index: -1;
    filter: blur(20px);
    opacity: 0.5;
}
