// html quiz
export const htmlQuiz = [
  {
    id: 1,
    question: "What does HTML stand for?",
    answers: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlinks and Text Markup Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 2,
    question: "Which HTML tag is used to define the largest heading?",
    answers: ["<h6>", "<head>", "<h1>", "<heading>"],
    correctAnswer: "<h1>"
  },
  {
    id: 3,
    question: "Which attribute is used to provide an alternative text for an image?",
    answers: ["alt", "title", "src", "longdesc"],
    correctAnswer: "alt"
  },
  {
    id: 4,
    question: "Which HTML element is used to create a hyperlink?",
    answers: ["<link>", "<a>", "<href>", "<hyper>"],
    correctAnswer: "<a>"
  },
  {
    id: 5,
    question: "Which tag is used to insert a line break in HTML?",
    answers: ["<break>", "<lb>", "<br>", "<hr>"],
    correctAnswer: "<br>"
  }
];

export const cssQuiz = [
  {
    id: 1,
    question: "What does CSS stand for?",
    answers: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    id: 2,
    question: "Which property is used to change the text color of an element?",
    answers: ["font-color", "text-color", "color", "background-color"],
    correctAnswer: "color"
  },
  {
    id: 3,
    question: "Which CSS property controls the size of text?",
    answers: ["font-style", "text-size", "font-size", "text-style"],
    correctAnswer: "font-size"
  },
  {
    id: 4,
    question: "Which value of the position property places an element relative to its first positioned ancestor?",
    answers: ["absolute", "fixed", "relative", "static"],
    correctAnswer: "absolute"
  },
  {
    id: 5,
    question: "Which property is used to set the spacing between lines of text?",
    answers: ["letter-spacing", "line-height", "word-spacing", "text-spacing"],
    correctAnswer: "line-height"
  }
];

//js quiz
export const jsQuiz = [
  {
    id: 1,
    question: "Which keyword is used to declare a variable in JavaScript?",
    answers: ["var", "let", "const", "All of the above"],
    correctAnswer: "All of the above"
  },
  {
    id: 2,
    question: "What is the output of `typeof null` in JavaScript?",
    answers: ["null", "object", "undefined", "boolean"],
    correctAnswer: "object"
  },
  {
    id: 3,
    question: "Which method is used to parse a JSON string into a JavaScript object?",
    answers: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toObject()"],
    correctAnswer: "JSON.parse()"
  },
  {
    id: 4,
    question: "Which symbol is used for strict equality comparison in JavaScript?",
    answers: ["==", "===", "!=", "!=="],
    correctAnswer: "==="
  },
  {
    id: 5,
    question: "What will `console.log(2 + '2')` output?",
    answers: ["4", "22", "NaN", "Error"],
    correctAnswer: "22"
  }
];

// accessibility quiz
export const accessibilityQuiz = [
  {
    id: 1,
    question: "What does 'a11y' stand for in web development?",
    answers: [
      "Accessibility",
      "Alignment",
      "Analytics",
      "Automation"
    ],
    correctAnswer: "Accessibility"
  },
  {
    id: 2,
    question: "Which HTML attribute is essential for screen readers to describe images?",
    answers: ["alt", "title", "aria-label", "role"],
    correctAnswer: "alt"
  },
  {
    id: 3,
    question: "Which ARIA attribute is used to provide a label for interactive elements?",
    answers: ["aria-role", "aria-label", "aria-hidden", "aria-live"],
    correctAnswer: "aria-label"
  },
  {
    id: 4,
    question: "Why should headings (<h1>–<h6>) be used in order?",
    answers: [
      "For styling purposes only",
      "To improve SEO ranking",
      "To provide a logical structure for assistive technologies",
      "To make text bold automatically"
    ],
    correctAnswer: "To provide a logical structure for assistive technologies"
  },
  {
    id: 5,
    question: "Which color contrast ratio is recommended for normal text to meet WCAG AA standards?",
    answers: ["2:1", "3:1", "4.5:1", "7:1"],
    correctAnswer: "4.5:1"
  }
];