/** @jsx React.DOM */
var Terminal = (function() {
    'use strict';

    var TerminalClass = React.createClass({
        propTypes: {
            commandHandler: React.PropTypes.func.isRequired
        },
        render: function() {
            return(
                <div>
                    <output>
                    </output>
                    <div className="input-line line">
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

            command.addEventListener('keydown', this.props.commandHandler, false);

            window.addEventListener('click', function(e) {
                command.focus();
            }, false);
        }
    });
    return TerminalClass;
})();
