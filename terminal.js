/** @jsx React.DOM */
var Terminal = (function() {
    'use strict';

    const ENTER = 13;

    var TerminalClass = React.createClass({
        propTypes: {
            commandHandler: React.PropTypes.object.isRequired
        },
        render: function() {
            return(
                <div>
                    <output ref="output">
                    </output>
                    <div className="input-line line" ref="inputLine">
                        <div className="prompt">$</div>
                        <div>
                            <input className="cmdline" ref="command" autofocus/>
                        </div>
                    </div>
                </div>
            );
        },
        componentDidMount: function() {
            var command = React.findDOMNode(this.refs.command);
            command.focus();

            command.addEventListener('keydown', this.keyDownHandler, false);

            window.addEventListener('click', function(e) {
                command.focus();
            }, false);
        },
        keyDownHandler: function(e) {

            if(e.keyCode == ENTER) {
                var line = React.findDOMNode(this.refs.inputLine).cloneNode(true);
                var input = line.querySelector('input.cmdline');
                input.autofocus = false;
                input.readOnly = true;
                var output = React.findDOMNode(this.refs.output).appendChild(line);

                React.findDOMNode(this.refs.command).value = '';
            }
        },
        parseInput: function(input) {

            if(input && input.trim()) {
                var args = input.split(' ').filter(function(val, i) {
                    return val;
                });
            }

            // The command is the first argument.
            var command = args[0].toLowerCase();
            args = args.splice(1); // Remove command from list of args.

            return {command: command, args: args};
        }
    });
    return TerminalClass;
})();
