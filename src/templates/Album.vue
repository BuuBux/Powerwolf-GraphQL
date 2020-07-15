<template>
    <Layout>
        <div class="c-album__wrapper">
            <h1> {{ $page.graphCMS.album.title }} </h1>
            <span> Album was created at {{$page.graphCMS.album.albumRelease}}</span>
            <g-link class="c-back-btn" to="/"> Go back </g-link>
            <div class="row">
                <div class="left-side">
                    <figure class="">
                        <g-image :src="$page.graphCMS.album.albumImage.url" quality="80" />
                    </figure>
                </div>
                <div class="right-side">
                    <ul>
                        <li v-for="(track, index) in getTracks($page.graphCMS.album.trackList)" :key="index"> {{track}} </li>
                    </ul>
                </div>
            </div>
            <div class="wyswig-content" v-html="$page.graphCMS.album.albumDescription.html" />
        </div>
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
    figure img {
        display: block;
        max-width: 100%;
    }
    .c-album__wrapper {
        position: relative;
        background: #fff;
        padding: 2.5rem;
        box-shadow: 0 8px 8px rgba(0,0,0, 0.4);
    }
    .c-back-btn {
        position: absolute;
        left: 0;
        top: -40px;
        background: #fff;
        padding: 8px 25px;
        color: #ae0303;
        font-weight: 700;
        text-decoration: none;
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
    }
    .c-back-btn:hover {
        transition: color 0.2s ease-in-out, background-color 0.2s ease-in-out;
        background-color: #ae0303;
        color: #fff;
    }
    .row {
        display: flex;
        margin: 2rem 0;
    }
    .left-side, .right-side {
        flex: 0 0 50%;
        max-width: 50%;
    }
    .right-side ul {
        margin-top: 0;
    }
</style>
