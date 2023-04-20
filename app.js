const questionDisplay = document.querySelector('#questions')
const answerDisplay = document.querySelector('#answer')

const questions = [
    {
        id: 0,
        text: "What kind of person are they?",
        answers: [
        {   
        text: "greedy",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fpeople.com%2Fhuman-interest%2Foregon-man-says-he-threw-200k-from-car-bless-others-family-claims-drained-bank-accounts%2F&psig=AOvVaw1lFDpXujQ1PXls6Sz1-Psg&ust=1682042369606000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCMjOmqGut_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "friendly",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fhealth%2Fsenior-living%2Fage-friendly-movement%2F&psig=AOvVaw0IUQI_Xzv_JA1QgHmeAxao&ust=1682042390949000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCVsauut_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "pompous",
        photo: "https://www.google.com/url?sa=i&url=http%3A%2F%2Fbarbaramcnichol.com%2F2020%2F01%2F06%2Fpompous-phrases-can-set-an-arrogant-tone%2F&psig=AOvVaw37QWFTzj--VbrS-ax-JiDc&ust=1682042415336000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjxkLeut_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "bookworm",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftolas.fandom.com%2Fwiki%2FThe_Will_and_the_Word&psig=AOvVaw1kzNYN5AZuqvMJcCYqWH6z&ust=1682042514317000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLiBm-aut_4CFQAAAAAdAAAAABAb",
        },          
    ]
    },
    {
        id: 1,
        text: "What is their job?",
        answers: [
        {   
        text: "rule enforcer",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F749286456731901590%2F&psig=AOvVaw1BvXNkprNC26LGqEzRcSwE&ust=1682042600809000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDb2o-vt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "politician",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.peakpx.com%2Fen%2Fhd-wallpaper-desktop-kspky&psig=AOvVaw2ctDlvMsGAgJmPHJ9LJMgr&ust=1682042645352000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNia3aSvt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "townsperson",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fcaminhando-correndo--294141419398584841%2F&psig=AOvVaw0N5lMuYypsm9j-ILL_rORs&ust=1682042668242000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODe3K-vt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "local business owner",
        photo: "https://i.pinimg.com/originals/c4/2c/f7/c42cf713c6f4d285380db58d7a289b5a.jpg",
        },          
    ]
    },
    {
        id: 2,
        text: "What do they look like?",
        answers: [
        {   
        text: "muscular",
        photo: "https://i.pinimg.com/236x/69/92/43/6992435c3dc406e453c60f1d497af4b3--character-concept-character-art.jpg",
        },
        {   
        text: "malnourished",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.megapixl.com%2Fempty-fridge-stock-photo-19640702&psig=AOvVaw1VdrOqVnOed8Xu0XIosbyK&ust=1682042793621000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCNwOuvt_4CFQAAAAAdAAAAABAF",
        },
        {   
        text: "overweight",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fbodyliberationphotos.com%2F2020%2F05%2F01%2Four-bodies-should-not-be-shorthands%2F&psig=AOvVaw2_WCHaFwpuvUUVeUkbsdnF&ust=1682042816574000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLDJuvavt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "unremarkable",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F757167756071527464%2F&psig=AOvVaw3FvUhsQGOEqi7pEq8bXTUn&ust=1682042848068000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCIDDvoWwt_4CFQAAAAAdAAAAABAJ",
        },          
    ]
    },
    {
        id: 3,
        text: "What are they good at??",
        answers: [
        {   
        text: "socializing",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FDnD%2Fcomments%2Fmtya9d%2Fart_group_of_characters_in_tavern_commission_for%2F&psig=AOvVaw3gd-75FPwmmdGjZCrOTu54&ust=1682042893574000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjqlpuwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being fast and agile",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F331718328811079930%2F&psig=AOvVaw2AuvOEEl-iLfOLx8JxRsNd&ust=1682042915801000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjH16Wwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being smart",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmatrixm%2Fmale-wizards%2F&psig=AOvVaw1-6KWeApK-7M5Fy3i7nwCP&ust=1682042942776000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCP2rKwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being strong",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmikeludema%2Fdd-strong%2F&psig=AOvVaw3TTGuX79UJP3ZhQsoqNzLu&ust=1682042982693000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjo1MWwt_4CFQAAAAAdAAAAABAO",
        },          
    ]
    },
    {
        id: 4,
        text: "What are they bad at??",
        answers: [
        {   
        text: "socializing",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FDnD%2Fcomments%2Fmtya9d%2Fart_group_of_characters_in_tavern_commission_for%2F&psig=AOvVaw3gd-75FPwmmdGjZCrOTu54&ust=1682042893574000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjqlpuwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being fast and agile",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F331718328811079930%2F&psig=AOvVaw2AuvOEEl-iLfOLx8JxRsNd&ust=1682042915801000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjH16Wwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being smart",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmatrixm%2Fmale-wizards%2F&psig=AOvVaw1-6KWeApK-7M5Fy3i7nwCP&ust=1682042942776000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMCP2rKwt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "being strong",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fmikeludema%2Fdd-strong%2F&psig=AOvVaw3TTGuX79UJP3ZhQsoqNzLu&ust=1682042982693000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjo1MWwt_4CFQAAAAAdAAAAABAO",
        },          
    ]
    },
    {
        id: 5,
        text: "What is their gender",
        answers: [
        {   
        text: "male",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F118641771421965039%2F&psig=AOvVaw1tVN14nIJaEQ0nHUiO6qq9&ust=1682043054929000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPj3muiwt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "female",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.artstation.com%2Fartwork%2F3dw0KB&psig=AOvVaw0UsRCpyHrJGdJnU6xIFOyV&ust=1682043077526000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNDA9PKwt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "gender neutral",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fentirelybonkers%2Fart%2FDune-Original-Character-DnD-626331129&psig=AOvVaw1euMFfQM6PqILp8_cu5YsM&ust=1682043099383000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKDsoP2wt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "none",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcrateredland.blogspot.com%2F2019%2F07%2Fwait-yall-actually-have-genders.html&psig=AOvVaw2k1LOjRII93hAOu0-jD97T&ust=1682043127846000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPC05Iqxt_4CFQAAAAAdAAAAABAE",
        },          
    ]
    },
    {
        id: 6,
        text: "What is their age?",
        answers: [
        {   
        text: "teenager",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F575546027384565936%2F&psig=AOvVaw3ViuJtRkhPSpH3kgccx3B7&ust=1682043160811000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJCYyJqxt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "young adult",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FDnD%2Fcomments%2Fn14dn7%2Fart_oc_air_genasi_ranger_dd_character_design_by_me%2F&psig=AOvVaw2iXU8LoTwZ-G7jF6Aqnw25&ust=1682043173378000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCKD32qCxt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "adult",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F15129348737332656%2F&psig=AOvVaw0aXKeZbFGUaj5lovwfDYZV&ust=1682043238132000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCMDKwL-xt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "elderly",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fceridwind%2Fa-elderly-dnd%2F&psig=AOvVaw2nRrBTcQrHH6OWXP-gpG-w&ust=1682043261726000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJjH3Mqxt_4CFQAAAAAdAAAAABAK",
        },          
    ]
    },
    {
        id: 7,
        text: "What race are they?",
        answers: [
        {   
        text: "Human",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fathenblade%2Fdd-human-females%2F&psig=AOvVaw1T98JGFnSH5t-_WrKiEul1&ust=1682043279844000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODNt9Oxt_4CFQAAAAAdAAAAABAE",
        },
        {   
        text: "Elf",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Ffi.pinterest.com%2Fpin%2F516999232217241180%2F&psig=AOvVaw354HJ1sUcJ3zpeNWanHRHf&ust=1682043293335000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNjd5tmxt_4CFQAAAAAdAAAAABAJ",
        },
        {   
        text: "Dwarf",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.seekpng.com%2Fipng%2Fu2q8t4e6r5e6i1r5_d-d-dwarf-png-picture-transparent-stock-d%2F&psig=AOvVaw2QjdaAFFSTS83XVwjZdys0&ust=1682043317419000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCypOWxt_4CFQAAAAAdAAAAABAI",
        },
        {   
        text: "Halfing",
        photo: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reddit.com%2Fr%2FDungeonsAndDragons%2Fcomments%2F9chdcn%2Fi_drew_my_dnd_character_aeri_shes_a_halfling_rogue%2F&psig=AOvVaw1G6dUUXLT38GG_FUiNFx3Y&ust=1682043340650000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOiKrfCxt_4CFQAAAAAdAAAAABAE",
        },          
    ]
    },
]