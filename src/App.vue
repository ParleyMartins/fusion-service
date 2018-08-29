<template lang="pug">
#app.container-fluid
    .row.pt-1
        .col-3
            #sidebar.w-25
                contacts
        .col-9
            #main
                router-view
</template>

<script>
import Contacts from './components/contacts'
import {mapActions} from 'vuex'
export default {
    components:{ Contacts },
    created() {
        this.fetchContacts();
    },

    methods: {
        ...mapActions(['fetchContacts'])
    }
}
</script>


<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Bad+Script');

#app {
    font-family: 'Bad Script', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

#sidebar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    overflow-y: auto;
    border-right: solid lightgray 1px;
}
</style>
