class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes('domain')) {
        this.actionProvider.handleDomainQuery();
      }
    }
  }
  
  export default MessageParser;
  