// India Health Tourism - Interactive JavaScript (Fixed Version)

// Application data
const appData = {
  "providers": [
    {
      "id": 1,
      "name": "Heal India Tourism",
      "type": "Medical Tourism Company",
      "location": "New Delhi",
      "rating": 5.0,
      "reviews": 15,
      "specialties": ["Bariatric Surgery", "Cancer Treatment", "Neurology", "Oncology", "Ophthalmology", "Orthopedic Surgery", "Plastic Surgery", "Urology"],
      "phone": "+91 82838 32787",
      "address": "F 56, Abul Fazal Enclave, Okhla, New Delhi, Delhi 110025",
      "facilities": ["Wheelchair Accessible", "Free Parking", "Nursing Room"],
      "description": "Leading medical tourism facilitator connecting international patients with top hospitals and specialists across India."
    },
    {
      "id": 2,
      "name": "Doctorvalley Medical Tourism",
      "type": "Medical Tourism Company", 
      "location": "Bangalore",
      "rating": 4.8,
      "reviews": 174,
      "specialties": ["Health Consultation", "Medical Coordination", "Treatment Planning"],
      "phone": "+91 86982 90210",
      "address": "#63, Industrial Layout, 5th Block, Koramangala, Bengaluru, Karnataka 560095",
      "facilities": ["Wheelchair Accessible", "24/7 Support", "Multi-language Support"],
      "description": "Comprehensive medical tourism services with 24/7 patient support and coordination."
    },
    {
      "id": 3,
      "name": "Aradhana Ayurveda Wellness Centre",
      "type": "Wellness Center",
      "location": "Telangana",
      "rating": 4.8,
      "reviews": 149,
      "specialties": ["Ayurveda", "Panchakarma", "Wellness Programs", "Research"],
      "phone": "+91 95638 74874",
      "address": "Aradhana gram, NH 61, Nanded Road, Bhainsa, Telangana 504102",
      "facilities": ["24/7 Service", "Wheelchair Accessible", "Research Facility"],
      "description": "Traditional Ayurvedic treatments and wellness programs with modern research-backed approaches."
    },
    {
      "id": 4,
      "name": "AyurYoga Eco-Ashram",
      "type": "Yoga Retreat",
      "location": "Karnataka",
      "rating": 4.9,
      "reviews": 153,
      "specialties": ["Yoga", "Ayurveda", "Meditation", "Organic Living"],
      "phone": "+91 99866 99849",
      "address": "Village JP Hundi, Kannenur Post, Karnataka 571314",
      "facilities": ["Eco-Friendly", "Organic Farm", "Wheelchair Accessible"],
      "description": "Authentic yoga and Ayurveda retreat in eco-friendly natural surroundings."
    },
    {
      "id": 5,
      "name": "Sun Ayurveda & Naturopathy",
      "type": "Wellness Center",
      "location": "Rajasthan",
      "rating": 4.8,
      "reviews": 234,
      "specialties": ["Ayurveda", "Naturopathy", "Herbal Medicine", "Meditation", "Spa Treatments"],
      "phone": "+91 78499 10060",
      "address": "SPL - 7, RIICO Growth Centre, Abu Road, Rajasthan 307026",
      "facilities": ["Wheelchair Accessible", "Spa", "Women-Owned", "LGBTQ+ Friendly"],
      "description": "Premier Ayurvedic and naturopathic treatment center with comprehensive wellness programs."
    },
    {
      "id": 6,
      "name": "Himalayan Yoga Retreat",
      "type": "Yoga Retreat",
      "location": "Rishikesh",
      "rating": 4.9,
      "reviews": 160,
      "specialties": ["Yoga", "Meditation", "Reiki", "Physical Therapy"],
      "phone": "+91 94201 82529",
      "address": "108, Near Laxman Jhula, Rishikesh, Uttarakhand 249302",
      "facilities": ["LGBTQ+ Friendly", "Meditation Center", "Therapeutic Services"],
      "description": "Authentic yoga and meditation retreat in the spiritual heart of India, Rishikesh."
    },
    {
      "id": 7,
      "name": "Veda5 Ayurveda & Yoga Retreat",
      "type": "Resort & Wellness",
      "location": "Rishikesh",
      "rating": 4.6,
      "reviews": 340,
      "specialties": ["Ayurveda", "Yoga", "Spa Treatments", "Resort Accommodation"],
      "phone": "+91 78956 70536",
      "address": "City Centre at Tapovan, Neelkanth Temple Rd, Rishikesh, Uttarakhand 249307",
      "facilities": ["Outdoor Pool", "Spa", "Resort Hotel", "Meditation Classes"],
      "description": "Luxury wellness resort combining traditional Ayurveda and yoga with modern amenities."
    },
    {
      "id": 8,
      "name": "Shreyas Yoga Retreat",
      "type": "Luxury Yoga Resort",
      "location": "Bangalore",
      "rating": 4.5,
      "reviews": 353,
      "specialties": ["Luxury Yoga", "Spa", "Organic Farm", "Wellness Programs"],
      "phone": "+91 99161 10434",
      "address": "Santoshima Farm, Gollahalli Gate, Nelamangala, Bengaluru, Karnataka 562123",
      "facilities": ["Luxury Resort", "Organic Farm", "Spa", "Wheelchair Accessible"],
      "description": "Award-winning luxury yoga retreat with organic farm and world-class spa facilities."
    }
  ],
  "treatments": [
    {
      "category": "Medical",
      "name": "Cardiac Surgery",
      "description": "Advanced heart surgeries including bypass, valve repair, and transplants",
      "costRange": "$3,000 - $15,000",
      "duration": "7-21 days",
      "savingsVsUS": "Up to 80%"
    },
    {
      "category": "Medical", 
      "name": "Orthopedic Surgery",
      "description": "Joint replacements, spine surgery, sports medicine",
      "costRange": "$2,500 - $12,000", 
      "duration": "5-14 days",
      "savingsVsUS": "Up to 75%"
    },
    {
      "category": "Medical",
      "name": "Cancer Treatment", 
      "description": "Oncology treatments, chemotherapy, radiation therapy",
      "costRange": "$2,000 - $20,000",
      "duration": "14-90 days", 
      "savingsVsUS": "Up to 70%"
    },
    {
      "category": "Medical",
      "name": "Cosmetic Surgery",
      "description": "Plastic surgery, reconstructive procedures, aesthetic treatments", 
      "costRange": "$1,000 - $8,000",
      "duration": "3-10 days",
      "savingsVsUS": "Up to 65%"
    },
    {
      "category": "Medical",
      "name": "Dental Care",
      "description": "Dental implants, cosmetic dentistry, orthodontics", 
      "costRange": "$200 - $3,000",
      "duration": "2-7 days",
      "savingsVsUS": "Up to 70%"
    },
    {
      "category": "Medical",
      "name": "Eye Surgery",
      "description": "LASIK, cataract surgery, retinal treatments", 
      "costRange": "$500 - $2,500",
      "duration": "1-3 days",
      "savingsVsUS": "Up to 60%"
    },
    {
      "category": "Wellness",
      "name": "Ayurveda Treatment",
      "description": "Traditional Indian medicine, panchakarma, herbal treatments",
      "costRange": "$500 - $3,000",
      "duration": "7-28 days", 
      "savingsVsUS": "Up to 60%"
    },
    {
      "category": "Wellness",
      "name": "Yoga Retreats",
      "description": "Traditional yoga, meditation, spiritual wellness programs",
      "costRange": "$300 - $2,000", 
      "duration": "7-21 days",
      "savingsVsUS": "Up to 70%"
    },
    {
      "category": "Wellness", 
      "name": "Naturopathy",
      "description": "Natural healing, detox programs, holistic wellness",
      "costRange": "$400 - $2,500",
      "duration": "7-21 days",
      "savingsVsUS": "Up to 65%"
    },
    {
      "category": "Wellness", 
      "name": "Detox Programs",
      "description": "Cleansing treatments, weight management, lifestyle transformation",
      "costRange": "$600 - $2,800",
      "duration": "5-21 days",
      "savingsVsUS": "Up to 55%"
    }
  ],
  "testimonials": [
    {
      "name": "Sarah Johnson",
      "country": "USA", 
      "treatment": "Knee Replacement",
      "rating": 5,
      "review": "Exceptional care at a fraction of US costs. The doctors were world-class and the facilities were modern and clean."
    },
    {
      "name": "James Mitchell", 
      "country": "UK",
      "treatment": "Cardiac Surgery", 
      "rating": 5,
      "review": "Life-changing treatment with incredible hospitality. Saved over $50,000 compared to treatments back home."
    },
    {
      "name": "Emma Wilson",
      "country": "Australia",
      "treatment": "Ayurveda Retreat",
      "rating": 5, 
      "review": "Transformative wellness experience. The traditional treatments combined with modern facilities exceeded all expectations."
    },
    {
      "name": "Carlos Rodriguez",
      "country": "Spain",
      "treatment": "Dental Implants",
      "rating": 5,
      "review": "Outstanding dental care with cutting-edge technology. The staff spoke perfect English and the results exceeded my expectations."
    }
  ]
};

