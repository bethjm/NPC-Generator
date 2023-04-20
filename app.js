const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "What kind of person are they?",
        answers: [
        {   
        text: "greedy",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Group of friends gathered around a table in a cozy tavern, laughing heartily with raised glasses, sharing good times and camaraderie, with warm lighting and mugs of ale in the background.",
        credit: "credit"
        },
        {   
        text: "friendly",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "photo of friends socializing",
        credit: "credit"
        },
        {   
        text: "pompous",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Pompous man with a haughty expression, standing with a lifted chin, dressed in extravagant clothing, holding a cane and looking disdainfully at others.",
        credit: "credit"
        },
        {   
        text: "bookworm",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Wizard with flowing robes and a pointed hat, sitting cross-legged with a spellbook open on their lap, reading intently with a glowing staff by their side",
        credit: "credit"
        },          
    ]
    },
    {
        id: 1,
        text: "What is their job?",
        answers: [
        {   
        text: "rule enforcer",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Town guard in armor and helmet, carrying a shield with the town's emblem, standing alert with a stern expression, ready to maintain law and order.",
        credit: "credit"
        },
        {   
        text: "politician",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D politician, dressed in formal attire, standing confidently with a commanding presence, giving a persuasive speech to a crowd with gestures and charisma",
        credit: "credit"
        },
        {   
        text: "townsperson",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D townsperson, wearing simple clothing with a friendly or neutral expression, adding life and diversity to the town's streets.",
        credit: "credit"
        },
        {   
        text: "merchant",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Fantasy merchant in a bustling marketplace, surrounded by exotic wares and treasures, engaging in commerce with customers, with a shrewd expression and a calculating demeanor, epitomizing the spirit of trade and bartering in the world of Dungeons & Dragons",
        credit: "credit"
        },          
    ]
    },
    {
        id: 2,
        text: "What do they look like?",
        answers: [
        {   
        text: "muscular",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Powerful D&D character, with bulging muscles and a fierce expression, flexing their brawny arms, radiating strength and prowess, ready for battle or displaying their physical prowess in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "malnourished",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Empty fridge with open doors, revealing shelves devoid of food or provisions, with only bare containers and an absence of groceries, representing scarcity or hunger, and symbolizing a lack of sustenance or resources",
        credit: "credit"
        },
        {   
        text: "overweight",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Overweight D&D character, with a rotund physique and a jovial expression, wearing clothes that strain at the seams, carrying extra weight on their frame, exuding a sense of indulgence or abundance, reflecting diversity in body types within the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "unremarkable",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Average-looking D&D character, with unassuming features and plain attire, blending into the background with a nondescript appearance, lacking distinctive traits or noteworthy characteristics, representing an ordinary or unremarkable individual.",
        credit: "credit"
        },          
    ]
    },
    {
        id: 3,
        text: "What are they good at??",
        answers: [
        {   
        text: "socializing",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Group of friends gathered around a table in a cozy tavern, engaged in lively conversation, smiling and gesturing with raised glasses, sharing camaraderie and merriment, with warm lighting and a relaxed atmosphere in the background, depicting the joy of socializing and friendship in the world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "being fast and agile",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Agile D&D player character, in a dynamic pose showcasing their agility and prowess in combat or adventuring in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "being smart",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Wizard character in a serene pose, sitting cross-legged or standing with a spellbook open in hand, reading intently with a focused expression, surrounded by an aura of mystical energy or glowing runes, immersing themselves in the arcane arts in the world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "being strong",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Strong D&D character, with bulging muscles and a commanding presence, wielding a mighty weapon or showcasing their physical prowess, radiating strength and power, ready for battle or demonstrating their formidable abilities in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },          
    ]
    },
    {
        id: 4,
        text: "What are they bad at??",
        answers: [
        {   
        text: "being strong",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Strong D&D character, with bulging muscles and a commanding presence, wielding a mighty weapon or showcasing their physical prowess, radiating strength and power, ready for battle or demonstrating their formidable abilities in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        }, 
        {   
        text: "being smart",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Wizard character in a serene pose, sitting cross-legged or standing with a spellbook open in hand, reading intently with a focused expression, surrounded by an aura of mystical energy or glowing runes, immersing themselves in the arcane arts in the world of Dungeons & Dragons.",
        credit: "credit"
        },  
        {   
        text: "being fast and agile",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Agile D&D player character, in a dynamic pose showcasing their agility and prowess in combat or adventuring in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },    
        {   
        text: "socializing",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Group of friends gathered around a table in a cozy tavern, engaged in lively conversation, smiling and gesturing with raised glasses, sharing camaraderie and merriment, with warm lighting and a relaxed atmosphere in the background, depicting the joy of socializing and friendship in the world of Dungeons & Dragons.",
        credit: "credit"
        },   
    ]
    },
    {
        id: 5,
        text: "What is their gender?",
        answers: [
        {   
        text: "male",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Male D&D character, with masculine features and attire, embodying a wide range of identities and archetypes, from heroic warriors and wise wizards to cunning rogues and benevolent kings, reflecting the diversity and complexity of male characters in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "female",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Single female D&D character, with a unique appearance and personality, capable of embarking on solo adventures, forming bonds with allies, and facing challenges with courage and resourcefulness, embodying the spirit of adventure and independence in the game of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "gender neutral",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Gender-neutral D&D character, with an androgynous appearance that does not conform to traditional gender roles, reflecting a wide range of identities and expressions, from valiant adventurers and skilled spellcasters to resourceful tricksters and wise mentors, embodying inclusivity and diversity in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "none",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D character with an undefined or ambiguous gender, with a neutral appearance that does not conform to traditional gender norms, reflecting a character who transcends gender roles and expectations, embodying gender fluidity, non-binary identity, or other forms of gender diversity in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },          
    ]
    },
    {
        id: 6,
        text: "What is their age?",
        answers: [
        {   
        text: "teenager",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D teenage character, with youthful features and attire, reflecting the transition from childhood to adulthood, with a mix of curiosity, energy, and potential, embodying the unique challenges and experiences of teenage characters in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "young adult",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Young adult D&D character, in the prime of their life, with a mature appearance and confident demeanor, ready to face the challenges of the world, whether as a brave adventurer, a cunning rogue, a wise spellcaster, or any other heroic archetype, embodying the vibrancy and potential of young adulthood in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "adult",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Adult D&D character, with a seasoned and experienced appearance, exuding confidence, wisdom, and prowess, embodying the maturity and expertise that comes with age, whether as a battle-hardened warrior, a seasoned spellcaster, a shrewd merchant, or any other accomplished role in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "elderly",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Elderly D&D character, with a venerable and wise appearance, reflecting a lifetime of experience and knowledge, with gray or white hair, wrinkles, and a weathered expression, embodying the wisdom, insight, and resilience that comes with old age, whether as a sage, mentor, or advisor in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },          
    ]
    },
    {
        id: 7,
        text: "What race are they?",
        answers: [
        {   
        text: "Human",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "Single female D&D character, with a unique appearance and personality, capable of embarking on solo adventures, forming bonds with allies, and facing challenges with courage and resourcefulness, embodying the spirit of adventure and independence in the game of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "Elf",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D elf character, graceful and ethereal, with a slender build, pointed ears, and a serene expression, reflecting their agility, longevity, and connection with nature, dressed in elegant and flowing attire, wielding enchanting magic and sharp weapons, capable of casting spells, shooting arrows with precision, and communing with the forest, in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "Dwarf",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D dwarf character, stout and sturdy, with a stocky build, a long beard, and a determined expression, reflecting their resilience, craftsmanship, and love for mining and stonecraft, dressed in rugged and practical attire, wielding mighty weapons and powerful magic, capable of delving deep into the earth, battling monsters, and protecting their kin, in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },
        {   
        text: "Halfing",
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
        alt: "D&D halfling character, small and nimble, with a cheerful expression, rosy cheeks, and barefooted, reflecting their friendliness, curiosity, and love for comfort and good food, dressed in simple and practical attire, wielding small weapons and cunning tactics, capable of sneaking past enemies, charming allies, and embarking on daring adventures, in the fantasy world of Dungeons & Dragons.",
        credit: "credit"
        },          
    ]
    },
]

