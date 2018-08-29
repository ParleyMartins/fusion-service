<template lang="pug">
div.card.contact-detail(:key="value.id")
    h3.card-title.title {{ title }}
    .card-body
        .row
            .col
                form-input(label="First Name*", v-model="contact.firstname", formId="firstname", :error="errors.firstname")
            .col
                form-input(label="Last Name*", v-model="contact.lastname", formId="lastname", :error="errors.lastname")
        form-input(label="Birth date", v-model="contact.birth_date", :error="errors.birth_date", type="date")

        repeater-form(label="Phone number(s)*", v-model="contact.phones", :error="errors.phones")
        repeater-form(label="Email(s)*", v-model="contact.emails", :error="errors.emails")
        repeater-form(v-model="contact.addresses", :is-address="true")

        small *Required fields
    .card-footer.bg-transparent
        .d-flex.flex-row-reverse
            delete-contact-button.order-1.mr-auto(v-if="contact.id", label="Delete", :contact-id="contact.id")
            button.btn.btn-primary(@click="save") Save
            button.btn.btn-link(@click="reset") Cancel
</template>

<script>
import FormInput from './form-input';
import RepeaterForm from './repeater-form';
import { mapActions, mapState } from 'vuex';
import DeleteContactButton from './delete-contact-button';


export default {
    components: { FormInput, RepeaterForm, DeleteContactButton },
    props: {
        value: { type: Object, default: () => ({}) },
    },

    data(){
        return {
            contact: {...this.value},
        }
    },

    computed: {
        ...mapState(['errors']),
        title() {
            return this.contact.id ? `${this.value.firstname} ${this.value.lastname}` : 'New contact';
        },
    },

    watch: {
        value() {
            this.contact = {...this.value};
        }
    },

    methods: {
        ...mapActions({add: 'createContact', update: 'updateContact', _delete: 'deleteContact'}),
        reset() {
            this.contact = {...this.value}
        },

        save() {
            const save = !this.contact.id ? this.add(this.contact) : this.update(this.contact);
            save.then( ({id}) => this.$router.push({name: 'edit-contact', params: { id }}) )
        },

        destroy() {
            const answer = confirm('Are you sure? This cannot be undone');
            if(answer) {
                this._delete(this.contact.id)
            }
        },
    }
};
</script>

<style lang="scss" scoped>
.contact-detail {
    border: 1px solid mediumseagreen;
    padding: 1em;
}
</style>
