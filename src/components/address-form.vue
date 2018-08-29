<template lang="pug">
div
    form-input(
        label="Street Address",
        v-model="address.line_1"
    )
    .row
        form-input.col(
            label="City",
            v-model="address.city"
        )
        form-input.col(
            label="State",
            v-model="address.state"
        )
    .row
        form-input.col(
            label="Zip code",
            v-model="address.zip_code"
        )
        form-input.col(
            label="Country",
            v-model="address.country"
        )
</template>

<script>
import FormInput from './form-input';

export default {
    components: { FormInput },
    props: ['value'],
    data() {
        return {
            address: {
                line_1: null,
                city: null,
                state: null,
                zip_code: null,
                country: null,
                ...this.value,
            },
        };
    },

    watch: {
        address: {
            deep: true,
            handler(newAddress) {
                this.$emit('input', newAddress);
            },
        },
    },
};
</script>
