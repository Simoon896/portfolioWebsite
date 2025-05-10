import { useState } from 'react';
import '../../styles/Blog.css';

function Blog() {
  const [blogPosts] = useState([
    {
      id: 1,
      title: "Understanding XSS Vulnerabilities in Modern Web Applications",
      date: "June 15, 2023",
      excerpt: "Cross-Site Scripting (XSS) remains one of the most common web security vulnerabilities. In this post, I explore how attackers exploit XSS and practical mitigation strategies.",
      category: "Web Security",
      readTime: "6 min read",
      imageUrl: "https://via.placeholder.com/600x340/1a2332/00ff41?text=XSS+Vulnerabilities",
      url: "#blog-post-1"
    },
    {
      id: 2,
      title: "Investigating Network Intrusions: A CTF Walkthrough",
      date: "May 28, 2023",
      excerpt: "A detailed walkthrough of a Capture The Flag challenge focused on network forensics and how to identify indicators of compromise in network traffic.",
      category: "CTF",
      readTime: "8 min read",
      imageUrl: "https://via.placeholder.com/600x340/1a2332/00ff41?text=Network+Intrusions",
      url: "#blog-post-2"
    },
    {
      id: 3,
      title: "Building a Security-Focused Home Lab",
      date: "April 10, 2023",
      excerpt: "How I set up my home lab environment for security research, including virtualization, network segmentation, and monitoring tools.",
      category: "Tools",
      readTime: "10 min read",
      imageUrl: "https://via.placeholder.com/600x340/1a2332/00ff41?text=Security+Lab",
      url: "#blog-post-3"
    },
    {
      id: 4,
      title: "Reverse Engineering Android Apps for Security Analysis",
      date: "March 5, 2023",
      excerpt: "A guide to the tools and techniques I use for reverse engineering Android applications to identify security flaws and privacy concerns.",
      category: "Mobile Security",
      readTime: "12 min read",
      imageUrl: "https://via.placeholder.com/600x340/1a2332/00ff41?text=Android+Reverse+Engineering",
      url: "#blog-post-4"
    }
  ]);

  return (
    <section id="blog" className="blog-section">
      <div className="blog-container">
        <h2 className="section-title">Security Research & Insights</h2>
        
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
          <h3>Interested in Cybersecurity? Let's Connect!</h3>
          <p>Follow my research or reach out for collaboration opportunities.</p>
          <a href="#contact" className="btn primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Blog; 