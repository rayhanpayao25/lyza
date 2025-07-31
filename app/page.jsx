import "./globals.css"

export default function GirlfriendDay() {
  return (
    <div className="girlfriend-day">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">💕 Girlfriend Day</h1>
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#celebrate">Celebrate</a>
            <a href="#reasons">Why She's Amazing</a>
            <a href="#message">Message</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Happy Girlfriend Day! 💖</h1>
          <p className="hero-subtitle">Celebrating the amazing woman who makes every day brighter</p>
          <div className="hero-hearts">
            <span className="heart">💕</span>
            <span className="heart">💖</span>
            <span className="heart">💝</span>
            <span className="heart">💗</span>
            <span className="heart">💕</span>
          </div>
          <button className="cta-button">Send Love Message</button>
        </div>
        <div className="hero-image">
          <img src="/placeholder.svg?height=400&width=400" alt="Romantic couple" />
        </div>
      </section>

      {/* Celebrate Section */}
      <section id="celebrate" className="celebrate">
        <div className="container">
          <h2 className="section-title">How to Celebrate</h2>
          <div className="celebrate-grid">
            <div className="celebrate-card">
              <div className="card-icon">🌹</div>
              <h3>Surprise Her</h3>
              <p>Plan a surprise date, bring her favorite flowers, or cook her favorite meal</p>
            </div>
            <div className="celebrate-card">
              <div className="card-icon">💌</div>
              <h3>Write a Letter</h3>
              <p>Express your feelings with a heartfelt handwritten letter or love note</p>
            </div>
            <div className="celebrate-card">
              <div className="card-icon">🎁</div>
              <h3>Give a Gift</h3>
              <p>Something thoughtful that shows how much you care and know her</p>
            </div>
            <div className="celebrate-card">
              <div className="card-icon">📸</div>
              <h3>Create Memories</h3>
              <p>Take photos together, make a scrapbook, or plan a special adventure</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reasons Section */}
      <section id="reasons" className="reasons">
        <div className="container">
          <h2 className="section-title">Why Girlfriends Are Amazing</h2>
          <div className="reasons-list">
            <div className="reason-item">
              <span className="reason-number">01</span>
              <div className="reason-content">
                <h3>She's Your Best Friend</h3>
                <p>Always there to listen, laugh, and share life's moments with you</p>
              </div>
            </div>
            <div className="reason-item">
              <span className="reason-number">02</span>
              <div className="reason-content">
                <h3>She Supports Your Dreams</h3>
                <p>Encourages you to be your best self and believes in your potential</p>
              </div>
            </div>
            <div className="reason-item">
              <span className="reason-number">03</span>
              <div className="reason-content">
                <h3>She Makes You Smile</h3>
                <p>Her laugh is contagious and she knows exactly how to brighten your day</p>
              </div>
            </div>
            <div className="reason-item">
              <span className="reason-number">04</span>
              <div className="reason-content">
                <h3>She's Uniquely Beautiful</h3>
                <p>Inside and out, she has a beauty that's all her own</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Message Section */}
      <section id="message" className="message">
        <div className="container">
          <div className="message-content">
            <h2 className="section-title">Send Her a Message</h2>
            <p className="message-subtitle">Let her know how much she means to you</p>
            <form className="message-form">
              <div className="form-group">
                <input type="text" placeholder="Your name" className="form-input" />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Her name" className="form-input" />
              </div>
              <div className="form-group">
                <textarea placeholder="Write your love message here..." className="form-textarea" rows={5}></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Love Message 💕
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2024 Girlfriend Day. Made with 💖 for amazing girlfriends everywhere.</p>
        </div>
      </footer>
    </div>
  )
}
