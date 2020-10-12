const Az = (a, b) => a.name.localeCompare(b.name);


new Vue({
    el: '#items',
    data: {
        itemsList: [],
        message: ""

    },

    methods: {

        show: function () {
            fetch('http://ajax.tgur.ru?action=get&limit=' + this.message)
                .then(response => response.json())
                .then(data => {
                    this.itemsList = data;
                    this.itemsList.sort(Az)
                })
        }

    }

});

