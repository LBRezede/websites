# Estrutura HTML e CSS para o Sistema de Portfólio Integrado

## Estrutura de Arquivos

```
portfolio_buzios/
├── index.html                 # Página inicial com apresentação geral
├── seo-local.html             # Página dedicada ao projeto de SEO Local
├── sites-assinatura.html      # Página dedicada ao projeto de Sites por Assinatura
├── portfolio.html             # Galeria de projetos realizados
├── contato.html               # Página de contato
├── assets/
│   ├── css/
│   │   ├── style.css          # Estilos globais
│   │   ├── responsive.css     # Estilos responsivos
│   │   └── components.css     # Componentes reutilizáveis (cards, botões, etc.)
│   ├── images/
│   │   ├── logo.png           # Logo da empresa/serviço
│   │   ├── hero-buzios.jpg    # Imagem principal da página inicial
│   │   ├── portfolio/         # Imagens do portfólio
│   │   ├── icons/             # Ícones utilizados no site
│   │   └── buzios/            # Imagens específicas de Búzios
│   └── fonts/                 # Fontes personalizadas (se necessário)
└── favicon.ico                # Favicon do site
```

## Estrutura HTML Base (index.html)

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Soluções digitais para empresas em Búzios - SEO Local e Sites por Assinatura">
    <meta name="keywords" content="SEO Búzios, sites Búzios, marketing digital Búzios, presença online, turismo digital">
    <title>Soluções Digitais para Búzios | SEO Local e Sites por Assinatura</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/responsive.css">
    <link rel="icon" href="favicon.ico" type="image/x-icon">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <div class="container">
            <div class="logo">
                <a href="index.html">
                    <img src="assets/images/logo.png" alt="Logo Soluções Digitais Búzios">
                </a>
            </div>
            <nav class="main-nav">
                <ul>
                    <li><a href="index.html" class="active">Início</a></li>
                    <li><a href="seo-local.html">SEO Local</a></li>
                    <li><a href="sites-assinatura.html">Sites por Assinatura</a></li>
                    <li><a href="portfolio.html">Portfólio</a></li>
                    <li><a href="contato.html">Contato</a></li>
                </ul>
            </nav>
            <div class="cta-header">
                <a href="contato.html" class="btn btn-primary">Solicitar Orçamento</a>
            </div>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <h1>Destaque seu negócio em Búzios</h1>
                <p>Soluções digitais personalizadas para empresas locais que desejam aumentar sua visibilidade online e atrair mais clientes.</p>
                <div class="hero-buttons">
                    <a href="#servicos" class="btn btn-primary">Nossos Serviços</a>
                    <a href="portfolio.html" class="btn btn-secondary">Ver Portfólio</a>
                </div>
            </div>
            <div class="hero-image">
                <img src="assets/images/hero-buzios.jpg" alt="Vista panorâmica de Búzios">
            </div>
        </div>
    </section>

    <!-- Serviços Section -->
    <section id="servicos" class="services">
        <div class="container">
            <div class="section-header">
                <h2>Nossos Serviços</h2>
                <p>Soluções completas para impulsionar seu negócio no ambiente digital</p>
            </div>
            <div class="services-grid">
                <div class="service-card">
                    <div class="service-icon">
                        <img src="assets/images/icons/seo-icon.png" alt="Ícone SEO Local">
                    </div>
                    <h3>SEO Local para Búzios</h3>
                    <p>Aumente sua visibilidade nos resultados de busca locais e atraia mais clientes para seu negócio em Búzios.</p>
                    <a href="seo-local.html" class="btn btn-outline">Saiba mais</a>
                </div>
                <div class="service-card">
                    <div class="service-icon">
                        <img src="assets/images/icons/website-icon.png" alt="Ícone Sites por Assinatura">
                    </div>
                    <h3>Sites por Assinatura</h3>
                    <p>Sites profissionais com manutenção contínua por um valor mensal acessível, ideal para empresas de Búzios.</p>
                    <a href="sites-assinatura.html" class="btn btn-outline">Saiba mais</a>
                </div>
            </div>
        </div>
    </section>

    <!-- Por que Búzios Section -->
    <section class="why-buzios">
        <div class="container">
            <div class="section-header">
                <h2>Por que investir no digital em Búzios?</h2>
                <p>Entendemos as particularidades do mercado local</p>
            </div>
            <div class="buzios-stats">
                <div class="stat-item">
                    <h3>+800 mil</h3>
                    <p>Turistas por ano</p>
                </div>
                <div class="stat-item">
                    <h3>78%</h3>
                    <p>Buscam no Google antes de visitar</p>
                </div>
                <div class="stat-item">
                    <h3>+40%</h3>
                    <p>Aumento nas buscas por negócios locais</p>
                </div>
            </div>
            <div class="buzios-content">
                <div class="buzios-text">
                    <h3>Conhecimento local que faz diferença</h3>
                    <p>Nossa equipe conhece profundamente o mercado de Búzios e suas particularidades sazonais. Desenvolvemos estratégias específicas para alta e baixa temporada, garantindo que seu negócio mantenha visibilidade durante todo o ano.</p>
                    <p>Entendemos as necessidades específicas de pousadas, restaurantes, passeios turísticos e comércio local, criando soluções personalizadas para cada segmento.</p>
                    <a href="contato.html" class="btn btn-primary">Fale com um especialista</a>
                </div>
                <div class="buzios-image">
                    <img src="assets/images/buzios/rua-das-pedras.jpg" alt="Rua das Pedras em Búzios">
                </div>
            </div>
        </div>
    </section>

    <!-- Portfólio Preview Section -->
    <section class="portfolio-preview">
        <div class="container">
            <div class="section-header">
                <h2>Nossos Projetos em Búzios</h2>
                <p>Conheça alguns dos nossos trabalhos realizados para empresas locais</p>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item">
                    <img src="assets/images/portfolio/projeto1.jpg" alt="Projeto Pousada Maresias">
                    <div class="portfolio-overlay">
                        <h4>Pousada Maresias</h4>
                        <p>SEO Local + Site por Assinatura</p>
                        <a href="portfolio.html" class="btn btn-small">Ver detalhes</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="assets/images/portfolio/projeto2.jpg" alt="Restaurante Orla">
                    <div class="portfolio-overlay">
                        <h4>Restaurante Orla</h4>
                        <p>SEO Local</p>
                        <a href="portfolio.html" class="btn btn-small">Ver detalhes</a>
                    </div>
                </div>
                <div class="portfolio-item">
                    <img src="assets/images/portfolio/projeto3.jpg" alt="Passeios Náuticos Búzios">
                    <div class="portfolio-overlay">
                        <h4>Passeios Náuticos</h4>
                        <p>Site por Assinatura</p>
                        <a href="portfolio.html" class="btn btn-small">Ver detalhes</a>
                    </div>
                </div>
            </div>
            <div class="portfolio-cta">
                <a href="portfolio.html" class="btn btn-secondary">Ver todos os projetos</a>
            </div>
        </div>
    </section>

    <!-- Depoimentos Section -->
    <section class="testimonials">
        <div class="container">
            <div class="section-header">
                <h2>O que nossos clientes dizem</h2>
                <p>Depoimentos de empresários locais que transformaram seus negócios</p>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <div class="testimonial-rating">★★★★★</div>
                    <p class="testimonial-text">"Após implementar o SEO Local, as reservas da minha pousada aumentaram em 60% durante a baixa temporada. Resultado impressionante!"</p>
                    <div class="testimonial-author">
                        <img src="assets/images/testimonials/cliente1.jpg" alt="Foto do Cliente">
                        <div>
                            <h4>Ana Claudia</h4>
                            <p>Pousada Maresias</p>
                        </div>
                    </div>
                </div>
                <div class="testimonial-card">
                    <div class="testimonial-rating">★★★★★</div>
                    <p class="testimonial-text">"O site por assinatura foi a melhor escolha para meu restaurante. Sempre atualizado e com suporte constante, sem dor de cabeça."</p>
                    <div class="testimonial-author">
                        <img src="assets/images/testimonials/cliente2.jpg" alt="Foto do Cliente">
                        <div>
                            <h4>Ricardo Mendes</h4>
                            <p>Restaurante Orla</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <h2>Pronto para destacar seu negócio em Búzios?</h2>
            <p>Entre em contato hoje mesmo e solicite uma análise gratuita do seu negócio.</p>
            <a href="contato.html" class="btn btn-large">Solicitar análise gratuita</a>
        </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-about">
                    <img src="assets/images/logo.png" alt="Logo Soluções Digitais Búzios" class="footer-logo">
                    <p>Soluções digitais personalizadas para empresas de Búzios que desejam aumentar sua visibilidade online e atrair mais clientes.</p>
                </div>
                <div class="footer-links">
                    <h4>Links Rápidos</h4>
                    <ul>
                        <li><a href="index.html">Início</a></li>
                        <li><a href="seo-local.html">SEO Local</a></li>
                        <li><a href="sites-assinatura.html">Sites por Assinatura</a></li>
                        <li><a href="portfolio.html">Portfólio</a></li>
                        <li><a href="contato.html">Contato</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h4>Contato</h4>
                    <p>Rua das Pedras, 123</p>
                    <p>Búzios, RJ</p>
                    <p>contato@solucoesdigitaisbuzios.com.br</p>
                    <p>(22) 99999-9999</p>
                </div>
                <div class="footer-social">
                    <h4>Redes Sociais</h4>
                    <div class="social-icons">
                        <a href="#" class="social-icon">
                            <img src="assets/images/icons/facebook.png" alt="Facebook">
                        </a>
                        <a href="#" class="social-icon">
                            <img src="assets/images/icons/instagram.png" alt="Instagram">
                        </a>
                        <a href="#" class="social-icon">
                            <img src="assets/images/icons/linkedin.png" alt="LinkedIn">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Soluções Digitais Búzios. Todos os direitos reservados.</p>
                <div class="footer-legal">
                    <a href="#">Política de Privacidade</a>
                    <a href="#">Termos de Uso</a>
                </div>
            </div>
        </div>
    </footer>
