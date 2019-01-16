console.log('app.js is running!');

//JSX - Javascript XML
const app = {
    title:'Indecision App',
    subtitle: 'Put you life in the hands of computer',
    options: []
};
const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    if(option) {
        app.options.push(option);
        e.target.elements.option.value=[];
        renderIndecison();
    }
};

const remove = () => {
    app.options = [];
    renderIndecison();
};

const onMakeDecesion = () => {
const randomNum = Math.floor(Math.random() * app.options.length);
const option = app.options[randomNum];
alert(option);
};

const appRoot = document.getElementById('app');


const renderIndecison = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are yout options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecesion}>What should I do?</button>
            <button onClick={remove}>Remove All</button>
            <ol>
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
};

renderIndecison();