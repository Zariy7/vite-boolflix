<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template>
    <div class="w-25">
        <div class="card-subtitle">Title:</div>
        <span>{{ card.title }}</span>
        <div class="card-subtitle">Original Title:</div>
        <span>{{ card.ogTitle }}</span>
        <div class="card-subtitle">Original Language:</div>
        <span>{{ card.ogLang }}</span>
        <div class="card-subtitle">Average Vote:</div>
        <span>{{ card.avgVote }}</span>
        <div class="card-subtitle">Total Votes:</div>
        <span>{{ card.totVote }}</span>
        <div class="card-subtitle">Summary:</div>
        <span>{{ card.summary }}</span>
        <div v-if="card.hasOwnProperty('ogCountry')">
            <div class="card-subtitle">Origin Country:</div>
            <span>{{ card.ogCountry }}</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card-subtitle{
    font-weight: bolder;
    font-size: 1rem;
}
</style>