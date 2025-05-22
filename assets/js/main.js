// Arquivo JavaScript para funcionalidades interativas do site

document.addEventListener('DOMContentLoaded', function() {
    // Funcionalidade para o botão de voltar ao topo
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        // Mostrar/ocultar botão com base na posição de rolagem
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // Ação de clique para voltar ao topo
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Funcionalidade para as perguntas frequentes (FAQ)
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            // Toggle da classe active na pergunta
            this.classList.toggle('active');
            
            // Toggle da classe active na resposta
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
    
    // Funcionalidade para as abas (tabs)
    const tabItems = document.querySelectorAll('.tab-item');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabItems.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // Remover classe active de todas as abas
            tabItems.forEach(item => item.classList.remove('active'));
            
            // Adicionar classe active à aba clicada
            this.classList.add('active');
            
            // Remover classe active de todos os conteúdos
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Adicionar classe active ao conteúdo correspondente
            tabContents[index].classList.add('active');
        });
    });
    
    // Funcionalidade para os filtros do portfólio
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-full-item');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remover classe active de todos os botões
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Adicionar classe active ao botão clicado
                this.classList.add('active');
                
                // Filtrar itens do portfólio
                const filter = this.textContent.toLowerCase();
                
                portfolioItems.forEach(item => {
                    if (filter === 'todos') {
                        item.style.display = 'block';
                    } else if (filter === 'seo local' && item.getAttribute('data-category') === 'seo') {
                        item.style.display = 'block';
                    } else if (filter === 'sites por assinatura' && item.getAttribute('data-category') === 'site') {
                        item.style.display = 'block';
                    } else if (filter === 'projetos combinados' && item.getAttribute('data-category') === 'combinado') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
    
    // Animação de elementos ao entrar na viewport
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    fadeElements.forEach(element => {
        fadeInObserver.observe(element);
    });
    
    // Adicionar classe fade-in a elementos específicos
    const elementsToAnimate = document.querySelectorAll('.service-card, .benefit-card, .testimonial-card, .portfolio-item, .pricing-card, .stat-item');
    
    elementsToAnimate.forEach(element => {
        element.classList.add('fade-in');
    });
    
    // Funcionalidade para menu mobile (hamburger)
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });
    }
    
    // Funcionalidade para contadores de estatísticas
    const statCounters = document.querySelectorAll('.stat-counter');
    
    const countUp = (target, element, duration) => {
        const finalNumber = parseInt(element.textContent);
        const increment = finalNumber / (duration / 16);
        let currentNumber = 0;
        
        const updateCounter = () => {
            currentNumber += increment;
            if (currentNumber < finalNumber) {
                element.textContent = Math.ceil(currentNumber);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = finalNumber;
            }
        };
        
        updateCounter();
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(entry.target, entry.target, 1500);
                counterObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.5
    });
    
    statCounters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Funcionalidade para formulários
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulação de envio de formulário
            const submitButton = this.querySelector('button[type="submit"]');
            const originalText = submitButton.textContent;
            
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';
            
            // Simular tempo de processamento
            setTimeout(() => {
                // Criar mensagem de sucesso
                const successMessage = document.createElement('div');
                successMessage.className = 'alert alert-success';
                successMessage.textContent = 'Mensagem enviada com sucesso! Entraremos em contato em breve.';
                
                // Inserir mensagem antes do formulário
                this.parentNode.insertBefore(successMessage, this);
                
                // Resetar formulário
                this.reset();
                
                // Restaurar botão
                submitButton.disabled = false;
                submitButton.textContent = originalText;
                
                // Remover mensagem após alguns segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }, 1500);
        });
    });
    
    // Adicionar classe 'active' ao link de navegação da página atual
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        if (linkHref === currentPage || (currentPage === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        }
    });
});
