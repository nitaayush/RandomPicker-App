const appRoot = document.getElementById('app');

let visibel = false;

const detail = (para) => {
    visibel = !visibel;
    render();
};
const render = () => {
    const visibility = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={detail}>
            {visibel ? 'Hide details' : 'Show details'}
            </button>
            {visibel && (
                <div>
                    <p>So, here are some details!</p>
                </div>
            )}
        </div>
    );
    ReactDOM.render(visibility, appRoot);
}
render();






















