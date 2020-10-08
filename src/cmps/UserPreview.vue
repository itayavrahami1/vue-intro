<template>
    <section class="user-prev">
        <img :src="user.imgUrl" alt="#contact-img"/>
        <h5>{{user.name}}</h5>
    </section>
</template>

<script>
export default {
    props: ['user']
}
</script>