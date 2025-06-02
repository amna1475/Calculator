let display = document.querySelector('input');
let buttons = document.querySelectorAll('.btn');
// Initialize an empty string to store user input
let str = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.innerHTML;

        // Clear all input when "C" 
        if (value === 'C') {
            str = "";
            display.value = str;
            return;
        }

        // Delete last character when "DEL" 
        if (value === 'DEL') {
            str = str.slice(0, -1); // Remove last character
            display.value = str;
            return;
        }

        // Evaluate expression when "=" 
        if (value === '=') {
            try {
                // Evaluate safely using eval (for basic arithmetic)
                str = eval(str).toString();
                display.value = str;
            } catch {
                display.value = "Error";
                str = "";
            }
            return;
        }
        // Append pressed button value to the expression
        str += value;
        display.value = str;
    });
});
