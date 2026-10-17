const seasons = [
    {
        key: 'spring',
        name: 'Primavera',
        tag: '01 / FLORESCER',
        description: 'Flores, cores e novos começos',
        doodle: '🌷 📚 🦋 🌼',
        quote: 'A vida floresce nos encontros mais bonitos.',
        count: 16,
        sticker: ['🌸', '🌼', '🦋', '💗'],
        captions: [
            'Dia especial 🪁​🌿​',
            'Boa companhia 💌',
            'Entre leituras 📚',
            'Entre flores 🌸',
            'Sorrisos sinceros 😁',
            'Bochechas coradas 🎈',
            'Jardim florido 🌷',
            'Selfie favorita 📸',
            'Entre rabiscos 🖍️',
            'Páginas vividas 📝',
            'Momentos registrados e ... 📸',
            'Simples descobertas ✨',
            'Amizades florescem 🦋',
            'memórias felizes 💐',
            'Encontros inesquecíveis 💗',
            'Laços 💞 ...'
        ]
    },
    {
        key: 'summer',
        name: 'Verão',
        tag: '02 / BRILHAR',
        description: 'Céu azul, sol no rosto e dias sem pressa',
        doodle: '☀️ 🌊 🍉 🕶️',
        quote: 'Que a gente nunca perca a vontade de viver dias de sol.',
        count: 16,
        sticker: ['☀️', '🌊', '🍋', '💛'],
        captions: [
            'Pés descalços 🩴',
            'Mar azul 🌊',
            'Brisa leve 🌬️',
            'Sol dourado ☀️',
            'Água fresca 💦',
            'Sorrisos livres 😄',
            'Dias iluminados ✨',
            'Companhia ensolarada 💛',
            'Sorvete compartilhado 🍦',
            'Entardecer dourado 🌅',
            'Abraços ensolarados 🤗',
             'Risadas soltas 😂',
            'Passeio gostoso 🚲',
            'Sombra fresca 🌳',
            'Verão inesquecível 🧡',
             'Amizades memoráveis 🥰​'
        ]
    },
    {
        key: 'autumn',
        name: 'Outono',
        tag: '03 / ACOLHER',
        description: 'Folhas douradas e lembranças aconchegantes',
        doodle: '🍁 ☕ 🍂 🧡',
        quote: 'Algumas memórias aquecem como um abraço.',
        count: 16,
        sticker: ['🍂', '🍁', '☕', '🤎'],
        captions: [
            'Folhas douradas 🍁',
            'Flores e música 🌻​​🎼​📀​',
            'Café compartilhado ☕',
            'Abraço demorado 🤎',
            'Músicas que tocam a alma 💿',
            'Boa companhia 🍂',
            'Lembrança querida 📷',
            'Caminhos dourados 🌾',
            'Doce pausa 🍰',
            'Vento suave 🍃',
            'Passos juntos 👣',
            'Acorde presente 🎸​',
            'Olhar penetrante 🏵️​🦊​🍂​',
            'Palavras marcantes 📖',
            'Cores aconchegantes 🎨',
            'Outono acolhedor 🍄'

        ]
    },
    {
        key: 'winter',
        name: 'Inverno',
        tag: '04 / AQUECER',
        description: 'Dias frios, abraços e histórias para contar',
        doodle: '❄️ 🧣 ☁️ 🤍',
        quote: 'O melhor lugar é perto de quem faz bem.',
        count: 20,
        sticker: ['❄️', '✨', '🧣', '🤍'],
        captions: [
            'Frio gostoso ❄️',
            'Carinho aquecido 🧣',
            'Aconchego nosso 🏡',
            
            'Chuva lá fora 🌧️',
            'Meias fofinhas 🧦',
            'Amor que aquece ❤️',
            'Tarde tranquila 🍂',
            'Chocolate quente 🍫',
            'Carinho cotidiano 🫶',            
            'Chá preparado 🍵',
            'Abraço quentinho 🤍',
            'Amizades marcantes 🎬',
            
            'Pertinho sempre 💕',
            'Cobertor compartilhado 🛋️',
            'Passos juntos 👣',
            'Histórias contadas 📚', 
            'Pessoa favorita',           
            'Inverno memorável ✨',
            'Sorrisos discretos...', 
            'Conversas acolhedoras 🧡'
        ]
    }
];

const album = document.getElementById('album');

let number = 0;

seasons.forEach(s => {
    const section = document.createElement('section');
    section.className = `season ${s.key}`;

    section.innerHTML = `
        <div class="season-head">
            <div class="tag">${s.tag}</div>
            <h2>${s.name}</h2>
            <p>${s.description}</p>
            <div class="doodle">${s.doodle}</div>
        </div>

        <div class="photos"></div>

        <div class="season-counter">
            ✦ ${s.count} lembranças desta estação ✦
        </div>
    `;

    const grid = section.querySelector('.photos');

    for (let i = 0; i < s.count; i++) {
        number++;

        // Guarda o número desta foto para usar também no fallback.
        const photoNumber = number;

        if (i === Math.floor(s.count / 2)) {
            const quote = document.createElement('div');
            quote.className = 'quote';
            quote.textContent = `♡ ${s.quote} ♡`;
            grid.append(quote);
        }

        const fig = document.createElement('figure');
        fig.className = 'polaroid';

        fig.style.setProperty(
            '--rotate',
            `${[-5, 4, -2, 6, -4, 3][photoNumber % 6]}deg`
        );

        fig.style.setProperty(
            '--ratio',
            photoNumber % 4 === 0 ? '4 / 5' : '1 / 1'
        );

        fig.innerHTML = `
            <span class="tape" aria-hidden="true"></span>

            <img
                loading="lazy"
                src="fotos/foto${photoNumber}.jpg"
                alt="Memória ${photoNumber} — ${s.name}"
            >

            <figcaption>
                ${String(photoNumber).padStart(2, '0')} ♡ ${s.captions[i]}
            </figcaption>
        `;

        const img = fig.querySelector('img');

        img.onerror = () => {
            img.onerror = null;
            img.src = `fotos/foto${((photoNumber - 1) % 6) + 1}.jpg`;
        };

        grid.append(fig);
    }

    album.append(section);
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    rootMargin: '0px 0px 70px 0px',
    threshold: 0.08
});

document.querySelectorAll('.polaroid').forEach(el => {
    observer.observe(el);
});

const audio = document.getElementById('trilha');
const btn = document.getElementById('musicBtn');

audio.volume = 0.55;

function sync() {
    btn.textContent = audio.paused
        ? '♫ Tocar música'
        : '❚❚ Pausar música';

    btn.setAttribute(
        'aria-label',
        audio.paused ? 'Ativar música' : 'Pausar música'
    );
}

btn.addEventListener('click', async () => {
    if (audio.paused) {
        try {
            await audio.play();
        } catch (error) {
            alert(
                'Adicione um MP3 em musica/anjos.mp3 para ouvir a trilha sonora.'
            );
        }
    } else {
        audio.pause();
    }

    sync();
});

audio.addEventListener('play', sync);
audio.addEventListener('pause', sync);

sync();