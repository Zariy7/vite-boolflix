<script>
export default {
    props: {
        card: Object
    },
    methods: {
        LanguageFlag(ogLang){
            if(ogLang === 'ja')
                return 'jp';
            if(ogLang === 'ko')
                return 'kr';
            if(ogLang === 'zh')
                return 'cn';
            if(ogLang === 'en')
                return 'gb';
            if(ogLang === 'cs')
                return 'cz';

            return ogLang;
        }
    }
}
</script>

<template>
    <div class="w-20 m-2 bg-black text-white custom-card">

        <div class="card-subtitle">Title:</div>
        <span>{{ card.title }}</span>

        <div class="card-subtitle">Original Title:</div>
        <span>{{ card.ogTitle }}</span>

        <div class="card-subtitle">Original Language:</div>
        <span :class="`fi fi-${LanguageFlag(card.ogLang)}`"></span>
        
        <div v-if="card.hasOwnProperty('ogCountry')">
            <div class="card-subtitle">Origin Country:</div>
            <span :class="`fi fi-${card.ogCountry.toLowerCase()}`"></span>
        </div>

        <div class="card-subtitle">Average Vote:</div>
        <span>{{ card.avgVote }}</span>

        <div class="card-subtitle">Total Votes:</div>
        <span>{{ card.totVote }}</span>

        <div class="card-subtitle">Summary:</div>
        <span class="span-summary">{{ card.summary }}</span>

    </div>
</template>

<style lang="scss">
.custom-card{
    
    .card-subtitle{
        font-weight: bolder;
        font-size: 1rem;
    }
    
    .span-summary{
        display: block;
        overflow-y: auto;
        max-height: 300px;
    }
}
</style>