// array of all possible answers combinations there are
const answers = [
    {
        combination: ["greedy", "rule enforcer", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
        bio: "Roderick Stonegate grew up in a city known for its wealth and political intrigue. His family struggled financially, and Roderick became fixated on finding a way to secure his future. He joined the City Watch as a teenager, using his cunning and manipulation skills to rise through the ranks quickly. Roderick's insatiable greed and ambition drive him to seek wealth and power at any cost, often bending or breaking rules along the way. He's known for his shrewdness and ruthless determination, always on the lookout for new opportunities to line his pockets, but his self-centered nature has also made him enemies within the City Watch and beyond.",
        stats: "STR: 6 (-1) | DEX: 8 (-3)| CON: 8 (-3) | INT: 12 (+1) | WIS: 10 (0) | CHA: 17 (+4) | AC: 16 | HP: 11 "
    },
    {
        combination: ["greedy", "politician", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
        bio: "bio",
        stats: "STR: (-+) | DEX: (-+) | CON: (-+) | INT: (-+) | WIS: (-+) | CHA: (-+) | AC: | HP: "
    },
    {
        combination: ["greedy", "towns person", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
        bio: "bio",
        stats: "STR: (-+) | DEX: (-+) | CON: (-+) | INT: (-+) | WIS: (-+) | CHA: (-+) | AC: | HP: "
    },
    // {
    //     combination: ["friendly", "rule enforcer", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
    //     bio: "Lucas Brightwood grew up in a small town nestled in the foothills of a majestic mountain range. He was raised by his mother, who was a respected member of the town guard, and from a young age, Lucas was fascinated by the tales of heroism and adventure that his mother would share with him. He joined the town guard as soon as he was old enough and quickly gained a reputation for his friendly and approachable demeanor. Lucas is known for his courage in the face of danger and his skill in resolving conflicts peacefully. He's well-respected by his fellow guards and townspeople alike for his kind and empathetic nature, and he takes great pride in being a reliable and trustworthy protector of his community.",
    //     stats: "STR: 5 (-3) | DEX: 12 (+1) | CON: 15 (+2) | INT: 13 (+1) | WIS: 9 (-1) | CHA: 16 (+3)| AC: 15 | HP: 13 "
    // },
    // {
    //     combination: ["pompous", "rule enforcer", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
    //     bio: "Cedric von Belmont comes from a wealthy and influential family in the kingdom's capital. He joined the town guard to further his family's reputation and gain favor with the kingdom's elite. Cedric is arrogant and ambitious, constantly seeking opportunities to prove himself and climb the ranks. He has a competitive streak but often underestimates his opponents due to his overconfidence. Despite his flaws, Cedric is a capable fighter, but his pompous attitude creates tension among his peers and the townspeople he serves.",
    //     stats: "STR: 7 (-2) | DEX: 11 (0) | CON: 12 (+1) | INT: 10 (0) | WIS: 13 (+1) | CHA: 15 (+2) | AC: 14 | HP: 15 "
    // },
    // {
    //     combination: ["bookworm", "rule enforcer", "muscular", "socializing", "being strong", "male", "teenager", "Human"],
    //     bio: "Oliver Greystone is a teenage human who grew up with a deep love for books and knowledge. He spent countless hours reading and studying, immersing himself in the lore and history of the world. When he came of age, Oliver joined the town guard to use his intellect and keen observation skills to protect and serve his community. Despite his young age, Oliver's thoughtful and resourceful approach to challenges makes him a valuable asset to the town guard, and his thirst for knowledge continues to drive him in his quest for wisdom and understanding.",
    //     stats: "STR: 7 (-2) | DEX: 13 (+1) | CON: 10 (0) | INT: 12 (+1) | WIS: 15 (+2) | CHA: 15 (+2) | AC: 13 | HP: 12 "
    // },
    {
        combination: ["", "", "", "", "", "", "", ""],
        bio: "bio",
        stats: "STR: (-+) | DEX: (-+) | CON: (-+) | INT: (-+) | WIS: (-+) | CHA: (-+) | AC: | HP: "
    },


]

const unansweredQuestions = []
const chosenAnswers = []




const populateQuestions = () => {
    questions.forEach(question => {
        const titleBlock = document.createElement('div')
        titleBlock.id = question.id
        titleBlock.classList.add('title-block')
        const titleHeading = document.createElement('h2')
        titleHeading.textContent = question.text
        titleBlock.append(titleHeading)
        questionDisplay.append(titleBlock)

        const answersBlock = document.createElement('div')
        answersBlock.id = question.id  + "-questions"
        answersBlock.classList.add('answer-options')

        unansweredQuestions.push(question.id)

        question.answers.forEach(answer  => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick(question.id, answer.text))
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            answerBlock.append(answerImage, answerTitle)
        
            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)

    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    if (unansweredQuestions.includes(questionId))
    chosenAnswers.push(chosenAnswer)
    const itemToRemove = unansweredQuestions.indexOf(questionId)

    if (itemToRemove > -1) {
        unansweredQuestions.splice(itemToRemove, 1)
    }
    console.log(chosenAnswers)
    console.log(unansweredQuestions)

    // disableQuestionBlock(questionId, chosenAnswer)
    const lowestQuestionId = Math.min(...unansweredQuestions)
    location.href = '#' + lowestQuestionId

    if (!unansweredQuestions.length) {
        showAnswer()
    }
}

const showAnswer = () => {


    const answerBlock = document.createElement('div')
    answerBlock.classList.add('result-block')
    const answerTitle = document.createElement('h3')
    answerTitle.textContent = result.text
    const answerImage = document.createElement('img')
    answerImage.setAttribute('src', )
}