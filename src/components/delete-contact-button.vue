<template lang="pug">
div
    button.btn(@click="destroy", :class="isOutlined ? 'btn-outline-danger' : 'btn-danger'")
        font-awesome-icon(icon="trash")
        span.pl-2(v-if="label") {{ label }}
</template>


<script>
import { mapActions } from 'vuex';
export default {
    props: {
        isOutlined: { type: Boolean, default: false },
        label: { type: String, default: null },
        contactId: { type: Number, required: true },
    },
    methods: {
        ...mapActions({ _delete: 'deleteContact' }),

        destroy() {
            const answer = confirm('Are you sure? This cannot be undone');
            if (answer) {
                this._delete(this.contactId).then(() => this.$router.replace({ name: 'home' }));
            }
        },
    },
};
</script>
