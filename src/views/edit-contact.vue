<template lang="pug">
div.d-flex
    button.btn.btn-link(@click="goToNew")
        font-awesome-icon(icon="arrow-left")
    contact-form-wrapper.flex-grow-1(:contact="contact")
</template>

<script>
import ContactFormWrapper from '../components/contact-form-wrapper';
import { mapState } from 'vuex';

export default {
    components: { ContactFormWrapper },

    created() {
        if (!this.contact) {
            this.$router.replace({ name: 'home' });
        }
    },

    computed: {
        id() {
            return this.$route.params.id;
        },
        ...mapState({
            contact(state) {
                return state.contacts.find(contact => parseInt(contact.id) === parseInt(this.id));
            },
        }),
    },
    methods: {
        goToNew() {
            this.$router.push({ name: 'home' });
        },
    },
};
</script>
