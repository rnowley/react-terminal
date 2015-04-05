function commandHandler(args) {
    alert("Handling command.");
};

React.render(<Terminal commandHandler={commandHandler}/>, document.getElementById('app'));
