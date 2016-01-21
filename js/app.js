//Todo app - Vue.js
//Author - Dan Walsh


new Vue({
    el: '#tasks',

    data: {
        newTodo: '',
        todos: [
            { body: 'Go to sleep', completed: false }
        ]
    },

    computed: {
        completions: function() {
            return this.todos.filter(function(todo) {
                return todo.completed;
            });
        },
        remaining: function() {
            return this.todos.filter(function(todo) {
                return ! todo.completed;
            });
        }
    },

    filters: {
        inProgress: function(todos) {
            return todos.filter(function(todo) {
                return ! todo.completed;
            });
        }
    },

    methods: {
        addTodo: function(e) {
            e.preventDefault();
            if(this.newTodo != ''){
                this.todos.push({
                    body: this.newTodo,
                    completed: false
                });
            }
            this.newTodo = '';
        },
        editTodo: function(todo) {
            this.deleteTodo(todo);
            this.newTodo = todo.body;
            this.$$.newTodo.focus();
        },
        deleteTodo: function(todo) {
            this.todos.$remove(todo);
        },
        toggleTodoCompletion: function(todo) {
            todo.completed = ! todo.completed;
        },
        completeAll: function() {
            this.todos.forEach(function(todo) {
                todo.completed = true;
            });
        },
        clearCompleted: function() {
            this.todos = this.todos.filter(function(todo) {
                return ! todo.completed;
            });
        }
    }
});

