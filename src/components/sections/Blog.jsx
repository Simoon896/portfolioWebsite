import { useState } from 'react';
import '../../styles/Blog.css';

function Blog() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Creating Cosmic Animations with CSS and SVG",
      date: "June 15, 2023",
      excerpt: "Explore techniques for creating stunning space-inspired animations using CSS and SVG to bring celestial movement to your web projects.",
      category: "Web Design",
      readTime: "6 min read",
      imageUrl: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Cosmic+Animations",
      url: "#blog-post-1"
    },
    {
      id: 2,
      title: "Designing with Starlight: Color Theory for Night Themes",
      date: "May 28, 2023",
      excerpt: "A deep dive into color theory specifically for dark mode and night sky themed designs, with practical examples and palette suggestions.",
      category: "Design",
      readTime: "8 min read",
      imageUrl: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Color+Theory",
      url: "#blog-post-2"
    },
    {
      id: 3,
      title: "Setting Up a Creative Digital Workshop",
      date: "April 10, 2023",
      excerpt: "How I set up my creative workspace for digital design, including hardware, software, and inspiration resources for cosmic themes.",
      category: "Tools",
      readTime: "10 min read",
      imageUrl: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Digital+Workshop",
      url: "#blog-post-3"
    },
    {
      id: 4,
      title: "Interactive Constellation Effects with JavaScript",
      date: "March 5, 2023",
      excerpt: "A guide to creating interactive constellation effects that respond to user input, perfect for engaging space-themed websites.",
      category: "Development",
      readTime: "12 min read",
      imageUrl: "https://via.placeholder.com/600x340/0a1020/8ab4f8?text=Interactive+Constellations",
      url: "#blog-post-4"
    }
  ]);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">Creative Insights & Tutorials</h2>
        
        <div className="blog-posts">
          {blogPosts.map(post => (
            <div className="blog-card" key={post.id}>
              <div className="blog-card-img">
                <img src={post.imageUrl} alt={post.title} />
                <div className="blog-category">{post.category}</div>
              </div>
              <div className="blog-card-content">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                  <span className="blog-read-time">{post.readTime}</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <a href={post.url} className="read-more">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="blog-cta">
          <h3>Have a Project in Mind?</h3>
          <p>Let's collaborate to build something amazing together.</p>
          <a href="/" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}

export default Blog; 