<script>
import { store } from '.././store.js'

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
            if(ogLang === 'ta' || ogLang === 'hi')
                return 'in';

            return ogLang;
        },
        VoteRounded(avgVote){
            return (Math.round(avgVote))/2;
        },
        StarRatings(roundedVote){
            let starsArray = [];

            for(let i = 1; i<=5; i++){
                if(i<=roundedVote){
                    starsArray.push('fa-solid fa-star');
                }
                else{
                    if((i-0.5) == roundedVote){
                        starsArray.push('fa-solid fa-star-half-stroke');
                    }
                    else{
                        starsArray.push('fa-regular fa-star');
                    }
                }
            }

            return starsArray;
        }
    }
}
</script>

<template>
    <div class="custom-card-container w-20">
        <div class="custom-card-front">
            <img :src="`https://image.tmdb.org/t/p/original/${card.image}`" :alt="card.title">
        </div>
        <div class="m-2 bg-black text-white custom-card-back">
            <div>
                <span class="card-subtitle">Title: </span>
                <span>{{ card.title }}</span>
            </div>
    
            <div>
                <span class="card-subtitle">Original Title: </span>
                <span>{{ card.ogTitle }}</span>
            </div>
    
            <div>
                <span class="card-subtitle">Original Language: </span>
                <span :class="`fi fi-${LanguageFlag(card.ogLang)}`"></span>
            </div>
            
            <div v-if="card.hasOwnProperty('ogCountry')">
                <span class="card-subtitle">Origin Country: </span>
                <span :class="`fi fi-${card.ogCountry.toLowerCase()}`"></span>
            </div>
    
            <div>
                <span class="card-subtitle">Average Vote: </span>
                <i v-for="stars, index in StarRatings(VoteRounded(card.avgVote))" :key="index" :class="stars"></i>
            </div>
    
            <div>
                <span class="card-subtitle">Total Votes: </span>
                <span>{{ card.totVote }}</span>
            </div>
    
            <div>
                <span class="card-subtitle">Summary: </span>
                <span class="span-summary">{{ card.summary }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.custom-card-container{
    .custom-card-front{
        img{
            height: 500px;
            width: 100%;
            object-fit: fill;
        }
    }
    .custom-card-back{
        width: 100%;
        height: 500px;
        
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
}
    
</style>