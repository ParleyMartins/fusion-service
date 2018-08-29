<template lang="pug">
div
    .filter.input-group.input-group-md
        input.form-control(placeholder="Search", v-model="query")
        .input-group-append(v-if="query")
            button.btn.btn-outline-secondary(@click="query = null")
                font-awesome-icon(icon="times")

    .d-flex.flex-column(v-for="contact in filteredContacts")
        contact-item(:contact="contact")
</template>

<script>
import ContactItem from './contact-item';
import { mapState } from 'vuex';

export default {
    components: { ContactItem },
    data() {
        return {
            query: null
        }
    },
    computed: {
        ...mapState(['contacts']),

        filteredContacts() {
            return this.query ? this.contacts.filter(this.filter) : this.contacts;
        }
    },

    methods: {
        filter({firstname, lastname, birth_date, phones, emails}) {
            const mainValues = firstname + lastname + birth_date + phones + emails
            return mainValues.toLowerCase().includes(this.query.toLowerCase())
        }
    }
};
</script>

<style lang="scss" scoped>
.filter {
    border-bottom: solid lightgray 1px;
}
</style>
