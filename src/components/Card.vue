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
    <div class="custom-card-container my-2">
        <div class="custom-card-frame">
            <!-- FRONT CARD: IMAGE -->
            <div class="custom-card-front">
                <img :src="`https://image.tmdb.org/t/p/original/${card.image}`" :alt="card.title">
            </div>
            
            <!-- BACK CARD: DATA -->
            <div class="bg-black text-white custom-card-back p-1">
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

                <div>
                    <span class="card-subtitle">Average Vote: </span>
                    <i v-for="stars, index in StarRatings(VoteRounded(card.avgVote))" :key="index" :class="stars"></i>
                </div>
        
                <div>
                    <span class="card-subtitle">Total Votes: </span>
                    <span>{{ card.totVote }}</span>
                </div>
        
                <div v-if="card.genres.length != 0">
                    <span class="card-subtitle">Genres: </span>
                    <span v-for="genre, index in card.genres" :key="index">
                        <span v-if="index == card.genres.length-1">
                            {{ genre }}.
                        </span>
                        <span v-else>
                            {{ genre }},
                        </span>
                    </span>
                </div>

                <div>
                    <span class="card-subtitle">Summary: </span>
                    <span class="span-summary">{{ card.summary }}</span>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.custom-card-container{
    width: calc(100% / 5 - 1rem);
    height: 500px;

    .custom-card-frame{
        height: 100%;
        width: 100%;
        position: relative;
        transition: transform 1.5s;
        transform-style: preserve-3d;

        &:hover{
            cursor: pointer;
            transform: rotateY(180deg);
        }
        .custom-card-front{
            position: absolute;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
            
            img{
                height: 500px;
                width: 100%;
                object-fit: fill;
            }
        }
        .custom-card-back{
            position: absolute;
            height: 100%;
            width: 100%;
            backface-visibility: hidden;
            transform: rotateY(180deg);
            
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
}
    
</style>