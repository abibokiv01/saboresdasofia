# Sweet Moments Confections

<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Doces Amor - Confeiteira</title>

    <link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

    <style>

        :root {

            --pink-primary: #FFB6C1; /* Rosa claro de fundo */

            --pink-accent: #E08E9D;  /* Rosa médio para detalhes */

            --pink-dark: #C06E7D;    /* Rosa escuro para texto */

            --white: #FFFFFF;

            --text-color: #555;

        }



        * {

            margin: 0;

            padding: 0;

            box-sizing: border-box;

        }



        body {

            font-family: 'Poppins', sans-serif;

            background-color: var(--pink-primary);

            color: var(--text-color);

            line-height: 1.6;

        }



        .container {

            max-width: 1200px;

            margin: 0 auto;

            padding: 20px;

        }



        /* Hero Section (Logomarca e Texto) */

        .hero {

            background-color: var(--white);

            padding: 40px;

            border-radius: 15px;

            text-align: center;

            margin-bottom: 30px;

            box-shadow: 0 4px 15px rgba(0,0,0,0.1);

        }



        .logo-area h1 {

            font-family: 'Great Vibes', cursive;

            color: var(--pink-dark);

            font-size: 3.5em;

            margin-bottom: 5px;

        }



        .logo-area p.confeiteira {

            text-transform: uppercase;

            letter-spacing: 2px;

            color: var(--pink-dark);

            font-weight: 600;

            font-size: 0.9em;

        }



        .tagline-top {

            font-size: 1.1em;

            color: var(--pink-dark);

            margin-top: 20px;

        }



        .tagline-top-heart {

            color: var(--pink-dark);

        }



        .tagline-middle {

            font-style: italic;

            color: var(--text-color);

            margin-top: 15px;

        }



        /* Galeria de Bolos (Adaptada para Web) */

        .cake-showcase {

            display: flex;

            flex-wrap: wrap;

            gap: 20px;

            margin-bottom: 30px;

        }



        .cake-item-main {

            flex: 1 1 100%;

            background-color: var(--white);

            padding: 20px;

            border-radius: 15px;

            text-align: center;

            box-shadow: 0 4px 15px rgba(0,0,0,0.1);

        }



        .cake-item-main h2 {

            font-family: 'Great Vibes', cursive;

            color: var(--pink-dark);

            font-size: 2em;

            margin-bottom: 10px;

        }



        .cake-item-main p {

            font-size: 0.9em;

            color: var(--text-color);

        }



        .cake-grid {

            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

            gap: 20px;

            width: 100%;

        }



        .cake-card {

            background-color: var(--white);

            border-radius: 15px;

            overflow: hidden;

            box-shadow: 0 4px 15px rgba(0,0,0,0.1);

            text-align: center;

            padding: 20px;

        }



        .cake-image-placeholder {

            width: 100%;

            height: 200px;

            background-color: #eee; /* Cor de fundo para as imagens */

            display: flex;

            align-items: center;

            justify-content: center;

            color: #888;

            border-radius: 10px;

            margin-bottom: 15px;

            font-style: italic;

        }



        .cake-card h3 {

            color: var(--pink-dark);

            margin-bottom: 10px;

        }



        /* Diferenciais (Icones) */

        .features {

            background-color: var(--white);

            padding: 30px;

            border-radius: 15px;

            margin-bottom: 30px;

            display: grid;

            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

            gap: 20px;

            text-align: center;

            box-shadow: 0 4px 15px rgba(0,0,0,0.1);

        }



        .feature-item {

            padding: 10px;

        }



        .feature-icon {

            font-size: 2em;

            color: var(--pink-accent);

            margin-bottom: 10px;

        }



        /* Rodapé com WhatsApp e Localização */

        footer {

            background-color: var(--pink-dark);

            color: var(--white);

            padding: 40px;

            border-radius: 15px;

            text-align: center;

            box-shadow: 0 4px 15px rgba(0,0,0,0.1);

        }



        .whatsapp-section {

            margin-bottom: 20px;

        }



        .whatsapp-section p {

            text-transform: uppercase;

            letter-spacing: 1px;

            font-weight: 600;

        }



        .whatsapp-link {

            font-size: 2.2em;

            font-weight: 600;

            color: var(--white);

            text-decoration: none;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 10px;

        }



        .whatsapp-icon {

            width: 35px;

            height: 35px;

            fill: #25D366; /* Cor oficial do WhatsApp */

        }



        .location {

            font-size: 1.1em;

            margin-top: 10px;

            display: flex;

            align-items: center;

            justify-content: center;

            gap: 5px;

        }



        .location-icon {

            width: 18px;

            height: 18px;

            fill: #ff4d4d; /* Cor vermelha para o pin */

        }



        .final-tagline {

            font-family: 'Great Vibes', cursive;

            font-size: 1.5em;

            margin-top: 20px;

            font-weight: normal;

        }



        /* Botão Flutuante do WhatsApp */

        .whatsapp-float {

            position: fixed;

            width: 60px;

            height: 60px;

            bottom: 40px;

            right: 40px;

            background-color: #25D366;

            color: #FFF;

            border-radius: 50px;

            text-align: center;

            box-shadow: 2px 2px 3px #999;

            z-index: 100;

            display: flex;

            align-items: center;

            justify-content: center;

            text-decoration: none;

        }



        .whatsapp-float:hover {

            background-color: #20b85a;

        }



        .whatsapp-float svg {

            width: 30px;

            height: 30px;

            fill: white;

        }



        /* Responsividade para telas menores */

        @media (max-width: 768px) {

            .hero, .cake-showcase, .features, footer {

                padding: 20px;

            }

            .logo-area h1 {

                font-size: 2.8em;

            }

            .whatsapp-link {

                font-size: 1.8em;

            }

            .cake-grid {

                grid-template-columns: 1fr;

            }

        }

    </style>

