# Instruções de Implantação - Sistema de Portfólio Integrado para Búzios

Este documento contém as instruções para implantação do sistema de portfólio integrado para SEO Local e Sites por Assinatura focado em Búzios.

## Conteúdo do Pacote

O pacote `portfolio_buzios.zip` contém:

- Arquivos HTML principais (index.html, seo-local.html, sites-assinatura.html, portfolio.html, contato.html)
- Pasta `assets` com:
  - Subpasta `css`: arquivos de estilo (style.css, components.css, responsive.css)
  - Subpasta `js`: arquivo JavaScript principal (main.js)
  - Subpasta `images`: estrutura para imagens (portfolio, icons, buzios, testimonials)
- Arquivos de documentação (requisitos.md, estrutura.md, portfolio.md, todo.md)

## Instruções de Implantação

### 1. Preparação

1. Descompacte o arquivo `portfolio_buzios.zip` em seu computador local
2. Verifique se todos os arquivos e pastas foram extraídos corretamente

### 2. Upload para Hospedagem

#### Opção A: Hospedagem Compartilhada (cPanel, Plesk, etc.)

1. Acesse o painel de controle da sua hospedagem
2. Navegue até o gerenciador de arquivos ou utilize um cliente FTP (como FileZilla)
3. Faça upload de todos os arquivos e pastas para o diretório raiz do seu domínio (geralmente `public_html` ou `www`)
4. Mantenha a estrutura de pastas intacta durante o upload

#### Opção B: Serviços de Hospedagem Estática (Netlify, Vercel, GitHub Pages)

1. Crie uma conta no serviço de hospedagem escolhido (se ainda não tiver)
2. Siga as instruções específicas do serviço para fazer upload do site:
   - **Netlify**: Arraste e solte a pasta descompactada na interface do Netlify
   - **Vercel**: Use o comando `vercel` via CLI ou conecte a um repositório GitHub
   - **GitHub Pages**: Faça upload dos arquivos para um repositório e ative o GitHub Pages

### 3. Configuração de Domínio (Opcional)

1. Adquira um domínio personalizado (ex: buziosdigital.com.br)
2. Configure os registros DNS para apontar para sua hospedagem
3. Siga as instruções específicas do seu provedor de hospedagem para vincular o domínio ao site

### 4. Verificação Pós-Implantação

1. Acesse o site através do navegador para verificar se está funcionando corretamente
2. Teste a navegação entre todas as páginas
3. Verifique a responsividade em diferentes dispositivos (desktop, tablet, smartphone)
4. Teste os formulários de contato e outras funcionalidades interativas

## Personalização do Sistema

### Substituição de Imagens

1. Prepare suas imagens nos formatos adequados (JPG, PNG)
2. Substitua os espaços reservados na pasta `assets/images` por suas imagens reais
3. Mantenha os mesmos nomes de arquivo ou atualize as referências no HTML

### Atualização de Informações

1. Edite os arquivos HTML para atualizar:
   - Informações de contato
   - Descrições de serviços
   - Casos de estudo e portfólio
   - Depoimentos de clientes

### Personalização de Cores e Estilos

1. As cores principais podem ser modificadas no arquivo `assets/css/style.css`
2. Procure pela seção `:root` que contém as variáveis CSS com as cores do tema

## Suporte e Manutenção

Para atualizações futuras ou suporte técnico, você pode:

1. Editar diretamente os arquivos HTML, CSS ou JS conforme necessário
2. Adicionar novas páginas seguindo a mesma estrutura das existentes
3. Expandir o portfólio adicionando novos casos de estudo

## Observações Importantes

- O sistema foi desenvolvido com HTML5, CSS3 e JavaScript puro, sem dependências de frameworks
- Todos os arquivos são estáticos, não requerendo configuração de servidor especial
- Os formulários de contato são apenas demonstrativos e precisarão ser conectados a um backend para funcionamento real
- Recomenda-se adicionar imagens reais de Búzios para melhorar a identidade visual local

## Checklist de Implantação

- [ ] Descompactar o arquivo zip
- [ ] Fazer upload dos arquivos para a hospedagem
- [ ] Verificar se todas as páginas estão funcionando
- [ ] Substituir imagens placeholder por imagens reais
- [ ] Atualizar informações de contato
- [ ] Testar responsividade em diferentes dispositivos
- [ ] Configurar domínio personalizado (opcional)
- [ ] Conectar formulários a um serviço de processamento (opcional)
