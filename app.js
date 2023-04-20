const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "What kind of person are they?",
        answers: [
        {   
        text: "greedy",
        image: "",
        alt: "Group of friends gathered around a table in a cozy tavern, laughing heartily with raised glasses, sharing good times and camaraderie, with warm lighting and mugs of ale in the background."
        },
        {   
        text: "friendly",
        image: "",
        alt: "photo of friends socializing"
        },
        {   
        text: "pompous",
        image: "",
        alt: "Pompous man with a haughty expression, standing with a lifted chin, dressed in extravagant clothing, holding a cane and looking disdainfully at others."
        },
        {   
        text: "bookworm",
        image: "",
        alt: "Wizard with flowing robes and a pointed hat, sitting cross-legged with a spellbook open on their lap, reading intently with a glowing staff by their side"
        },          
    ]
    },
    {
        id: 1,
        text: "What is their job?",
        answers: [
        {   
        text: "rule enforcer",
        image: "",
        alt: "Town guard in armor and helmet, carrying a shield with the town's emblem, standing alert with a stern expression, ready to maintain law and order."
        },
        {   
        text: "politician",
        image: "",
        alt: "D&D politician, dressed in formal attire, standing confidently with a commanding presence, giving a persuasive speech to a crowd with gestures and charisma"
        },
        {   
        text: "townsperson",
        image: "",
        alt: "D&D townsperson, wearing simple clothing with a friendly or neutral expression, adding life and diversity to the town's streets."
        },
        {   
        text: "local business owner",
        image: "",
        alt: "Fantasy merchant in a bustling marketplace, surrounded by exotic wares and treasures, engaging in commerce with customers, with a shrewd expression and a calculating demeanor, epitomizing the spirit of trade and bartering in the world of Dungeons & Dragons"
        },          
    ]
    },
    {
        id: 2,
        text: "What do they look like?",
        answers: [
        {   
        text: "muscular",
        image: "",
        alt: "Powerful D&D character, with bulging muscles and a fierce expression, flexing their brawny arms, radiating strength and prowess, ready for battle or displaying their physical prowess in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "malnourished",
        image: "",
        alt: "Empty fridge with open doors, revealing shelves devoid of food or provisions, with only bare containers and an absence of groceries, representing scarcity or hunger, and symbolizing a lack of sustenance or resources"
        },
        {   
        text: "overweight",
        image: "",
        alt: "Overweight D&D character, with a rotund physique and a jovial expression, wearing clothes that strain at the seams, carrying extra weight on their frame, exuding a sense of indulgence or abundance, reflecting diversity in body types within the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "unremarkable",
        image: "",
        alt: "Average-looking D&D character, with unassuming features and plain attire, blending into the background with a nondescript appearance, lacking distinctive traits or noteworthy characteristics, representing an ordinary or unremarkable individual."
        },          
    ]
    },
    {
        id: 3,
        text: "What are they good at??",
        answers: [
        {   
        text: "socializing",
        image: "",
        alt: "Group of friends gathered around a table in a cozy tavern, engaged in lively conversation, smiling and gesturing with raised glasses, sharing camaraderie and merriment, with warm lighting and a relaxed atmosphere in the background, depicting the joy of socializing and friendship in the world of Dungeons & Dragons."
        },
        {   
        text: "being fast and agile",
        image: "",
        alt: "Agile D&D player character, in a dynamic pose showcasing their agility and prowess in combat or adventuring in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "being smart",
        image: "",
        alt: "Wizard character in a serene pose, sitting cross-legged or standing with a spellbook open in hand, reading intently with a focused expression, surrounded by an aura of mystical energy or glowing runes, immersing themselves in the arcane arts in the world of Dungeons & Dragons."
        },
        {   
        text: "being strong",
        image: "",
        alt: "Strong D&D character, with bulging muscles and a commanding presence, wielding a mighty weapon or showcasing their physical prowess, radiating strength and power, ready for battle or demonstrating their formidable abilities in the fantasy world of Dungeons & Dragons."
        },          
    ]
    },
    {
        id: 4,
        text: "What are they bad at??",
        answers: [
        {   
        text: "socializing",
        image: "",
        alt: "Group of friends gathered around a table in a cozy tavern, engaged in lively conversation, smiling and gesturing with raised glasses, sharing camaraderie and merriment, with warm lighting and a relaxed atmosphere in the background, depicting the joy of socializing and friendship in the world of Dungeons & Dragons."
        },
        {   
        text: "being fast and agile",
        image: "",
        alt: "Agile D&D player character, in a dynamic pose showcasing their agility and prowess in combat or adventuring in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "being smart",
        image: "",
        alt: "Wizard character in a serene pose, sitting cross-legged or standing with a spellbook open in hand, reading intently with a focused expression, surrounded by an aura of mystical energy or glowing runes, immersing themselves in the arcane arts in the world of Dungeons & Dragons."
        },
        {   
        text: "being strong",
        image: "",
        alt: "Strong D&D character, with bulging muscles and a commanding presence, wielding a mighty weapon or showcasing their physical prowess, radiating strength and power, ready for battle or demonstrating their formidable abilities in the fantasy world of Dungeons & Dragons."
        },          
    ]
    },
    {
        id: 5,
        image: "",
        answers: [
        {   
        text: "male",
        image: "",
        alt: "Male D&D character, with masculine features and attire, embodying a wide range of identities and archetypes, from heroic warriors and wise wizards to cunning rogues and benevolent kings, reflecting the diversity and complexity of male characters in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "female",
        image: "",
        alt: "Single female D&D character, with a unique appearance and personality, capable of embarking on solo adventures, forming bonds with allies, and facing challenges with courage and resourcefulness, embodying the spirit of adventure and independence in the game of Dungeons & Dragons."
        },
        {   
        text: "gender neutral",
        image: "",
        alt: "Gender-neutral D&D character, with an androgynous appearance that does not conform to traditional gender roles, reflecting a wide range of identities and expressions, from valiant adventurers and skilled spellcasters to resourceful tricksters and wise mentors, embodying inclusivity and diversity in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "none",
        image: "",
        alt: "D&D character with an undefined or ambiguous gender, with a neutral appearance that does not conform to traditional gender norms, reflecting a character who transcends gender roles and expectations, embodying gender fluidity, non-binary identity, or other forms of gender diversity in the fantasy world of Dungeons & Dragons."
        },          
    ]
    },
    {
        id: 6,
        text: "What is their age?",
        answers: [
        {   
        text: "teenager",
        image: "",
        alt: "D&D teenage character, with youthful features and attire, reflecting the transition from childhood to adulthood, with a mix of curiosity, energy, and potential, embodying the unique challenges and experiences of teenage characters in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "young adult",
        image: "",
        alt: "Young adult D&D character, in the prime of their life, with a mature appearance and confident demeanor, ready to face the challenges of the world, whether as a brave adventurer, a cunning rogue, a wise spellcaster, or any other heroic archetype, embodying the vibrancy and potential of young adulthood in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "adult",
        image: "",
        alt: "Adult D&D character, with a seasoned and experienced appearance, exuding confidence, wisdom, and prowess, embodying the maturity and expertise that comes with age, whether as a battle-hardened warrior, a seasoned spellcaster, a shrewd merchant, or any other accomplished role in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "elderly",
        image: "",
        alt: "Elderly D&D character, with a venerable and wise appearance, reflecting a lifetime of experience and knowledge, with gray or white hair, wrinkles, and a weathered expression, embodying the wisdom, insight, and resilience that comes with old age, whether as a sage, mentor, or advisor in the fantasy world of Dungeons & Dragons."
        },          
    ]
    },
    {
        id: 7,
        text: "What race are they?",
        answers: [
        {   
        text: "Human",
        image: "",
        alt: "Single female D&D character, with a unique appearance and personality, capable of embarking on solo adventures, forming bonds with allies, and facing challenges with courage and resourcefulness, embodying the spirit of adventure and independence in the game of Dungeons & Dragons."
        },
        {   
        text: "Elf",
        image: "",
        alt: "D&D elf character, graceful and ethereal, with a slender build, pointed ears, and a serene expression, reflecting their agility, longevity, and connection with nature, dressed in elegant and flowing attire, wielding enchanting magic and sharp weapons, capable of casting spells, shooting arrows with precision, and communing with the forest, in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "Dwarf",
        image: "",
        alt: "D&D dwarf character, stout and sturdy, with a stocky build, a long beard, and a determined expression, reflecting their resilience, craftsmanship, and love for mining and stonecraft, dressed in rugged and practical attire, wielding mighty weapons and powerful magic, capable of delving deep into the earth, battling monsters, and protecting their kin, in the fantasy world of Dungeons & Dragons."
        },
        {   
        text: "Halfing",
        image: "",
        alt: "D&D halfling character, small and nimble, with a cheerful expression, rosy cheeks, and barefooted, reflecting their friendliness, curiosity, and love for comfort and good food, dressed in simple and practical attire, wielding small weapons and cunning tactics, capable of sneaking past enemies, charming allies, and embarking on daring adventures, in the fantasy world of Dungeons & Dragons."
        },          
    ]
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

        question.answers.forEach(answer  => {
            const answerBlock = document.createElement('div')
            answerBlock.classList.add('answer-block')
        
        })
        questionDisplay.append(answersBlock)

    })
}

populateQuestions()

