class Todo {
  id: string;
  text: string;

  constructor(textMessage: string) {
    this.id = Math.random().toString();
    this.text = textMessage;
  }
}

export default Todo;
