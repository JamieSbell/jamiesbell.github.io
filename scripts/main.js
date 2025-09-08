const navbarLinks = [
    {
    type:'a',
    text:'Apps',
    link:'#apps',
    },
    {
    type:'a',
    text:'Games',
    link:'#games',
    },
    {
    type:'a',
    text:'Music',
    link:'#music',
    },
    {
    type:'a',
    text:'Résumé',
    link:'../resume',
    },

    
];

const introData = {
    portrait:'url("../resources/intro/jamie.jpeg")',
    name:'Jamie Bell: Software Developer',
    bio:"I'm a student software developer based in NYC, indie game-dev, music producer, and drag artist!",
}

const appsDeck = [ 'Apps',
    {
        name:'Precision Kitchen',
        description:'Precise meal planning web app.',
        thumbnail:'linear-gradient(red, yellow)',
        link:'https://precision.kitchen',
        visible:true
    },
    {
        name:'UWU',
        description:'Customizable homepage for web browsers.',
        thumbnail:'linear-gradient(red, yellow)',
        link:'',
        visible:true
    },
    {
        name:'Blah Blah Blog',
        description:'Blog management tool.',
        thumbnail:'linear-gradient(red, yellow)',
        link:'',
        visible:false
    },
    {
        name:'MÜZ',
        description:'A music visualizer tool that can be used to create music videos.',
        thumbnail:'linear-gradient(red, yellow)',
        link:'',
        visible:false
    }
];

const gamesDeck = [ 'Games',
    {
        name:'Kori',
        description:"Kori is looking for his brother, Kiro...",
        thumbnail:'url("../resources/games/kori.png")',
        link:'../games/kori',
        visible:true
    },
    {
        name:'Hands of Hell',
        description:'A quick remake of my first long term project. Hands of Hell is a top down zombie survival demo.',
        thumbnail:'url("../resources/games/hands-of-hell.png")',
        link:'',
        visible:true
    },
    {
        name:'Cavern of Souls',
        description:'Created for Wowie Jam 3.0 (Failue is Progress). Your bloodline has been cursed to fight demons for generations. Can you break the curse and save your village?',
        thumbnail:'url("../resources/games/cavern-of-souls.png")',
        link:'../games/cavern-of-souls',
        visible:true
    },
    {
        name:'Binary Spaces',
        description:'Binary Spaces is an experimental walking simulator.',
        thumbnail:'',
        link:'../games/binary-spaces',
        visible:false
    },
    {
        name:'City Smasher',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },
    {
        name:'Laser 9000',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },
    {
        name:'Portal Puzzle',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },
    {
        name:'Zexplore',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },
    {
        name:'Dodgey Dots',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },
    {
        name:'Beyond Dreams',
        description:'',
        thumbnail:'',
        link:'',
        visible:false
    },

];

const musicVideos = [
    {
        title:'Loose Ends',
        album:'Tied Up By Loose Ends (2023)',
        source:'../resources/music/videos/loose-ends.mp4',
        thumbnail:'url("../resources/music/thumbnails/loose-ends.png")',
        visible:true
    },
    {
        title:'Helix',
        album:'Tied Up By Loose Ends (2023)',
        source:'../resources/music/videos/helix.mp4',
        thumbnail:'url("../resources/music/thumbnails/helix.png")',
        visible:true
    },
    {
        title:'Walking Torches',
        album:'Tied Up By Loose Ends (2023)',
        source:0,
        thumbnail:'linear-gradient(pink, purple)',
        visible:false
    },
    {
        title:'Obelisk',
        album:'Curse of Xeno (2022)',
        source:0,
        thumbnail:'linear-gradient(pink, purple)',
        visible:false
    },
    {
        title:'Reflections',
        album:'Reflections - Single (2023)',
        source:0,
        thumbnail:'linear-gradient(pink, purple)',
        visible:false
    },
    {
        title:"Can't Stop",
        album:"Can't Stop - Single (2023)",
        source:0,
        thumbnail:'linear-gradient(pink, purple)',
        visible:false
    },
];

