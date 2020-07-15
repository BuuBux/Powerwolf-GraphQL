<template>
    <Layout>
        <g-link to="/"> Go back </g-link>
        <h1> {{ $page.graphCMS.album.title }} </h1>
        <figure>
            <g-image :src="$page.graphCMS.album.albumImage.url" quality="80" />
        </figure>
        <div class="wyswig-content" v-html="$page.graphCMS.album.albumDescription.html"></div>
        <span> Album was created at {{$page.graphCMS.album.albumRelease}}</span>
        <ul v-for="(track, index) in getTracks($page.graphCMS.album.trackList)" :key>
            <li :key="index"> {{track}} </li>
        </ul>
    </Layout>
</template>

<page-query>
    query ($id: ID) {
        graphCMS {
            album(where: {id: $id}) {
                id
                albumImage {
                    url
                }
                albumDescription {
                    html
                }
                albumRelease
                title
                trackList
                stage
            }
        }
    }
</page-query>

<script>
    export default {
        metaInfo: {
            title: 'Asap',
        },
        data() {
            return {
                message: 'Hello'
            }
        },
        methods: {
            getTracks(tracks) {
                return tracks;
            }
        }
    }
</script>

<style scoped>
    figure {
        margin: 0;
    }
</style>
