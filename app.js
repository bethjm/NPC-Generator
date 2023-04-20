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
        text: "local business owner",
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
        id: 5,
        image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjczMTc0fQ&fit=crop&h=230&w=320&crop=edges",
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

        question.answers.forEach(answer  => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
            answerBlock.addEventListener('click', () => handleClick)
            const answerImage = document.createElement('img')
            answerImage.setAttribute('src', answer.image)
            answerImage.setAttribute('alt', answer.alt)

            const answerTitle = document.createElement('h3')
            answerTitle.textContent = answer.text

            // const answerInfo = document.createElement('p')
            // const imageLink = document.createElement('a')
            // imageLink.setAttribute('href', answer.credit)
            // const sourceLink = document.createElement('a')
            // sourceLink.textContent = 'Unsplash'
            // sourceLink.setAttribute('src', 'https://www.unsplash.com')
            // answerInfo.append(imageLink, ' to ', sourceLink)
            // could go in answer.block (, answerInfo)

            answerBlock.append(answerImage, answerTitle)
        
            answersBlock.append(answerBlock)
        })
        questionDisplay.append(answersBlock)

    })
}

populateQuestions()

const handleClick = (questionId, chosenAnswer) => {
    console.log('click')
}