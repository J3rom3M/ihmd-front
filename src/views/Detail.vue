<template>
	<main id="about-page">
		<h1 :key="id" v-for="(movie, id) in movie">{{ movie.title }}</h1>
        <br />
		<p :key="id" v-for="(movie, id) in movie">{{ movie.synopsis }}</p>
        <br />
        <img :key="id" v-for="(movie, id) in movie" v-bind:src="url1 + movie.image" />
        <br />
        <p>Budget:</p>
        <p :key="id" v-for="(movie, id) in movie">{{ movie.budget }}</p><p> dollars</p>
        <br />
        <p :key="id" v-for="(movie, id) in movie">{{ movie.types }}</p>
        <br />
        <p>Langue originale du film :</p>
        <p :key="id" v-for="(movie, id) in movie">{{ movie.language }}</p>
        <br />
        <p>Année de production: </p>
        <p :key="id" v-for="(movie, id) in movie">{{ formattedDate }}</p>
        <br />
	</main>
</template>
<script>
import axios from 'axios'
import moment from 'moment'

    export default {
        computed: {
            formattedDate(){
            return moment(this.movie.releaseDate).format('DD-MM-YYYY');
            },
        },

        name: 'movie',

        data(){
            return {
                id: this.$route.params.id, //this is the id from the browser
                movie: null,
                url1: 'https://image.tmdb.org/t/p/w200/',
                url2: 'https://image.tmdb.org/t/p/w500/',
            }
        },
        mounted() {
            axios
            .get('https://127.0.0.1:8000/api/movie/'+this.$route.params.id)
            .then((reponse) => {
                this.movie = reponse;
                //console.log(reponse)
            });
        },
    }
</script>
