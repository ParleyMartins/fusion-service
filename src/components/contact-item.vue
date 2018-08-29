<template lang="pug">
.d-flex.contact.align-items-center(@click='goToContact')
    div.d-flex.flex-column.align-items-start
        h3.flex-grow-1 {{ name }}
        div
            span.pr-2
                font-awesome-icon(icon="phone", size="xs")
            span {{ mainPhone }}
        div
            span.pr-2
                font-awesome-icon(icon="at", size="xs")
            span {{ mainEmail }}
    .ml-auto
        delete-contact-button(:is-outlined="true", :contact-id="contact.id")

</template>

<script>
import DeleteContactButton from './delete-contact-button';

export default {
    props: ['contact'],
    components: {DeleteContactButton},
    computed: {
        name() {
            if (this.contact) {
                return `${this.contact.firstname} ${this.contact.lastname}`;
            }
        },

        mainPhone() {
            return this.contact.phones[0];
        },

        mainEmail() {
            return this.contact.emails[0];
        },
    },

    methods: {
        goToContact() {
            this.$router.push({name: 'edit-contact', params:{id: this.contact.id}})
        },
    },
};
</script>

<style lang="scss" scoped>
.contact {
    cursor: pointer;
    padding: 1em;
    font-family: 'Bad Script', cursive;
    border-bottom: solid lightgray 1px;
}

.contact:hover {
    box-shadow: 0 0 1px black;
}
</style>
