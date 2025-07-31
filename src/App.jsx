"use client"
import { useState, useEffect } from "react"
import "./App.css"

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Mini Games States
  const [loveScore, setLoveScore] = useState(0)
  const [kisses, setKisses] = useState(0)
  const [currentQuiz, setCurrentQuiz] = useState(0)
  const [quizScore, setQuizScore] = useState(0)
  const [showQuizResult, setShowQuizResult] = useState(false)
  const [flippedCards, setFlippedCards] = useState([])
  const [matchedCards, setMatchedCards] = useState([])

  // Array of images - Using correct paths for public folder
  const images = [
    "./images/lyza.jpg",
    "./images/lyza2.jpg",
    "./images/lyza3.jpg",
    "./images/lyza4.jpg",
    "./images/lyza5.png",
  ]

  // Quiz Questions
  const quizQuestions = [
    {
      question: "What makes Lylyza special?",
      options: ["Her beautiful smile", "Her kind heart", "Her amazing personality", "All of the above"],
      correct: 3,
    },
    {
      question: "What's the best thing about having a girlfriend like Lylyza?",
      options: ["She's always supportive", "She makes every day better", "She's your best friend", "All of the above"],
      correct: 3,
    },
    {
      question: "How much do you love Lylyza?",
      options: ["A lot", "So much", "More than words can say", "To infinity and beyond"],
      correct: 3,
    },
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    // Close mobile menu after clicking a link
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest(".nav")) {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [isMobileMenuOpen])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    if (isLeftSwipe) {
      nextImage()
    }
    if (isRightSwipe) {
      prevImage()
    }
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  // Mini Games Functions
  const generateLoveScore = () => {
    const score = Math.floor(Math.random() * 21) + 80 // 80-100%
    setLoveScore(score)
  }

  const addKiss = () => {
    setKisses(kisses + 1)
  }

  const handleQuizAnswer = (selectedAnswer) => {
    if (selectedAnswer === quizQuestions[currentQuiz].correct) {
      setQuizScore(quizScore + 1)
    }
    if (currentQuiz < quizQuestions.length - 1) {
      setCurrentQuiz(currentQuiz + 1)
    } else {
      setShowQuizResult(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuiz(0)
    setQuizScore(0)
    setShowQuizResult(false)
  }

  return (
    <div className="girlfriend-day">
      {/* Header */}
      <header className="header">
        <nav className="nav">
          <h1 className="logo">💕 To my Lyza </h1>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <div className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && <div className="mobile-menu-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>}

          {/* Navigation Links */}
          <div className={`nav-links ${isMobileMenuOpen ? "mobile-open" : ""}`}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("home")
              }}
            >
              Home
            </a>
            <a
              href="#celebrate"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("celebrate")
              }}
            >
              Celebrate
            </a>
            <a
              href="#games"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("games")
              }}
            >
              Mini Games
            </a>
            <a
              href="#reasons"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("reasons")
              }}
            >
              Why She's Amazing
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Happy Girlfriend Day My Love💖</h1>
            <p className="hero-subtitle">
              Happy GF Day to my beautiful loverrr! Thank you for existing mylove. I hope this simple website makes you
              smile and feel loved. You are the best girlfriend in the world! I love you so much! 💕 💕💕
            </p>
            <div className="hero-hearts">
              <span className="heart">💕</span>
              <span className="heart">💖</span>
              <span className="heart">💝</span>
              <span className="heart">💗</span>
              <span className="heart">💕</span>
            </div>
          </div>
          {/* Image Carousel */}
          <div className="hero-image">
            <div
              className="image-carousel"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <button className="carousel-btn prev-btn" onClick={prevImage}>
                ❮
              </button>
              <div className="image-container">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`Lylyza - Photo ${currentImageIndex + 1}`}
                  className="carousel-image"
                  onError={(e) => {
                    console.log("Image failed to load:", images[currentImageIndex])
                    e.target.src = `https://via.placeholder.com/350x400/fce4ec/e91e63?text=Lylyza+Photo+${currentImageIndex + 1}`
                  }}
                  onLoad={() => {
                    console.log("Image loaded successfully:", images[currentImageIndex])
                  }}
                />
                <div className="image-counter">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
              <button className="carousel-btn next-btn" onClick={nextImage}>
                ❯
              </button>
            </div>
            {/* Dots indicator */}
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentImageIndex ? "active" : ""}`}
                  onClick={() => goToImage(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Celebrate Section */}
      <section id="celebrate" className="celebrate">
        <div className="container">
          <h2 className="section-title">Things I do to her</h2>
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
          <h2 className="section-title">Why Lylyza is Absolutely Amazing ✨</h2>
          <div className="reasons-creative-grid">
            {/* Reason 1 - Interactive Card */}
            <div className="reason-creative-card card-flip">
              <div className="card-inner">
                <div className="card-front">
                  <div className="reason-icon">👯‍♀️</div>
                  <h3>She's Your Best Friend</h3>
                  <div className="card-decoration">💕</div>
                </div>
                <div className="card-back">
                  <p>
                    Always there to listen to your stories, laugh at your jokes, and share every precious moment. She's
                    not just your girlfriend - she's your partner in crime! 🎭
                  </p>
                </div>
              </div>
            </div>
            {/* Reason 2 - Expanding Card */}
            <div className="reason-creative-card card-expand">
              <div className="reason-icon">🚀</div>
              <h3>Dream Supporter Extraordinaire</h3>
              <div className="expand-content">
                <p>
                  She believes in you even when you don't believe in yourself. Your biggest cheerleader, your motivation
                  coach, your success celebration partner! 🎉
                </p>
                <div className="floating-hearts">
                  <span>💖</span>
                  <span>💫</span>
                  <span>⭐</span>
                </div>
              </div>
            </div>
            {/* Reason 3 - Animated Card */}
            <div className="reason-creative-card card-bounce">
              <div className="reason-icon bouncing">😊</div>
              <h3>Sunshine in Human Form</h3>
              <p>
                Her smile lights up the room, her laugh is music to your ears, and her presence turns any ordinary day
                into something magical! ☀️✨
              </p>
              <div className="smile-animation">
                <span className="smile-emoji">😄</span>
                <span className="smile-emoji">😍</span>
                <span className="smile-emoji">🥰</span>
              </div>
            </div>
            {/* Reason 4 - Gradient Card */}
            <div className="reason-creative-card card-gradient">
              <div className="beauty-stars">✨ ⭐ 💫 ✨</div>
              <div className="reason-icon">👸</div>
              <h3>Uniquely Beautiful Queen</h3>
              <p>
                Inside and out, she radiates beauty that's all her own. Her kindness, her spirit, her everything -
                absolutely stunning! 👑
              </p>
              <div className="beauty-glow"></div>
            </div>
            {/* Reason 5 - Heart Pulse Card */}
            <div className="reason-creative-card card-pulse">
              <div className="reason-icon pulse-heart">💝</div>
              <h3>Your Forever Person</h3>
              <p>
                Through every storm and every rainbow, she's right there beside you. Your constant, your anchor, your
                home. 🏠💕
              </p>
              <div className="pulse-rings">
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
                <div className="pulse-ring"></div>
              </div>
            </div>
            {/* Reason 6 - Magic Card */}
            <div className="reason-creative-card card-magic">
              <div className="magic-sparkles">
                <span>✨</span>
                <span>🌟</span>
                <span>💫</span>
                <span>⭐</span>
                <span>✨</span>
                <span>🌟</span>
                <span>💫</span>
                <span>⭐</span>
              </div>
              <div className="reason-icon">🎭</div>
              <h3>Life's Magic Maker</h3>
              <p>
                She transforms ordinary moments into extraordinary memories. With her, every day feels like a beautiful
                adventure! 🎪🎨
              </p>
              <div className="magic-wand">🪄</div>
            </div>
          </div>

          {/* Mini Games Section */}
          <section id="games" className="games">
            <div className="container">
              <h2 className="section-title">Love Mini Games</h2>
              <div className="games-grid">
                {/* Love Calculator */}
                <div className="game-card">
                  <h3>💕 Love Calculator</h3>
                  <p>Calculate your love compatibility!</p>
                  <div className="love-calculator">
                    <div className="love-meter">
                      <div className="love-percentage">{loveScore}%</div>
                      <div className="love-bar">
                        <div className="love-fill" style={{ width: `${loveScore}%` }}></div>
                      </div>
                    </div>
                    <button className="game-btn" onClick={generateLoveScore}>
                      Calculate Love 💖
                    </button>
                    {loveScore > 0 && (
                      <p className="love-result">
                        {loveScore >= 95
                          ? "Perfect Match! 💕"
                          : loveScore >= 90
                            ? "Amazing Love! 💖"
                            : "Great Compatibility! 💗"}
                      </p>
                    )}
                  </div>
                </div>
                {/* Kiss Counter */}
                <div className="game-card">
                  <h3>💋 Kiss Counter</h3>
                  <p>Send virtual kisses to Lylyza!</p>
                  <div className="kiss-counter">
                    <div className="kiss-display">
                      <span className="kiss-emoji">💋</span>
                      <span className="kiss-count">{kisses}</span>
                    </div>
                    <button className="game-btn kiss-btn" onClick={addKiss}>
                      Send Kiss 💋
                    </button>
                    {kisses > 0 && (
                      <p className="kiss-message">
                        {kisses === 1
                          ? "First kiss sent! 💕"
                          : kisses < 10
                            ? `${kisses} kisses sent! 😘`
                            : kisses < 50
                              ? `Wow! ${kisses} kisses! 💖`
                              : `Amazing! ${kisses} kisses of love! 💕💕💕`}
                      </p>
                    )}
                  </div>
                </div>
                {/* Love Quiz */}
                <div className="game-card">
                  <h3>❤️ Love Quiz</h3>
                  <p>Test your love knowledge!</p>
                  <div className="love-quiz">
                    {!showQuizResult ? (
                      <div className="quiz-question">
                        <h4>{quizQuestions[currentQuiz].question}</h4>
                        <div className="quiz-options">
                          {quizQuestions[currentQuiz].options.map((option, index) => (
                            <button key={index} className="quiz-option" onClick={() => handleQuizAnswer(index)}>
                              {option}
                            </button>
                          ))}
                        </div>
                        <div className="quiz-progress">
                          Question {currentQuiz + 1} of {quizQuestions.length}
                        </div>
                      </div>
                    ) : (
                      <div className="quiz-result">
                        <h4>Quiz Complete! 🎉</h4>
                        <p>
                          You scored {quizScore} out of {quizQuestions.length}!
                        </p>
                        <p className="quiz-message">
                          {quizScore === quizQuestions.length
                            ? "Perfect! You know love! 💕"
                            : quizScore >= 2
                              ? "Great job! Love expert! 💖"
                              : "Good try! Love is learning! 💗"}
                        </p>
                        <button className="game-btn" onClick={resetQuiz}>
                          Play Again
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Special Message */}
          <div className="special-message">
            <div className="message-heart">💖</div>
            <h3>Here are some of my websites that you can play Mahal!💖</h3>
            <a
              href="https://ryeeeepokemon.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="website-link"
            >
              🎮 Pokemon Game - Catch 'em all mahal!
            </a>
            <a href="https://ryeeemeow.netlify.app/" target="_blank" rel="noopener noreferrer" className="website-link">
              🐱 Meow Game - Play with cute cats!
            </a>
            <div className="message-decoration">
              <span>🌹</span>
              <span>💕</span>
              <span>🌹</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App
