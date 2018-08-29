<template lang="pug">
.form-group
    label(v-if="label", :for="formId") {{ label }}
    input.form-control(
        :type="type",
        :id="formId",
        :value="value",
        @input="onInput"
        :class="error ? 'is-invalid' : ''"
    )
    small.form-text.invalid-feedback(v-if="error") {{ error }}
</template>

<script>
export default {
    props: ['formId', 'type', 'error', 'label', 'value'],
    data() {
        return {
            errorMessage: this.error ? this.error.slice() : null,
        };
    },

    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        },
    },
};
</script>