</body>
</html>
```

## Estrutura CSS Base (style.css)

```css
/* Base Styles */
:root {
    /* Cores principais - inspiradas em Búzios */
    --primary-color: #0078a8; /* Azul do mar de Búzios */
    --secondary-color: #f9a826; /* Dourado do pôr do sol */
    --accent-color: #e74c3c; /* Vermelho para CTAs */
    --light-color: #f5f5f5; /* Branco areia */
    --dark-color: #2c3e50; /* Azul escuro noturno */
    --text-color: #333333;
    --text-light: #777777;
    --border-color: #dddddd;
    
    /* Tipografia */
    --font-primary: 'Montserrat', sans-serif;
    --font-secondary: 'Poppins', sans-serif;
    
    /* Espaçamentos */
    --spacing-xs: 0.5rem;
    --spacing-sm: 1rem;
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 5rem;
    
    /* Bordas */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Sombras */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.1);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* Reset e Estilos Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    color: var(--text-color);
    line-height: 1.6;
    background-color: var(--light-color);
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

a {
    text-decoration: none;
    color: var(--primary-color);
    transition: all 0.3s ease;
}

a:hover {
    color: var(--secondary-color);
}

ul {
    list-style: none;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
}

section {
    padding: var(--spacing-xl) 0;
}

.section-header {
    text-align: center;
    margin-bottom: var(--spacing-lg);
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
    position: relative;
    display: inline-block;
}

