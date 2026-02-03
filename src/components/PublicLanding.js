import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './PublicLanding.css';
import { coursesData } from '../data/coursesData';
import { Play, X, ChevronLeft, ChevronRight, Menu } from 'lucide-react';

function PublicLanding() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const testimonials = [
    {
      name: 'Shkelzen Orllati',
      text: 'Progress is very good! Of course not like usual child who achieve fast results in studying...',
      rating: 5
    },
    {
      name: 'Esila Fejzula',
      text: 'We wanted to say a massive thank you for the Game Design course! From the very first trial lesson...',
      rating: 5
    },
    {
      name: 'Makfire Bllaca',
      text: 'My son has had three teachers at CODDY, and each one has been excellent. He\'s grown so much...',
      rating: 5
    }
  ];

  return (
    <div className="public-landing">
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="logo" onClick={() => window.scrollTo(0, 0)}>
            <img src="/images/logo.png" alt="CODDY" className="logo-image" />
          </div>
          
          {/* Desktop Menu */}
          <div className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button className="nav-link" onClick={() => {
              window.scrollTo(0, 0);
              setMobileMenuOpen(false);
            }}>Home</button>
            <button className="nav-link" onClick={() => {
              document.getElementById('courses-display').scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}>Courses</button>
            <button className="nav-link" onClick={() => {
              setMobileMenuOpen(false);
            }}>Instructors</button>
            <button className="nav-link" onClick={() => {
              setMobileMenuOpen(false);
            }}>Events</button>
            <button className="nav-link" onClick={() => {
              navigate('/student-projects');
              setMobileMenuOpen(false);
            }}>Student Projects</button>
            <button className="nav-link" onClick={() => {
              document.getElementById('about-section').scrollIntoView({ behavior: 'smooth' });
              setMobileMenuOpen(false);
            }}>About Us</button>
            <button className="nav-link" onClick={() => {
              setMobileMenuOpen(false);
            }}>Contacts</button>
          </div>
          
          <div className="nav-buttons">
            <button className="nav-btn signin-btn" onClick={() => navigate('/login')}>
              Sign Up
            </button>
            
            {/* Mobile Menu Toggle */}
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="hero-section">
        <div className="hero-animated-bg">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
          <div className="hero-shape hero-shape-4"></div>
        </div>

        <div className="hero-wrapper">
          <div className="hero-content-new">
            <div className="hero-tag">✨ Where Learning Becomes Adventure</div>
            
            <h1 className="hero-title-new">
              <span className="title-word">Every</span>
              <span className="title-word">Child</span>
              <span className="title-word shine-word">Shines</span>
              <span className="title-word">Here</span>
            </h1>

            <p className="hero-subtitle">
              Join thousands of happy families discovering the joy of learning with CODDY. 
              <br />
              <span className="highlight-emotion">Where passion meets knowledge, and potential becomes reality.</span>
            </p>

            <div className="hero-stats-inline">
              <div className="stat-item">
                <div className="stat-number">9K+</div>
                <div className="stat-text">Happy Learners</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">25</div>
                <div className="stat-text">Countries</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">97%</div>
                <div className="stat-text">Love CODDY</div>
              </div>
            </div>

            <div className="hero-buttons-new">
              <button 
                className="btn-magic primary-magic"
                onClick={() => navigate('/explore-courses')}
              >
                <span className="btn-inner">
                  <span className="btn-text">Start Your Journey Today</span>
                  <span className="btn-icon">→</span>
                </span>
              </button>
              <button className="btn-magic secondary-magic" onClick={() => setShowVideoModal(true)}>
                <span className="btn-inner">
                  <Play size={16} />
                  <span className="btn-text">See It In Action</span>
                </span>
              </button>
            </div>
          </div>

          <div className="hero-visual-new">
            <div className="floating-card card-1">
              <div className="card-emoji">🎓</div>
              <div className="card-text">Learning</div>
            </div>
            <div className="floating-card card-2">
              <div className="card-emoji">🌟</div>
              <div className="card-text">Growth</div>
            </div>
            <div className="floating-card card-3">
              <div className="card-emoji">🚀</div>
              <div className="card-text">Dreams</div>
            </div>
            <div className="floating-card card-4">
              <div className="card-emoji">💡</div>
              <div className="card-text">Ideas</div>
            </div>
            <div className="hero-central-circle">
              <div className="circle-inner">
                <span className="circle-emoji">🎨</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-footer-wave">
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z" fill="url(#waveGradient)"></path>
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: '#3895B9', stopOpacity: 0.1}} />
                <stop offset="100%" style={{stopColor: '#ffffff', stopOpacity: 0.05}} />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">97%</div>
              <div className="stat-label">Satisfaction<br />Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">25</div>
              <div className="stat-label">Countries<br />Reached</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">50k</div>
              <div className="stat-label">Learners<br />Empowered</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">7</div>
              <div className="stat-label">Years of<br />Innovation</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about-section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>We grow with you — learning, evolving, and creating impact.</h2>
              <p>
                CODDY transforms education with AI-powered innovation and creative learning experiences, helping students grow smarter every day. We empower the next generation of creators and innovators.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>Human-Centered Innovation</h3>
                <p>We design programs that put students at the center of learning, fostering creativity and critical thinking.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🤝</div>
                <h3>Growth Through Collaboration</h3>
                <p>Students learn by working together, building real-world projects that matter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="features-grid-section">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3>Professional Teachers</h3>
              <p>Experienced educators from leading IT companies bring real-world expertise to every classroom.</p>
              <button className="learn-more">Learn more →</button>
            </div>

            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3>Practical Courses</h3>
              <p>Hands-on learning with real projects. No grades, just growth and creative exploration.</p>
              <button className="learn-more">Learn more →</button>
            </div>

            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3>Top-Tier Education</h3>
              <p>Small group sizes ensure personalized attention and maximum learning impact for each student.</p>
              <button className="learn-more">Learn more →</button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Purple */}
      <section className="cta-purple-section">
        <div className="container">
          <div className="cta-content">
            <h2>Upgrade Your Skills and Unlock<br />New Opportunities Now</h2>
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">💻</div>
                <h4>UX/UI Design</h4>
                <p>Create beautiful digital experiences</p>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">🎮</div>
                <h4>Game Development</h4>
                <p>Build immersive gaming worlds</p>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">📱</div>
                <h4>Mobile Apps</h4>
                <p>Develop cross-platform applications</p>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">🚀</div>
                <h4>Web Development</h4>
                <p>Master modern web technologies</p>
              </div>
            </div>
            <button className="btn btn-light-primary" onClick={() => navigate('/explore-courses')}>
              Explore Courses
            </button>
          </div>
        </div>
      </section>

      {/* Courses Display Section */}
      <section className="courses-display" id="courses-display">
        <div className="container">
          <h2>Our Courses</h2>
          <p className="section-subtitle">Explore our diverse programming courses for all age groups</p>
          
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              All Ages
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'kids' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('kids')}
            >
              5-10 years
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'teens' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('teens')}
            >
              11-14 years
            </button>
            <button 
              className={`filter-btn ${selectedFilter === 'advanced' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('advanced')}
            >
              15-18 years
            </button>
          </div>

          <div className="courses-showcase">
            {coursesData.map((course) => {
              let ageGroup = 'all';
              const courseStartAge = parseInt(course.ageRange.split('-')[0]);
              
              if (courseStartAge >= 5 && courseStartAge <= 10) ageGroup = 'kids';
              else if (courseStartAge >= 11 && courseStartAge <= 14) ageGroup = 'teens';
              else if (courseStartAge >= 15) ageGroup = 'advanced';

              if (selectedFilter !== 'all' && ageGroup !== selectedFilter) return null;

              return (
                <div key={course.id} className="course-showcase-card" onClick={() => navigate(`/course/${course.id}`)}>
                  <div className="course-emoji">{course.image}</div>
                  <h3>{course.name}</h3>
                  <p className="course-age">Ages: {course.ageRange}</p>
                  <p className="course-duration">{course.duration}</p>
                  <div className="course-price-tag">from €{course.price}/mo</div>
                  <button className="course-learn-btn">View Details →</button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2>What Our Students Say</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-quote">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">— {testimonial.name}</div>
                <div className="stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="landing-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h4>CODDY</h4>
              <p>Programming school for kids 5-18 years old</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><button className="footer-link" onClick={() => navigate('/explore-courses')}>Courses</button></li>
                <li><button className="footer-link" onClick={() => navigate('/login')}>Sign In</button></li>
                <li><button className="footer-link" onClick={() => window.scrollTo(0, 0)}>Home</button></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>📞 +383 43 759 959</p>
              <p>📧 kosovo@coddyschool.com</p>
              <p>Mon-Fri: 10am – 9pm</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2016-2026 CODDY®, programming school for kids</p>
          </div>
        </div>
      </footer>

      {/* Video Demo Modal */}
      {showVideoModal && (
        <div className="video-modal-overlay" onClick={() => setShowVideoModal(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="video-modal-close" onClick={() => setShowVideoModal(false)}>
              <X size={24} />
            </button>
            
            <div className="coddy-tv-frame">
              <div className="tv-header">
                <div className="tv-status-light"></div>
                <span className="tv-branding">CODDY TV</span>
              </div>
              
              <div className="tv-screen">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQM5ZGcBWxE?autoplay=1"
                  title="CODDY Demo Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ borderRadius: '12px' }}
                ></iframe>
              </div>

              <div className="tv-controls">
                <button className="tv-nav-btn prev">
                  <ChevronLeft size={24} />
                </button>
                <div className="tv-dots">
                  <div className="dot dot-orange"></div>
                  <div className="dot dot-red"></div>
                  <div className="dot dot-teal"></div>
                </div>
                <button className="tv-nav-btn next">
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>

            <div className="video-info">
              <h3>Discover CODDY Platform</h3>
              <p>See how CODDY transforms school management with our comprehensive platform tour</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PublicLanding;
