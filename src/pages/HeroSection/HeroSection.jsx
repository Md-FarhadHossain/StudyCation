import React from 'react'

const HeroSection = () => {
  return (
    <div>
        <div className="hero min-h-[80vh]" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
  <div className="hero-overlay bg-opacity-80"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-2xl">
      <h1 className="mb-5 text-5xl font-bold">Welcome to, StudyCation</h1>
      <p className="mb-5">The best high income skills to learn include software engineering, sales, digital marketing, copywriting, web design, SEO, and trade skills. You can develop these skills through formal training programs, online courses, or free content from websites like YouTube.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    </div>
  )
}

export default HeroSection