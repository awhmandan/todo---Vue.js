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

    filters: {
        inProcess: function(todos) {
            return todos.filter(function(todo) {
                return ! todo.complete;
            });
        }
    },

    methods: {
        addTodo: function(e) {
            e.preventDefault();
            this.todos.push({
                body: this.newTodo,
                completed: false
            });
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
        completeTodo: function(todo) {
            todo.completed = true;
        }
    }
});