.section-header h2::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background-color: var(--secondary-color);
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-light);
    max-width: 700px;
    margin: 0 auto;
}

/* Botões */
.btn {
    display: inline-block;
    padding: 12px 24px;
    border-radius: var(--border-radius-md);
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
}

.btn-primary {
    background-color: var(--primary-color);
    color: white;
}

.btn-primary:hover {
    background-color: #006491;
    color: white;
}

.btn-secondary {
    background-color: var(--secondary-color);
    color: white;
}

.btn-secondary:hover {
    background-color: #e09416;
    color: white;
}

.btn-outline {
    background-color: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
}

.btn-outline:hover {
    background-color: var(--primary-color);
    color: white;
}

.btn-large {
    padding: 16px 32px;
    font-size: 1.1rem;
}

.btn-small {
    padding: 8px 16px;
    font-size: 0.9rem;
}

/* Header */
.header {
    background-color: white;
    box-shadow: var(--shadow-sm);
    position: sticky;
    top: 0;
    z-index: 100;
    padding: var(--spacing-sm) 0;
}

.header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    height: 50px;
}

.main-nav ul {
    display: flex;
    gap: var(--spacing-md);
}

.main-nav a {
    color: var(--text-color);
    font-weight: 500;
    padding: 8px 0;
    position: relative;
}

