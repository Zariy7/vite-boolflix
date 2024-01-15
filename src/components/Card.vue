<script>
export default {
    props: {
        card: Object
    }
}
</script>

<template>
    <div>
        {{ card.title }}
        {{ card.ogTitle }}
        {{ card.ogLang }}
        {{ card.avgVote }}
        {{ card.totVote }}
        {{ card.summary }}
        <div v-if="card.hasOwnProperty('ogCountry')">
            {{ card.ogCountry }}    
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>