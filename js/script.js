//  --------------- INSTRUCTION ---------------
//
//  - SLIDE WITH SELECT CARDS
//  {
//      question: 'QUESTION TEXT',
//      answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
//      helper: 'Text for helper character.'
//  }
//
//  - SLIDE WITH INPUT
//  {
//      question: 'Сколько стоит миллиард долларов?',
//      placeholder: 'млн. руб',
//      helper: 'Интересно вы мыслите... нестандартно! Ответьте, пожалуйста, на следующий вопрос'
//  }
//
//  !--------------- INSTRUCTION ---------------!

var app = new Vue({
    el: '#admiralquiz',
    data: {
        currentID: 0,
        maxID: 0,
        helperLastSlide: 'Отлично, осталось собрать необходимые данные, заполните поля и нажмите кнопку Отправить!',
        questions: [
            {
                question: 'Какую ОС вы используете?',
                answers: ['Windows', 'Linux', 'Youtube', 'MacOS'],
                helper: 'Привет! Для начала выберите, какую ОС вы чаще всего используете, чтобы я выбрал категорию компьютера'
            },
            {
                question: 'По вашему Билл Гейтс чипирован?',
                answers: ['Однозначно, да', 'Однозначно, нет', 'Сомневаюсь', 'Что такое Гейтс'],
                helper: 'Хорошо, с технологией определились, ответьте на следующий вопрос'
            },
            {
                question: 'Может ли рыба дышать под водой?',
                answers: ['Да', 'Нет', 'Она утонет', 'Я не знаю'],
                helper: 'Замечательно, чтобы нам было легче проанализировать ваши потребности, хорошо подумайте над ответом'
            },
            {
                question: 'Сколько стоит миллиард долларов?',
                placeholder: 'млн. руб',
                helper: 'Интересно вы мыслите... нестандартно! Ответьте, пожалуйста, на следующий вопрос'
            },
            {
                question: 'Как можно перевести "selcouth"?',
                answers: ['Четырестопный', 'Необычный', 'Тополь', 'Созвучие'],
                helper: 'Предпоследний вопрос! Подумайте хорошенько, и вы обязательно достигните правильного ответа!'
            },
            {
                question: 'Введите пин-код от своей карты',
                placeholder: '****',
                helper: 'Почти закончили, ответьте на последний вопрос и мы перейдём к завершению теста'
            }
        ],
        results: []
    },
    methods: {
        selectAnswer(id, data) {
            Vue.set(this.results, id, data);
        },
        questionListener(forward) {
            if (this.currentID != this.maxID)
                this.questions[this.currentID].enabled = false;
            forward == true ? this.currentID++ : this.currentID--;
            if (this.currentID != this.maxID)
                this.questions[this.currentID].enabled = true;
        },
    },
    beforeMount() {
        this.questions.forEach(element => {
            element.id = this.maxID++;
            element.enabled = false;
        });
        this.questions[0].enabled = true;
        this.questions[this.maxID].helper = helperLastSlide;
    },
});