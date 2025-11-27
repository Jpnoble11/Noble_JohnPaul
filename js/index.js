function sendMail() {
  var name = document.getElementById('name').value
  var email = document.getElementById('email').value
  var message = document.getElementById('message').value

  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.')
    return
  }

  var params = {
    name: name,
    email: email,
    message: message,
  }

  const serviceID = 'service_r3cdxym'
  const templateID = 'template_ooqcm3z'

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById('name').value = ''
      document.getElementById('email').value = ''
      document.getElementById('message').value = ''
      console.log(res)
      alert('Your message was sent successfully!')
    })
    .catch((err) => console.log(err))

  const canvas = document.getElementById('particles')
  const ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  let particlesArray = []

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 3 + 1
      this.speedY = Math.random() * 1 - 0.5
      this.color = '#00ffea'
    }
    update() {
      this.y += this.speedY
      if (this.y < 0) this.y = canvas.height
    }
    draw() {
      ctx.fillStyle = this.color
      ctx.fillRect(this.x, this.y, this.size, this.size)
    }
  }

  function initParticles() {
    particlesArray = []
    for (let i = 0; i < 150; i++) {
      particlesArray.push(new Particle())
    }
  }
  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesArray.forEach((p) => {
      p.update()
      p.draw()
    })
    requestAnimationFrame(animateParticles)
  }

  initParticles()
  animateParticles()
}
