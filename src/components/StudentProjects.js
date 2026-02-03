import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './StudentProjects.css';
import { X, ExternalLink, Github, Menu, Play } from 'lucide-react';

function StudentProjects() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fetch approved projects from backend
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${process.env.REACT_APP_API_URL}/student-projects/approved`);
        
        if (!response.ok) throw new Error('Failed to fetch projects');
        
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        console.error('Error fetching projects:', err);
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = selectedFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  const categories = [
    { value: 'all', label: 'All Projects', count: projects.length },
    { value: 'frontend', label: '🌐 Frontend', count: projects.filter(p => p.category === 'frontend').length },
    { value: 'game', label: '🎮 Gaming', count: projects.filter(p => p.category === 'game').length },
  ];

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;
    
    // Match YouTube video ID from various YouTube URL formats
    let videoId = null;
    
    if (url.includes('youtube.com/watch?v=')) {
      videoId = url.split('v=')[1]?.split('&')[0];
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0];
    } else if (url.includes('youtube.com/embed/')) {
      videoId = url.split('embed/')[1]?.split('?')[0];
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1` : null;
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="landing-nav">
        <div className="nav-container">
          <div className="logo" onClick={() => navigate('/')}>
            <img src="/images/logo.png" alt="CODDY" className="logo-image" />
          </div>
          
          <div className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <button className="nav-link" onClick={() => {
              navigate('/');
              setMobileMenuOpen(false);
            }}>Home</button>
            <button className="nav-link" onClick={() => {
              navigate('/explore-courses');
              setMobileMenuOpen(false);
            }}>Courses</button>
            <button className="nav-link">Instructors</button>
            <button className="nav-link">Events</button>
            <button className="nav-link active">Student Projects</button>
            <button className="nav-link">About Us</button>
            <button className="nav-link">Contacts</button>
          </div>
          
          <div className="nav-buttons">
            <button className="nav-btn signin-btn" onClick={() => navigate('/login')}>
              Sign In
            </button>
            
            <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <section className="student-projects">
        {/* Hero Section */}
        <div className="projects-hero">
          <div className="hero-content">
            <h1>🚀 Student Projects Showcase</h1>
            <p>Explore the creativity and innovation of our amazing students</p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">{projects.length}</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">{new Set(projects.map(p => p.studentName)).size}</span>
                <span className="stat-label">Students</span>
              </div>
            </div>
          </div>
          
          {/* Animated Background */}
          <div className="hero-bg">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="floating-shape shape-3"></div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="projects-filters">
          <div className="filter-container">
            {categories.map(cat => (
              <button
                key={cat.value}
                className={`filter-tab ${selectedFilter === cat.value ? 'active' : ''}`}
                onClick={() => setSelectedFilter(cat.value)}
              >
                {cat.label}
                <span className="filter-count">{cat.count}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading amazing projects...</p>
          </div>
        )}

        {/* Projects Grid */}
        {!loading && filteredProjects.length > 0 && (
          <div className="projects-grid">
            {filteredProjects.map(project => (
              <div key={project.id} className="project-flip-container">
                {/* Frontend Cards - PC Style */}
                {project.category === 'frontend' && (
                  <div 
                    className="project-flip-card frontend-card"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Front */}
                    <div className="flip-front">
                      <div className="card-glow"></div>
                      <div className="frontend-preview">
                        <div className="monitor-frame">
                          <div className="monitor-header">
                            <div className="monitor-dot"></div>
                            <div className="monitor-dot"></div>
                            <div className="monitor-dot"></div>
                          </div>
                          <div className="monitor-screen">
                            <div className="screen-content">
                              <h3>{project.name}</h3>
                              <p>{project.studentName}</p>
                            </div>
                          </div>
                          <div className="monitor-stand"></div>
                        </div>
                      </div>
                      <div className="card-overlay">Click to explore</div>
                    </div>

                    {/* Back */}
                    <div className="flip-back">
                      <div className="back-content">
                        <h3>{project.name}</h3>
                        <p className="student-name">{project.studentName}</p>
                        <p className="description">{project.description?.substring(0, 100)}...</p>
                        <div className="tech-stack">
                          {project.technologies?.slice(0, 3).map(tech => (
                            <span key={tech} className="tech-badge">{tech}</span>
                          ))}
                        </div>
                        <button className="view-btn" onClick={() => setSelectedProject(project)}>
                          View Full →
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* Gaming Cards - Collection UI Style */}
                {project.category === 'game' && (
                  <div 
                    className="project-flip-card game-card"
                    onClick={() => setSelectedProject(project)}
                  >
                    {/* Front */}
                    <div className="flip-front">
                      <div className="game-collection-card">
                        <div className="collection-gradient-bg"></div>
                        <div className="collection-featured">
                          <div className="featured-image-wrapper">
                            {project.videoLink ? (
                              <img 
                                src={`https://img.youtube.com/vi/${project.videoLink.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1]}/maxresdefault.jpg`}
                                alt={project.name}
                                className="featured-game-image"
                                onError={(e) => { e.target.style.display = 'none'; }}
                              />
                            ) : null}
                            <div className="featured-game-icon">🎮</div>
                          </div>
                          <div className="featured-info">
                            <h4 className="featured-title">{project.name}</h4>
                            <p className="featured-artist">{project.studentName}</p>
                            <div className="featured-stats">
                              <span className="stat-badge">⭐ Featured</span>
                            </div>
                          </div>
                        </div>
                        <div className="collection-preview-grid">
                          {project.technologies?.slice(0, 6).map((tech, idx) => (
                            <div key={idx} className="preview-card-item">
                              <div className="preview-item-icon">📦</div>
                              <span className="preview-item-label">{tech}</span>
                            </div>
                          ))}
                        </div>
                        <div className="collection-footer">
                          <button className="view-collection-btn">Explore Game</button>
                        </div>
                      </div>
                      <div className="card-overlay">Click to explore</div>
                    </div>

                    {/* Back */}
                    <div className="flip-back game-back-flip">
                      <div className="back-content game-back">
                        <h3>{project.name}</h3>
                        <p className="student-name">{project.studentName}</p>
                        <p className="description">{project.description?.substring(0, 100)}...</p>
                        <div className="tech-stack">
                          {project.technologies?.slice(0, 3).map(tech => (
                            <span key={tech} className="tech-badge game-badge-small">{tech}</span>
                          ))}
                        </div>
                        <button className="view-btn game-btn" onClick={() => setSelectedProject(project)}>
                          Play Now →
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="empty-state">
            <div className="empty-icon">✨</div>
            <h3>No projects yet</h3>
            <p>Check back soon for amazing student projects!</p>
          </div>
        )}

        {/* Modal */}
        {selectedProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeModal}>
                <X size={28} />
              </button>

              <div className="modal-body">
                <div className="modal-left">
                  {selectedProject.videoLink && selectedProject.category === 'game' ? (
                    <div className="project-image-placeholder">
                      {getEmbedUrl(selectedProject.videoLink) ? (
                        <iframe
                          width="100%"
                          height="100%"
                          src={getEmbedUrl(selectedProject.videoLink)}
                          title="Game Demo"
                          className="modal-video"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ border: 'none' }}
                        />
                      ) : (
                        <div className="placeholder-box">
                          <Play size={48} style={{ color: '#0ea5e9', marginBottom: '1rem' }} />
                          <p style={{ marginTop: '1rem' }}>Game Demo Video</p>
                          <a 
                            href={selectedProject.videoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="link-btn"
                            style={{ marginTop: '1rem' }}
                          >
                            Watch on <ExternalLink size={16} />
                          </a>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="project-image-placeholder">
                      {selectedProject.vercelLink ? (
                        <div className="placeholder-box">
                          <p style={{ marginBottom: '1rem' }}>Live Project Preview</p>
                          <a 
                            href={selectedProject.vercelLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="link-btn"
                          >
                            View Live <ExternalLink size={16} />
                          </a>
                        </div>
                      ) : (
                        <div className="placeholder-box">No preview available</div>
                      )}
                    </div>
                  )}
                </div>

                <div className="modal-right">
                  <div className="project-header">
                    <div>
                      <h2>{selectedProject.name}</h2>
                      <p className="modal-student-name">{selectedProject.studentName}</p>
                    </div>
                    <span className={`difficulty ${selectedProject.difficulty}`}>
                      {selectedProject.difficulty?.toUpperCase()}
                    </span>
                  </div>

                  <p className="modal-description">{selectedProject.description}</p>

                  {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                    <div className="modal-tech">
                      <h4>Technologies Used</h4>
                      <div className="tech-list">
                        {selectedProject.technologies.map(tech => (
                          <span key={tech} className="tech-item">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {selectedProject.code && (
                    <div className="modal-code">
                      <h4>Code Snippet</h4>
                      <pre><code>{selectedProject.code}</code></pre>
                    </div>
                  )}

                  <div className="modal-links">
                    {selectedProject.vercelLink && (
                      <a href={selectedProject.vercelLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubLink && (
                      <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <Github size={16} />
                        GitHub
                      </a>
                    )}
                    {selectedProject.videoLink && selectedProject.category === 'game' && (
                      <a href={selectedProject.videoLink} target="_blank" rel="noopener noreferrer" className="link-btn">
                        <Play size={16} />
                        Full Video
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}

export default StudentProjects;
