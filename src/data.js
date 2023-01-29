import uml from "./assets/images/UML1.png";
import mock from "./assets/images/from_mock.png";
import about_me from "./assets/images/about_me.png";
import fun_validation from "./assets/images/fun_validation.png";
import useCase from "./assets/images/use1.png";
import parkingTickets from "./assets/images/parkingTickets.png";
import orderForm from "./assets/images/orderForm.png";
import javaClass from "./assets/images/javaClass.png";

export const projects = [
  {
    title: "UML Diagram",
    description:
      "Designed software in the language of business. Satisfied given class data requirements and included multiplicities, navigability, collection classes, polymorphism, inheritance, boundary & control classes, layered groups (microservice design), behavioural composition, Event Bus, Data Layer, data persistence classes, interfaces, the Singleton Pattern, command classes, the Template Pattern, custom iterator, the State Pattern, and rest services.",
    techList: "Microsoft Word",
    image: uml,
    link: "/UMLDiagram/UMLDiagram.html",
  },
  {
    title: "Create from a Mock Up",
    description: "Created a site given an image as a mock up to portray.",
    techList: "HTML5, CSS",
    image: mock,
    link: "/SiteFromMockUp/project1.html",
  },
  {
    title: "About Me",
    description: "In my first term, I built a site to capture who I am!",
    techList: "HTML5, CSS, JavaScript",
    image: about_me,
    link: "/AboutMe/index.html",
  },
  {
    title: "Fun Date Validation",
    description:
      "Enter a current/future date and let your mouse run wild! Enter a past date and you cannot continue!",
    techList: "HTML5, JavaScript, CSS",
    image: fun_validation,
    link: "/DateValidation/competency19.html",
  },
  {
    title: "Use Case and Diagram Documentation",
    description:
      "Documentation was created based on a given case study and 3 diagrams - Use Case (for business requirements), Work flow, Data flow.",
    techList: "Microsoft Word",
    image: useCase,
    link: "/UseCaseAndDiagrams/useCaseDiagram.html",
  },
  {
    title: "Order Form",
    description:
      "A web order form using JavaScript for both cart functionality and order form data validation. A successfully filled out order leads to a PHP thank-you page. A valid card number for testing purposes is 2222222225. However, to keep the original project files here, I did not configure React to be able to use the PHP invoice file. A successful submit will lead to the php script that would create the invoice.",
    techList: "PHP, JavaScript, HTML5 (on Xampp)",
    image: orderForm,
    link: "/OrderForm/p2form.html",
  },
  {
    title: "Parking Ticket Database Search",
    description:
      "Created an AJAX search form that queries a JSON open data API.",
    techList: "JavaScript, HTML5, CSS (on Xampp)",
    image: parkingTickets,
    link: "/ParkingTickets/parkingTickets.html",
  },
  {
    title: "Java Class Design",
    description:
      "Designed and developed Java classes, includign extensions from a super class, from requirements. Includes the practices of reusing code and encapsulation.",
    techList: "Java on TextPad",
    image: javaClass,
    link: "/JavaClasses/classes.html",
  },
];

export const extensions = [
  {
    name: "Auto Close Tag",
    link: "https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag",
  },
  {
    name: "Debugger for Firefox",
    link: "https://marketplace.visualstudio.com/items?itemName=firefox-devtools.vscode-firefox-debug",
  },
  {
    name: "Dev Containers",
    link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers",
  },
  {
    name: "endwise",
    link: "https://marketplace.visualstudio.com/items?itemName=kaiwood.endwise",
  },
  {
    name: "Simple Icons",
    link: "https://marketplace.visualstudio.com/items?itemName=ShaneLiesegang.vscode-simple-icons-rev",
  },
  {
    name: "TODO Highlight",
    link: "https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight",
  },
  {
    name: "VSCode Ruby",
    link: "https://marketplace.visualstudio.com/items?itemName=wingrunr21.vscode-ruby",
  },
  {
    name: "WSL",
    link: "https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl",
  },
  {
    name: "Bracket Pair Colorization Toggler",
    link: "https://marketplace.visualstudio.com/items?itemName=dzhavat.bracket-pair-toggler",
  },
  {
    name: "Docker",
    link: "https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker",
  },
  {
    name: "EditorConfig for VS Code",
    link: "https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",
  },
  {
    name: "ESLint",
    link: "https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",
  },
  {
    name: "html tag wrapper",
    link: "https://marketplace.visualstudio.com/items?itemName=hwencc.html-tag-wrapper",
  },
  {
    name: "IntelliCode",
    link: "https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.vscodeintellicode",
  },
  {
    name: "IntelliCode API Usage Examples",
    link: "https://marketplace.visualstudio.com/items?itemName=VisualStudioExptTeam.intellicode-api-usage-examples",
  },
  {
    name: "Prettier - Code formatter",
    link: "https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",
  },
  {
    name: "Print",
    link: "https://marketplace.visualstudio.com/items?itemName=pdconsec.vscode-print",
  },
  {
    name: "REST Client",
    link: "https://marketplace.visualstudio.com/items?itemName=humao.rest-client",
  },
  {
    name: "Ruby",
    link: "https://marketplace.visualstudio.com/items?itemName=rebornix.Ruby",
  },
  {
    name: "Ruby Solargrap",
    link: "https://marketplace.visualstudio.com/items?itemName=castwide.solargraph",
  },
  {
    name: "SQLite",
    link: "https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite",
  },
  {
    name: "Vetur",
    link: "https://marketplace.visualstudio.com/items?itemName=octref.vetur",
  },
  {
    name: "vscode-gemfile",
    link: "https://marketplace.visualstudio.com/items?itemName=bung87.vscode-gemfile",
  },
  {
    name: "Vue Language Features (Volar)",
    link: "https://marketplace.visualstudio.com/items?itemName=Vue.volar",
  },
];

export const languages = [
  "PHP",
  "Java",
  "JavaScript",
  "JSON",
  "HTML5",
  "CSS",
  "DML (Data Manipulation Language)",
  "DDL (Data Definition Language)",
  "SQL (Structured Query Language) / MySQL / MariaDB",
  "Unified Modeling Language",
];

export const frontEnd = [
  "React",
  "Ensured pleasant end-user experience",
  "Fulfilled projects based on requirements ",
  "Built an e-commerce site with Ruby on Rails (Ubuntu)",
];

export const backEnd = [
  "Maintained databases",
  "Object-Oriented Systems Analysis & Design (using UML)ct",
  "Python & REST (Representational State Transfer)-based Python APIs",
  "Ethical Hacking: SQL injections, Medusa, Hydra Brute Force Attacks, Samba",
  "ERDs (Entity Relationship Diagrams)",
  "Node",
];

export const tools = [
  "Git",
  "Github",
  "GitHub Actions / Workflows",
  "VirtualBox",
  "Visual Studio Code",
  "Sublime Text",
  "TextPad",
  "Docker",
  "Husky",
  "Jest",
  "Code Linters (ESLint)",
  "Project Management principles & fundamental aspects, including the Agile framework",
];
