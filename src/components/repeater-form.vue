<template lang="pug">
div
    .d-flex.align-items-center(v-for="(item, index) in newValue")
        .flex-grow-1
            address-form(
                v-if="isAddress"
                :value="item",
                :key="item.line_1 + index"
                @input="value => update(index, value)"
            )
            form-input(
                v-if="!isAddress"
                :label="index === 0 ? label : ''",
                :value="item",
                @input="value => update(index, value)"
                :error="error"
            )


        button.btn.btn-link.form-group.text-danger(v-if="index > 0 || newValue.length > 1", :class="index === 0 ? 'align-icon': ''", @click="remove(index)")
            font-awesome-icon(icon="times-circle")
        button.btn.btn-link.form-group.text-success(v-if="item && index === newValue.length - 1", :class="index === 0 ? 'align-icon': ''", @click="add")
            font-awesome-icon(icon="plus-circle")
</template>

<script>
import AddressForm from './address-form';
import FormInput from './form-input';
import debounce from 'lodash.debounce';

export default {
    components: { AddressForm, FormInput },
    props: {
        value: { type: Array, default: () => [] },
        label: { type:String },
        isAddress: { type: Boolean, default: false },
        error: { type: String, default: null }
    },

    data() {
        const newValue = this.value.length === 0 ? [this.emptyValue()] : [...this.value]
        return {
            newValue,
        };
    },

    watch: {
        value(newValue) {
            this.refresh(newValue)
        },
    },

    methods: {
        sendUp() {
            this.$emit('input', this.newValue.filter(item => this.isAddress ? item.line_1 !== '' : item !== ''))
        },

        refresh(newValue = []) {
            if(newValue.length === 0){
                this.newValue = [this.emptyValue()];
            } else {
                this.newValue = [...newValue];
            }
        },

        add(){
            this.newValue.push(this.emptyValue())
        },

        remove(index){
            if(this.newValue.length > 1 ) {
                this.newValue.splice(index, 1)
                this.sendUp();
            }
        },

        update: debounce(function(index, value) {
            this.newValue.splice(index, 1, value)
            this.sendUp();
        }, 500),

        emptyValue() {
            return this.isAddress ? {line_1: null} : ''
        }
    },
};
</script>

<style lang="scss" scoped>
.align-icon {
    margin-top: 1.9rem !important;
}
</style>