.main-nav a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.main-nav a:hover::after,
.main-nav a.active::after {
    width: 100%;
}

.main-nav a.active {
    color: var(--primary-color);
}

/* Hero Section */
.hero {
    background-color: var(--primary-color);
    color: white;
    position: relative;
    overflow: hidden;
}

.hero .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
    min-height: 600px;
}

.hero-content {
    z-index: 1;
}

.hero-content h1 {
    font-size: 3rem;
    margin-bottom: var(--spacing-md);
    line-height: 1.2;
}

.hero-content p {
    font-size: 1.2rem;
    margin-bottom: var(--spacing-md);
    opacity: 0.9;
}

.hero-buttons {
    display: flex;
    gap: var(--spacing-sm);
}

.hero-image {
    position: relative;
    z-index: 1;
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-lg);
}

/* Serviços Section */
.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.service-card {
    background-color: white;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.service-icon {
    margin: 0 auto var(--spacing-md);
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 120, 168, 0.1);
    border-radius: 50%;
    padding: var(--spacing-sm);
}

.service-card h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--primary-color);
}

.service-card p {
    margin-bottom: var(--spacing-md);
    color: var(--text-light);
}

/* Por que Búzios Section */
.why-buzios {
    background-color: #f9f9f9;
}

.buzios-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
    text-align: center;
}

.stat-item h3 {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
}

.buzios-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-lg);
    align-items: center;
}

.buzios-text h3 {
    color: var(--primary-color);
    margin-bottom: var(--spacing-sm);
    font-size: 1.8rem;
}

.buzios-text p {
    margin-bottom: var(--spacing-md);
}

.buzios-image {
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-md);
}

/* Portfólio Preview Section */
.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-lg);
}

.portfolio-item {
    position: relative;
    border-radius: var(--border-radius-md);
    overflow: hidden;
    height: 250px;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.portfolio-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    padding: var(--spacing-md);
    color: white;
    transform: translateY(100px);
    transition: transform 0.3s ease;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-item:hover .portfolio-overlay {
    transform: translateY(0);
}

.portfolio-overlay h4 {
    margin-bottom: 5px;
}

.portfolio-overlay p {
    margin-bottom: var(--spacing-sm);
    font-size: 0.9rem;
    opacity: 0.8;
}

.portfolio-cta {
    text-align: center;
}

/* Depoimentos Section */
.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: var(--spacing-lg);
}

.testimonial-card {
    background-color: white;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-md);
}

.testimonial-rating {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-bottom: var(--spacing-sm);
}

.testimonial-text {
    font-style: italic;
    margin-bottom: var(--spacing-md);
    position: relative;
}

.testimonial-text::before {
    content: '"';
    font-size: 4rem;
    position: absolute;
    top: -20px;
    left: -10px;
    opacity: 0.1;
    color: var(--primary-color);
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
}

.testimonial-author img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    object-fit: cover;
}

.testimonial-author h4 {
    font-size: 1rem;
    margin-bottom: 2px;
}

.testimonial-author p {
    font-size: 0.9rem;
    color: var(--text-light);
}

/* CTA Section */
.cta-section {
    background-color: var(--primary-color);
    color: white;
    text-align: center;
    padding: var(--spacing-xl) 0;
}

.cta-section h2 {
    font-size: 2.5rem;
    margin-bottom: var(--spacing-sm);
}

.cta-section p {
    margin-bottom: var(--spacing-md);
    font-size: 1.2rem;
    opacity: 0.9;
}

.cta-section .btn {
    background-color: white;
    color: var(--primary-color);
}

.cta-section .btn:hover {
    background-color: var(--secondary-color);
    color: white;
}

/* Footer */
.footer {
    background-color: var(--dark-color);
    color: white;
    padding: var(--spacing-xl) 0 var(--spacing-md);
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-lg);
}

.footer-logo {
    height: 40px;
    margin-bottom: var(--spacing-sm);
}

.footer-about p {
    opacity: 0.7;
    font-size: 0.9rem;
}

.footer h4 {
    margin-bottom: var(--spacing-sm);
    position: relative;
    padding-bottom: 10px;
}

.footer h4::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40px;
    height: 2px;
    background-color: var(--secondary-color);
}

