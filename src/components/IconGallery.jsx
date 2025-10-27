import React from "react";
import "./IconGallery.css";

// Example icon data (SVG and PNG)
const icons = [
  {
    name: "Home",
    type: "svg",
    svg: `<svg width=\"32\" height=\"32\" viewBox=\"0 0 32 32\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\"><path d=\"M16 3L3 16h4v13h6V21h6v8h6V16h4L16 3z\" fill=\"#333\"/></svg>`
  },
  {
    name: "User",
    type: "png",
    src: "https://via.placeholder.com/32x32.png?text=U"
  },
  // Add more icons as needed
];

function handleCopy(svg) {
  navigator.clipboard.writeText(svg);
  alert("SVG code copied!");
}

function handleDownload(src, name) {
  const link = document.createElement("a");
  link.href = src;
  link.download = `${name}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}


const IconGallery = () => (
  <div className="icon-gallery-main">
    <nav className="icon-navbar">
      <div className="icon-navbar-brand">G owen</div>
      <ul className="icon-navbar-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="icon-gallery-container">
      <header className="icon-gallery-header">
        <h1>Icon Gallery</h1>
        <p>Minimal, responsive icon showcase (SVG & PNG)</p>
      </header>
      <div className="icon-gallery-grid">
        {icons.map((icon, idx) => (
          <div className="icon-card" key={idx}>
            <div className="icon-image">
              {icon.type === "svg" ? (
                <span dangerouslySetInnerHTML={{ __html: icon.svg }} />
              ) : (
                <img src={icon.src} alt={icon.name} width={32} height={32} />
              )}
            </div>
            <div className="icon-actions">
              {icon.type === "svg" ? (
                <button onClick={() => handleCopy(icon.svg)}>Copy SVG</button>
              ) : (
                <button onClick={() => handleDownload(icon.src, icon.name)}>Download PNG</button>
              )}
            </div>
            <div className="icon-name">{icon.name}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default IconGallery;