</head>

<body>



    <div class="container">

        <div class="hero">

            <div class="logo-area">

                <h1>Doces Amor</h1>

                <p class="confeiteira">• CONFEITEIRA •</p>

            </div>

            <p class="tagline-top">Feito com amor, para adoçar momentos especiais!</p>

            <p class="tagline-middle">Bolos que encantam, sabores que ficam na memória!</p>

        </div>



        <div class="cake-showcase">

            <div class="cake-item-main">

                <h2>O Nosso Bolo Clássico</h2>

                <div class="cake-image-placeholder">

                    [Imagem do bolo de chocolate]

                    </div>

                <p>O sabor que você conhece e ama.</p>

            </div>

            

            <div class="cake-grid">

                <div class="cake-card">

                    <h3>TEMÁTICOS</h3>

                    <div class="cake-image-placeholder">

                        [Imagem do bolo Super Wings]

                    </div>

                    <p>Bolos personalizados para festas e eventos.</p>

                </div>

                <div class="cake-card">

                    <h3>DELICADOS</h3>

                    <div class="cake-image-placeholder">

                        [Imagem do bolo com flores/pérolas]

                    </div>

                    <p>Elegância e sabor em cada detalhe.</p>

                </div>

                <div class="cake-card">

                    <h3>IRRESISTÍVEIS</h3>

                    <div class="cake-image-placeholder">

                        [Imagem do bolo com granulado]

                    </div>

                    <p>Uma tentação difícil de resistir.</p>

                </div>

            </div>

        </div>



        <div class="features">

            <div class="feature-item">

                <div class="feature-icon">❤️</div>

                <h3>Feito com Amor</h3>

                <p>Dedicamos carinho em cada etapa da produção.</p>

            </div>

            <div class="feature-item">

                <div class="feature-icon">✨</div>

                <h3>Ingredientes de Qualidade</h3>

                <p>Selecionamos as melhores matérias-primas.</p>

            </div>

            <div class="feature-item">

                <div class="feature-icon">🎂</div>

                <h3>Vários Sabores e Modelos</h3>

                <p>Opções para todos os gostos.</p>

            </div>

            <div class="feature-item">

                <div class="feature-icon">🎁</div>

                <h3>Perfeito para todas as ocasiões</h3>

                <p>Festas, aniversários, presentes.</p>

            </div>

        </div>



        <footer>

            <div class="whatsapp-section">

                <p>Encomendas pelo</p>

                <a href="https://wa.me/55844921500?text=Olá%20Doces%20Amor!%20Gostaria%20de%20fazer%20um%20orçamento." class="whatsapp-link" target="_blank">

                    <svg class="whatsapp-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z"/></svg>

                    84 492 1500

                </a>

            </div>

            

            <div class="location">

                <svg class="location-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267.8 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 116.2 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>

                <p>Localização: <strong>Texlon</strong></p>

            </div>



            <p class="final-tagline">Doces momentos, lembranças para a vida toda!</p>

        </footer>

    </div>



    <a href="https://wa.me/55844921500?text=Olá%20Doces%20Amor!%20Gostaria%20de%20fazer%20um%20orçamento." class="whatsapp-float" target="_blank">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.1-3.2-5.5-.3-8.5 2.4-11.2 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.5-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.7 23.5 9.2 31.6 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.7z"/></svg>

    </a>



</body>

</html>

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/92843238-43ca-4843-b694-5f6fba75f5be).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
