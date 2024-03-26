// Cześć. Widzę, że znalazłeś pytania i odpowiedzi do quizu. Gratuluję!
// Domyślam się, że jak ja jesteś z programistycznego świata, więc nie będę tłumaczył, że to tylko niezabezpieczone demo, itp.
// Mam nadzięję, że inicjatywa Ci się podoba. Jeśli tak, to zapraszam do współpracy na githubie.
// Chętnie przyjmę wszelkie uwagi, propozycje, pomysły i zgłoszenia błędów.
// Jeśli chcesz zaproponować pytania do quizu lub masz pomysł na promocję inicjatywy, to również zapraszam.
// Jeśli jak większość z nas jesteś wiecznie zajęty to wdzięczny będę za choćby polubienie, skomentowanie lub udostępnienie strony znajomym i rodzinie.
// Wszystko to motywuje mnie do dalszej pracy nad projektem, a uważam, że warto walczyć.
// Pozdrawiam i życzę powodzenia w rozwiązaniu quizu.

const quizData = [
    {
        question: "Ile wynosi podstawowa stawka podatku VAT w Polsce?",
        a: "22%",
        b: "16%",
        c: "23%",
        d: "8%",
        correct: "c",
    },
    {
        question: "Ile procent atmosfery stanowi dwutlenek węgla (CO2)?",
        a: "około 12,3%",
        b: "około 0,04%",
        c: "około 64,1%",
        d: "około 2,1%",
        correct: "b",
    },
    {
        question: "Jan i Ewa zdecydowali się na zakup mieszkania w Polsce za 300 000 zł i zaciągnęli kredyt hipoteczny na 25 lat. Początkowa miesięczna rata kredytu wynosiła 2 000 zł, ale z powodu zmiennej stopy procentowej ich miesięczna rata wzrosła o 7% po pierwszych 10 latach spłaty. Zakładając, że nie dokonają wcześniejszej spłaty ani nie zmienią warunków kredytu, ile wyniesie całkowita kwota, którą zapłacą bankowi po upływie 25 lat?",
        a: "421 300 zł",
        b: "150 900 zł",
        c: "625 200 zł",
        d: "569 050 zł",
        correct: "c",
    },
    {
        question: "Trzy osoby: Ada, Bartek i Cezary, mają razem 90 lat. Pięć lat temu, wiek Ady był dwa razy większy niż wiek Bartka. Cezary jest obecnie dwa razy starszy niż Bartek. Jeśli Ada jest starsza od Cezarego, który z nich jest najmłodszy?",
        a: "Ada",
        b: "Bartek",
        c: "Cezary",
        d: "Nie można ustalić na podstawie podanych informacji",
        correct: "b",
    },
    {
        question: "W kontekście globalnych konfliktów zbrojnych w XXI wieku, która z poniższych opcji najlepiej opisuje \"hybrydową wojnę\"?",
        a: "Konflikt zbrojny, w którym zaangażowane są wyłącznie prywatne firmy wojskowe",
        b: "Wojna prowadzona wyłącznie w przestrzeni cybernetycznej bez użycia tradycyjnych sił zbrojnych",
        c: "Konflikt, w którym strony stosują połączenie konwencjonalnych działań wojskowych, operacji specjalnych, działań w cyberprzestrzeni oraz taktyk wpływu informacyjnego",
        d: "Konflikt zbrojny, w którym główną rolę odgrywają siły powietrzne bez zaangażowania sił lądowych i morskich",
        correct: "c"
    },
    {
        question: "Rodzina Kowalskich jest prymusem odnawialnych źródeł energii. W 2022 roku zainwestowali 40000 zł w panele fotowoltaiczne o mocy 10 kWp, 50000 zł w magazyn energii o pojemności 20 kWh, oraz 50000 zł w pompę ciepła. Uwzględniając dotacje 50% wydali 70000 zł z własnych oszczędności. Na jak długo wystarczy im własnej energii bez potrzeby używania energii z sieci w zimowe pochmurne dni. Zakładając, że w tym okresie produkcja z paneli jest równa zeru, pompa ciepła pobiera średnio około 2 kW na godzinę, pozostałe zużycie energii w domu to 1 kW na godzinę, a magazyn należy używać według zaleceń producenta, czyli ładować do maksymalnie 80% i nie rozładowywać poniżej 20% pojemności.",
        a: "około 7 dni",
        b: "około 4 godziny",
        c: "około 2 dni",
        d: "około 24 godziny",
        correct: "b"
    }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            const percent = (score/quizData.length)*100;
            quiz.innerHTML = `
              <h3>Prawidłowo odpowiedziałeś na ${percent}% pytań.</h3>
              <button onclick="location.reload()">Jeszcze raz</button>
            `;
        }
    }
});
