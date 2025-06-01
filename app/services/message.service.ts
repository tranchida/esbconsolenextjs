const messages = [
    {
        "id": 0,
        "title": "Bonjour from go in apiland !",
        "language": "fr"
    },
    {
        "id": 1,
        "title": "Salut, comment ça va ?",
        "language": "fr"
    },
    {
        "id": 2,
        "title": "Bienvenue sur notre API.",
        "language": "fr"
    },
    {
        "id": 3,
        "title": "Passez une excellente journée !",
        "language": "fr"
    },
    {
        "id": 4,
        "title": "Voici un message aléatoire.",
        "language": "fr"
    },
    {
        "id": 5,
        "title": "Le Go, c'est génial !",
        "language": "fr"
    },
    {
        "id": 6,
        "title": "Profitez de votre café.",
        "language": "fr"
    },
    {
        "id": 7,
        "title": "Restez motivé !",
        "language": "fr"
    },
    {
        "id": 8,
        "title": "Apprenez quelque chose de nouveau aujourd'hui.",
        "language": "fr"
    },
    {
        "id": 9,
        "title": "Prenez une pause.",
        "language": "fr"
    },
    {
        "id": 10,
        "title": "Vous êtes incroyable !",
        "language": "fr"
    },
    {
        "id": 11,
        "title": "Continuez comme ça.",
        "language": "fr"
    },
    {
        "id": 12,
        "title": "Le succès arrive à ceux qui persévèrent.",
        "language": "fr"
    },
    {
        "id": 13,
        "title": "Un pas à la fois.",
        "language": "fr"
    },
    {
        "id": 14,
        "title": "Gardez le sourire.",
        "language": "fr"
    },
    {
        "id": 15,
        "title": "Chaque jour compte.",
        "language": "fr"
    },
    {
        "id": 16,
        "title": "Soyez curieux.",
        "language": "fr"
    },
    {
        "id": 17,
        "title": "Partagez la bonne humeur.",
        "language": "fr"
    },
    {
        "id": 18,
        "title": "Merci de votre visite.",
        "language": "fr"
    },
    {
        "id": 19,
        "title": "À bientôt sur notre API !",
        "language": "fr"
    },
    {
        "id": 20,
        "title": "Rêvez grand.",
        "language": "fr"
    },
    {
        "id": 21,
        "title": "Prenez soin de vous.",
        "language": "fr"
    },
    {
        "id": 22,
        "title": "Chaque effort compte.",
        "language": "fr"
    },
    {
        "id": 23,
        "title": "Restez positif.",
        "language": "fr"
    },
    {
        "id": 24,
        "title": "Faites de votre mieux.",
        "language": "fr"
    },
    {
        "id": 25,
        "title": "Le savoir est une force.",
        "language": "fr"
    },
    {
        "id": 26,
        "title": "Soyez vous-même.",
        "language": "fr"
    },
    {
        "id": 27,
        "title": "Croyez en vos rêves.",
        "language": "fr"
    },
    {
        "id": 28,
        "title": "Le changement commence par vous.",
        "language": "fr"
    },
    {
        "id": 29,
        "title": "Ne baissez jamais les bras.",
        "language": "fr"
    },
    {
        "id": 30,
        "title": "Faites une pause et respirez.",
        "language": "fr"
    },
    {
        "id": 31,
        "title": "Le bonheur est contagieux.",
        "language": "fr"
    },
    {
        "id": 32,
        "title": "Soyez reconnaissant.",
        "language": "fr"
    },
    {
        "id": 33,
        "title": "Apprenez de vos erreurs.",
        "language": "fr"
    },
    {
        "id": 34,
        "title": "Partagez vos connaissances.",
        "language": "fr"
    },
    {
        "id": 35,
        "title": "Restez humble.",
        "language": "fr"
    },
    {
        "id": 36,
        "title": "Faites confiance au processus.",
        "language": "fr"
    },
    {
        "id": 37,
        "title": "Le temps est précieux.",
        "language": "fr"
    },
    {
        "id": 38,
        "title": "Soyez attentif aux détails.",
        "language": "fr"
    },
    {
        "id": 39,
        "title": "Exprimez votre créativité.",
        "language": "fr"
    },
    {
        "id": 40,
        "title": "Prenez des initiatives.",
        "language": "fr"
    },
    {
        "id": 41,
        "title": "Restez concentré.",
        "language": "fr"
    },
    {
        "id": 42,
        "title": "Faites preuve de gentillesse.",
        "language": "fr"
    },
    {
        "id": 43,
        "title": "Écoutez avant de parler.",
        "language": "fr"
    },
    {
        "id": 44,
        "title": "Travaillez en équipe.",
        "language": "fr"
    },
    {
        "id": 45,
        "title": "Valorisez la diversité.",
        "language": "fr"
    },
    {
        "id": 46,
        "title": "Acceptez les défis.",
        "language": "fr"
    },
    {
        "id": 47,
        "title": "Faites preuve de résilience.",
        "language": "fr"
    },
    {
        "id": 48,
        "title": "Restez curieux.",
        "language": "fr"
    },
    {
        "id": 49,
        "title": "Explorez de nouvelles idées.",
        "language": "fr"
    },
    {
        "id": 50,
        "title": "Soyez ouvert d'esprit.",
        "language": "fr"
    },
    {
        "id": 51,
        "title": "Prenez des risques calculés.",
        "language": "fr"
    },
    {
        "id": 52,
        "title": "Faites preuve de patience.",
        "language": "fr"
    },
    {
        "id": 53,
        "title": "Restez organisé.",
        "language": "fr"
    },
    {
        "id": 54,
        "title": "Planifiez votre journée.",
        "language": "fr"
    },
    {
        "id": 55,
        "title": "Fixez-vous des objectifs.",
        "language": "fr"
    },
    {
        "id": 56,
        "title": "Faites des pauses régulières.",
        "language": "fr"
    },
    {
        "id": 57,
        "title": "Riez souvent.",
        "language": "fr"
    },
    {
        "id": 58,
        "title": "Soyez flexible.",
        "language": "fr"
    },
    {
        "id": 59,
        "title": "Appréciez les petites choses.",
        "language": "fr"
    },
    {
        "id": 60,
        "title": "Faites preuve d'empathie.",
        "language": "fr"
    },
    {
        "id": 61,
        "title": "Soyez un bon leader.",
        "language": "fr"
    },
    {
        "id": 62,
        "title": "Encouragez les autres.",
        "language": "fr"
    },
    {
        "id": 63,
        "title": "Partagez vos réussites.",
        "language": "fr"
    },
    {
        "id": 64,
        "title": "Apprenez chaque jour.",
        "language": "fr"
    },
    {
        "id": 65,
        "title": "Restez motivé malgré les obstacles.",
        "language": "fr"
    },
    {
        "id": 66,
        "title": "Faites preuve de gratitude.",
        "language": "fr"
    },
    {
        "id": 67,
        "title": "Prenez le temps de réfléchir.",
        "language": "fr"
    },
    {
        "id": 68,
        "title": "Soyez proactif.",
        "language": "fr"
    },
    {
        "id": 69,
        "title": "Restez authentique.",
        "language": "fr"
    },
    {
        "id": 70,
        "title": "Faites confiance à votre intuition.",
        "language": "fr"
    },
    {
        "id": 71,
        "title": "Acceptez les critiques constructives.",
        "language": "fr"
    },
    {
        "id": 72,
        "title": "Restez à l'écoute.",
        "language": "fr"
    },
    {
        "id": 73,
        "title": "Faites preuve de persévérance.",
        "language": "fr"
    },
    {
        "id": 74,
        "title": "Soyez ponctuel.",
        "language": "fr"
    },
    {
        "id": 75,
        "title": "Respectez les autres.",
        "language": "fr"
    },
    {
        "id": 76,
        "title": "Faites preuve de générosité.",
        "language": "fr"
    },
    {
        "id": 77,
        "title": "Restez humble dans la réussite.",
        "language": "fr"
    },
    {
        "id": 78,
        "title": "Apprenez à dire non.",
        "language": "fr"
    },
    {
        "id": 79,
        "title": "Prenez soin de votre santé.",
        "language": "fr"
    },
    {
        "id": 80,
        "title": "Faites du sport régulièrement.",
        "language": "fr"
    },
    {
        "id": 81,
        "title": "Équilibrez travail et vie personnelle.",
        "language": "fr"
    },
    {
        "id": 82,
        "title": "Soyez fier de vos progrès.",
        "language": "fr"
    },
    {
        "id": 83,
        "title": "Faites preuve de curiosité.",
        "language": "fr"
    },
    {
        "id": 84,
        "title": "Restez à jour dans vos connaissances.",
        "language": "fr"
    },
    {
        "id": 85,
        "title": "Partagez vos idées.",
        "language": "fr"
    },
    {
        "id": 86,
        "title": "Faites preuve de rigueur.",
        "language": "fr"
    },
    {
        "id": 87,
        "title": "Soyez un modèle pour les autres.",
        "language": "fr"
    },
    {
        "id": 88,
        "title": "Restez fidèle à vos valeurs.",
        "language": "fr"
    },
    {
        "id": 89,
        "title": "Faites preuve de tolérance.",
        "language": "fr"
    },
    {
        "id": 90,
        "title": "Acceptez l'échec comme une leçon.",
        "language": "fr"
    },
    {
        "id": 91,
        "title": "Restez calme sous pression.",
        "language": "fr"
    },
    {
        "id": 92,
        "title": "Faites preuve de détermination.",
        "language": "fr"
    },
    {
        "id": 93,
        "title": "Soyez persévérant.",
        "language": "fr"
    },
    {
        "id": 94,
        "title": "Faites preuve de créativité.",
        "language": "fr"
    },
    {
        "id": 95,
        "title": "Restez humble face au succès.",
        "language": "fr"
    },
    {
        "id": 96,
        "title": "Soyez attentif à votre environnement.",
        "language": "fr"
    },
    {
        "id": 97,
        "title": "Faites preuve de bienveillance.",
        "language": "fr"
    },
    {
        "id": 98,
        "title": "Restez optimiste.",
        "language": "fr"
    },
    {
        "id": 99,
        "title": "Faites preuve de discipline.",
        "language": "fr"
    },
    {
        "id": 100,
        "title": "Soyez un apprenant à vie.",
        "language": "fr"
    },
    {
        "id": 101,
        "title": "Faites preuve de respect.",
        "language": "fr"
    },
    {
        "id": 102,
        "title": "Restez passionné.",
        "language": "fr"
    },
    {
        "id": 103,
        "title": "Faites preuve d'intégrité.",
        "language": "fr"
    },
    {
        "id": 104,
        "title": "Soyez inspirant.",
        "language": "fr"
    },
    {
        "id": 105,
        "title": "Restez engagé.",
        "language": "fr"
    },
    {
        "id": 106,
        "title": "Faites preuve de solidarité.",
        "language": "fr"
    },
    {
        "id": 107,
        "title": "Soyez innovant.",
        "language": "fr"
    }
]

export function getRandomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}

export function getAllMessages() {
    return messages;
}
