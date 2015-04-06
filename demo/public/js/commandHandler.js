var CommandHandler = CommandHandler || ( function() {

    function parseInput(input) {

        if(input && input.trim()) {
            var args = input.split(' ').filter(function(val, i) {
                return val;
            });
            // The command is the first argument and are case insensitive.
            var command = args[0].toLowerCase();
            // Remove the command from the argument list.
            args = args.splice(1);

            return { command: command, args: args };
        }

        return { error: "Parse error, input was empty." };
    }

    function processCommand(parsedInput) {
        return "";
    }

    return {
        handle: function(input) {
            var parsedInput = parseInput(input);
            var result = processCommand(parsedInput)
        }
    };
})();