const footerData = {
    socials:[
        {
            label:'Itch.io',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Github',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Linkdin',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Discord',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Blue Sky',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Instagram',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Youtube',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Sound Cloud',
            icon:'',
            link:'',
            visible: false
        },
        {
            label:'Band Camp',
            icon:'',
            link:'',
            visible: false
        },
    ]
};
const background = {
    map: [
        {
            src:'../resources/nyc.jpg',
            height:840,
        },
    ],
    instantiate: () => {
        let container = document.createElement('div');
        container.className = 'background';
        for (let i = 0; i < background.map.length; i++) {
            let item = document.createElement('img');
            item.src = background.map[i].src;
            item.height = background.map[i].height;
            container.append(item);
        }
        document.body.append(container);
    },
};
const navbar = () => {
    let navbar = document.createElement('div');
    navbar.className = 'navbar';
    for (let i = 0; i < navbarLinks.length; i++) {
        let button = document.createElement(navbarLinks[i].type);
        button.textContent = navbarLinks[i].text;
        button.href = navbarLinks[i].link;
        button.className = 'link';
        navbar.append(button);
    }
    document.body.append(navbar);
};
const intro = (data) => {
    let container = document.createElement('div');
    container.className = 'intro';

    let portrait = document.createElement('div');
    portrait.className = 'portrait';
    portrait.style.backgroundImage = data.portrait;

    let name = document.createElement('div');
    name.className = 'name';

    let h2 = document.createElement('h2');
    h2.textContent = data.name;
    name.append(h2);

    let bio = document.createElement('div');
    bio.className = 'bio';

    let p = document.createElement('p');
    p.textContent = data.bio;

    bio.append(p);

    container.append(portrait,name,bio);
    document.body.append(container);
};
const card = (data) => {
    let card = document.createElement('a');
    card.className = 'card';
    card.style.backgroundImage = data.thumbnail;
    card.href = data.link;

    let h3 = document.createElement('h3');
    h3.textContent = data.name;

    let description = document.createElement('p');
    description.textContent = data.description;

    card.append(h3,description);
    return card;


};
const deck = (data) => {
    let container = document.createElement('section');
    container.id = data[0].toLowerCase();

    let h2 = document.createElement('h2');
    h2.className = 'section-header';
    h2.textContent = data[0];

    let deck = document.createElement('div');
    deck.className = 'deck';

    for ( let i = 1; i < data.length; i++) { 
        if (data[i].visible === true) {
            deck.append(card(data[i])); 
        }
    }

    container.append(h2,deck);
    document.body.append(container);
};

const video = (video) => {
    if (video === undefined) {
        video = musicVideos[0];
    } 

    else {

    }
    //This video player element is a placeholder until I have some videos to show. 
    let container = document.createElement('div');
    container.className = 'video';

    let player = document.createElement('video');
    player.className = 'player';
    player.src = video.source;
    player.addEventListener('click', function() {
        let player = document.getElementById('music').getElementsByClassName('player')[0];

        if (player.paused === true) {
            player.play();
        }
        else {
            player.pause();
        }
    });

    //let videoControls = videoControls();



    let playButton = document.createElement('img');
    playButton.src = 'resources/play.svg';
    playButton.className = 'play-button';

    let h3 = document.createElement('h3');
    h3.textContent = video.title + ': ' + video.album;

    player.append(playButton);
    container.append(player,h3);

    return container;
};

const videoControls = () => {
    let container = document.createElement('div');
    container.className = 'videoControls';

    let playButton = document.createElement('button');

    let timeline = document.createElement('button');

    let volume = document.createElement('button');

    let settings = document.createElement('button');
}
const playlist = (videos) => {
    let playlist = document.createElement('div');
    playlist.className = 'playlist';

    for (let i = 0; i < videos.length; i++) {
        if (videos[i].visible === true){
            playlist.append(playlistLink(videos[i]));
        }
    }

    return playlist;
};
const playlistLink = (video) => {
    let container = document.createElement('div');
    container.className = 'item';

    let thumbnail = document.createElement('button');
    thumbnail.type = 'button';
    thumbnail.className = 'thumbnail';
    thumbnail.style.backgroundImage = video.thumbnail;

    let videoInfo = document.createElement('div');
    videoInfo.className = 'info';

    let h4 = document.createElement('h4');
    h4.textContent = video.title;

    let h5 = document.createElement('h5');
    h5.textContent = video.album;

    videoInfo.append(h4,h5);
    container.append(thumbnail,videoInfo);
    return container;
};
const contact = () => {};
const footer = (data) => {
    let footer = document.createElement('footer');
    
    for (let i = 0; i < data.socials.length; i++) {
        if (social[i].visible === true) {
            footer.append(socailLink(data.socials[i]));
        }
    }
};
const music = () => {
    let container = document.createElement('section');
    container.id = 'music';

    let h2 = document.createElement('h2');
    h2.className = 'section-header';
    h2.textContent = 'Music';

    container.append(h2,video(),playlist(musicVideos));
    document.body.append(container);
};

addEventListener('DOMContentLoaded', function() {
    background.instantiate();
    navbar();
    intro(introData);
    deck(appsDeck);
    deck(gamesDeck);
    music();
});

addEventListener('scroll', function() {
    let paralax = 0 + 'px';
    let threshold = 168;
    if (this.window.scrollY > threshold) {
        paralax = -((this.window.scrollY - threshold) / 1.2) + 'px';
    }
    document.getElementsByClassName('background')[0].style.top = paralax;
});