.footer-links ul li {
    margin-bottom: 8px;
}

.footer-links a {
    color: white;
    opacity: 0.7;
}

.footer-links a:hover {
    opacity: 1;
    color: var(--secondary-color);
}

.footer-contact p {
    margin-bottom: 5px;
    opacity: 0.7;
    font-size: 0.9rem;
}

.social-icons {
    display: flex;
    gap: var(--spacing-sm);
}

.social-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;
}

.social-icon:hover {
    background-color: var(--secondary-color);
}

.social-icon img {
    width: 20px;
    height: 20px;
    filter: brightness(0) invert(1);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: var(--spacing-md);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--spacing-sm);
}

.footer-bottom p {
    opacity: 0.7;
    font-size: 0.9rem;
}

.footer-legal {
    display: flex;
    gap: var(--spacing-md);
}

.footer-legal a {
    color: white;
    opacity: 0.7;
    font-size: 0.9rem;
}

.footer-legal a:hover {
    opacity: 1;
    color: var(--secondary-color);
}
```

## Estrutura CSS Responsivo (responsive.css)

```css
/* Estilos Responsivos */

/* Tablets e dispositivos médios */
@media (max-width: 992px) {
    html {
        font-size: 15px;
    }
    
    .hero .container {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .hero-content {
        order: 1;
    }
    
    .hero-image {
        order: 0;
        margin-bottom: var(--spacing-md);
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .buzios-content {
        grid-template-columns: 1fr;
    }
    
    .buzios-image {
        margin-top: var(--spacing-md);
    }
}

/* Dispositivos móveis */
@media (max-width: 768px) {
    html {
        font-size: 14px;
    }
    
    .header .container {
        flex-direction: column;
    }
    
    .logo {
        margin-bottom: var(--spacing-sm);
    }
    
    .main-nav {
        margin: var(--spacing-sm) 0;
    }
    
    .main-nav ul {
        flex-wrap: wrap;
        justify-content: center;
        gap: var(--spacing-sm);
    }
    
    .cta-header {
        margin-top: var(--spacing-sm);
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .portfolio-grid,
    .testimonials-grid,
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-legal {
        justify-content: center;
    }
}

/* Dispositivos muito pequenos */
@media (max-width: 480px) {
    .hero-content h1 {
        font-size: 2.2rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        gap: var(--spacing-sm);
    }
    
    .btn {
        width: 100%;
    }
    
    .buzios-stats {
        grid-template-columns: 1fr;
    }
}
```

## Estrutura CSS Componentes (components.css)

```css
/* Componentes Reutilizáveis */

/* Cards */
.card {
    background-color: white;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-md);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

/* Badges */
.badge {
    display: inline-block;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
}

.badge-primary {
    background-color: rgba(0, 120, 168, 0.1);
    color: var(--primary-color);
}

.badge-secondary {
    background-color: rgba(249, 168, 38, 0.1);
    color: var(--secondary-color);
}

/* Formulários */
.form-group {
    margin-bottom: var(--spacing-md);
}

.form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
}

.form-control {
    width: 100%;
    padding: 12px 16px;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-md);
    font-family: var(--font-primary);
    font-size: 1rem;
    transition: border-color 0.3s ease;
}

.form-control:focus {
    outline: none;
    border-color: var(--primary-color);
}

.form-control::placeholder {
    color: #aaa;
}

textarea.form-control {
    min-height: 150px;
    resize: vertical;
}

/* Alertas */
.alert {
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--border-radius-md);
    margin-bottom: var(--spacing-md);
}

.alert-success {
    background-color: rgba(46, 204, 113, 0.1);
    border-left: 4px solid #2ecc71;
    color: #27ae60;
}

.alert-info {
    background-color: rgba(52, 152, 219, 0.1);
    border-left: 4px solid #3498db;
    color: #2980b9;
}

.alert-warning {
    background-color: rgba(241, 196, 15, 0.1);
    border-left: 4px solid #f1c40f;
    color: #f39c12;
}

.alert-danger {
    background-color: rgba(231, 76, 60, 0.1);
    border-left: 4px solid #e74c3c;
    color: #c0392b;
}

/* Tabs */
.tabs {
    display: flex;
    border-bottom: 1px solid var(--border-color);
    margin-bottom: var(--spacing-md);
}

