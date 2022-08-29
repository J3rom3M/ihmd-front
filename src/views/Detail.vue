<template>
	<main id="about-page">
		<h1>{{ movie.title }}</h1>
        <br />
		<p>{{ movie.synopsis }}</p>
        <br />
        <img v-bind:src="'https://image.tmdb.org/t/p/w200/' + movie.image" />
        <br />
        <p>Budget:</p>
        <p>{{ movie.budget }}</p><p> dollars</p>
        <br />
        <p>{{ movie.types }}</p>
        <br />
        <p>Langue originale du film :</p>
        <p>{{ movie.language }}</p>
        <br />
        <p>Année de production: </p>
        <p>{{ formattedDate }}</p>
        <br />
	</main>
</template>
<script>
import axios from 'axios'
import moment from 'moment'

    export default {
        name: 'movie',
        computed: {
            formattedDate(){
                return moment(this.movie.releaseDate).format('DD-MM-YYYY');
            },
        },


        data(){
            return {
                movie: []
            }
        },
        async created() {
            await axios
            .get('https://127.0.0.1:8000/api/movie/'+this.$route.params.id)
            .then((response) => {
                this.movie = response.data;
            })
            .catch(error => {console.log(error)});
        },
    }
</script>
<style lang="scss">

</style>