// Cost data for calculator
const costData = {
  cardiac: { usa: 75000, uk: 65000, canada: 55000, australia: 45000, germany: 50000, india: 8000 },
  orthopedic: { usa: 45000, uk: 38000, canada: 32000, australia: 28000, germany: 30000, india: 6000 },
  cancer: { usa: 120000, uk: 100000, canada: 85000, australia: 70000, germany: 80000, india: 15000 },
  cosmetic: { usa: 12000, uk: 10000, canada: 8500, australia: 7000, germany: 8000, india: 3000 },
  dental: { usa: 4000, uk: 3500, canada: 3000, australia: 2500, germany: 2800, india: 800 },
  eye: { usa: 3500, uk: 3000, canada: 2500, australia: 2200, germany: 2400, india: 1000 }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
  setupEventListeners();
  setupAnimations();
});

function initializeApp() {
  populateTreatments();
  populateProviders();
  populateTestimonials();
}

function populateTreatments() {
  const treatmentGrid = document.getElementById('treatment-grid');
  if (!treatmentGrid) return;
  
  treatmentGrid.innerHTML = appData.treatments.map(treatment => `
    <div class="treatment-card ${treatment.category.toLowerCase()} fade-in">
      <div class="treatment-card__category">${treatment.category}</div>
      <h3 class="treatment-card__name">${treatment.name}</h3>
      <p class="treatment-card__description">${treatment.description}</p>
      <div class="treatment-card__details">
        <div class="detail-item">
          <div class="detail-label">Cost Range</div>
          <div class="detail-value">${treatment.costRange}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Duration</div>
          <div class="detail-value">${treatment.duration}</div>
        </div>
        <div class="detail-item">
          <div class="detail-label">Savings</div>
          <div class="detail-value">${treatment.savingsVsUS}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function populateProviders() {
  const providerGrid = document.getElementById('provider-grid');
  if (!providerGrid) return;
  
  providerGrid.innerHTML = appData.providers.map(provider => `
    <div class="provider-card fade-in">
      <div class="provider-card__header">
        <div>
          <h3 class="provider-card__name">${provider.name}</h3>
          <div class="provider-card__type">${provider.type}</div>
          <div class="provider-card__location">📍 ${provider.location}</div>
        </div>
        <div class="provider-card__rating">
          <div class="rating-stars">${'★'.repeat(Math.floor(provider.rating))}${provider.rating % 1 !== 0 ? '☆' : ''}</div>
          <div class="rating-text">${provider.rating} (${provider.reviews} reviews)</div>
        </div>
      </div>
      <p class="provider-card__description">${provider.description}</p>
      <div class="provider-card__specialties">
        ${provider.specialties.map(specialty => `<span class="specialty-tag">${specialty}</span>`).join('')}
      </div>
      <div class="provider-card__contact">
        <strong>📞 ${provider.phone}</strong><br>
        <small>${provider.address}</small>
      </div>
    </div>
  `).join('');
}

function populateTestimonials() {
  const testimonialGrid = document.getElementById('testimonial-grid');
  if (!testimonialGrid) return;
  
  testimonialGrid.innerHTML = appData.testimonials.map(testimonial => `
    <div class="testimonial-card fade-in">
      <div class="testimonial-card__header">
        <div>
          <div class="testimonial-card__name">${testimonial.name}</div>
          <div class="testimonial-card__country">🌍 ${testimonial.country}</div>
        </div>
        <div class="testimonial-card__stars">${'★'.repeat(testimonial.rating)}</div>
      </div>
      <div class="testimonial-card__treatment">${testimonial.treatment}</div>
      <div class="testimonial-card__review">"${testimonial.review}"</div>
    </div>
  `).join('');
}

function setupEventListeners() {
  // Fixed smooth navigation
  const navLinks = document.querySelectorAll('.nav__link');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          const headerHeight = 80;
          const elementPosition = targetSection.offsetTop;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Hero CTA buttons
  const ctaButtons = document.querySelectorAll('.hero__cta .btn');
  ctaButtons.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      if (index === 0) {
        // Explore Treatments
        const treatmentsSection = document.querySelector('#treatments');
        if (treatmentsSection) {
          const headerHeight = 80;
          const elementPosition = treatmentsSection.offsetTop;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      } else {
        // Plan Your Journey
        const planningSection = document.querySelector('#planning');
        if (planningSection) {
          const headerHeight = 80;
          const elementPosition = planningSection.offsetTop;
          const offsetPosition = elementPosition - headerHeight;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Search functionality
  const searchBtn = document.querySelector('.search-btn');
  if (searchBtn) {
    searchBtn.addEventListener('click', handleSearch);
  }

  // Tool cards in planning section
  const toolCards = document.querySelectorAll('.tool-card .btn');
  toolCards.forEach(btn => {
    btn.addEventListener('click', function() {
      const toolName = this.parentElement.querySelector('h3').textContent;
      showNotification(`${toolName} feature coming soon! Contact us for personalized assistance.`);
    });
  });

  // Form submission
  const consultationForm = document.getElementById('consultation-form');
  if (consultationForm) {
    consultationForm.addEventListener('submit', handleFormSubmission);
  }

  // Header background on scroll
  window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
      header.style.backgroundColor = 'rgba(0, 103, 75, 0.95)';
      header.style.backdropFilter = 'blur(10px)';
    } else {
      header.style.backgroundColor = '';
      header.style.backdropFilter = '';
    }
  });
}

function handleSearch() {
  const treatmentType = document.getElementById('treatment-type').value;
  const destination = document.getElementById('destination').value;
  
  if (!treatmentType && !destination) {
    showNotification('Please select treatment type or destination to search.');
    return;
  }
  
  // Filter and highlight matching treatments
  const treatmentCards = document.querySelectorAll('.treatment-card');
  let matchCount = 0;
  
  treatmentCards.forEach(card => {
    const category = card.querySelector('.treatment-card__category').textContent.toLowerCase();
    let matches = true;
    
    if (treatmentType) {
      if (treatmentType === 'medical' && category !== 'medical') matches = false;
      if (treatmentType === 'wellness' && category !== 'wellness') matches = false;
      if (treatmentType === 'dental' && !card.querySelector('.treatment-card__name').textContent.toLowerCase().includes('dental')) matches = false;
      if (treatmentType === 'cosmetic' && !card.querySelector('.treatment-card__name').textContent.toLowerCase().includes('cosmetic')) matches = false;
    }
    
    if (matches) {
      card.style.display = 'block';
      card.classList.add('search-highlight');
      matchCount++;
    } else {
      card.style.display = 'none';
      card.classList.remove('search-highlight');
    }
  });
  
  // Scroll to treatments section
  const treatmentsSection = document.querySelector('#treatments');
  if (treatmentsSection) {
    const headerHeight = 80;
    const elementPosition = treatmentsSection.offsetTop;
    const offsetPosition = elementPosition - headerHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
  
  showNotification(`Found ${matchCount} matching treatment${matchCount !== 1 ? 's' : ''}.`);
}

// Cost calculator functionality
function calculateCost() {
  const treatment = document.getElementById('calc-treatment').value;
  const country = document.getElementById('calc-country').value;
  
  if (!treatment || !country) {
    showNotification('Please select both treatment type and your country.');
    return;
  }
  
  const costs = costData[treatment];
  if (!costs) {
    showNotification('Cost data not available for selected treatment.');
    return;
  }
  
  const homeCost = costs[country];
  const indiaCost = costs.india;
  const savings = homeCost - indiaCost;
  const savingsPercent = Math.round((savings / homeCost) * 100);
  
  // Update UI
  document.getElementById('home-cost').textContent = `$${homeCost.toLocaleString()}`;
  document.getElementById('india-cost').textContent = `$${indiaCost.toLocaleString()}`;
  document.getElementById('savings-amount').textContent = `$${savings.toLocaleString()} (${savingsPercent}%)`;
  
  // Show results
  const resultsDiv = document.getElementById('cost-results');
  resultsDiv.style.display = 'block';
  resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
  
  showNotification(`You can save $${savings.toLocaleString()} (${savingsPercent}%) by choosing treatment in India!`);
}

function handleFormSubmission(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const data = {};
  for (let [key, value] of formData.entries()) {
    data[key] = value;
  }
  
  // Simulate form submission
  const submitBtn = e.target.querySelector('button[type="submit"]');
  const originalText = submitBtn.textContent;
  submitBtn.textContent = 'Sending...';
  submitBtn.disabled = true;
  
  setTimeout(() => {
    submitBtn.textContent = '✓ Request Sent!';
    submitBtn.style.backgroundColor = '#00a86b';
    
    showNotification('Thank you! Our medical tourism expert will contact you within 24 hours.');
    
    // Reset form
    setTimeout(() => {
      e.target.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
      submitBtn.style.backgroundColor = '';
    }, 3000);
  }, 2000);
}

function setupAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe all fade-in elements
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // Stats counter animation
  const statNumbers = document.querySelectorAll('.stat-card__number');
  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateNumber(entry.target);
        statsObserver.unobserve(entry.target);
      }
    });
  });
  
  statNumbers.forEach(stat => {
    statsObserver.observe(stat);
  });
}

function animateNumber(element) {
  const text = element.textContent;
  const isPercentage = text.includes('%');
  const hasPlus = text.includes('+');
  const number = parseFloat(text.replace(/[^\d.]/g, ''));
  
  if (isNaN(number)) return;
  
  let current = 0;
  const increment = number / 50;
  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      current = number;
      clearInterval(timer);
    }
    
    let displayText = '';
    if (number < 10) {
      displayText = current.toFixed(1);
    } else {
      displayText = Math.floor(current).toLocaleString();
    }
    
    if (isPercentage) displayText += '%';
    if (hasPlus) displayText += '+';
    if (text.includes('M')) displayText += 'M';
    
    element.textContent = displayText;
  }, 20);
}

function showNotification(message) {
  // Create notification element
  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: linear-gradient(135deg, #00674b, #008080);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 20px rgba(0, 103, 75, 0.3);
    z-index: 10000;
    font-weight: 500;
    max-width: 350px;
    transform: translateX(400px);
    transition: transform 0.3s ease;
  `;
  
  document.body.appendChild(notification);
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)';
  }, 100);
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(400px)';
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    }, 300);
  }, 5000);
}

// Add search highlight styles
const style = document.createElement('style');
style.textContent = `
  .search-highlight {
    border: 2px solid #008080 !important;
    box-shadow: 0 0 20px rgba(0, 128, 128, 0.3) !important;
    transform: scale(1.02);
  }
  
  .notification {
    font-family: var(--font-family-base);
  }
  
  @media (max-width: 768px) {
    .notification {
      right: 10px;
      left: 10px;
      max-width: none;
    }
  }
`;
document.head.appendChild(style);

// Global function for cost calculation (called from HTML)
window.calculateCost = calculateCost;