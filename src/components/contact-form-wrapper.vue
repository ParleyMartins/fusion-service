<template lang="pug">
.d-flex.align-items-center.justify-content-center.pt-5.pb-5
    contact-form.w-50(:value="contact")
</template>

<script>
import ContactForm from './contact-form';

export default {
    props: ['contact'],
    components: { ContactForm },
};
</script>
