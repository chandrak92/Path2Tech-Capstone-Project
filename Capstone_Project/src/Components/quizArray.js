// Quiz Questions
//expected overhead, more efficient to utilize a database
//food waste source: https://www.stopwaste.org/at-home/reducing-wasted-food/wasted-food-facts 
//clothing waste source: https://earth.org/statistics-about-fast-fashion-waste/

export const quiz = {
    food: [
    {
        topic: 'Food Waste',
        level: 'Beginner',
        totalQuestions: 5,
        perQuestionScore: 4,
        questions: [
        {
            question: 'How much food is wasted in the United States?',
            choices: ['15%', '60%', '40%', '35%'],
            type: 'MCQs',
            correctAnswer: '40%',
        },
        {
            question: 'Where can you drop off food donations?',
            choices: ['Police Stations', 'Food Banks', 'Hospitals', 'American Red Cross', 'Homeless Shelters'],
            type: 'MAQs',
            correctAnswer: ['Food Banks', 'American Red Cross', 'Homeless Shelters'],
        },
        {
            question: 'What percentage of freshwater is wasted on unconsumed produce in the United States?',
            choices: ['10%', '5%', '40%', '25%'],
            type: 'MCQs',
            correctAnswer: '25%',
        },
        {
            question: 'How much money does an average American family of 4 spend on wasted food annually?',
            choices: ['$1,600', '$500', '$1,000', '$750'],
            type: 'MCQs',
            correctAnswer: '$1,600',
        },
        {
            question: 'What amount of Green House Gas (GHG) emissions are produced from food waste in the United States? (mt= Metric Ton)',
            choices: ['100,000,000mt', '75,000,000mt', '50,000,000mt', '135,000,000mt'],
            type: 'MCQs',
            correctAnswer: '135,000,000mt',
        },
        ],
    },
    ],
    clothing: [
    {
        topic: 'Clothing Waste',
        level: 'Beginner',
        totalQuestions: 5,
        perQuestionScore: 4,
        questions: [
        {
            question: 'How many pounds(lbs) of clothing waste does the average American consumer produce annually?',
            choices: ['40.5lbs', '63.2lbs', '55lbs', '81.5lbs'],
            type: 'MCQs',
            correctAnswer: '81.5lbs',
        },
        {
            question: 'Where can you drop off clothing donations?',
            choices: ['Planet Aid', 'Police Station', 'Domestic Violence Shelters', 'Libraries', 'Homeless Shelters'],
            type: 'MAQs',
            correctAnswer: ['Domestic Violence Shelters', 'Planet Aid', 'Homeless Shelters']
        },
        {
            question: 'How much money is lost annually as a result of clothing waste?',
            choices: ['$500 Billion', '$750 Million', '$3 Billion', '$100 Billion'],
            type: 'MCQs',
            correctAnswer: '$500 Billion',
        },
        {
            question: 'What amount of returned clothes in the United States ends up in landfills? (mt= Metric Ton)',
            choices: ['1,200,000mt', '2,600,000mt', '1,500,000mt', '750,000mt'],
            type: 'MCQs',
            correctAnswer: '2,600,000mt',
        },
        {
            question: 'How much water is used to produce 1Kg of cotton? (L= Liters)',
            choices: ['7,500L', '20,000L', '15,000L', '500L'],
            type: 'MCQs',
            correctAnswer: '20,000L',
        },
        ],
    },
    ],
  }