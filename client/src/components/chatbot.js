class Chatbot {
    constructor() {
      this.responses = {
        greeting: "Hello! How can I assist you with your finances today?",
        budgetHelp: "To set up a budget, go to the Budget Management section, and specify your financial goals and spending limits.",
        trackExpenses: "You can track your expenses by adding them to the Expense Tracking section. Make sure to categorize them for better analysis.",
        financialGoal: "Setting financial goals is important! Go to the Budget Management section and enter your savings target to start monitoring progress.",
        multiCurrency: "Our app supports multiple currencies. You can choose your preferred currency in settings, and we handle conversions automatically.",
        security: "Your data is safe with us! We use strong encryption to protect your personal and financial information.",
        default: "I'm not sure about that. Could you please rephrase your question or ask something else?"
      };
    }
  
    getResponse(userInput) {
      const input = userInput.toLowerCase();
  
      if (input.includes("hello") || input.includes("hi")) {
        return this.responses.greeting;
      } else if (input.includes("budget")) {
        return this.responses.budgetHelp;
      } else if (input.includes("track expenses") || input.includes("expenses")) {
        return this.responses.trackExpenses;
      } else if (input.includes("goal") || input.includes("financial goal")) {
        return this.responses.financialGoal;
      } else if (input.includes("currency") || input.includes("currencies")) {
        return this.responses.multiCurrency;
      } else if (input.includes("security") || input.includes("safe")) {
        return this.responses.security;
      } else {
        return this.responses.default;
      }
    }
  }
  
  // Example usage
  const chatbot = new Chatbot();
  const userMessage = "How do I track expenses?";
  console.log(chatbot.getResponse(userMessage));
  