var warriorQuotes = [
    'Out of suffering have emerged the strongest souls; the most massive characters are seared with scars. -Kahil Gibran',
    'The successful warrior is the average man, with laser-like focus. -Bruce Lee',
    'He who conquers himself is the mightiest warrior. -Confucius',
    'Weapons may be carried by creatures who are evil, dishonest, violent or lazy. The true warrior is good, gentle and honest. His bravery comes from within himself; he learns to conquer his own fears and misdeeds. -Brian Jacques',
    'The basic difference between an ordinary man and a warrior is that a warrior takes everything as a challenge while an ordinary man takes everything as a blessing or a curse. -Carlos Castaneda',
    "Fate whispers to the warrior, ‘You can not withstand the storm.’ The warrior whispers back, ‘I am the storm.' -Jake Remington",
]

function nextQuote() {
    var selectQuote = Math.floor(Math.random() * (warriorQuotes.length));
    document.getElementById('warriorMind').innerHTML = warriorQuotes[selectQuote];
}