.tab-item {
    padding: var(--spacing-sm) var(--spacing-md);
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
}

.tab-item:hover {
    color: var(--primary-color);
}

.tab-item.active {
    color: var(--primary-color);
    border-bottom-color: var(--primary-color);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

/* Preços */
.pricing-card {
    background-color: white;
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-md);
    padding: var(--spacing-md);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    position: relative;
    overflow: hidden;
}

.pricing-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
}

.pricing-popular {
    position: absolute;
    top: 20px;
    right: -30px;
    background-color: var(--secondary-color);
    color: white;
    padding: 5px 30px;
    transform: rotate(45deg);
    font-size: 0.8rem;
    font-weight: 600;
}

.pricing-header {
    margin-bottom: var(--spacing-md);
    padding-bottom: var(--spacing-md);
    border-bottom: 1px solid var(--border-color);
}

.pricing-name {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-bottom: var(--spacing-xs);
}

.pricing-price {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: var(--spacing-xs);
}

.pricing-period {
    font-size: 0.9rem;
    color: var(--text-light);
}

.pricing-features {
    margin-bottom: var(--spacing-md);
}

.pricing-feature {
    margin-bottom: 10px;
    position: relative;
    padding-left: 25px;
}

.pricing-feature::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: var(--primary-color);
    font-weight: bold;
}

/* Acordeão */
.accordion-item {
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius-md);
    margin-bottom: var(--spacing-sm);
    overflow: hidden;
}

.accordion-header {
    padding: var(--spacing-sm) var(--spacing-md);
    background-color: #f9f9f9;
    cursor: pointer;
    position: relative;
    font-weight: 600;
}

.accordion-header::after {
    content: '+';
    position: absolute;
    right: var(--spacing-md);
    transition: transform 0.3s ease;
}

.accordion-header.active::after {
    content: '-';
}

.accordion-content {
    padding: var(--spacing-md);
    display: none;
}

.accordion-content.active {
    display: block;
}

/* Timeline */
.timeline {
    position: relative;
    padding-left: 50px;
}

.timeline::before {
    content: '';
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background-color: var(--border-color);
}

.timeline-item {
    position: relative;
    margin-bottom: var(--spacing-md);
}

.timeline-dot {
    position: absolute;
    left: -50px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: 4px solid white;
    box-shadow: var(--shadow-sm);
}

.timeline-content {
    background-color: white;
    border-radius: var(--border-radius-md);
    padding: var(--spacing-md);
    box-shadow: var(--shadow-md);
}

.timeline-date {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-bottom: 5px;
}

.timeline-title {
    margin-bottom: var(--spacing-xs);
    color: var(--primary-color);
}
```

## Estrutura HTML para SEO Local (seo-local.html)

Esta página seguirá a mesma estrutura base do index.html, mas com conteúdo específico para o serviço de SEO Local. Incluirá:

1. Explicação detalhada do serviço
2. Benefícios específicos para empresas de Búzios
3. Processo de implementação
4. Casos de sucesso
5. Planos e preços
6. FAQ sobre SEO Local
7. Formulário de contato para análise gratuita

## Estrutura HTML para Sites por Assinatura (sites-assinatura.html)

Esta página seguirá a mesma estrutura base do index.html, mas com conteúdo específico para o serviço de Sites por Assinatura. Incluirá:

1. Explicação do modelo de assinatura
2. Comparação com modelo tradicional
3. Planos disponíveis e recursos incluídos
4. Processo de desenvolvimento e manutenção
5. Exemplos de sites desenvolvidos
6. Perguntas frequentes
7. Formulário para solicitar demonstração

## Estrutura HTML para Portfólio (portfolio.html)

Esta página apresentará os projetos realizados de forma mais detalhada, incluindo:

1. Galeria de projetos filtráveis por categoria (SEO Local, Sites por Assinatura, Projetos Combinados)
2. Estudos de caso detalhados com métricas de resultados
3. Antes e depois de projetos selecionados
4. Depoimentos específicos para cada projeto
5. Chamada para ação para contato

## Estrutura HTML para Contato (contato.html)

Esta página incluirá:

1. Formulário de contato completo
2. Informações de contato detalhadas
3. Mapa de localização (imagem estática)
4. Horário de atendimento
5. FAQ sobre processo de contratação
