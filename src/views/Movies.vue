<template>
	<main id="movies-page">
		<h1>Liste des films</h1>
		<br />
		<br />
		<br />
		<ul>
			<li :key="id" v-for="(infos, id) in infos"><a :href="'/detail/' + infos.id">{{ infos.title }}</a></li>
		</ul>
		<br />
		<br />
        <ul class="list-group list-group-flush">
            <li class="list-group-item">An item</li>
            <li class="list-group-item">A second item</li>
            <li class="list-group-item">A third item</li>
            <li class="list-group-item">A fourth item</li>
            <li class="list-group-item">And a fifth one</li>
        </ul>
	</main>
</template>

<script>
import axios from 'axios'



export default {
	name: 'api',
	data() {
		return {
			infos: null,
		}
	},
	mounted() {
		axios
		.get('https://127.0.0.1:8000/api/movie')
		.then((reponse) => {
			this.infos = reponse.data;
			console.log(this.infos)
		});
	},

}
</script>

<style lang="scss">
h1{
	text-align: center;
}
ul,li {
	text-align: center;
	list-style-type: none;
}

</style>