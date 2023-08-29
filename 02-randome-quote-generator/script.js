const quotes = [
    'Что разум человека может постигнуть и во что он может поверить, того он способен достичь',
    'Стремитесь не к успеху, а к ценностям, которые он дает',
    'Своим успехом я обязана тому, что никогда не оправдывалась и не принимала оправданий от других.',
    'Сложнее всего начать действовать, все остальное зависит только от упорства.',
    'Надо любить жизнь больше, чем смысл жизни',
    'Жизнь - это то, что с тобой происходит, пока ты строишь планы.',
    'Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно.',
    'Начинать всегда стоит с того, что сеет сомнения.',
    'Настоящая ответственность бывает только личной.',
    'Неосмысленная жизнь не стоит того, чтобы жить.',
    '80% успеха - это появиться в нужном месте в нужное время.',
    'Ваше время ограничено, не тратьте его, живя чужой жизнью',
    'Победа - это еще не все, все - это постоянное желание побеждать.',
    'Наука — это организованные знания, мудрость — это организованная жизнь.',
]

const newQuoteFunc = () => {
    let randomNumber = Math.floor(Math.random() * (quotes.length));
    document.querySelector('.quoteDisplay').innerHTML = quotes[randomNumber];
}