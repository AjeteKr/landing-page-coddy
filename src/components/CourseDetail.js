import { useParams, useNavigate } from 'react-router-dom';
import { coursesData } from '../data/coursesData';
import './CourseDetail.css';

function CourseDetail() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const course = coursesData.find(c => c.id === parseInt(courseId));

  if (!course) {
    return (
      <div className="course-not-found">
        <div className="not-found-content">
          <div className="not-found-emoji">😕</div>
          <h2>Course Not Found</h2>
          <p>The course you're looking for doesn't exist.</p>
          <button className="btn-back" onClick={() => navigate('/explore-courses')}>
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="course-detail-page">
      {/* Navigation */}
      <nav className="detail-nav">
        <div className="nav-container">
          <div className="nav-logo" onClick={() => navigate('/')}>
            <span className="logo-icon">🚀</span>
            <span className="logo-text">CODDY School Kosovo</span>
          </div>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => navigate('/explore-courses')}>
              ← All Courses
            </button>
            <button className="nav-btn signin-btn" onClick={() => navigate('/login')}>
              Sign In
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="detail-hero">
        <div className="hero-background"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-emoji-large">{course.image}</div>
            <h1 className="detail-title">{course.name}</h1>
            <p className="detail-subtitle">{course.description}</p>

            <div className="quick-info">
              <div className="info-card">
                <span className="info-icon">👥</span>
                <div className="info-text">
                  <p className="info-label">Age Group</p>
                  <p className="info-value">{course.ageRange} years</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">⏱️</span>
                <div className="info-text">
                  <p className="info-label">Duration</p>
                  <p className="info-value">{course.duration}</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">💶</span>
                <div className="info-text">
                  <p className="info-label">Price</p>
                  <p className="info-value">€{course.price}/month</p>
                </div>
              </div>

              <div className="info-card">
                <span className="info-icon">📅</span>
                <div className="info-text">
                  <p className="info-label">Start Date</p>
                  <p className="info-value">{course.startDate}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container">
        <div className="detail-grid">
          {/* Left Column */}
          <div className="detail-main">
            {/* About Section */}
            <section className="detail-section">
              <h2 className="section-title">About This Course</h2>
              <p className="section-description">{course.fullDescription}</p>
            </section>

            {/* What You'll Learn */}
            <section className="detail-section">
              <h2 className="section-title">What You'll Learn</h2>
              <ul className="learning-list">
                {course.whatYouLearn.map((item, idx) => (
                  <li key={idx} className="learning-item">
                    <span className="check-icon">✨</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Course Features */}
            <section className="detail-section">
              <h2 className="section-title">Why This Course is Special</h2>
              <div className="features-grid">
                {course.features.map((feature, idx) => (
                  <div key={idx} className="feature-item">
                    <div className="feature-number">{idx + 1}</div>
                    <p className="feature-text">{feature}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Schedule Section */}
            <section className="detail-section">
              <h2 className="section-title">Course Schedule</h2>
              <div className="schedule-info">
                <div className="schedule-item">
                  <span className="schedule-label">Classes per Week:</span>
                  <span className="schedule-value">{course.schedule}</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Total Duration:</span>
                  <span className="schedule-value">{course.duration}</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Class Size:</span>
                  <span className="schedule-value">Maximum 10 students</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-label">Location:</span>
                  <span className="schedule-value">IT Company Offices, Fushe Kosovo</span>
                </div>
              </div>
            </section>

            {/* CODDY Philosophy */}
            <section className="detail-section philosophy-section">
              <h2 className="section-title">The CODDY Approach</h2>
              <div className="philosophy-cards">
                <div className="philosophy-card">
                  <div className="phil-icon">🎯</div>
                  <h3>Only Practice, No Grades</h3>
                  <p>Children learn without fear, focusing on creativity and practical skills.</p>
                </div>
                <div className="philosophy-card">
                  <div className="phil-icon">👨‍🏫</div>
                  <h3>Expert Teachers</h3>
                  <p>Learn from IT business owners and employees with real-world experience.</p>
                </div>
                <div className="philosophy-card">
                  <div className="phil-icon">🏢</div>
                  <h3>Real Environment</h3>
                  <p>Classes in actual IT company offices - real high-tech atmosphere.</p>
                </div>
                <div className="philosophy-card">
                  <div className="phil-icon">🚀</div>
                  <h3>Future Ready</h3>
                  <p>Prepare for universities, starting businesses, or working in top IT companies.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="detail-sidebar">
            <div className="sidebar-card enrollment-card">
              <h3 className="card-title">Ready to Enroll?</h3>
              
              <div className="pricing-highlight">
                <p className="price-label">Starting from</p>
                <p className="price-large">€{course.price}</p>
                <p className="price-period">per month</p>
              </div>

              <p className="card-description">
                Small groups, expert teachers, and hands-on learning in a real tech environment.
              </p>

              <div className="enrollment-features">
                <div className="enrollment-feature">
                  <span className="feature-check">✓</span>
                  <span>Max 10 students per class</span>
                </div>
                <div className="enrollment-feature">
                  <span className="feature-check">✓</span>
                  <span>Experienced teachers</span>
                </div>
                <div className="enrollment-feature">
                  <span className="feature-check">✓</span>
                  <span>Real projects & portfolio</span>
                </div>
                <div className="enrollment-feature">
                  <span className="feature-check">✓</span>
                  <span>No grades, pure learning</span>
                </div>
              </div>

              <button className="btn-enroll" onClick={() => navigate('/login')}>
                Sign In to Explore More
              </button>

              <p className="sidebar-footnote">
                Don't have an account? Create one to learn more and get in touch with our team.
              </p>
            </div>

            {/* Additional Info Card */}
            <div className="sidebar-card info-card-sidebar">
              <h3 className="card-title">About CODDY</h3>
              <p className="sidebar-text">
                CODDY School Kosovo is a leading programming school for children ages 5-18, 
                with expert instructors and a focus on practical, real-world learning.
              </p>
              <a href={course.url} target="_blank" rel="noopener noreferrer" className="btn-visit">
                Visit Official Course Page →
              </a>
            </div>

            {/* Quick Links */}
            <div className="sidebar-card quick-links">
              <h3 className="card-title">Explore More</h3>
              <button className="link-btn" onClick={() => navigate('/explore-courses')}>
                All Courses
              </button>
              <button className="link-btn" onClick={() => navigate('/')}>
                Back to Home
              </button>
            </div>
          </aside>
        </div>
      </div>

      {/* CTA Section */}
      <section className="detail-cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Join CODDY School Kosovo Today!</h2>
            <p>Start your programming journey and become a creator.</p>
            <button className="cta-btn-large" onClick={() => navigate('/login')}>
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="detail-footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>CODDY School Kosovo</h4>
            <p>Fushe Kosovo</p>
            <p>Programming School for Ages 5-18</p>
          </div>
          <div className="footer-section">
            <h4>Quick Links</h4>
            <button className="footer-link" onClick={() => navigate('/')}>Home</button>
            <button className="footer-link" onClick={() => navigate('/explore-courses')}>Courses</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 CODDY School Kosovo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default CourseDetail;
